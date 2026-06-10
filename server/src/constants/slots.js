export const generateSlots = () => {
  const slots = [];

  for (let hour = 6; hour <= 22; hour++) {
    slots.push(`${hour.toString().padStart(2, "0")}:00`);
  }

  return slots;
};
