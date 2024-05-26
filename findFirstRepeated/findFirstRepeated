export function findFirstRepeated(gifts) {
  if (!Array.isArray(gifts)) throw new Error("params must be an array");

  if (gifts.length === 0) return -1;

  const information = gifts.reduce((previousValue, currentValue) => {
    if (!previousValue) {
      previousValue = [];
    }
    // Search gift in previousValue
    const giftIndex = previousValue.findIndex(
      (gift) => gift.id === currentValue
    );

    if (giftIndex === -1) {
      previousValue.push({
        id: currentValue,
        quantity: 1,
        enabled: false,
      });
    }

    if (giftIndex !== -1) {
      const alreadyExistNumberRepeated = previousValue.some(
        (gift) => gift.enabled
      );

      previousValue[giftIndex] = {
        ...previousValue[giftIndex],
        quantity: previousValue[giftIndex].quantity + 1,
        enabled: alreadyExistNumberRepeated ? false : true,
      };
    }

    return previousValue;
  }, []);

  const firstRepeated = information.find((gift) => gift.enabled === true);

  return !firstRepeated ? -1 : firstRepeated.id;
}
