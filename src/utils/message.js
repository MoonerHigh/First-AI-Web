/**
 * Represents a message object.
 * @typedef {Object} Message
 * @property {number} id - The unique identifier of the message.
 * @property {string} content - The content of the message.
 * @property {Object} type - The type of the message.
 * @property {string} type.type - The type value of the message (either 'user' or 'system').
 * @property {Function} type.validator - A function that validates the type value.
 */

/**
 * The message object.
 * @type {Message}
 */
export const message = {
  id: Number,
  content: String,
  type: {
    type: String,
    validator: (value) => ["user", "system"].includes(value),
  },
};
