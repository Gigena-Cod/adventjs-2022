export function manufacture(manufactureProps) {
  const { gifts, materials } = manufactureProps;

  if (!gifts || !Array.isArray(gifts))
    throw new Error("gifts must be an array");

  if (typeof materials !== "string")
    throw new Error("materials must be a string");

  const allMaterials = materials.split("");

  const allGifts = gifts.reduce((previousValue, currentValue) => {
    if (!previousValue) {
      previousValue = [];
    }

    const giftMaterials = currentValue.split("");

    const giftManufacture = giftMaterials.map((giftMaterial) =>
      allMaterials.includes(giftMaterial)
    );

    const hasManufacture = giftManufacture.every((gift) => gift);

    if (hasManufacture) previousValue.push(currentValue);

    return previousValue;
  }, []);

  return allGifts;
}
