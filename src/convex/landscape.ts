"use node";

import { action } from "./_generated/server";

const GEMINI_ENDPOINT = "https://generativelanguage.googleapis.com/v1beta/interactions";
const IMAGE_MODEL = "gemini-3.1-flash-image";

type GeminiContentBlock = {
  type?: string;
  data?: string;
  mime_type?: string;
};

type GeminiResponse = {
  id?: string;
  output_image?: GeminiContentBlock;
  steps?: Array<{ type?: string; content?: GeminiContentBlock[] }>;
};

function extractImage(response: GeminiResponse) {
  if (response.output_image?.data) {
    return {
      data: response.output_image.data,
      mimeType: response.output_image.mime_type ?? "image/jpeg",
    };
  }

  for (const step of [...(response.steps ?? [])].reverse()) {
    for (const block of [...(step.content ?? [])].reverse()) {
      if (block.type === "image" && block.data) {
        return {
          data: block.data,
          mimeType: block.mime_type ?? "image/jpeg",
        };
      }
    }
  }

  throw new Error("Gemini returned no generated image.");
}

async function createInteraction(
  apiKey: string,
  input: string,
  previousInteractionId?: string,
) {
  const response = await fetch(GEMINI_ENDPOINT, {
    method: "POST",
    headers: {
      "x-goog-api-key": apiKey,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      model: IMAGE_MODEL,
      input,
      ...(previousInteractionId
        ? { previous_interaction_id: previousInteractionId }
        : {}),
      response_format: {
        type: "image",
        mime_type: "image/jpeg",
        aspect_ratio: "16:9",
        image_size: "1K",
      },
    }),
  });

  const payload = (await response.json()) as GeminiResponse & {
    error?: { message?: string };
  };
  if (!response.ok) {
    throw new Error(payload.error?.message ?? "Gemini image generation failed.");
  }
  return payload;
}

export const generateMatchedPair = action({
  args: {},
  handler: async () => {
    const apiKey = process.env.GOOGLE_API_KEY;
    if (!apiKey) {
      throw new Error("GOOGLE_API_KEY is not configured in Convex.");
    }

    const beforeInteraction = await createInteraction(
      apiKey,
      [
        "Create a photorealistic 16:9 real-estate photograph of one specific modest two-storey suburban Winnipeg home in early summer. Keep the house architecture, camera position, driveway, front steps, windows, siding, and neighboring context clearly defined because this exact property will be edited in a second image. The front yard is severely neglected: knee-high patchy grass, dense weeds, overgrown shrubs, unruly garden beds, scattered leaves and branches, and an untidy walkway. The house itself is ordinary and structurally sound. No people, no text, no logos, no watermark, natural daylight, realistic Canadian residential photography.",
      ].join(" "),
    );
    const before = extractImage(beforeInteraction);

    if (!beforeInteraction.id) {
      throw new Error("Gemini did not return an interaction id for the first image.");
    }

    const afterInteraction = await createInteraction(
      apiKey,
      [
        "Edit the previous image into the finished version of the exact same house and exact same camera composition. Preserve the house architecture, siding, windows, driveway, steps, street perspective, sky, and lighting. Change only the landscaping: professionally mow the lawn into an even rich green finish, remove every weed and fallen branch, prune and shape the shrubs, clean and define the garden beds, edge the driveway and walkway crisply, and leave the property looking immaculate and ready for a real estate listing. No people, no text, no logos, no watermark.",
      ].join(" "),
      beforeInteraction.id,
    );
    const after = extractImage(afterInteraction);

    return {
      before: `data:${before.mimeType};base64,${before.data}`,
      after: `data:${after.mimeType};base64,${after.data}`,
    };
  },
});
