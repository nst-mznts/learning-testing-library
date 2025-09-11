export const getFieldNameById = <T extends { id: string | number; name: string }>(
  id: string | number,
  field: T[]
): string | undefined => {
  const foundItem = field.find((item) => item.id === id);
 
  if (!foundItem) {
    return undefined;
  }
 
  return foundItem.name;
}
