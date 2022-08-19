import EntityID from '@common/entity-id';

export class UserId extends EntityID {
  private constructor(id?: string) {
    super(id);
  }
}
