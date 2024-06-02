export const message = {
  id: {
    type: Number,
    required: true,
  },
  content: String,
  type: {
    type: String,
    validator: (value) => ["user", "system"].includes(value),
  },
};
