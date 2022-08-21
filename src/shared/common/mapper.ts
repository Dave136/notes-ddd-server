/**
 * A Mapper makes sure transformations for an Entity or any object into a
 * domain object are possible.
 *
 * A Mapper makes sure:
 *
 * - A DTO (Data Transfer Object) can be represented as a Domain Object (intoDomain)
 * - An object from the persistance layer can be represented as a Domain Object (intoDomain)
 * - A Domain Object can be represented as a Persistance Layer Object (intoPersistence)
 * - A Domain Object can be represented as a DTO (intoDTO)
 *
 * Data Transfer Object
 *
 * Object that carries data between two different systems. DTOs contain raw
 * data that could belong to a Domain Object such as an Entity for instance.
 */
export default interface Mapper<Domain, DTO, PersistenceLayer> {
  intoDTO(domain: Domain): DTO;
  intoDomain(raw: Record<any, unknown>): Domain;
  intoPersistence(domain: Domain): PersistenceLayer;
}
