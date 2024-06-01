export const message = {
  id: Number,
  content: String,
  type: {
    type: String,
    validator: (value) => ["user", "system"].includes(value),
  },
};
