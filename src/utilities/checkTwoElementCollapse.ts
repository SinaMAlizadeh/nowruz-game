export const checkTwoElementCollapse = (
  playerPos: DOMRect | undefined,
  treePos: DOMRect | undefined
): boolean | undefined => {
  return (
    playerPos &&
    treePos &&
    playerPos.x < treePos.x + treePos.width - 50 &&
    playerPos.x + playerPos.width > treePos.x &&
    playerPos.y < treePos.y + treePos.height &&
    playerPos.y + playerPos.height > treePos.y
  );
};
