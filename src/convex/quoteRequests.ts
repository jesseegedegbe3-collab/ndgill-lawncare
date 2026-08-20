import { mutation } from "./_generated/server";
import { v } from "convex/values";

/**
 * Public quote-request handler for the site's contact form. Site visitors are
 * not signed in, so this mutation is intentionally unauthenticated. Submissions
 * are stored in the quoteRequests table with status "new" for the owner to review.
 */
export const submitQuoteRequest = mutation({
  args: {
    name: v.string(),
    phone: v.string(),
    address: v.string(),
    service: v.string(),
    message: v.optional(v.string()),
  },
  handler: async (ctx, { name, phone, address, service, message }) => {
    const cleanName = name.trim();
    const cleanPhone = phone.trim();
    const cleanAddress = address.trim();
    const cleanMessage = message?.trim() || undefined;

    if (!cleanName || !cleanPhone || !cleanAddress || !service) {
      throw new Error("Name, phone, address, and service are required.");
    }
    if (cleanName.length > 200 || cleanPhone.length > 40 || cleanAddress.length > 300) {
      throw new Error("One of the submitted fields is too long.");
    }
    if (cleanMessage && cleanMessage.length > 2000) {
      throw new Error("Message is too long.");
    }

    await ctx.db.insert("quoteRequests", {
      name: cleanName,
      phone: cleanPhone,
      address: cleanAddress,
      service,
      message: cleanMessage,
      status: "new",
      createdAt: Date.now(),
    });

    return { ok: true };
  },
});
