export type EnemyDto = {
  index: number;
  delay: number;
  duration: number;
  type: enemyType;
};

export enum enemyType {
  snowMan,
  fire,
}
