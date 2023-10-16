import { bold, EmbedBuilder, InteractionReplyOptions, PermissionsString } from "discord.js";

/**
 * Creates an embed builder formatted for an error message
 * 
 * @param error The message to display to the user
 * @returns Embed builder formatted for error
 */
export function errorEmbed(error: string): EmbedBuilder {
  return new EmbedBuilder().setDescription(bold(error)).setColor("Red");
}

/**
 * Creates a sendable error message
 * 
 * @param error The message to display in the embed
 * @returns Formatted options for easy replies
 */
export function errorMessage(error: string): InteractionReplyOptions {
  return { embeds: [errorEmbed(error)], ephemeral: true };
}

/**
 * Creates a sendable "Missing Permissions" error message from an array of permissions
 * 
 * @param perms Array of missing permissions
 * @returns Formatted options 
 */
export function appMissingPermsError(perms: PermissionsString[]): InteractionReplyOptions {
  return errorMessage("I am missing permissions to use this command!\nPermission(s):\n".concat(perms.join(" ")));
}