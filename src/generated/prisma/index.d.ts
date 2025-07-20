
/**
 * Client
**/

import * as runtime from './runtime/library.js';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Profile
 * 
 */
export type Profile = $Result.DefaultSelection<Prisma.$ProfilePayload>
/**
 * Model Volunteer
 * 
 */
export type Volunteer = $Result.DefaultSelection<Prisma.$VolunteerPayload>
/**
 * Model Organization
 * 
 */
export type Organization = $Result.DefaultSelection<Prisma.$OrganizationPayload>
/**
 * Model Opportunity
 * 
 */
export type Opportunity = $Result.DefaultSelection<Prisma.$OpportunityPayload>
/**
 * Model VolunteerSkill
 * 
 */
export type VolunteerSkill = $Result.DefaultSelection<Prisma.$VolunteerSkillPayload>
/**
 * Model VolunteerAvailability
 * 
 */
export type VolunteerAvailability = $Result.DefaultSelection<Prisma.$VolunteerAvailabilityPayload>
/**
 * Model Application
 * 
 */
export type Application = $Result.DefaultSelection<Prisma.$ApplicationPayload>
/**
 * Model Assignment
 * 
 */
export type Assignment = $Result.DefaultSelection<Prisma.$AssignmentPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model Review
 * 
 */
export type Review = $Result.DefaultSelection<Prisma.$ReviewPayload>
/**
 * Model Message
 * 
 */
export type Message = $Result.DefaultSelection<Prisma.$MessagePayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserType: {
  VOLUNTEER: 'VOLUNTEER',
  ORGANIZATION: 'ORGANIZATION'
};

export type UserType = (typeof UserType)[keyof typeof UserType]


export const OpportunityCategory: {
  MEDICAL: 'MEDICAL',
  MENTAL_HEALTH: 'MENTAL_HEALTH',
  EDUCATION: 'EDUCATION',
  EMERGENCY: 'EMERGENCY',
  LOGISTICS: 'LOGISTICS',
  LEGAL: 'LEGAL',
  TECHNOLOGY: 'TECHNOLOGY',
  FUNDRAISING: 'FUNDRAISING',
  OTHER: 'OTHER'
};

export type OpportunityCategory = (typeof OpportunityCategory)[keyof typeof OpportunityCategory]


export const OpportunityType: {
  REMOTE: 'REMOTE',
  ON_SITE: 'ON_SITE',
  HYBRID: 'HYBRID'
};

export type OpportunityType = (typeof OpportunityType)[keyof typeof OpportunityType]


export const UrgencyLevel: {
  LOW: 'LOW',
  MEDIUM: 'MEDIUM',
  HIGH: 'HIGH',
  CRITICAL: 'CRITICAL'
};

export type UrgencyLevel = (typeof UrgencyLevel)[keyof typeof UrgencyLevel]


export const OpportunityStatus: {
  DRAFT: 'DRAFT',
  ACTIVE: 'ACTIVE',
  PAUSED: 'PAUSED',
  CLOSED: 'CLOSED',
  COMPLETED: 'COMPLETED'
};

export type OpportunityStatus = (typeof OpportunityStatus)[keyof typeof OpportunityStatus]


export const SkillCategory: {
  MEDICAL: 'MEDICAL',
  MENTAL_HEALTH: 'MENTAL_HEALTH',
  EDUCATION: 'EDUCATION',
  TECHNOLOGY: 'TECHNOLOGY',
  LEGAL: 'LEGAL',
  LOGISTICS: 'LOGISTICS',
  COMMUNICATION: 'COMMUNICATION',
  MANAGEMENT: 'MANAGEMENT',
  OTHER: 'OTHER'
};

export type SkillCategory = (typeof SkillCategory)[keyof typeof SkillCategory]


export const SkillLevel: {
  BEGINNER: 'BEGINNER',
  INTERMEDIATE: 'INTERMEDIATE',
  ADVANCED: 'ADVANCED',
  EXPERT: 'EXPERT'
};

export type SkillLevel = (typeof SkillLevel)[keyof typeof SkillLevel]


export const ApplicationStatus: {
  PENDING: 'PENDING',
  REVIEWING: 'REVIEWING',
  ACCEPTED: 'ACCEPTED',
  REJECTED: 'REJECTED',
  WITHDRAWN: 'WITHDRAWN'
};

export type ApplicationStatus = (typeof ApplicationStatus)[keyof typeof ApplicationStatus]


export const AssignmentStatus: {
  ACTIVE: 'ACTIVE',
  ON_HOLD: 'ON_HOLD',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED'
};

export type AssignmentStatus = (typeof AssignmentStatus)[keyof typeof AssignmentStatus]


export const SessionStatus: {
  SCHEDULED: 'SCHEDULED',
  IN_PROGRESS: 'IN_PROGRESS',
  COMPLETED: 'COMPLETED',
  CANCELLED: 'CANCELLED',
  NO_SHOW: 'NO_SHOW'
};

export type SessionStatus = (typeof SessionStatus)[keyof typeof SessionStatus]

}

export type UserType = $Enums.UserType

export const UserType: typeof $Enums.UserType

export type OpportunityCategory = $Enums.OpportunityCategory

export const OpportunityCategory: typeof $Enums.OpportunityCategory

export type OpportunityType = $Enums.OpportunityType

export const OpportunityType: typeof $Enums.OpportunityType

export type UrgencyLevel = $Enums.UrgencyLevel

export const UrgencyLevel: typeof $Enums.UrgencyLevel

export type OpportunityStatus = $Enums.OpportunityStatus

export const OpportunityStatus: typeof $Enums.OpportunityStatus

export type SkillCategory = $Enums.SkillCategory

export const SkillCategory: typeof $Enums.SkillCategory

export type SkillLevel = $Enums.SkillLevel

export const SkillLevel: typeof $Enums.SkillLevel

export type ApplicationStatus = $Enums.ApplicationStatus

export const ApplicationStatus: typeof $Enums.ApplicationStatus

export type AssignmentStatus = $Enums.AssignmentStatus

export const AssignmentStatus: typeof $Enums.AssignmentStatus

export type SessionStatus = $Enums.SessionStatus

export const SessionStatus: typeof $Enums.SessionStatus

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Profiles
 * const profiles = await prisma.profile.findMany()
 * ```
 *
 *
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  ClientOptions extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof ClientOptions ? ClientOptions['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<ClientOptions['log']> : never : never,
  ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   *
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Profiles
   * const profiles = await prisma.profile.findMany()
   * ```
   *
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<ClientOptions, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): PrismaClient;

  /**
   * Connect with the database
   */
  $connect(): $Utils.JsPromise<void>;

  /**
   * Disconnect from the database
   */
  $disconnect(): $Utils.JsPromise<void>;

  /**
   * Add a middleware
   * @deprecated since 4.16.0. For new code, prefer client extensions instead.
   * @see https://pris.ly/d/extensions
   */
  $use(cb: Prisma.Middleware): void

/**
   * Executes a prepared raw query and returns the number of affected rows.
   * @example
   * ```
   * const result = await prisma.$executeRaw`UPDATE User SET cool = ${true} WHERE email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Executes a raw query and returns the number of affected rows.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$executeRawUnsafe('UPDATE User SET cool = $1 WHERE email = $2 ;', true, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $executeRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<number>;

  /**
   * Performs a prepared raw query and returns the `SELECT` data.
   * @example
   * ```
   * const result = await prisma.$queryRaw`SELECT * FROM User WHERE id = ${1} OR email = ${'user@email.com'};`
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRaw<T = unknown>(query: TemplateStringsArray | Prisma.Sql, ...values: any[]): Prisma.PrismaPromise<T>;

  /**
   * Performs a raw query and returns the `SELECT` data.
   * Susceptible to SQL injections, see documentation.
   * @example
   * ```
   * const result = await prisma.$queryRawUnsafe('SELECT * FROM User WHERE id = $1 OR email = $2;', 1, 'user@email.com')
   * ```
   *
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/raw-database-access).
   */
  $queryRawUnsafe<T = unknown>(query: string, ...values: any[]): Prisma.PrismaPromise<T>;


  /**
   * Allows the running of a sequence of read/write operations that are guaranteed to either succeed or fail as a whole.
   * @example
   * ```
   * const [george, bob, alice] = await prisma.$transaction([
   *   prisma.user.create({ data: { name: 'George' } }),
   *   prisma.user.create({ data: { name: 'Bob' } }),
   *   prisma.user.create({ data: { name: 'Alice' } }),
   * ])
   * ```
   * 
   * Read more in our [docs](https://www.prisma.io/docs/concepts/components/prisma-client/transactions).
   */
  $transaction<P extends Prisma.PrismaPromise<any>[]>(arg: [...P], options?: { isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<runtime.Types.Utils.UnwrapTuple<P>>

  $transaction<R>(fn: (prisma: Omit<PrismaClient, runtime.ITXClientDenyList>) => $Utils.JsPromise<R>, options?: { maxWait?: number, timeout?: number, isolationLevel?: Prisma.TransactionIsolationLevel }): $Utils.JsPromise<R>


  $extends: $Extensions.ExtendsHook<"extends", Prisma.TypeMapCb<ClientOptions>, ExtArgs, $Utils.Call<Prisma.TypeMapCb<ClientOptions>, {
    extArgs: ExtArgs
  }>>

      /**
   * `prisma.profile`: Exposes CRUD operations for the **Profile** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Profiles
    * const profiles = await prisma.profile.findMany()
    * ```
    */
  get profile(): Prisma.ProfileDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteer`: Exposes CRUD operations for the **Volunteer** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Volunteers
    * const volunteers = await prisma.volunteer.findMany()
    * ```
    */
  get volunteer(): Prisma.VolunteerDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.organization`: Exposes CRUD operations for the **Organization** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Organizations
    * const organizations = await prisma.organization.findMany()
    * ```
    */
  get organization(): Prisma.OrganizationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.opportunity`: Exposes CRUD operations for the **Opportunity** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Opportunities
    * const opportunities = await prisma.opportunity.findMany()
    * ```
    */
  get opportunity(): Prisma.OpportunityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteerSkill`: Exposes CRUD operations for the **VolunteerSkill** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VolunteerSkills
    * const volunteerSkills = await prisma.volunteerSkill.findMany()
    * ```
    */
  get volunteerSkill(): Prisma.VolunteerSkillDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.volunteerAvailability`: Exposes CRUD operations for the **VolunteerAvailability** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VolunteerAvailabilities
    * const volunteerAvailabilities = await prisma.volunteerAvailability.findMany()
    * ```
    */
  get volunteerAvailability(): Prisma.VolunteerAvailabilityDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.application`: Exposes CRUD operations for the **Application** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Applications
    * const applications = await prisma.application.findMany()
    * ```
    */
  get application(): Prisma.ApplicationDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.assignment`: Exposes CRUD operations for the **Assignment** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Assignments
    * const assignments = await prisma.assignment.findMany()
    * ```
    */
  get assignment(): Prisma.AssignmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.review`: Exposes CRUD operations for the **Review** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Reviews
    * const reviews = await prisma.review.findMany()
    * ```
    */
  get review(): Prisma.ReviewDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.message`: Exposes CRUD operations for the **Message** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Messages
    * const messages = await prisma.message.findMany()
    * ```
    */
  get message(): Prisma.MessageDelegate<ExtArgs, ClientOptions>;
}

export namespace Prisma {
  export import DMMF = runtime.DMMF

  export type PrismaPromise<T> = $Public.PrismaPromise<T>

  /**
   * Validator
   */
  export import validator = runtime.Public.validator

  /**
   * Prisma Errors
   */
  export import PrismaClientKnownRequestError = runtime.PrismaClientKnownRequestError
  export import PrismaClientUnknownRequestError = runtime.PrismaClientUnknownRequestError
  export import PrismaClientRustPanicError = runtime.PrismaClientRustPanicError
  export import PrismaClientInitializationError = runtime.PrismaClientInitializationError
  export import PrismaClientValidationError = runtime.PrismaClientValidationError

  /**
   * Re-export of sql-template-tag
   */
  export import sql = runtime.sqltag
  export import empty = runtime.empty
  export import join = runtime.join
  export import raw = runtime.raw
  export import Sql = runtime.Sql



  /**
   * Decimal.js
   */
  export import Decimal = runtime.Decimal

  export type DecimalJsLike = runtime.DecimalJsLike

  /**
   * Metrics
   */
  export type Metrics = runtime.Metrics
  export type Metric<T> = runtime.Metric<T>
  export type MetricHistogram = runtime.MetricHistogram
  export type MetricHistogramBucket = runtime.MetricHistogramBucket

  /**
  * Extensions
  */
  export import Extension = $Extensions.UserArgs
  export import getExtensionContext = runtime.Extensions.getExtensionContext
  export import Args = $Public.Args
  export import Payload = $Public.Payload
  export import Result = $Public.Result
  export import Exact = $Public.Exact

  /**
   * Prisma Client JS version: 6.12.0
   * Query Engine version: 8047c96bbd92db98a2abc7c9323ce77c02c89dbc
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion

  /**
   * Utility Types
   */


  export import JsonObject = runtime.JsonObject
  export import JsonArray = runtime.JsonArray
  export import JsonValue = runtime.JsonValue
  export import InputJsonObject = runtime.InputJsonObject
  export import InputJsonArray = runtime.InputJsonArray
  export import InputJsonValue = runtime.InputJsonValue

  /**
   * Types of the values used to represent different kinds of `null` values when working with JSON fields.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  namespace NullTypes {
    /**
    * Type of `Prisma.DbNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.DbNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class DbNull {
      private DbNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.JsonNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.JsonNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class JsonNull {
      private JsonNull: never
      private constructor()
    }

    /**
    * Type of `Prisma.AnyNull`.
    *
    * You cannot use other instances of this class. Please use the `Prisma.AnyNull` value.
    *
    * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
    */
    class AnyNull {
      private AnyNull: never
      private constructor()
    }
  }

  /**
   * Helper for filtering JSON entries that have `null` on the database (empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const DbNull: NullTypes.DbNull

  /**
   * Helper for filtering JSON entries that have JSON `null` values (not empty on the db)
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const JsonNull: NullTypes.JsonNull

  /**
   * Helper for filtering JSON entries that are `Prisma.DbNull` or `Prisma.JsonNull`
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-on-a-json-field
   */
  export const AnyNull: NullTypes.AnyNull

  type SelectAndInclude = {
    select: any
    include: any
  }

  type SelectAndOmit = {
    select: any
    omit: any
  }

  /**
   * Get the type of the value, that the Promise holds.
   */
  export type PromiseType<T extends PromiseLike<any>> = T extends PromiseLike<infer U> ? U : T;

  /**
   * Get the return type of a function which returns a Promise.
   */
  export type PromiseReturnType<T extends (...args: any) => $Utils.JsPromise<any>> = PromiseType<ReturnType<T>>

  /**
   * From T, pick a set of properties whose keys are in the union K
   */
  type Prisma__Pick<T, K extends keyof T> = {
      [P in K]: T[P];
  };


  export type Enumerable<T> = T | Array<T>;

  export type RequiredKeys<T> = {
    [K in keyof T]-?: {} extends Prisma__Pick<T, K> ? never : K
  }[keyof T]

  export type TruthyKeys<T> = keyof {
    [K in keyof T as T[K] extends false | undefined | null ? never : K]: K
  }

  export type TrueKeys<T> = TruthyKeys<Prisma__Pick<T, RequiredKeys<T>>>

  /**
   * Subset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection
   */
  export type Subset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never;
  };

  /**
   * SelectSubset
   * @desc From `T` pick properties that exist in `U`. Simple version of Intersection.
   * Additionally, it validates, if both select and include are present. If the case, it errors.
   */
  export type SelectSubset<T, U> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    (T extends SelectAndInclude
      ? 'Please either choose `select` or `include`.'
      : T extends SelectAndOmit
        ? 'Please either choose `select` or `omit`.'
        : {})

  /**
   * Subset + Intersection
   * @desc From `T` pick properties that exist in `U` and intersect `K`
   */
  export type SubsetIntersection<T, U, K> = {
    [key in keyof T]: key extends keyof U ? T[key] : never
  } &
    K

  type Without<T, U> = { [P in Exclude<keyof T, keyof U>]?: never };

  /**
   * XOR is needed to have a real mutually exclusive union type
   * https://stackoverflow.com/questions/42123407/does-typescript-support-mutually-exclusive-types
   */
  type XOR<T, U> =
    T extends object ?
    U extends object ?
      (Without<T, U> & U) | (Without<U, T> & T)
    : U : T


  /**
   * Is T a Record?
   */
  type IsObject<T extends any> = T extends Array<any>
  ? False
  : T extends Date
  ? False
  : T extends Uint8Array
  ? False
  : T extends BigInt
  ? False
  : T extends object
  ? True
  : False


  /**
   * If it's T[], return T
   */
  export type UnEnumerate<T extends unknown> = T extends Array<infer U> ? U : T

  /**
   * From ts-toolbelt
   */

  type __Either<O extends object, K extends Key> = Omit<O, K> &
    {
      // Merge all but K
      [P in K]: Prisma__Pick<O, P & keyof O> // With K possibilities
    }[K]

  type EitherStrict<O extends object, K extends Key> = Strict<__Either<O, K>>

  type EitherLoose<O extends object, K extends Key> = ComputeRaw<__Either<O, K>>

  type _Either<
    O extends object,
    K extends Key,
    strict extends Boolean
  > = {
    1: EitherStrict<O, K>
    0: EitherLoose<O, K>
  }[strict]

  type Either<
    O extends object,
    K extends Key,
    strict extends Boolean = 1
  > = O extends unknown ? _Either<O, K, strict> : never

  export type Union = any

  type PatchUndefined<O extends object, O1 extends object> = {
    [K in keyof O]: O[K] extends undefined ? At<O1, K> : O[K]
  } & {}

  /** Helper Types for "Merge" **/
  export type IntersectOf<U extends Union> = (
    U extends unknown ? (k: U) => void : never
  ) extends (k: infer I) => void
    ? I
    : never

  export type Overwrite<O extends object, O1 extends object> = {
      [K in keyof O]: K extends keyof O1 ? O1[K] : O[K];
  } & {};

  type _Merge<U extends object> = IntersectOf<Overwrite<U, {
      [K in keyof U]-?: At<U, K>;
  }>>;

  type Key = string | number | symbol;
  type AtBasic<O extends object, K extends Key> = K extends keyof O ? O[K] : never;
  type AtStrict<O extends object, K extends Key> = O[K & keyof O];
  type AtLoose<O extends object, K extends Key> = O extends unknown ? AtStrict<O, K> : never;
  export type At<O extends object, K extends Key, strict extends Boolean = 1> = {
      1: AtStrict<O, K>;
      0: AtLoose<O, K>;
  }[strict];

  export type ComputeRaw<A extends any> = A extends Function ? A : {
    [K in keyof A]: A[K];
  } & {};

  export type OptionalFlat<O> = {
    [K in keyof O]?: O[K];
  } & {};

  type _Record<K extends keyof any, T> = {
    [P in K]: T;
  };

  // cause typescript not to expand types and preserve names
  type NoExpand<T> = T extends unknown ? T : never;

  // this type assumes the passed object is entirely optional
  type AtLeast<O extends object, K extends string> = NoExpand<
    O extends unknown
    ? | (K extends keyof O ? { [P in K]: O[P] } & O : O)
      | {[P in keyof O as P extends K ? P : never]-?: O[P]} & O
    : never>;

  type _Strict<U, _U = U> = U extends unknown ? U & OptionalFlat<_Record<Exclude<Keys<_U>, keyof U>, never>> : never;

  export type Strict<U extends object> = ComputeRaw<_Strict<U>>;
  /** End Helper Types for "Merge" **/

  export type Merge<U extends object> = ComputeRaw<_Merge<Strict<U>>>;

  /**
  A [[Boolean]]
  */
  export type Boolean = True | False

  // /**
  // 1
  // */
  export type True = 1

  /**
  0
  */
  export type False = 0

  export type Not<B extends Boolean> = {
    0: 1
    1: 0
  }[B]

  export type Extends<A1 extends any, A2 extends any> = [A1] extends [never]
    ? 0 // anything `never` is false
    : A1 extends A2
    ? 1
    : 0

  export type Has<U extends Union, U1 extends Union> = Not<
    Extends<Exclude<U1, U>, U1>
  >

  export type Or<B1 extends Boolean, B2 extends Boolean> = {
    0: {
      0: 0
      1: 1
    }
    1: {
      0: 1
      1: 1
    }
  }[B1][B2]

  export type Keys<U extends Union> = U extends unknown ? keyof U : never

  type Cast<A, B> = A extends B ? A : B;

  export const type: unique symbol;



  /**
   * Used by group by
   */

  export type GetScalarType<T, O> = O extends object ? {
    [P in keyof T]: P extends keyof O
      ? O[P]
      : never
  } : never

  type FieldPaths<
    T,
    U = Omit<T, '_avg' | '_sum' | '_count' | '_min' | '_max'>
  > = IsObject<T> extends True ? U : T

  type GetHavingFields<T> = {
    [K in keyof T]: Or<
      Or<Extends<'OR', K>, Extends<'AND', K>>,
      Extends<'NOT', K>
    > extends True
      ? // infer is only needed to not hit TS limit
        // based on the brilliant idea of Pierre-Antoine Mills
        // https://github.com/microsoft/TypeScript/issues/30188#issuecomment-478938437
        T[K] extends infer TK
        ? GetHavingFields<UnEnumerate<TK> extends object ? Merge<UnEnumerate<TK>> : never>
        : never
      : {} extends FieldPaths<T[K]>
      ? never
      : K
  }[keyof T]

  /**
   * Convert tuple to union
   */
  type _TupleToUnion<T> = T extends (infer E)[] ? E : never
  type TupleToUnion<K extends readonly any[]> = _TupleToUnion<K>
  type MaybeTupleToUnion<T> = T extends any[] ? TupleToUnion<T> : T

  /**
   * Like `Pick`, but additionally can also accept an array of keys
   */
  type PickEnumerable<T, K extends Enumerable<keyof T> | keyof T> = Prisma__Pick<T, MaybeTupleToUnion<K>>

  /**
   * Exclude all keys with underscores
   */
  type ExcludeUnderscoreKeys<T extends string> = T extends `_${string}` ? never : T


  export type FieldRef<Model, FieldType> = runtime.FieldRef<Model, FieldType>

  type FieldRefInputType<Model, FieldType> = Model extends never ? never : FieldRef<Model, FieldType>


  export const ModelName: {
    Profile: 'Profile',
    Volunteer: 'Volunteer',
    Organization: 'Organization',
    Opportunity: 'Opportunity',
    VolunteerSkill: 'VolunteerSkill',
    VolunteerAvailability: 'VolunteerAvailability',
    Application: 'Application',
    Assignment: 'Assignment',
    Session: 'Session',
    Review: 'Review',
    Message: 'Message'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }

  interface TypeMapCb<ClientOptions = {}> extends $Utils.Fn<{extArgs: $Extensions.InternalArgs }, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs'], ClientOptions extends { omit: infer OmitOptions } ? OmitOptions : {}>
  }

  export type TypeMap<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> = {
    globalOmitOptions: {
      omit: GlobalOmitOptions
    }
    meta: {
      modelProps: "profile" | "volunteer" | "organization" | "opportunity" | "volunteerSkill" | "volunteerAvailability" | "application" | "assignment" | "session" | "review" | "message"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      Profile: {
        payload: Prisma.$ProfilePayload<ExtArgs>
        fields: Prisma.ProfileFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ProfileFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ProfileFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findFirst: {
            args: Prisma.ProfileFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ProfileFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          findMany: {
            args: Prisma.ProfileFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          create: {
            args: Prisma.ProfileCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          createMany: {
            args: Prisma.ProfileCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ProfileCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          delete: {
            args: Prisma.ProfileDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          update: {
            args: Prisma.ProfileUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          deleteMany: {
            args: Prisma.ProfileDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ProfileUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ProfileUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>[]
          }
          upsert: {
            args: Prisma.ProfileUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ProfilePayload>
          }
          aggregate: {
            args: Prisma.ProfileAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateProfile>
          }
          groupBy: {
            args: Prisma.ProfileGroupByArgs<ExtArgs>
            result: $Utils.Optional<ProfileGroupByOutputType>[]
          }
          count: {
            args: Prisma.ProfileCountArgs<ExtArgs>
            result: $Utils.Optional<ProfileCountAggregateOutputType> | number
          }
        }
      }
      Volunteer: {
        payload: Prisma.$VolunteerPayload<ExtArgs>
        fields: Prisma.VolunteerFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findFirst: {
            args: Prisma.VolunteerFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          findMany: {
            args: Prisma.VolunteerFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          create: {
            args: Prisma.VolunteerCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          createMany: {
            args: Prisma.VolunteerCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          delete: {
            args: Prisma.VolunteerDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          update: {
            args: Prisma.VolunteerUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>[]
          }
          upsert: {
            args: Prisma.VolunteerUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteer>
          }
          groupBy: {
            args: Prisma.VolunteerGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerCountAggregateOutputType> | number
          }
        }
      }
      Organization: {
        payload: Prisma.$OrganizationPayload<ExtArgs>
        fields: Prisma.OrganizationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OrganizationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OrganizationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findFirst: {
            args: Prisma.OrganizationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OrganizationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          findMany: {
            args: Prisma.OrganizationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          create: {
            args: Prisma.OrganizationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          createMany: {
            args: Prisma.OrganizationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OrganizationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          delete: {
            args: Prisma.OrganizationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          update: {
            args: Prisma.OrganizationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          deleteMany: {
            args: Prisma.OrganizationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OrganizationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OrganizationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>[]
          }
          upsert: {
            args: Prisma.OrganizationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OrganizationPayload>
          }
          aggregate: {
            args: Prisma.OrganizationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOrganization>
          }
          groupBy: {
            args: Prisma.OrganizationGroupByArgs<ExtArgs>
            result: $Utils.Optional<OrganizationGroupByOutputType>[]
          }
          count: {
            args: Prisma.OrganizationCountArgs<ExtArgs>
            result: $Utils.Optional<OrganizationCountAggregateOutputType> | number
          }
        }
      }
      Opportunity: {
        payload: Prisma.$OpportunityPayload<ExtArgs>
        fields: Prisma.OpportunityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.OpportunityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.OpportunityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findFirst: {
            args: Prisma.OpportunityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.OpportunityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          findMany: {
            args: Prisma.OpportunityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          create: {
            args: Prisma.OpportunityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          createMany: {
            args: Prisma.OpportunityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.OpportunityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          delete: {
            args: Prisma.OpportunityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          update: {
            args: Prisma.OpportunityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          deleteMany: {
            args: Prisma.OpportunityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.OpportunityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.OpportunityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>[]
          }
          upsert: {
            args: Prisma.OpportunityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$OpportunityPayload>
          }
          aggregate: {
            args: Prisma.OpportunityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateOpportunity>
          }
          groupBy: {
            args: Prisma.OpportunityGroupByArgs<ExtArgs>
            result: $Utils.Optional<OpportunityGroupByOutputType>[]
          }
          count: {
            args: Prisma.OpportunityCountArgs<ExtArgs>
            result: $Utils.Optional<OpportunityCountAggregateOutputType> | number
          }
        }
      }
      VolunteerSkill: {
        payload: Prisma.$VolunteerSkillPayload<ExtArgs>
        fields: Prisma.VolunteerSkillFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerSkillFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerSkillFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>
          }
          findFirst: {
            args: Prisma.VolunteerSkillFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerSkillFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>
          }
          findMany: {
            args: Prisma.VolunteerSkillFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>[]
          }
          create: {
            args: Prisma.VolunteerSkillCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>
          }
          createMany: {
            args: Prisma.VolunteerSkillCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerSkillCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>[]
          }
          delete: {
            args: Prisma.VolunteerSkillDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>
          }
          update: {
            args: Prisma.VolunteerSkillUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerSkillDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerSkillUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerSkillUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>[]
          }
          upsert: {
            args: Prisma.VolunteerSkillUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerSkillPayload>
          }
          aggregate: {
            args: Prisma.VolunteerSkillAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteerSkill>
          }
          groupBy: {
            args: Prisma.VolunteerSkillGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerSkillGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerSkillCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerSkillCountAggregateOutputType> | number
          }
        }
      }
      VolunteerAvailability: {
        payload: Prisma.$VolunteerAvailabilityPayload<ExtArgs>
        fields: Prisma.VolunteerAvailabilityFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VolunteerAvailabilityFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VolunteerAvailabilityFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>
          }
          findFirst: {
            args: Prisma.VolunteerAvailabilityFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VolunteerAvailabilityFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>
          }
          findMany: {
            args: Prisma.VolunteerAvailabilityFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>[]
          }
          create: {
            args: Prisma.VolunteerAvailabilityCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>
          }
          createMany: {
            args: Prisma.VolunteerAvailabilityCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.VolunteerAvailabilityCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>[]
          }
          delete: {
            args: Prisma.VolunteerAvailabilityDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>
          }
          update: {
            args: Prisma.VolunteerAvailabilityUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>
          }
          deleteMany: {
            args: Prisma.VolunteerAvailabilityDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.VolunteerAvailabilityUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.VolunteerAvailabilityUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>[]
          }
          upsert: {
            args: Prisma.VolunteerAvailabilityUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$VolunteerAvailabilityPayload>
          }
          aggregate: {
            args: Prisma.VolunteerAvailabilityAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateVolunteerAvailability>
          }
          groupBy: {
            args: Prisma.VolunteerAvailabilityGroupByArgs<ExtArgs>
            result: $Utils.Optional<VolunteerAvailabilityGroupByOutputType>[]
          }
          count: {
            args: Prisma.VolunteerAvailabilityCountArgs<ExtArgs>
            result: $Utils.Optional<VolunteerAvailabilityCountAggregateOutputType> | number
          }
        }
      }
      Application: {
        payload: Prisma.$ApplicationPayload<ExtArgs>
        fields: Prisma.ApplicationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ApplicationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ApplicationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findFirst: {
            args: Prisma.ApplicationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ApplicationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          findMany: {
            args: Prisma.ApplicationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          create: {
            args: Prisma.ApplicationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          createMany: {
            args: Prisma.ApplicationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ApplicationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          delete: {
            args: Prisma.ApplicationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          update: {
            args: Prisma.ApplicationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          deleteMany: {
            args: Prisma.ApplicationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ApplicationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ApplicationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>[]
          }
          upsert: {
            args: Prisma.ApplicationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ApplicationPayload>
          }
          aggregate: {
            args: Prisma.ApplicationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateApplication>
          }
          groupBy: {
            args: Prisma.ApplicationGroupByArgs<ExtArgs>
            result: $Utils.Optional<ApplicationGroupByOutputType>[]
          }
          count: {
            args: Prisma.ApplicationCountArgs<ExtArgs>
            result: $Utils.Optional<ApplicationCountAggregateOutputType> | number
          }
        }
      }
      Assignment: {
        payload: Prisma.$AssignmentPayload<ExtArgs>
        fields: Prisma.AssignmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AssignmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AssignmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findFirst: {
            args: Prisma.AssignmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AssignmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          findMany: {
            args: Prisma.AssignmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          create: {
            args: Prisma.AssignmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          createMany: {
            args: Prisma.AssignmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.AssignmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          delete: {
            args: Prisma.AssignmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          update: {
            args: Prisma.AssignmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          deleteMany: {
            args: Prisma.AssignmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.AssignmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.AssignmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>[]
          }
          upsert: {
            args: Prisma.AssignmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$AssignmentPayload>
          }
          aggregate: {
            args: Prisma.AssignmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateAssignment>
          }
          groupBy: {
            args: Prisma.AssignmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<AssignmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.AssignmentCountArgs<ExtArgs>
            result: $Utils.Optional<AssignmentCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.SessionCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.SessionUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      Review: {
        payload: Prisma.$ReviewPayload<ExtArgs>
        fields: Prisma.ReviewFieldRefs
        operations: {
          findUnique: {
            args: Prisma.ReviewFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.ReviewFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findFirst: {
            args: Prisma.ReviewFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.ReviewFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          findMany: {
            args: Prisma.ReviewFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          create: {
            args: Prisma.ReviewCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          createMany: {
            args: Prisma.ReviewCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.ReviewCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          delete: {
            args: Prisma.ReviewDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          update: {
            args: Prisma.ReviewUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          deleteMany: {
            args: Prisma.ReviewDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.ReviewUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.ReviewUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>[]
          }
          upsert: {
            args: Prisma.ReviewUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$ReviewPayload>
          }
          aggregate: {
            args: Prisma.ReviewAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateReview>
          }
          groupBy: {
            args: Prisma.ReviewGroupByArgs<ExtArgs>
            result: $Utils.Optional<ReviewGroupByOutputType>[]
          }
          count: {
            args: Prisma.ReviewCountArgs<ExtArgs>
            result: $Utils.Optional<ReviewCountAggregateOutputType> | number
          }
        }
      }
      Message: {
        payload: Prisma.$MessagePayload<ExtArgs>
        fields: Prisma.MessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findFirst: {
            args: Prisma.MessageFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          findMany: {
            args: Prisma.MessageFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          create: {
            args: Prisma.MessageCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          createMany: {
            args: Prisma.MessageCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.MessageCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          delete: {
            args: Prisma.MessageDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          update: {
            args: Prisma.MessageUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          deleteMany: {
            args: Prisma.MessageDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.MessageUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.MessageUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>[]
          }
          upsert: {
            args: Prisma.MessageUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$MessagePayload>
          }
          aggregate: {
            args: Prisma.MessageAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateMessage>
          }
          groupBy: {
            args: Prisma.MessageGroupByArgs<ExtArgs>
            result: $Utils.Optional<MessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageCountArgs<ExtArgs>
            result: $Utils.Optional<MessageCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<"define", Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'
  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasourceUrl?: string
    /**
     * @default "colorless"
     */
    errorFormat?: ErrorFormat
    /**
     * @example
     * ```
     * // Defaults to stdout
     * log: ['query', 'info', 'warn', 'error']
     * 
     * // Emit as events
     * log: [
     *   { emit: 'stdout', level: 'query' },
     *   { emit: 'stdout', level: 'info' },
     *   { emit: 'stdout', level: 'warn' }
     *   { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: (LogLevel | LogDefinition)[]
    /**
     * The default values for transactionOptions
     * maxWait ?= 2000
     * timeout ?= 5000
     */
    transactionOptions?: {
      maxWait?: number
      timeout?: number
      isolationLevel?: Prisma.TransactionIsolationLevel
    }
    /**
     * Instance of a Driver Adapter, e.g., like one provided by `@prisma/adapter-planetscale`
     */
    adapter?: runtime.SqlDriverAdapterFactory | null
    /**
     * Global configuration for omitting model fields by default.
     * 
     * @example
     * ```
     * const prisma = new PrismaClient({
     *   omit: {
     *     user: {
     *       password: true
     *     }
     *   }
     * })
     * ```
     */
    omit?: Prisma.GlobalOmitConfig
  }
  export type GlobalOmitConfig = {
    profile?: ProfileOmit
    volunteer?: VolunteerOmit
    organization?: OrganizationOmit
    opportunity?: OpportunityOmit
    volunteerSkill?: VolunteerSkillOmit
    volunteerAvailability?: VolunteerAvailabilityOmit
    application?: ApplicationOmit
    assignment?: AssignmentOmit
    session?: SessionOmit
    review?: ReviewOmit
    message?: MessageOmit
  }

  /* Types for Logging */
  export type LogLevel = 'info' | 'query' | 'warn' | 'error'
  export type LogDefinition = {
    level: LogLevel
    emit: 'stdout' | 'event'
  }

  export type GetLogType<T extends LogLevel | LogDefinition> = T extends LogDefinition ? T['emit'] extends 'event' ? T['level'] : never : never
  export type GetEvents<T extends any> = T extends Array<LogLevel | LogDefinition> ?
    GetLogType<T[0]> | GetLogType<T[1]> | GetLogType<T[2]> | GetLogType<T[3]>
    : never

  export type QueryEvent = {
    timestamp: Date
    query: string
    params: string
    duration: number
    target: string
  }

  export type LogEvent = {
    timestamp: Date
    message: string
    target: string
  }
  /* End Types for Logging */


  export type PrismaAction =
    | 'findUnique'
    | 'findUniqueOrThrow'
    | 'findMany'
    | 'findFirst'
    | 'findFirstOrThrow'
    | 'create'
    | 'createMany'
    | 'createManyAndReturn'
    | 'update'
    | 'updateMany'
    | 'updateManyAndReturn'
    | 'upsert'
    | 'delete'
    | 'deleteMany'
    | 'executeRaw'
    | 'queryRaw'
    | 'aggregate'
    | 'count'
    | 'runCommandRaw'
    | 'findRaw'
    | 'groupBy'

  /**
   * These options are being passed into the middleware as "params"
   */
  export type MiddlewareParams = {
    model?: ModelName
    action: PrismaAction
    args: any
    dataPath: string[]
    runInTransaction: boolean
  }

  /**
   * The `T` type makes sure, that the `return proceed` is not forgotten in the middleware implementation
   */
  export type Middleware<T = any> = (
    params: MiddlewareParams,
    next: (params: MiddlewareParams) => $Utils.JsPromise<T>,
  ) => $Utils.JsPromise<T>

  // tested in getLogLevel.test.ts
  export function getLogLevel(log: Array<LogLevel | LogDefinition>): LogLevel | undefined;

  /**
   * `PrismaClient` proxy available in interactive transactions.
   */
  export type TransactionClient = Omit<Prisma.DefaultPrismaClient, runtime.ITXClientDenyList>

  export type Datasource = {
    url?: string
  }

  /**
   * Count Types
   */


  /**
   * Count Type ProfileCountOutputType
   */

  export type ProfileCountOutputType = {
    sentMessages: number
    receivedMessages: number
  }

  export type ProfileCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sentMessages?: boolean | ProfileCountOutputTypeCountSentMessagesArgs
    receivedMessages?: boolean | ProfileCountOutputTypeCountReceivedMessagesArgs
  }

  // Custom InputTypes
  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the ProfileCountOutputType
     */
    select?: ProfileCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountSentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }

  /**
   * ProfileCountOutputType without action
   */
  export type ProfileCountOutputTypeCountReceivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
  }


  /**
   * Count Type VolunteerCountOutputType
   */

  export type VolunteerCountOutputType = {
    skills: number
    availability: number
    applications: number
    assignments: number
    reviewsReceived: number
    reviewsGiven: number
  }

  export type VolunteerCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    skills?: boolean | VolunteerCountOutputTypeCountSkillsArgs
    availability?: boolean | VolunteerCountOutputTypeCountAvailabilityArgs
    applications?: boolean | VolunteerCountOutputTypeCountApplicationsArgs
    assignments?: boolean | VolunteerCountOutputTypeCountAssignmentsArgs
    reviewsReceived?: boolean | VolunteerCountOutputTypeCountReviewsReceivedArgs
    reviewsGiven?: boolean | VolunteerCountOutputTypeCountReviewsGivenArgs
  }

  // Custom InputTypes
  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerCountOutputType
     */
    select?: VolunteerCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountSkillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerSkillWhereInput
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountAvailabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerAvailabilityWhereInput
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * VolunteerCountOutputType without action
   */
  export type VolunteerCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type OrganizationCountOutputType
   */

  export type OrganizationCountOutputType = {
    opportunities: number
    applications: number
    assignments: number
    reviewsReceived: number
    reviewsGiven: number
  }

  export type OrganizationCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunities?: boolean | OrganizationCountOutputTypeCountOpportunitiesArgs
    applications?: boolean | OrganizationCountOutputTypeCountApplicationsArgs
    assignments?: boolean | OrganizationCountOutputTypeCountAssignmentsArgs
    reviewsReceived?: boolean | OrganizationCountOutputTypeCountReviewsReceivedArgs
    reviewsGiven?: boolean | OrganizationCountOutputTypeCountReviewsGivenArgs
  }

  // Custom InputTypes
  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OrganizationCountOutputType
     */
    select?: OrganizationCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountOpportunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountReviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }

  /**
   * OrganizationCountOutputType without action
   */
  export type OrganizationCountOutputTypeCountReviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Count Type OpportunityCountOutputType
   */

  export type OpportunityCountOutputType = {
    applications: number
    assignments: number
  }

  export type OpportunityCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    applications?: boolean | OpportunityCountOutputTypeCountApplicationsArgs
    assignments?: boolean | OpportunityCountOutputTypeCountAssignmentsArgs
  }

  // Custom InputTypes
  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the OpportunityCountOutputType
     */
    select?: OpportunityCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeCountApplicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
  }

  /**
   * OpportunityCountOutputType without action
   */
  export type OpportunityCountOutputTypeCountAssignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
  }


  /**
   * Count Type AssignmentCountOutputType
   */

  export type AssignmentCountOutputType = {
    sessions: number
    reviews: number
  }

  export type AssignmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sessions?: boolean | AssignmentCountOutputTypeCountSessionsArgs
    reviews?: boolean | AssignmentCountOutputTypeCountReviewsArgs
  }

  // Custom InputTypes
  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the AssignmentCountOutputType
     */
    select?: AssignmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }

  /**
   * AssignmentCountOutputType without action
   */
  export type AssignmentCountOutputTypeCountReviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
  }


  /**
   * Models
   */

  /**
   * Model Profile
   */

  export type AggregateProfile = {
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  export type ProfileMinAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    userType: $Enums.UserType | null
    avatar: string | null
    bio: string | null
    phone: string | null
    location: string | null
    website: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileMaxAggregateOutputType = {
    id: string | null
    email: string | null
    fullName: string | null
    userType: $Enums.UserType | null
    avatar: string | null
    bio: string | null
    phone: string | null
    location: string | null
    website: string | null
    verified: boolean | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type ProfileCountAggregateOutputType = {
    id: number
    email: number
    fullName: number
    userType: number
    avatar: number
    bio: number
    phone: number
    location: number
    website: number
    verified: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type ProfileMinAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    userType?: true
    avatar?: true
    bio?: true
    phone?: true
    location?: true
    website?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileMaxAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    userType?: true
    avatar?: true
    bio?: true
    phone?: true
    location?: true
    website?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
  }

  export type ProfileCountAggregateInputType = {
    id?: true
    email?: true
    fullName?: true
    userType?: true
    avatar?: true
    bio?: true
    phone?: true
    location?: true
    website?: true
    verified?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type ProfileAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profile to aggregate.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Profiles
    **/
    _count?: true | ProfileCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ProfileMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ProfileMaxAggregateInputType
  }

  export type GetProfileAggregateType<T extends ProfileAggregateArgs> = {
        [P in keyof T & keyof AggregateProfile]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateProfile[P]>
      : GetScalarType<T[P], AggregateProfile[P]>
  }




  export type ProfileGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ProfileWhereInput
    orderBy?: ProfileOrderByWithAggregationInput | ProfileOrderByWithAggregationInput[]
    by: ProfileScalarFieldEnum[] | ProfileScalarFieldEnum
    having?: ProfileScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ProfileCountAggregateInputType | true
    _min?: ProfileMinAggregateInputType
    _max?: ProfileMaxAggregateInputType
  }

  export type ProfileGroupByOutputType = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar: string | null
    bio: string | null
    phone: string | null
    location: string | null
    website: string | null
    verified: boolean
    createdAt: Date
    updatedAt: Date
    _count: ProfileCountAggregateOutputType | null
    _min: ProfileMinAggregateOutputType | null
    _max: ProfileMaxAggregateOutputType | null
  }

  type GetProfileGroupByPayload<T extends ProfileGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ProfileGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ProfileGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ProfileGroupByOutputType[P]>
            : GetScalarType<T[P], ProfileGroupByOutputType[P]>
        }
      >
    >


  export type ProfileSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    userType?: boolean
    avatar?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    website?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    volunteer?: boolean | Profile$volunteerArgs<ExtArgs>
    organization?: boolean | Profile$organizationArgs<ExtArgs>
    sentMessages?: boolean | Profile$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | Profile$receivedMessagesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    userType?: boolean
    avatar?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    website?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    email?: boolean
    fullName?: boolean
    userType?: boolean
    avatar?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    website?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }, ExtArgs["result"]["profile"]>

  export type ProfileSelectScalar = {
    id?: boolean
    email?: boolean
    fullName?: boolean
    userType?: boolean
    avatar?: boolean
    bio?: boolean
    phone?: boolean
    location?: boolean
    website?: boolean
    verified?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type ProfileOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "email" | "fullName" | "userType" | "avatar" | "bio" | "phone" | "location" | "website" | "verified" | "createdAt" | "updatedAt", ExtArgs["result"]["profile"]>
  export type ProfileInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | Profile$volunteerArgs<ExtArgs>
    organization?: boolean | Profile$organizationArgs<ExtArgs>
    sentMessages?: boolean | Profile$sentMessagesArgs<ExtArgs>
    receivedMessages?: boolean | Profile$receivedMessagesArgs<ExtArgs>
    _count?: boolean | ProfileCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type ProfileIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}
  export type ProfileIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {}

  export type $ProfilePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Profile"
    objects: {
      volunteer: Prisma.$VolunteerPayload<ExtArgs> | null
      organization: Prisma.$OrganizationPayload<ExtArgs> | null
      sentMessages: Prisma.$MessagePayload<ExtArgs>[]
      receivedMessages: Prisma.$MessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      email: string
      fullName: string
      userType: $Enums.UserType
      avatar: string | null
      bio: string | null
      phone: string | null
      location: string | null
      website: string | null
      verified: boolean
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["profile"]>
    composites: {}
  }

  type ProfileGetPayload<S extends boolean | null | undefined | ProfileDefaultArgs> = $Result.GetResult<Prisma.$ProfilePayload, S>

  type ProfileCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ProfileFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ProfileCountAggregateInputType | true
    }

  export interface ProfileDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Profile'], meta: { name: 'Profile' } }
    /**
     * Find zero or one Profile that matches the filter.
     * @param {ProfileFindUniqueArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ProfileFindUniqueArgs>(args: SelectSubset<T, ProfileFindUniqueArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Profile that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ProfileFindUniqueOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ProfileFindUniqueOrThrowArgs>(args: SelectSubset<T, ProfileFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ProfileFindFirstArgs>(args?: SelectSubset<T, ProfileFindFirstArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Profile that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindFirstOrThrowArgs} args - Arguments to find a Profile
     * @example
     * // Get one Profile
     * const profile = await prisma.profile.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ProfileFindFirstOrThrowArgs>(args?: SelectSubset<T, ProfileFindFirstOrThrowArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Profiles that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Profiles
     * const profiles = await prisma.profile.findMany()
     * 
     * // Get first 10 Profiles
     * const profiles = await prisma.profile.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const profileWithIdOnly = await prisma.profile.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ProfileFindManyArgs>(args?: SelectSubset<T, ProfileFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Profile.
     * @param {ProfileCreateArgs} args - Arguments to create a Profile.
     * @example
     * // Create one Profile
     * const Profile = await prisma.profile.create({
     *   data: {
     *     // ... data to create a Profile
     *   }
     * })
     * 
     */
    create<T extends ProfileCreateArgs>(args: SelectSubset<T, ProfileCreateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Profiles.
     * @param {ProfileCreateManyArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ProfileCreateManyArgs>(args?: SelectSubset<T, ProfileCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Profiles and returns the data saved in the database.
     * @param {ProfileCreateManyAndReturnArgs} args - Arguments to create many Profiles.
     * @example
     * // Create many Profiles
     * const profile = await prisma.profile.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ProfileCreateManyAndReturnArgs>(args?: SelectSubset<T, ProfileCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Profile.
     * @param {ProfileDeleteArgs} args - Arguments to delete one Profile.
     * @example
     * // Delete one Profile
     * const Profile = await prisma.profile.delete({
     *   where: {
     *     // ... filter to delete one Profile
     *   }
     * })
     * 
     */
    delete<T extends ProfileDeleteArgs>(args: SelectSubset<T, ProfileDeleteArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Profile.
     * @param {ProfileUpdateArgs} args - Arguments to update one Profile.
     * @example
     * // Update one Profile
     * const profile = await prisma.profile.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ProfileUpdateArgs>(args: SelectSubset<T, ProfileUpdateArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Profiles.
     * @param {ProfileDeleteManyArgs} args - Arguments to filter Profiles to delete.
     * @example
     * // Delete a few Profiles
     * const { count } = await prisma.profile.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ProfileDeleteManyArgs>(args?: SelectSubset<T, ProfileDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ProfileUpdateManyArgs>(args: SelectSubset<T, ProfileUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Profiles and returns the data updated in the database.
     * @param {ProfileUpdateManyAndReturnArgs} args - Arguments to update many Profiles.
     * @example
     * // Update many Profiles
     * const profile = await prisma.profile.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Profiles and only return the `id`
     * const profileWithIdOnly = await prisma.profile.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ProfileUpdateManyAndReturnArgs>(args: SelectSubset<T, ProfileUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Profile.
     * @param {ProfileUpsertArgs} args - Arguments to update or create a Profile.
     * @example
     * // Update or create a Profile
     * const profile = await prisma.profile.upsert({
     *   create: {
     *     // ... data to create a Profile
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Profile we want to update
     *   }
     * })
     */
    upsert<T extends ProfileUpsertArgs>(args: SelectSubset<T, ProfileUpsertArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Profiles.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileCountArgs} args - Arguments to filter Profiles to count.
     * @example
     * // Count the number of Profiles
     * const count = await prisma.profile.count({
     *   where: {
     *     // ... the filter for the Profiles we want to count
     *   }
     * })
    **/
    count<T extends ProfileCountArgs>(
      args?: Subset<T, ProfileCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ProfileCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ProfileAggregateArgs>(args: Subset<T, ProfileAggregateArgs>): Prisma.PrismaPromise<GetProfileAggregateType<T>>

    /**
     * Group by Profile.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ProfileGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ProfileGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ProfileGroupByArgs['orderBy'] }
        : { orderBy?: ProfileGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ProfileGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetProfileGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Profile model
   */
  readonly fields: ProfileFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Profile.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ProfileClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volunteer<T extends Profile$volunteerArgs<ExtArgs> = {}>(args?: Subset<T, Profile$volunteerArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    organization<T extends Profile$organizationArgs<ExtArgs> = {}>(args?: Subset<T, Profile$organizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    sentMessages<T extends Profile$sentMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$sentMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    receivedMessages<T extends Profile$receivedMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Profile$receivedMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Profile model
   */
  interface ProfileFieldRefs {
    readonly id: FieldRef<"Profile", 'String'>
    readonly email: FieldRef<"Profile", 'String'>
    readonly fullName: FieldRef<"Profile", 'String'>
    readonly userType: FieldRef<"Profile", 'UserType'>
    readonly avatar: FieldRef<"Profile", 'String'>
    readonly bio: FieldRef<"Profile", 'String'>
    readonly phone: FieldRef<"Profile", 'String'>
    readonly location: FieldRef<"Profile", 'String'>
    readonly website: FieldRef<"Profile", 'String'>
    readonly verified: FieldRef<"Profile", 'Boolean'>
    readonly createdAt: FieldRef<"Profile", 'DateTime'>
    readonly updatedAt: FieldRef<"Profile", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Profile findUnique
   */
  export type ProfileFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findUniqueOrThrow
   */
  export type ProfileFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile findFirst
   */
  export type ProfileFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findFirstOrThrow
   */
  export type ProfileFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profile to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Profiles.
     */
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile findMany
   */
  export type ProfileFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter, which Profiles to fetch.
     */
    where?: ProfileWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Profiles to fetch.
     */
    orderBy?: ProfileOrderByWithRelationInput | ProfileOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Profiles.
     */
    cursor?: ProfileWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Profiles from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Profiles.
     */
    skip?: number
    distinct?: ProfileScalarFieldEnum | ProfileScalarFieldEnum[]
  }

  /**
   * Profile create
   */
  export type ProfileCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to create a Profile.
     */
    data: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
  }

  /**
   * Profile createMany
   */
  export type ProfileCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile createManyAndReturn
   */
  export type ProfileCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to create many Profiles.
     */
    data: ProfileCreateManyInput | ProfileCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Profile update
   */
  export type ProfileUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The data needed to update a Profile.
     */
    data: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
    /**
     * Choose, which Profile to update.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile updateMany
   */
  export type ProfileUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile updateManyAndReturn
   */
  export type ProfileUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * The data used to update Profiles.
     */
    data: XOR<ProfileUpdateManyMutationInput, ProfileUncheckedUpdateManyInput>
    /**
     * Filter which Profiles to update
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to update.
     */
    limit?: number
  }

  /**
   * Profile upsert
   */
  export type ProfileUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * The filter to search for the Profile to update in case it exists.
     */
    where: ProfileWhereUniqueInput
    /**
     * In case the Profile found by the `where` argument doesn't exist, create a new Profile with this data.
     */
    create: XOR<ProfileCreateInput, ProfileUncheckedCreateInput>
    /**
     * In case the Profile was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ProfileUpdateInput, ProfileUncheckedUpdateInput>
  }

  /**
   * Profile delete
   */
  export type ProfileDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
    /**
     * Filter which Profile to delete.
     */
    where: ProfileWhereUniqueInput
  }

  /**
   * Profile deleteMany
   */
  export type ProfileDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Profiles to delete
     */
    where?: ProfileWhereInput
    /**
     * Limit how many Profiles to delete.
     */
    limit?: number
  }

  /**
   * Profile.volunteer
   */
  export type Profile$volunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
  }

  /**
   * Profile.organization
   */
  export type Profile$organizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Profile.sentMessages
   */
  export type Profile$sentMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Profile.receivedMessages
   */
  export type Profile$receivedMessagesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    cursor?: MessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Profile without action
   */
  export type ProfileDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Profile
     */
    select?: ProfileSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Profile
     */
    omit?: ProfileOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ProfileInclude<ExtArgs> | null
  }


  /**
   * Model Volunteer
   */

  export type AggregateVolunteer = {
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  export type VolunteerAvgAggregateOutputType = {
    totalHours: number | null
    impactScore: number | null
    completedTasks: number | null
  }

  export type VolunteerSumAggregateOutputType = {
    totalHours: number | null
    impactScore: number | null
    completedTasks: number | null
  }

  export type VolunteerMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    experience: string | null
    education: string | null
    totalHours: number | null
    impactScore: number | null
    completedTasks: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    experience: string | null
    education: string | null
    totalHours: number | null
    impactScore: number | null
    completedTasks: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type VolunteerCountAggregateOutputType = {
    id: number
    profileId: number
    languages: number
    experience: number
    education: number
    certifications: number
    totalHours: number
    impactScore: number
    completedTasks: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type VolunteerAvgAggregateInputType = {
    totalHours?: true
    impactScore?: true
    completedTasks?: true
  }

  export type VolunteerSumAggregateInputType = {
    totalHours?: true
    impactScore?: true
    completedTasks?: true
  }

  export type VolunteerMinAggregateInputType = {
    id?: true
    profileId?: true
    experience?: true
    education?: true
    totalHours?: true
    impactScore?: true
    completedTasks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerMaxAggregateInputType = {
    id?: true
    profileId?: true
    experience?: true
    education?: true
    totalHours?: true
    impactScore?: true
    completedTasks?: true
    createdAt?: true
    updatedAt?: true
  }

  export type VolunteerCountAggregateInputType = {
    id?: true
    profileId?: true
    languages?: true
    experience?: true
    education?: true
    certifications?: true
    totalHours?: true
    impactScore?: true
    completedTasks?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type VolunteerAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteer to aggregate.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Volunteers
    **/
    _count?: true | VolunteerCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerMaxAggregateInputType
  }

  export type GetVolunteerAggregateType<T extends VolunteerAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteer]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteer[P]>
      : GetScalarType<T[P], AggregateVolunteer[P]>
  }




  export type VolunteerGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerWhereInput
    orderBy?: VolunteerOrderByWithAggregationInput | VolunteerOrderByWithAggregationInput[]
    by: VolunteerScalarFieldEnum[] | VolunteerScalarFieldEnum
    having?: VolunteerScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerCountAggregateInputType | true
    _avg?: VolunteerAvgAggregateInputType
    _sum?: VolunteerSumAggregateInputType
    _min?: VolunteerMinAggregateInputType
    _max?: VolunteerMaxAggregateInputType
  }

  export type VolunteerGroupByOutputType = {
    id: string
    profileId: string
    languages: string[]
    experience: string | null
    education: string | null
    certifications: string[]
    totalHours: number
    impactScore: number
    completedTasks: number
    createdAt: Date
    updatedAt: Date
    _count: VolunteerCountAggregateOutputType | null
    _avg: VolunteerAvgAggregateOutputType | null
    _sum: VolunteerSumAggregateOutputType | null
    _min: VolunteerMinAggregateOutputType | null
    _max: VolunteerMaxAggregateOutputType | null
  }

  type GetVolunteerGroupByPayload<T extends VolunteerGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    languages?: boolean
    experience?: boolean
    education?: boolean
    certifications?: boolean
    totalHours?: boolean
    impactScore?: boolean
    completedTasks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skills?: boolean | Volunteer$skillsArgs<ExtArgs>
    availability?: boolean | Volunteer$availabilityArgs<ExtArgs>
    applications?: boolean | Volunteer$applicationsArgs<ExtArgs>
    assignments?: boolean | Volunteer$assignmentsArgs<ExtArgs>
    reviewsReceived?: boolean | Volunteer$reviewsReceivedArgs<ExtArgs>
    reviewsGiven?: boolean | Volunteer$reviewsGivenArgs<ExtArgs>
    _count?: boolean | VolunteerCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    languages?: boolean
    experience?: boolean
    education?: boolean
    certifications?: boolean
    totalHours?: boolean
    impactScore?: boolean
    completedTasks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    languages?: boolean
    experience?: boolean
    education?: boolean
    certifications?: boolean
    totalHours?: boolean
    impactScore?: boolean
    completedTasks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteer"]>

  export type VolunteerSelectScalar = {
    id?: boolean
    profileId?: boolean
    languages?: boolean
    experience?: boolean
    education?: boolean
    certifications?: boolean
    totalHours?: boolean
    impactScore?: boolean
    completedTasks?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type VolunteerOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "languages" | "experience" | "education" | "certifications" | "totalHours" | "impactScore" | "completedTasks" | "createdAt" | "updatedAt", ExtArgs["result"]["volunteer"]>
  export type VolunteerInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    skills?: boolean | Volunteer$skillsArgs<ExtArgs>
    availability?: boolean | Volunteer$availabilityArgs<ExtArgs>
    applications?: boolean | Volunteer$applicationsArgs<ExtArgs>
    assignments?: boolean | Volunteer$assignmentsArgs<ExtArgs>
    reviewsReceived?: boolean | Volunteer$reviewsReceivedArgs<ExtArgs>
    reviewsGiven?: boolean | Volunteer$reviewsGivenArgs<ExtArgs>
    _count?: boolean | VolunteerCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type VolunteerIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $VolunteerPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Volunteer"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      skills: Prisma.$VolunteerSkillPayload<ExtArgs>[]
      availability: Prisma.$VolunteerAvailabilityPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      languages: string[]
      experience: string | null
      education: string | null
      certifications: string[]
      totalHours: number
      impactScore: number
      completedTasks: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["volunteer"]>
    composites: {}
  }

  type VolunteerGetPayload<S extends boolean | null | undefined | VolunteerDefaultArgs> = $Result.GetResult<Prisma.$VolunteerPayload, S>

  type VolunteerCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerCountAggregateInputType | true
    }

  export interface VolunteerDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Volunteer'], meta: { name: 'Volunteer' } }
    /**
     * Find zero or one Volunteer that matches the filter.
     * @param {VolunteerFindUniqueArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerFindUniqueArgs>(args: SelectSubset<T, VolunteerFindUniqueArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Volunteer that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerFindUniqueOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerFindFirstArgs>(args?: SelectSubset<T, VolunteerFindFirstArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Volunteer that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindFirstOrThrowArgs} args - Arguments to find a Volunteer
     * @example
     * // Get one Volunteer
     * const volunteer = await prisma.volunteer.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Volunteers that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Volunteers
     * const volunteers = await prisma.volunteer.findMany()
     * 
     * // Get first 10 Volunteers
     * const volunteers = await prisma.volunteer.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerFindManyArgs>(args?: SelectSubset<T, VolunteerFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Volunteer.
     * @param {VolunteerCreateArgs} args - Arguments to create a Volunteer.
     * @example
     * // Create one Volunteer
     * const Volunteer = await prisma.volunteer.create({
     *   data: {
     *     // ... data to create a Volunteer
     *   }
     * })
     * 
     */
    create<T extends VolunteerCreateArgs>(args: SelectSubset<T, VolunteerCreateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Volunteers.
     * @param {VolunteerCreateManyArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerCreateManyArgs>(args?: SelectSubset<T, VolunteerCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Volunteers and returns the data saved in the database.
     * @param {VolunteerCreateManyAndReturnArgs} args - Arguments to create many Volunteers.
     * @example
     * // Create many Volunteers
     * const volunteer = await prisma.volunteer.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Volunteers and only return the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Volunteer.
     * @param {VolunteerDeleteArgs} args - Arguments to delete one Volunteer.
     * @example
     * // Delete one Volunteer
     * const Volunteer = await prisma.volunteer.delete({
     *   where: {
     *     // ... filter to delete one Volunteer
     *   }
     * })
     * 
     */
    delete<T extends VolunteerDeleteArgs>(args: SelectSubset<T, VolunteerDeleteArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Volunteer.
     * @param {VolunteerUpdateArgs} args - Arguments to update one Volunteer.
     * @example
     * // Update one Volunteer
     * const volunteer = await prisma.volunteer.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerUpdateArgs>(args: SelectSubset<T, VolunteerUpdateArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Volunteers.
     * @param {VolunteerDeleteManyArgs} args - Arguments to filter Volunteers to delete.
     * @example
     * // Delete a few Volunteers
     * const { count } = await prisma.volunteer.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerDeleteManyArgs>(args?: SelectSubset<T, VolunteerDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerUpdateManyArgs>(args: SelectSubset<T, VolunteerUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Volunteers and returns the data updated in the database.
     * @param {VolunteerUpdateManyAndReturnArgs} args - Arguments to update many Volunteers.
     * @example
     * // Update many Volunteers
     * const volunteer = await prisma.volunteer.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Volunteers and only return the `id`
     * const volunteerWithIdOnly = await prisma.volunteer.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolunteerUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Volunteer.
     * @param {VolunteerUpsertArgs} args - Arguments to update or create a Volunteer.
     * @example
     * // Update or create a Volunteer
     * const volunteer = await prisma.volunteer.upsert({
     *   create: {
     *     // ... data to create a Volunteer
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Volunteer we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerUpsertArgs>(args: SelectSubset<T, VolunteerUpsertArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Volunteers.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerCountArgs} args - Arguments to filter Volunteers to count.
     * @example
     * // Count the number of Volunteers
     * const count = await prisma.volunteer.count({
     *   where: {
     *     // ... the filter for the Volunteers we want to count
     *   }
     * })
    **/
    count<T extends VolunteerCountArgs>(
      args?: Subset<T, VolunteerCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolunteerAggregateArgs>(args: Subset<T, VolunteerAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAggregateType<T>>

    /**
     * Group by Volunteer.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolunteerGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolunteerGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Volunteer model
   */
  readonly fields: VolunteerFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Volunteer.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    skills<T extends Volunteer$skillsArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$skillsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    availability<T extends Volunteer$availabilityArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$availabilityArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Volunteer$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Volunteer$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends Volunteer$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends Volunteer$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, Volunteer$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Volunteer model
   */
  interface VolunteerFieldRefs {
    readonly id: FieldRef<"Volunteer", 'String'>
    readonly profileId: FieldRef<"Volunteer", 'String'>
    readonly languages: FieldRef<"Volunteer", 'String[]'>
    readonly experience: FieldRef<"Volunteer", 'String'>
    readonly education: FieldRef<"Volunteer", 'String'>
    readonly certifications: FieldRef<"Volunteer", 'String[]'>
    readonly totalHours: FieldRef<"Volunteer", 'Int'>
    readonly impactScore: FieldRef<"Volunteer", 'Float'>
    readonly completedTasks: FieldRef<"Volunteer", 'Int'>
    readonly createdAt: FieldRef<"Volunteer", 'DateTime'>
    readonly updatedAt: FieldRef<"Volunteer", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Volunteer findUnique
   */
  export type VolunteerFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findUniqueOrThrow
   */
  export type VolunteerFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer findFirst
   */
  export type VolunteerFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findFirstOrThrow
   */
  export type VolunteerFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteer to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Volunteers.
     */
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer findMany
   */
  export type VolunteerFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter, which Volunteers to fetch.
     */
    where?: VolunteerWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Volunteers to fetch.
     */
    orderBy?: VolunteerOrderByWithRelationInput | VolunteerOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Volunteers.
     */
    cursor?: VolunteerWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Volunteers from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Volunteers.
     */
    skip?: number
    distinct?: VolunteerScalarFieldEnum | VolunteerScalarFieldEnum[]
  }

  /**
   * Volunteer create
   */
  export type VolunteerCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to create a Volunteer.
     */
    data: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
  }

  /**
   * Volunteer createMany
   */
  export type VolunteerCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Volunteer createManyAndReturn
   */
  export type VolunteerCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to create many Volunteers.
     */
    data: VolunteerCreateManyInput | VolunteerCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer update
   */
  export type VolunteerUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The data needed to update a Volunteer.
     */
    data: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
    /**
     * Choose, which Volunteer to update.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer updateMany
   */
  export type VolunteerUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
  }

  /**
   * Volunteer updateManyAndReturn
   */
  export type VolunteerUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * The data used to update Volunteers.
     */
    data: XOR<VolunteerUpdateManyMutationInput, VolunteerUncheckedUpdateManyInput>
    /**
     * Filter which Volunteers to update
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Volunteer upsert
   */
  export type VolunteerUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * The filter to search for the Volunteer to update in case it exists.
     */
    where: VolunteerWhereUniqueInput
    /**
     * In case the Volunteer found by the `where` argument doesn't exist, create a new Volunteer with this data.
     */
    create: XOR<VolunteerCreateInput, VolunteerUncheckedCreateInput>
    /**
     * In case the Volunteer was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerUpdateInput, VolunteerUncheckedUpdateInput>
  }

  /**
   * Volunteer delete
   */
  export type VolunteerDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    /**
     * Filter which Volunteer to delete.
     */
    where: VolunteerWhereUniqueInput
  }

  /**
   * Volunteer deleteMany
   */
  export type VolunteerDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Volunteers to delete
     */
    where?: VolunteerWhereInput
    /**
     * Limit how many Volunteers to delete.
     */
    limit?: number
  }

  /**
   * Volunteer.skills
   */
  export type Volunteer$skillsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    where?: VolunteerSkillWhereInput
    orderBy?: VolunteerSkillOrderByWithRelationInput | VolunteerSkillOrderByWithRelationInput[]
    cursor?: VolunteerSkillWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerSkillScalarFieldEnum | VolunteerSkillScalarFieldEnum[]
  }

  /**
   * Volunteer.availability
   */
  export type Volunteer$availabilityArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    where?: VolunteerAvailabilityWhereInput
    orderBy?: VolunteerAvailabilityOrderByWithRelationInput | VolunteerAvailabilityOrderByWithRelationInput[]
    cursor?: VolunteerAvailabilityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: VolunteerAvailabilityScalarFieldEnum | VolunteerAvailabilityScalarFieldEnum[]
  }

  /**
   * Volunteer.applications
   */
  export type Volunteer$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Volunteer.assignments
   */
  export type Volunteer$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Volunteer.reviewsReceived
   */
  export type Volunteer$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Volunteer.reviewsGiven
   */
  export type Volunteer$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Volunteer without action
   */
  export type VolunteerDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
  }


  /**
   * Model Organization
   */

  export type AggregateOrganization = {
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  export type OrganizationAvgAggregateOutputType = {
    totalRequests: number | null
    activeVolunteers: number | null
    completedProjects: number | null
    averageRating: number | null
  }

  export type OrganizationSumAggregateOutputType = {
    totalRequests: number | null
    activeVolunteers: number | null
    completedProjects: number | null
    averageRating: number | null
  }

  export type OrganizationMinAggregateOutputType = {
    id: string | null
    profileId: string | null
    organizationName: string | null
    organizationType: string | null
    registrationNumber: string | null
    description: string | null
    totalRequests: number | null
    activeVolunteers: number | null
    completedProjects: number | null
    averageRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationMaxAggregateOutputType = {
    id: string | null
    profileId: string | null
    organizationName: string | null
    organizationType: string | null
    registrationNumber: string | null
    description: string | null
    totalRequests: number | null
    activeVolunteers: number | null
    completedProjects: number | null
    averageRating: number | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OrganizationCountAggregateOutputType = {
    id: number
    profileId: number
    organizationName: number
    organizationType: number
    registrationNumber: number
    description: number
    focusAreas: number
    operatingRegions: number
    totalRequests: number
    activeVolunteers: number
    completedProjects: number
    averageRating: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OrganizationAvgAggregateInputType = {
    totalRequests?: true
    activeVolunteers?: true
    completedProjects?: true
    averageRating?: true
  }

  export type OrganizationSumAggregateInputType = {
    totalRequests?: true
    activeVolunteers?: true
    completedProjects?: true
    averageRating?: true
  }

  export type OrganizationMinAggregateInputType = {
    id?: true
    profileId?: true
    organizationName?: true
    organizationType?: true
    registrationNumber?: true
    description?: true
    totalRequests?: true
    activeVolunteers?: true
    completedProjects?: true
    averageRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationMaxAggregateInputType = {
    id?: true
    profileId?: true
    organizationName?: true
    organizationType?: true
    registrationNumber?: true
    description?: true
    totalRequests?: true
    activeVolunteers?: true
    completedProjects?: true
    averageRating?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OrganizationCountAggregateInputType = {
    id?: true
    profileId?: true
    organizationName?: true
    organizationType?: true
    registrationNumber?: true
    description?: true
    focusAreas?: true
    operatingRegions?: true
    totalRequests?: true
    activeVolunteers?: true
    completedProjects?: true
    averageRating?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OrganizationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organization to aggregate.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Organizations
    **/
    _count?: true | OrganizationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OrganizationAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OrganizationSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OrganizationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OrganizationMaxAggregateInputType
  }

  export type GetOrganizationAggregateType<T extends OrganizationAggregateArgs> = {
        [P in keyof T & keyof AggregateOrganization]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOrganization[P]>
      : GetScalarType<T[P], AggregateOrganization[P]>
  }




  export type OrganizationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OrganizationWhereInput
    orderBy?: OrganizationOrderByWithAggregationInput | OrganizationOrderByWithAggregationInput[]
    by: OrganizationScalarFieldEnum[] | OrganizationScalarFieldEnum
    having?: OrganizationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OrganizationCountAggregateInputType | true
    _avg?: OrganizationAvgAggregateInputType
    _sum?: OrganizationSumAggregateInputType
    _min?: OrganizationMinAggregateInputType
    _max?: OrganizationMaxAggregateInputType
  }

  export type OrganizationGroupByOutputType = {
    id: string
    profileId: string
    organizationName: string
    organizationType: string
    registrationNumber: string | null
    description: string | null
    focusAreas: string[]
    operatingRegions: string[]
    totalRequests: number
    activeVolunteers: number
    completedProjects: number
    averageRating: number
    createdAt: Date
    updatedAt: Date
    _count: OrganizationCountAggregateOutputType | null
    _avg: OrganizationAvgAggregateOutputType | null
    _sum: OrganizationSumAggregateOutputType | null
    _min: OrganizationMinAggregateOutputType | null
    _max: OrganizationMaxAggregateOutputType | null
  }

  type GetOrganizationGroupByPayload<T extends OrganizationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OrganizationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OrganizationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
            : GetScalarType<T[P], OrganizationGroupByOutputType[P]>
        }
      >
    >


  export type OrganizationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    organizationName?: boolean
    organizationType?: boolean
    registrationNumber?: boolean
    description?: boolean
    focusAreas?: boolean
    operatingRegions?: boolean
    totalRequests?: boolean
    activeVolunteers?: boolean
    completedProjects?: boolean
    averageRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    opportunities?: boolean | Organization$opportunitiesArgs<ExtArgs>
    applications?: boolean | Organization$applicationsArgs<ExtArgs>
    assignments?: boolean | Organization$assignmentsArgs<ExtArgs>
    reviewsReceived?: boolean | Organization$reviewsReceivedArgs<ExtArgs>
    reviewsGiven?: boolean | Organization$reviewsGivenArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    organizationName?: boolean
    organizationType?: boolean
    registrationNumber?: boolean
    description?: boolean
    focusAreas?: boolean
    operatingRegions?: boolean
    totalRequests?: boolean
    activeVolunteers?: boolean
    completedProjects?: boolean
    averageRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    profileId?: boolean
    organizationName?: boolean
    organizationType?: boolean
    registrationNumber?: boolean
    description?: boolean
    focusAreas?: boolean
    operatingRegions?: boolean
    totalRequests?: boolean
    activeVolunteers?: boolean
    completedProjects?: boolean
    averageRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["organization"]>

  export type OrganizationSelectScalar = {
    id?: boolean
    profileId?: boolean
    organizationName?: boolean
    organizationType?: boolean
    registrationNumber?: boolean
    description?: boolean
    focusAreas?: boolean
    operatingRegions?: boolean
    totalRequests?: boolean
    activeVolunteers?: boolean
    completedProjects?: boolean
    averageRating?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OrganizationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "profileId" | "organizationName" | "organizationType" | "registrationNumber" | "description" | "focusAreas" | "operatingRegions" | "totalRequests" | "activeVolunteers" | "completedProjects" | "averageRating" | "createdAt" | "updatedAt", ExtArgs["result"]["organization"]>
  export type OrganizationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
    opportunities?: boolean | Organization$opportunitiesArgs<ExtArgs>
    applications?: boolean | Organization$applicationsArgs<ExtArgs>
    assignments?: boolean | Organization$assignmentsArgs<ExtArgs>
    reviewsReceived?: boolean | Organization$reviewsReceivedArgs<ExtArgs>
    reviewsGiven?: boolean | Organization$reviewsGivenArgs<ExtArgs>
    _count?: boolean | OrganizationCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type OrganizationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    profile?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $OrganizationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Organization"
    objects: {
      profile: Prisma.$ProfilePayload<ExtArgs>
      opportunities: Prisma.$OpportunityPayload<ExtArgs>[]
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
      reviewsReceived: Prisma.$ReviewPayload<ExtArgs>[]
      reviewsGiven: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      profileId: string
      organizationName: string
      organizationType: string
      registrationNumber: string | null
      description: string | null
      focusAreas: string[]
      operatingRegions: string[]
      totalRequests: number
      activeVolunteers: number
      completedProjects: number
      averageRating: number
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["organization"]>
    composites: {}
  }

  type OrganizationGetPayload<S extends boolean | null | undefined | OrganizationDefaultArgs> = $Result.GetResult<Prisma.$OrganizationPayload, S>

  type OrganizationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OrganizationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OrganizationCountAggregateInputType | true
    }

  export interface OrganizationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Organization'], meta: { name: 'Organization' } }
    /**
     * Find zero or one Organization that matches the filter.
     * @param {OrganizationFindUniqueArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OrganizationFindUniqueArgs>(args: SelectSubset<T, OrganizationFindUniqueArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Organization that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OrganizationFindUniqueOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OrganizationFindUniqueOrThrowArgs>(args: SelectSubset<T, OrganizationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OrganizationFindFirstArgs>(args?: SelectSubset<T, OrganizationFindFirstArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Organization that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindFirstOrThrowArgs} args - Arguments to find a Organization
     * @example
     * // Get one Organization
     * const organization = await prisma.organization.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OrganizationFindFirstOrThrowArgs>(args?: SelectSubset<T, OrganizationFindFirstOrThrowArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Organizations that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Organizations
     * const organizations = await prisma.organization.findMany()
     * 
     * // Get first 10 Organizations
     * const organizations = await prisma.organization.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const organizationWithIdOnly = await prisma.organization.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OrganizationFindManyArgs>(args?: SelectSubset<T, OrganizationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Organization.
     * @param {OrganizationCreateArgs} args - Arguments to create a Organization.
     * @example
     * // Create one Organization
     * const Organization = await prisma.organization.create({
     *   data: {
     *     // ... data to create a Organization
     *   }
     * })
     * 
     */
    create<T extends OrganizationCreateArgs>(args: SelectSubset<T, OrganizationCreateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Organizations.
     * @param {OrganizationCreateManyArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OrganizationCreateManyArgs>(args?: SelectSubset<T, OrganizationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Organizations and returns the data saved in the database.
     * @param {OrganizationCreateManyAndReturnArgs} args - Arguments to create many Organizations.
     * @example
     * // Create many Organizations
     * const organization = await prisma.organization.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OrganizationCreateManyAndReturnArgs>(args?: SelectSubset<T, OrganizationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Organization.
     * @param {OrganizationDeleteArgs} args - Arguments to delete one Organization.
     * @example
     * // Delete one Organization
     * const Organization = await prisma.organization.delete({
     *   where: {
     *     // ... filter to delete one Organization
     *   }
     * })
     * 
     */
    delete<T extends OrganizationDeleteArgs>(args: SelectSubset<T, OrganizationDeleteArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Organization.
     * @param {OrganizationUpdateArgs} args - Arguments to update one Organization.
     * @example
     * // Update one Organization
     * const organization = await prisma.organization.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OrganizationUpdateArgs>(args: SelectSubset<T, OrganizationUpdateArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Organizations.
     * @param {OrganizationDeleteManyArgs} args - Arguments to filter Organizations to delete.
     * @example
     * // Delete a few Organizations
     * const { count } = await prisma.organization.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OrganizationDeleteManyArgs>(args?: SelectSubset<T, OrganizationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OrganizationUpdateManyArgs>(args: SelectSubset<T, OrganizationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Organizations and returns the data updated in the database.
     * @param {OrganizationUpdateManyAndReturnArgs} args - Arguments to update many Organizations.
     * @example
     * // Update many Organizations
     * const organization = await prisma.organization.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Organizations and only return the `id`
     * const organizationWithIdOnly = await prisma.organization.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OrganizationUpdateManyAndReturnArgs>(args: SelectSubset<T, OrganizationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Organization.
     * @param {OrganizationUpsertArgs} args - Arguments to update or create a Organization.
     * @example
     * // Update or create a Organization
     * const organization = await prisma.organization.upsert({
     *   create: {
     *     // ... data to create a Organization
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Organization we want to update
     *   }
     * })
     */
    upsert<T extends OrganizationUpsertArgs>(args: SelectSubset<T, OrganizationUpsertArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Organizations.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationCountArgs} args - Arguments to filter Organizations to count.
     * @example
     * // Count the number of Organizations
     * const count = await prisma.organization.count({
     *   where: {
     *     // ... the filter for the Organizations we want to count
     *   }
     * })
    **/
    count<T extends OrganizationCountArgs>(
      args?: Subset<T, OrganizationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OrganizationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OrganizationAggregateArgs>(args: Subset<T, OrganizationAggregateArgs>): Prisma.PrismaPromise<GetOrganizationAggregateType<T>>

    /**
     * Group by Organization.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OrganizationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OrganizationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OrganizationGroupByArgs['orderBy'] }
        : { orderBy?: OrganizationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OrganizationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOrganizationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Organization model
   */
  readonly fields: OrganizationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Organization.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OrganizationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    profile<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opportunities<T extends Organization$opportunitiesArgs<ExtArgs> = {}>(args?: Subset<T, Organization$opportunitiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    applications<T extends Organization$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Organization$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Organization$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsReceived<T extends Organization$reviewsReceivedArgs<ExtArgs> = {}>(args?: Subset<T, Organization$reviewsReceivedArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviewsGiven<T extends Organization$reviewsGivenArgs<ExtArgs> = {}>(args?: Subset<T, Organization$reviewsGivenArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Organization model
   */
  interface OrganizationFieldRefs {
    readonly id: FieldRef<"Organization", 'String'>
    readonly profileId: FieldRef<"Organization", 'String'>
    readonly organizationName: FieldRef<"Organization", 'String'>
    readonly organizationType: FieldRef<"Organization", 'String'>
    readonly registrationNumber: FieldRef<"Organization", 'String'>
    readonly description: FieldRef<"Organization", 'String'>
    readonly focusAreas: FieldRef<"Organization", 'String[]'>
    readonly operatingRegions: FieldRef<"Organization", 'String[]'>
    readonly totalRequests: FieldRef<"Organization", 'Int'>
    readonly activeVolunteers: FieldRef<"Organization", 'Int'>
    readonly completedProjects: FieldRef<"Organization", 'Int'>
    readonly averageRating: FieldRef<"Organization", 'Float'>
    readonly createdAt: FieldRef<"Organization", 'DateTime'>
    readonly updatedAt: FieldRef<"Organization", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Organization findUnique
   */
  export type OrganizationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findUniqueOrThrow
   */
  export type OrganizationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization findFirst
   */
  export type OrganizationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findFirstOrThrow
   */
  export type OrganizationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organization to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Organizations.
     */
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization findMany
   */
  export type OrganizationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter, which Organizations to fetch.
     */
    where?: OrganizationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Organizations to fetch.
     */
    orderBy?: OrganizationOrderByWithRelationInput | OrganizationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Organizations.
     */
    cursor?: OrganizationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Organizations from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Organizations.
     */
    skip?: number
    distinct?: OrganizationScalarFieldEnum | OrganizationScalarFieldEnum[]
  }

  /**
   * Organization create
   */
  export type OrganizationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to create a Organization.
     */
    data: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
  }

  /**
   * Organization createMany
   */
  export type OrganizationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Organization createManyAndReturn
   */
  export type OrganizationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to create many Organizations.
     */
    data: OrganizationCreateManyInput | OrganizationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization update
   */
  export type OrganizationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The data needed to update a Organization.
     */
    data: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
    /**
     * Choose, which Organization to update.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization updateMany
   */
  export type OrganizationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
  }

  /**
   * Organization updateManyAndReturn
   */
  export type OrganizationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * The data used to update Organizations.
     */
    data: XOR<OrganizationUpdateManyMutationInput, OrganizationUncheckedUpdateManyInput>
    /**
     * Filter which Organizations to update
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Organization upsert
   */
  export type OrganizationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * The filter to search for the Organization to update in case it exists.
     */
    where: OrganizationWhereUniqueInput
    /**
     * In case the Organization found by the `where` argument doesn't exist, create a new Organization with this data.
     */
    create: XOR<OrganizationCreateInput, OrganizationUncheckedCreateInput>
    /**
     * In case the Organization was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OrganizationUpdateInput, OrganizationUncheckedUpdateInput>
  }

  /**
   * Organization delete
   */
  export type OrganizationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    /**
     * Filter which Organization to delete.
     */
    where: OrganizationWhereUniqueInput
  }

  /**
   * Organization deleteMany
   */
  export type OrganizationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Organizations to delete
     */
    where?: OrganizationWhereInput
    /**
     * Limit how many Organizations to delete.
     */
    limit?: number
  }

  /**
   * Organization.opportunities
   */
  export type Organization$opportunitiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    where?: OpportunityWhereInput
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    cursor?: OpportunityWhereUniqueInput
    take?: number
    skip?: number
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Organization.applications
   */
  export type Organization$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Organization.assignments
   */
  export type Organization$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Organization.reviewsReceived
   */
  export type Organization$reviewsReceivedArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Organization.reviewsGiven
   */
  export type Organization$reviewsGivenArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Organization without action
   */
  export type OrganizationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
  }


  /**
   * Model Opportunity
   */

  export type AggregateOpportunity = {
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  export type OpportunityAvgAggregateOutputType = {
    maxVolunteers: number | null
  }

  export type OpportunitySumAggregateOutputType = {
    maxVolunteers: number | null
  }

  export type OpportunityMinAggregateOutputType = {
    id: string | null
    organizationId: string | null
    title: string | null
    description: string | null
    category: $Enums.OpportunityCategory | null
    type: $Enums.OpportunityType | null
    urgency: $Enums.UrgencyLevel | null
    timeCommitment: string | null
    location: string | null
    isRemote: boolean | null
    requirements: string | null
    benefits: string | null
    startDate: Date | null
    endDate: Date | null
    maxVolunteers: number | null
    status: $Enums.OpportunityStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpportunityMaxAggregateOutputType = {
    id: string | null
    organizationId: string | null
    title: string | null
    description: string | null
    category: $Enums.OpportunityCategory | null
    type: $Enums.OpportunityType | null
    urgency: $Enums.UrgencyLevel | null
    timeCommitment: string | null
    location: string | null
    isRemote: boolean | null
    requirements: string | null
    benefits: string | null
    startDate: Date | null
    endDate: Date | null
    maxVolunteers: number | null
    status: $Enums.OpportunityStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type OpportunityCountAggregateOutputType = {
    id: number
    organizationId: number
    title: number
    description: number
    category: number
    type: number
    urgency: number
    skillsNeeded: number
    timeCommitment: number
    location: number
    isRemote: number
    requirements: number
    benefits: number
    startDate: number
    endDate: number
    maxVolunteers: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type OpportunityAvgAggregateInputType = {
    maxVolunteers?: true
  }

  export type OpportunitySumAggregateInputType = {
    maxVolunteers?: true
  }

  export type OpportunityMinAggregateInputType = {
    id?: true
    organizationId?: true
    title?: true
    description?: true
    category?: true
    type?: true
    urgency?: true
    timeCommitment?: true
    location?: true
    isRemote?: true
    requirements?: true
    benefits?: true
    startDate?: true
    endDate?: true
    maxVolunteers?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpportunityMaxAggregateInputType = {
    id?: true
    organizationId?: true
    title?: true
    description?: true
    category?: true
    type?: true
    urgency?: true
    timeCommitment?: true
    location?: true
    isRemote?: true
    requirements?: true
    benefits?: true
    startDate?: true
    endDate?: true
    maxVolunteers?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type OpportunityCountAggregateInputType = {
    id?: true
    organizationId?: true
    title?: true
    description?: true
    category?: true
    type?: true
    urgency?: true
    skillsNeeded?: true
    timeCommitment?: true
    location?: true
    isRemote?: true
    requirements?: true
    benefits?: true
    startDate?: true
    endDate?: true
    maxVolunteers?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type OpportunityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunity to aggregate.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Opportunities
    **/
    _count?: true | OpportunityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: OpportunityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: OpportunitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: OpportunityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: OpportunityMaxAggregateInputType
  }

  export type GetOpportunityAggregateType<T extends OpportunityAggregateArgs> = {
        [P in keyof T & keyof AggregateOpportunity]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateOpportunity[P]>
      : GetScalarType<T[P], AggregateOpportunity[P]>
  }




  export type OpportunityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: OpportunityWhereInput
    orderBy?: OpportunityOrderByWithAggregationInput | OpportunityOrderByWithAggregationInput[]
    by: OpportunityScalarFieldEnum[] | OpportunityScalarFieldEnum
    having?: OpportunityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: OpportunityCountAggregateInputType | true
    _avg?: OpportunityAvgAggregateInputType
    _sum?: OpportunitySumAggregateInputType
    _min?: OpportunityMinAggregateInputType
    _max?: OpportunityMaxAggregateInputType
  }

  export type OpportunityGroupByOutputType = {
    id: string
    organizationId: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded: string[]
    timeCommitment: string
    location: string
    isRemote: boolean
    requirements: string | null
    benefits: string | null
    startDate: Date | null
    endDate: Date | null
    maxVolunteers: number
    status: $Enums.OpportunityStatus
    createdAt: Date
    updatedAt: Date
    _count: OpportunityCountAggregateOutputType | null
    _avg: OpportunityAvgAggregateOutputType | null
    _sum: OpportunitySumAggregateOutputType | null
    _min: OpportunityMinAggregateOutputType | null
    _max: OpportunityMaxAggregateOutputType | null
  }

  type GetOpportunityGroupByPayload<T extends OpportunityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<OpportunityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof OpportunityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
            : GetScalarType<T[P], OpportunityGroupByOutputType[P]>
        }
      >
    >


  export type OpportunitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    urgency?: boolean
    skillsNeeded?: boolean
    timeCommitment?: boolean
    location?: boolean
    isRemote?: boolean
    requirements?: boolean
    benefits?: boolean
    startDate?: boolean
    endDate?: boolean
    maxVolunteers?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    applications?: boolean | Opportunity$applicationsArgs<ExtArgs>
    assignments?: boolean | Opportunity$assignmentsArgs<ExtArgs>
    _count?: boolean | OpportunityCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    urgency?: boolean
    skillsNeeded?: boolean
    timeCommitment?: boolean
    location?: boolean
    isRemote?: boolean
    requirements?: boolean
    benefits?: boolean
    startDate?: boolean
    endDate?: boolean
    maxVolunteers?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    organizationId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    urgency?: boolean
    skillsNeeded?: boolean
    timeCommitment?: boolean
    location?: boolean
    isRemote?: boolean
    requirements?: boolean
    benefits?: boolean
    startDate?: boolean
    endDate?: boolean
    maxVolunteers?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["opportunity"]>

  export type OpportunitySelectScalar = {
    id?: boolean
    organizationId?: boolean
    title?: boolean
    description?: boolean
    category?: boolean
    type?: boolean
    urgency?: boolean
    skillsNeeded?: boolean
    timeCommitment?: boolean
    location?: boolean
    isRemote?: boolean
    requirements?: boolean
    benefits?: boolean
    startDate?: boolean
    endDate?: boolean
    maxVolunteers?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type OpportunityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "organizationId" | "title" | "description" | "category" | "type" | "urgency" | "skillsNeeded" | "timeCommitment" | "location" | "isRemote" | "requirements" | "benefits" | "startDate" | "endDate" | "maxVolunteers" | "status" | "createdAt" | "updatedAt", ExtArgs["result"]["opportunity"]>
  export type OpportunityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    applications?: boolean | Opportunity$applicationsArgs<ExtArgs>
    assignments?: boolean | Opportunity$assignmentsArgs<ExtArgs>
    _count?: boolean | OpportunityCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type OpportunityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type OpportunityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $OpportunityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Opportunity"
    objects: {
      organization: Prisma.$OrganizationPayload<ExtArgs>
      applications: Prisma.$ApplicationPayload<ExtArgs>[]
      assignments: Prisma.$AssignmentPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      organizationId: string
      title: string
      description: string
      category: $Enums.OpportunityCategory
      type: $Enums.OpportunityType
      urgency: $Enums.UrgencyLevel
      skillsNeeded: string[]
      timeCommitment: string
      location: string
      isRemote: boolean
      requirements: string | null
      benefits: string | null
      startDate: Date | null
      endDate: Date | null
      maxVolunteers: number
      status: $Enums.OpportunityStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["opportunity"]>
    composites: {}
  }

  type OpportunityGetPayload<S extends boolean | null | undefined | OpportunityDefaultArgs> = $Result.GetResult<Prisma.$OpportunityPayload, S>

  type OpportunityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<OpportunityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: OpportunityCountAggregateInputType | true
    }

  export interface OpportunityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Opportunity'], meta: { name: 'Opportunity' } }
    /**
     * Find zero or one Opportunity that matches the filter.
     * @param {OpportunityFindUniqueArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends OpportunityFindUniqueArgs>(args: SelectSubset<T, OpportunityFindUniqueArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Opportunity that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {OpportunityFindUniqueOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends OpportunityFindUniqueOrThrowArgs>(args: SelectSubset<T, OpportunityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends OpportunityFindFirstArgs>(args?: SelectSubset<T, OpportunityFindFirstArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Opportunity that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindFirstOrThrowArgs} args - Arguments to find a Opportunity
     * @example
     * // Get one Opportunity
     * const opportunity = await prisma.opportunity.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends OpportunityFindFirstOrThrowArgs>(args?: SelectSubset<T, OpportunityFindFirstOrThrowArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Opportunities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Opportunities
     * const opportunities = await prisma.opportunity.findMany()
     * 
     * // Get first 10 Opportunities
     * const opportunities = await prisma.opportunity.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends OpportunityFindManyArgs>(args?: SelectSubset<T, OpportunityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Opportunity.
     * @param {OpportunityCreateArgs} args - Arguments to create a Opportunity.
     * @example
     * // Create one Opportunity
     * const Opportunity = await prisma.opportunity.create({
     *   data: {
     *     // ... data to create a Opportunity
     *   }
     * })
     * 
     */
    create<T extends OpportunityCreateArgs>(args: SelectSubset<T, OpportunityCreateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Opportunities.
     * @param {OpportunityCreateManyArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends OpportunityCreateManyArgs>(args?: SelectSubset<T, OpportunityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Opportunities and returns the data saved in the database.
     * @param {OpportunityCreateManyAndReturnArgs} args - Arguments to create many Opportunities.
     * @example
     * // Create many Opportunities
     * const opportunity = await prisma.opportunity.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends OpportunityCreateManyAndReturnArgs>(args?: SelectSubset<T, OpportunityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Opportunity.
     * @param {OpportunityDeleteArgs} args - Arguments to delete one Opportunity.
     * @example
     * // Delete one Opportunity
     * const Opportunity = await prisma.opportunity.delete({
     *   where: {
     *     // ... filter to delete one Opportunity
     *   }
     * })
     * 
     */
    delete<T extends OpportunityDeleteArgs>(args: SelectSubset<T, OpportunityDeleteArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Opportunity.
     * @param {OpportunityUpdateArgs} args - Arguments to update one Opportunity.
     * @example
     * // Update one Opportunity
     * const opportunity = await prisma.opportunity.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends OpportunityUpdateArgs>(args: SelectSubset<T, OpportunityUpdateArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Opportunities.
     * @param {OpportunityDeleteManyArgs} args - Arguments to filter Opportunities to delete.
     * @example
     * // Delete a few Opportunities
     * const { count } = await prisma.opportunity.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends OpportunityDeleteManyArgs>(args?: SelectSubset<T, OpportunityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends OpportunityUpdateManyArgs>(args: SelectSubset<T, OpportunityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Opportunities and returns the data updated in the database.
     * @param {OpportunityUpdateManyAndReturnArgs} args - Arguments to update many Opportunities.
     * @example
     * // Update many Opportunities
     * const opportunity = await prisma.opportunity.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Opportunities and only return the `id`
     * const opportunityWithIdOnly = await prisma.opportunity.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends OpportunityUpdateManyAndReturnArgs>(args: SelectSubset<T, OpportunityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Opportunity.
     * @param {OpportunityUpsertArgs} args - Arguments to update or create a Opportunity.
     * @example
     * // Update or create a Opportunity
     * const opportunity = await prisma.opportunity.upsert({
     *   create: {
     *     // ... data to create a Opportunity
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Opportunity we want to update
     *   }
     * })
     */
    upsert<T extends OpportunityUpsertArgs>(args: SelectSubset<T, OpportunityUpsertArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Opportunities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityCountArgs} args - Arguments to filter Opportunities to count.
     * @example
     * // Count the number of Opportunities
     * const count = await prisma.opportunity.count({
     *   where: {
     *     // ... the filter for the Opportunities we want to count
     *   }
     * })
    **/
    count<T extends OpportunityCountArgs>(
      args?: Subset<T, OpportunityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], OpportunityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends OpportunityAggregateArgs>(args: Subset<T, OpportunityAggregateArgs>): Prisma.PrismaPromise<GetOpportunityAggregateType<T>>

    /**
     * Group by Opportunity.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {OpportunityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends OpportunityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: OpportunityGroupByArgs['orderBy'] }
        : { orderBy?: OpportunityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, OpportunityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetOpportunityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Opportunity model
   */
  readonly fields: OpportunityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Opportunity.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__OpportunityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    applications<T extends Opportunity$applicationsArgs<ExtArgs> = {}>(args?: Subset<T, Opportunity$applicationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    assignments<T extends Opportunity$assignmentsArgs<ExtArgs> = {}>(args?: Subset<T, Opportunity$assignmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Opportunity model
   */
  interface OpportunityFieldRefs {
    readonly id: FieldRef<"Opportunity", 'String'>
    readonly organizationId: FieldRef<"Opportunity", 'String'>
    readonly title: FieldRef<"Opportunity", 'String'>
    readonly description: FieldRef<"Opportunity", 'String'>
    readonly category: FieldRef<"Opportunity", 'OpportunityCategory'>
    readonly type: FieldRef<"Opportunity", 'OpportunityType'>
    readonly urgency: FieldRef<"Opportunity", 'UrgencyLevel'>
    readonly skillsNeeded: FieldRef<"Opportunity", 'String[]'>
    readonly timeCommitment: FieldRef<"Opportunity", 'String'>
    readonly location: FieldRef<"Opportunity", 'String'>
    readonly isRemote: FieldRef<"Opportunity", 'Boolean'>
    readonly requirements: FieldRef<"Opportunity", 'String'>
    readonly benefits: FieldRef<"Opportunity", 'String'>
    readonly startDate: FieldRef<"Opportunity", 'DateTime'>
    readonly endDate: FieldRef<"Opportunity", 'DateTime'>
    readonly maxVolunteers: FieldRef<"Opportunity", 'Int'>
    readonly status: FieldRef<"Opportunity", 'OpportunityStatus'>
    readonly createdAt: FieldRef<"Opportunity", 'DateTime'>
    readonly updatedAt: FieldRef<"Opportunity", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Opportunity findUnique
   */
  export type OpportunityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findUniqueOrThrow
   */
  export type OpportunityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity findFirst
   */
  export type OpportunityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity findFirstOrThrow
   */
  export type OpportunityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunity to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Opportunities.
     */
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity findMany
   */
  export type OpportunityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter, which Opportunities to fetch.
     */
    where?: OpportunityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Opportunities to fetch.
     */
    orderBy?: OpportunityOrderByWithRelationInput | OpportunityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Opportunities.
     */
    cursor?: OpportunityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Opportunities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Opportunities.
     */
    skip?: number
    distinct?: OpportunityScalarFieldEnum | OpportunityScalarFieldEnum[]
  }

  /**
   * Opportunity create
   */
  export type OpportunityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to create a Opportunity.
     */
    data: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
  }

  /**
   * Opportunity createMany
   */
  export type OpportunityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Opportunity createManyAndReturn
   */
  export type OpportunityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to create many Opportunities.
     */
    data: OpportunityCreateManyInput | OpportunityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opportunity update
   */
  export type OpportunityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The data needed to update a Opportunity.
     */
    data: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
    /**
     * Choose, which Opportunity to update.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity updateMany
   */
  export type OpportunityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number
  }

  /**
   * Opportunity updateManyAndReturn
   */
  export type OpportunityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * The data used to update Opportunities.
     */
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyInput>
    /**
     * Filter which Opportunities to update
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Opportunity upsert
   */
  export type OpportunityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * The filter to search for the Opportunity to update in case it exists.
     */
    where: OpportunityWhereUniqueInput
    /**
     * In case the Opportunity found by the `where` argument doesn't exist, create a new Opportunity with this data.
     */
    create: XOR<OpportunityCreateInput, OpportunityUncheckedCreateInput>
    /**
     * In case the Opportunity was found with the provided `where` argument, update it with this data.
     */
    update: XOR<OpportunityUpdateInput, OpportunityUncheckedUpdateInput>
  }

  /**
   * Opportunity delete
   */
  export type OpportunityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
    /**
     * Filter which Opportunity to delete.
     */
    where: OpportunityWhereUniqueInput
  }

  /**
   * Opportunity deleteMany
   */
  export type OpportunityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Opportunities to delete
     */
    where?: OpportunityWhereInput
    /**
     * Limit how many Opportunities to delete.
     */
    limit?: number
  }

  /**
   * Opportunity.applications
   */
  export type Opportunity$applicationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    cursor?: ApplicationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Opportunity.assignments
   */
  export type Opportunity$assignmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    cursor?: AssignmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Opportunity without action
   */
  export type OpportunityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Opportunity
     */
    select?: OpportunitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the Opportunity
     */
    omit?: OpportunityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OpportunityInclude<ExtArgs> | null
  }


  /**
   * Model VolunteerSkill
   */

  export type AggregateVolunteerSkill = {
    _count: VolunteerSkillCountAggregateOutputType | null
    _min: VolunteerSkillMinAggregateOutputType | null
    _max: VolunteerSkillMaxAggregateOutputType | null
  }

  export type VolunteerSkillMinAggregateOutputType = {
    id: string | null
    volunteerId: string | null
    category: $Enums.SkillCategory | null
    name: string | null
    level: $Enums.SkillLevel | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type VolunteerSkillMaxAggregateOutputType = {
    id: string | null
    volunteerId: string | null
    category: $Enums.SkillCategory | null
    name: string | null
    level: $Enums.SkillLevel | null
    verified: boolean | null
    createdAt: Date | null
  }

  export type VolunteerSkillCountAggregateOutputType = {
    id: number
    volunteerId: number
    category: number
    name: number
    level: number
    verified: number
    createdAt: number
    _all: number
  }


  export type VolunteerSkillMinAggregateInputType = {
    id?: true
    volunteerId?: true
    category?: true
    name?: true
    level?: true
    verified?: true
    createdAt?: true
  }

  export type VolunteerSkillMaxAggregateInputType = {
    id?: true
    volunteerId?: true
    category?: true
    name?: true
    level?: true
    verified?: true
    createdAt?: true
  }

  export type VolunteerSkillCountAggregateInputType = {
    id?: true
    volunteerId?: true
    category?: true
    name?: true
    level?: true
    verified?: true
    createdAt?: true
    _all?: true
  }

  export type VolunteerSkillAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerSkill to aggregate.
     */
    where?: VolunteerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerSkills to fetch.
     */
    orderBy?: VolunteerSkillOrderByWithRelationInput | VolunteerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VolunteerSkills
    **/
    _count?: true | VolunteerSkillCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerSkillMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerSkillMaxAggregateInputType
  }

  export type GetVolunteerSkillAggregateType<T extends VolunteerSkillAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteerSkill]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteerSkill[P]>
      : GetScalarType<T[P], AggregateVolunteerSkill[P]>
  }




  export type VolunteerSkillGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerSkillWhereInput
    orderBy?: VolunteerSkillOrderByWithAggregationInput | VolunteerSkillOrderByWithAggregationInput[]
    by: VolunteerSkillScalarFieldEnum[] | VolunteerSkillScalarFieldEnum
    having?: VolunteerSkillScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerSkillCountAggregateInputType | true
    _min?: VolunteerSkillMinAggregateInputType
    _max?: VolunteerSkillMaxAggregateInputType
  }

  export type VolunteerSkillGroupByOutputType = {
    id: string
    volunteerId: string
    category: $Enums.SkillCategory
    name: string
    level: $Enums.SkillLevel
    verified: boolean
    createdAt: Date
    _count: VolunteerSkillCountAggregateOutputType | null
    _min: VolunteerSkillMinAggregateOutputType | null
    _max: VolunteerSkillMaxAggregateOutputType | null
  }

  type GetVolunteerSkillGroupByPayload<T extends VolunteerSkillGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerSkillGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerSkillGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerSkillGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerSkillGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerSkillSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    category?: boolean
    name?: boolean
    level?: boolean
    verified?: boolean
    createdAt?: boolean
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerSkill"]>

  export type VolunteerSkillSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    category?: boolean
    name?: boolean
    level?: boolean
    verified?: boolean
    createdAt?: boolean
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerSkill"]>

  export type VolunteerSkillSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    category?: boolean
    name?: boolean
    level?: boolean
    verified?: boolean
    createdAt?: boolean
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerSkill"]>

  export type VolunteerSkillSelectScalar = {
    id?: boolean
    volunteerId?: boolean
    category?: boolean
    name?: boolean
    level?: boolean
    verified?: boolean
    createdAt?: boolean
  }

  export type VolunteerSkillOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "volunteerId" | "category" | "name" | "level" | "verified" | "createdAt", ExtArgs["result"]["volunteerSkill"]>
  export type VolunteerSkillInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type VolunteerSkillIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type VolunteerSkillIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }

  export type $VolunteerSkillPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VolunteerSkill"
    objects: {
      volunteer: Prisma.$VolunteerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      volunteerId: string
      category: $Enums.SkillCategory
      name: string
      level: $Enums.SkillLevel
      verified: boolean
      createdAt: Date
    }, ExtArgs["result"]["volunteerSkill"]>
    composites: {}
  }

  type VolunteerSkillGetPayload<S extends boolean | null | undefined | VolunteerSkillDefaultArgs> = $Result.GetResult<Prisma.$VolunteerSkillPayload, S>

  type VolunteerSkillCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerSkillFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerSkillCountAggregateInputType | true
    }

  export interface VolunteerSkillDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VolunteerSkill'], meta: { name: 'VolunteerSkill' } }
    /**
     * Find zero or one VolunteerSkill that matches the filter.
     * @param {VolunteerSkillFindUniqueArgs} args - Arguments to find a VolunteerSkill
     * @example
     * // Get one VolunteerSkill
     * const volunteerSkill = await prisma.volunteerSkill.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerSkillFindUniqueArgs>(args: SelectSubset<T, VolunteerSkillFindUniqueArgs<ExtArgs>>): Prisma__VolunteerSkillClient<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VolunteerSkill that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerSkillFindUniqueOrThrowArgs} args - Arguments to find a VolunteerSkill
     * @example
     * // Get one VolunteerSkill
     * const volunteerSkill = await prisma.volunteerSkill.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerSkillFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerSkillFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerSkillClient<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerSkill that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerSkillFindFirstArgs} args - Arguments to find a VolunteerSkill
     * @example
     * // Get one VolunteerSkill
     * const volunteerSkill = await prisma.volunteerSkill.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerSkillFindFirstArgs>(args?: SelectSubset<T, VolunteerSkillFindFirstArgs<ExtArgs>>): Prisma__VolunteerSkillClient<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerSkill that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerSkillFindFirstOrThrowArgs} args - Arguments to find a VolunteerSkill
     * @example
     * // Get one VolunteerSkill
     * const volunteerSkill = await prisma.volunteerSkill.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerSkillFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerSkillFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerSkillClient<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VolunteerSkills that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerSkillFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VolunteerSkills
     * const volunteerSkills = await prisma.volunteerSkill.findMany()
     * 
     * // Get first 10 VolunteerSkills
     * const volunteerSkills = await prisma.volunteerSkill.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerSkillWithIdOnly = await prisma.volunteerSkill.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerSkillFindManyArgs>(args?: SelectSubset<T, VolunteerSkillFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VolunteerSkill.
     * @param {VolunteerSkillCreateArgs} args - Arguments to create a VolunteerSkill.
     * @example
     * // Create one VolunteerSkill
     * const VolunteerSkill = await prisma.volunteerSkill.create({
     *   data: {
     *     // ... data to create a VolunteerSkill
     *   }
     * })
     * 
     */
    create<T extends VolunteerSkillCreateArgs>(args: SelectSubset<T, VolunteerSkillCreateArgs<ExtArgs>>): Prisma__VolunteerSkillClient<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VolunteerSkills.
     * @param {VolunteerSkillCreateManyArgs} args - Arguments to create many VolunteerSkills.
     * @example
     * // Create many VolunteerSkills
     * const volunteerSkill = await prisma.volunteerSkill.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerSkillCreateManyArgs>(args?: SelectSubset<T, VolunteerSkillCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VolunteerSkills and returns the data saved in the database.
     * @param {VolunteerSkillCreateManyAndReturnArgs} args - Arguments to create many VolunteerSkills.
     * @example
     * // Create many VolunteerSkills
     * const volunteerSkill = await prisma.volunteerSkill.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VolunteerSkills and only return the `id`
     * const volunteerSkillWithIdOnly = await prisma.volunteerSkill.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerSkillCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerSkillCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VolunteerSkill.
     * @param {VolunteerSkillDeleteArgs} args - Arguments to delete one VolunteerSkill.
     * @example
     * // Delete one VolunteerSkill
     * const VolunteerSkill = await prisma.volunteerSkill.delete({
     *   where: {
     *     // ... filter to delete one VolunteerSkill
     *   }
     * })
     * 
     */
    delete<T extends VolunteerSkillDeleteArgs>(args: SelectSubset<T, VolunteerSkillDeleteArgs<ExtArgs>>): Prisma__VolunteerSkillClient<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VolunteerSkill.
     * @param {VolunteerSkillUpdateArgs} args - Arguments to update one VolunteerSkill.
     * @example
     * // Update one VolunteerSkill
     * const volunteerSkill = await prisma.volunteerSkill.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerSkillUpdateArgs>(args: SelectSubset<T, VolunteerSkillUpdateArgs<ExtArgs>>): Prisma__VolunteerSkillClient<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VolunteerSkills.
     * @param {VolunteerSkillDeleteManyArgs} args - Arguments to filter VolunteerSkills to delete.
     * @example
     * // Delete a few VolunteerSkills
     * const { count } = await prisma.volunteerSkill.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerSkillDeleteManyArgs>(args?: SelectSubset<T, VolunteerSkillDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerSkillUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VolunteerSkills
     * const volunteerSkill = await prisma.volunteerSkill.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerSkillUpdateManyArgs>(args: SelectSubset<T, VolunteerSkillUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerSkills and returns the data updated in the database.
     * @param {VolunteerSkillUpdateManyAndReturnArgs} args - Arguments to update many VolunteerSkills.
     * @example
     * // Update many VolunteerSkills
     * const volunteerSkill = await prisma.volunteerSkill.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VolunteerSkills and only return the `id`
     * const volunteerSkillWithIdOnly = await prisma.volunteerSkill.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolunteerSkillUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerSkillUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VolunteerSkill.
     * @param {VolunteerSkillUpsertArgs} args - Arguments to update or create a VolunteerSkill.
     * @example
     * // Update or create a VolunteerSkill
     * const volunteerSkill = await prisma.volunteerSkill.upsert({
     *   create: {
     *     // ... data to create a VolunteerSkill
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VolunteerSkill we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerSkillUpsertArgs>(args: SelectSubset<T, VolunteerSkillUpsertArgs<ExtArgs>>): Prisma__VolunteerSkillClient<$Result.GetResult<Prisma.$VolunteerSkillPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VolunteerSkills.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerSkillCountArgs} args - Arguments to filter VolunteerSkills to count.
     * @example
     * // Count the number of VolunteerSkills
     * const count = await prisma.volunteerSkill.count({
     *   where: {
     *     // ... the filter for the VolunteerSkills we want to count
     *   }
     * })
    **/
    count<T extends VolunteerSkillCountArgs>(
      args?: Subset<T, VolunteerSkillCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerSkillCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VolunteerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerSkillAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolunteerSkillAggregateArgs>(args: Subset<T, VolunteerSkillAggregateArgs>): Prisma.PrismaPromise<GetVolunteerSkillAggregateType<T>>

    /**
     * Group by VolunteerSkill.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerSkillGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolunteerSkillGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerSkillGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerSkillGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolunteerSkillGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerSkillGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VolunteerSkill model
   */
  readonly fields: VolunteerSkillFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VolunteerSkill.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerSkillClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volunteer<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VolunteerSkill model
   */
  interface VolunteerSkillFieldRefs {
    readonly id: FieldRef<"VolunteerSkill", 'String'>
    readonly volunteerId: FieldRef<"VolunteerSkill", 'String'>
    readonly category: FieldRef<"VolunteerSkill", 'SkillCategory'>
    readonly name: FieldRef<"VolunteerSkill", 'String'>
    readonly level: FieldRef<"VolunteerSkill", 'SkillLevel'>
    readonly verified: FieldRef<"VolunteerSkill", 'Boolean'>
    readonly createdAt: FieldRef<"VolunteerSkill", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VolunteerSkill findUnique
   */
  export type VolunteerSkillFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerSkill to fetch.
     */
    where: VolunteerSkillWhereUniqueInput
  }

  /**
   * VolunteerSkill findUniqueOrThrow
   */
  export type VolunteerSkillFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerSkill to fetch.
     */
    where: VolunteerSkillWhereUniqueInput
  }

  /**
   * VolunteerSkill findFirst
   */
  export type VolunteerSkillFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerSkill to fetch.
     */
    where?: VolunteerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerSkills to fetch.
     */
    orderBy?: VolunteerSkillOrderByWithRelationInput | VolunteerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerSkills.
     */
    cursor?: VolunteerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerSkills.
     */
    distinct?: VolunteerSkillScalarFieldEnum | VolunteerSkillScalarFieldEnum[]
  }

  /**
   * VolunteerSkill findFirstOrThrow
   */
  export type VolunteerSkillFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerSkill to fetch.
     */
    where?: VolunteerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerSkills to fetch.
     */
    orderBy?: VolunteerSkillOrderByWithRelationInput | VolunteerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerSkills.
     */
    cursor?: VolunteerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerSkills.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerSkills.
     */
    distinct?: VolunteerSkillScalarFieldEnum | VolunteerSkillScalarFieldEnum[]
  }

  /**
   * VolunteerSkill findMany
   */
  export type VolunteerSkillFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerSkills to fetch.
     */
    where?: VolunteerSkillWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerSkills to fetch.
     */
    orderBy?: VolunteerSkillOrderByWithRelationInput | VolunteerSkillOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VolunteerSkills.
     */
    cursor?: VolunteerSkillWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerSkills from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerSkills.
     */
    skip?: number
    distinct?: VolunteerSkillScalarFieldEnum | VolunteerSkillScalarFieldEnum[]
  }

  /**
   * VolunteerSkill create
   */
  export type VolunteerSkillCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * The data needed to create a VolunteerSkill.
     */
    data: XOR<VolunteerSkillCreateInput, VolunteerSkillUncheckedCreateInput>
  }

  /**
   * VolunteerSkill createMany
   */
  export type VolunteerSkillCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VolunteerSkills.
     */
    data: VolunteerSkillCreateManyInput | VolunteerSkillCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VolunteerSkill createManyAndReturn
   */
  export type VolunteerSkillCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * The data used to create many VolunteerSkills.
     */
    data: VolunteerSkillCreateManyInput | VolunteerSkillCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VolunteerSkill update
   */
  export type VolunteerSkillUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * The data needed to update a VolunteerSkill.
     */
    data: XOR<VolunteerSkillUpdateInput, VolunteerSkillUncheckedUpdateInput>
    /**
     * Choose, which VolunteerSkill to update.
     */
    where: VolunteerSkillWhereUniqueInput
  }

  /**
   * VolunteerSkill updateMany
   */
  export type VolunteerSkillUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VolunteerSkills.
     */
    data: XOR<VolunteerSkillUpdateManyMutationInput, VolunteerSkillUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerSkills to update
     */
    where?: VolunteerSkillWhereInput
    /**
     * Limit how many VolunteerSkills to update.
     */
    limit?: number
  }

  /**
   * VolunteerSkill updateManyAndReturn
   */
  export type VolunteerSkillUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * The data used to update VolunteerSkills.
     */
    data: XOR<VolunteerSkillUpdateManyMutationInput, VolunteerSkillUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerSkills to update
     */
    where?: VolunteerSkillWhereInput
    /**
     * Limit how many VolunteerSkills to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VolunteerSkill upsert
   */
  export type VolunteerSkillUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * The filter to search for the VolunteerSkill to update in case it exists.
     */
    where: VolunteerSkillWhereUniqueInput
    /**
     * In case the VolunteerSkill found by the `where` argument doesn't exist, create a new VolunteerSkill with this data.
     */
    create: XOR<VolunteerSkillCreateInput, VolunteerSkillUncheckedCreateInput>
    /**
     * In case the VolunteerSkill was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerSkillUpdateInput, VolunteerSkillUncheckedUpdateInput>
  }

  /**
   * VolunteerSkill delete
   */
  export type VolunteerSkillDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
    /**
     * Filter which VolunteerSkill to delete.
     */
    where: VolunteerSkillWhereUniqueInput
  }

  /**
   * VolunteerSkill deleteMany
   */
  export type VolunteerSkillDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerSkills to delete
     */
    where?: VolunteerSkillWhereInput
    /**
     * Limit how many VolunteerSkills to delete.
     */
    limit?: number
  }

  /**
   * VolunteerSkill without action
   */
  export type VolunteerSkillDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerSkill
     */
    select?: VolunteerSkillSelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerSkill
     */
    omit?: VolunteerSkillOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerSkillInclude<ExtArgs> | null
  }


  /**
   * Model VolunteerAvailability
   */

  export type AggregateVolunteerAvailability = {
    _count: VolunteerAvailabilityCountAggregateOutputType | null
    _avg: VolunteerAvailabilityAvgAggregateOutputType | null
    _sum: VolunteerAvailabilitySumAggregateOutputType | null
    _min: VolunteerAvailabilityMinAggregateOutputType | null
    _max: VolunteerAvailabilityMaxAggregateOutputType | null
  }

  export type VolunteerAvailabilityAvgAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type VolunteerAvailabilitySumAggregateOutputType = {
    dayOfWeek: number | null
  }

  export type VolunteerAvailabilityMinAggregateOutputType = {
    id: string | null
    volunteerId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    timezone: string | null
    createdAt: Date | null
  }

  export type VolunteerAvailabilityMaxAggregateOutputType = {
    id: string | null
    volunteerId: string | null
    dayOfWeek: number | null
    startTime: string | null
    endTime: string | null
    timezone: string | null
    createdAt: Date | null
  }

  export type VolunteerAvailabilityCountAggregateOutputType = {
    id: number
    volunteerId: number
    dayOfWeek: number
    startTime: number
    endTime: number
    timezone: number
    createdAt: number
    _all: number
  }


  export type VolunteerAvailabilityAvgAggregateInputType = {
    dayOfWeek?: true
  }

  export type VolunteerAvailabilitySumAggregateInputType = {
    dayOfWeek?: true
  }

  export type VolunteerAvailabilityMinAggregateInputType = {
    id?: true
    volunteerId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    timezone?: true
    createdAt?: true
  }

  export type VolunteerAvailabilityMaxAggregateInputType = {
    id?: true
    volunteerId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    timezone?: true
    createdAt?: true
  }

  export type VolunteerAvailabilityCountAggregateInputType = {
    id?: true
    volunteerId?: true
    dayOfWeek?: true
    startTime?: true
    endTime?: true
    timezone?: true
    createdAt?: true
    _all?: true
  }

  export type VolunteerAvailabilityAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerAvailability to aggregate.
     */
    where?: VolunteerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerAvailabilities to fetch.
     */
    orderBy?: VolunteerAvailabilityOrderByWithRelationInput | VolunteerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VolunteerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VolunteerAvailabilities
    **/
    _count?: true | VolunteerAvailabilityCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: VolunteerAvailabilityAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: VolunteerAvailabilitySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VolunteerAvailabilityMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VolunteerAvailabilityMaxAggregateInputType
  }

  export type GetVolunteerAvailabilityAggregateType<T extends VolunteerAvailabilityAggregateArgs> = {
        [P in keyof T & keyof AggregateVolunteerAvailability]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVolunteerAvailability[P]>
      : GetScalarType<T[P], AggregateVolunteerAvailability[P]>
  }




  export type VolunteerAvailabilityGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: VolunteerAvailabilityWhereInput
    orderBy?: VolunteerAvailabilityOrderByWithAggregationInput | VolunteerAvailabilityOrderByWithAggregationInput[]
    by: VolunteerAvailabilityScalarFieldEnum[] | VolunteerAvailabilityScalarFieldEnum
    having?: VolunteerAvailabilityScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VolunteerAvailabilityCountAggregateInputType | true
    _avg?: VolunteerAvailabilityAvgAggregateInputType
    _sum?: VolunteerAvailabilitySumAggregateInputType
    _min?: VolunteerAvailabilityMinAggregateInputType
    _max?: VolunteerAvailabilityMaxAggregateInputType
  }

  export type VolunteerAvailabilityGroupByOutputType = {
    id: string
    volunteerId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone: string
    createdAt: Date
    _count: VolunteerAvailabilityCountAggregateOutputType | null
    _avg: VolunteerAvailabilityAvgAggregateOutputType | null
    _sum: VolunteerAvailabilitySumAggregateOutputType | null
    _min: VolunteerAvailabilityMinAggregateOutputType | null
    _max: VolunteerAvailabilityMaxAggregateOutputType | null
  }

  type GetVolunteerAvailabilityGroupByPayload<T extends VolunteerAvailabilityGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VolunteerAvailabilityGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VolunteerAvailabilityGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VolunteerAvailabilityGroupByOutputType[P]>
            : GetScalarType<T[P], VolunteerAvailabilityGroupByOutputType[P]>
        }
      >
    >


  export type VolunteerAvailabilitySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    createdAt?: boolean
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerAvailability"]>

  export type VolunteerAvailabilitySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    createdAt?: boolean
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerAvailability"]>

  export type VolunteerAvailabilitySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    volunteerId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    createdAt?: boolean
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["volunteerAvailability"]>

  export type VolunteerAvailabilitySelectScalar = {
    id?: boolean
    volunteerId?: boolean
    dayOfWeek?: boolean
    startTime?: boolean
    endTime?: boolean
    timezone?: boolean
    createdAt?: boolean
  }

  export type VolunteerAvailabilityOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "volunteerId" | "dayOfWeek" | "startTime" | "endTime" | "timezone" | "createdAt", ExtArgs["result"]["volunteerAvailability"]>
  export type VolunteerAvailabilityInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type VolunteerAvailabilityIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }
  export type VolunteerAvailabilityIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
  }

  export type $VolunteerAvailabilityPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "VolunteerAvailability"
    objects: {
      volunteer: Prisma.$VolunteerPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      volunteerId: string
      dayOfWeek: number
      startTime: string
      endTime: string
      timezone: string
      createdAt: Date
    }, ExtArgs["result"]["volunteerAvailability"]>
    composites: {}
  }

  type VolunteerAvailabilityGetPayload<S extends boolean | null | undefined | VolunteerAvailabilityDefaultArgs> = $Result.GetResult<Prisma.$VolunteerAvailabilityPayload, S>

  type VolunteerAvailabilityCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<VolunteerAvailabilityFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: VolunteerAvailabilityCountAggregateInputType | true
    }

  export interface VolunteerAvailabilityDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VolunteerAvailability'], meta: { name: 'VolunteerAvailability' } }
    /**
     * Find zero or one VolunteerAvailability that matches the filter.
     * @param {VolunteerAvailabilityFindUniqueArgs} args - Arguments to find a VolunteerAvailability
     * @example
     * // Get one VolunteerAvailability
     * const volunteerAvailability = await prisma.volunteerAvailability.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends VolunteerAvailabilityFindUniqueArgs>(args: SelectSubset<T, VolunteerAvailabilityFindUniqueArgs<ExtArgs>>): Prisma__VolunteerAvailabilityClient<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one VolunteerAvailability that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {VolunteerAvailabilityFindUniqueOrThrowArgs} args - Arguments to find a VolunteerAvailability
     * @example
     * // Get one VolunteerAvailability
     * const volunteerAvailability = await prisma.volunteerAvailability.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends VolunteerAvailabilityFindUniqueOrThrowArgs>(args: SelectSubset<T, VolunteerAvailabilityFindUniqueOrThrowArgs<ExtArgs>>): Prisma__VolunteerAvailabilityClient<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerAvailability that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAvailabilityFindFirstArgs} args - Arguments to find a VolunteerAvailability
     * @example
     * // Get one VolunteerAvailability
     * const volunteerAvailability = await prisma.volunteerAvailability.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends VolunteerAvailabilityFindFirstArgs>(args?: SelectSubset<T, VolunteerAvailabilityFindFirstArgs<ExtArgs>>): Prisma__VolunteerAvailabilityClient<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first VolunteerAvailability that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAvailabilityFindFirstOrThrowArgs} args - Arguments to find a VolunteerAvailability
     * @example
     * // Get one VolunteerAvailability
     * const volunteerAvailability = await prisma.volunteerAvailability.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends VolunteerAvailabilityFindFirstOrThrowArgs>(args?: SelectSubset<T, VolunteerAvailabilityFindFirstOrThrowArgs<ExtArgs>>): Prisma__VolunteerAvailabilityClient<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more VolunteerAvailabilities that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAvailabilityFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VolunteerAvailabilities
     * const volunteerAvailabilities = await prisma.volunteerAvailability.findMany()
     * 
     * // Get first 10 VolunteerAvailabilities
     * const volunteerAvailabilities = await prisma.volunteerAvailability.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const volunteerAvailabilityWithIdOnly = await prisma.volunteerAvailability.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends VolunteerAvailabilityFindManyArgs>(args?: SelectSubset<T, VolunteerAvailabilityFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a VolunteerAvailability.
     * @param {VolunteerAvailabilityCreateArgs} args - Arguments to create a VolunteerAvailability.
     * @example
     * // Create one VolunteerAvailability
     * const VolunteerAvailability = await prisma.volunteerAvailability.create({
     *   data: {
     *     // ... data to create a VolunteerAvailability
     *   }
     * })
     * 
     */
    create<T extends VolunteerAvailabilityCreateArgs>(args: SelectSubset<T, VolunteerAvailabilityCreateArgs<ExtArgs>>): Prisma__VolunteerAvailabilityClient<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many VolunteerAvailabilities.
     * @param {VolunteerAvailabilityCreateManyArgs} args - Arguments to create many VolunteerAvailabilities.
     * @example
     * // Create many VolunteerAvailabilities
     * const volunteerAvailability = await prisma.volunteerAvailability.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends VolunteerAvailabilityCreateManyArgs>(args?: SelectSubset<T, VolunteerAvailabilityCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many VolunteerAvailabilities and returns the data saved in the database.
     * @param {VolunteerAvailabilityCreateManyAndReturnArgs} args - Arguments to create many VolunteerAvailabilities.
     * @example
     * // Create many VolunteerAvailabilities
     * const volunteerAvailability = await prisma.volunteerAvailability.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many VolunteerAvailabilities and only return the `id`
     * const volunteerAvailabilityWithIdOnly = await prisma.volunteerAvailability.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends VolunteerAvailabilityCreateManyAndReturnArgs>(args?: SelectSubset<T, VolunteerAvailabilityCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a VolunteerAvailability.
     * @param {VolunteerAvailabilityDeleteArgs} args - Arguments to delete one VolunteerAvailability.
     * @example
     * // Delete one VolunteerAvailability
     * const VolunteerAvailability = await prisma.volunteerAvailability.delete({
     *   where: {
     *     // ... filter to delete one VolunteerAvailability
     *   }
     * })
     * 
     */
    delete<T extends VolunteerAvailabilityDeleteArgs>(args: SelectSubset<T, VolunteerAvailabilityDeleteArgs<ExtArgs>>): Prisma__VolunteerAvailabilityClient<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one VolunteerAvailability.
     * @param {VolunteerAvailabilityUpdateArgs} args - Arguments to update one VolunteerAvailability.
     * @example
     * // Update one VolunteerAvailability
     * const volunteerAvailability = await prisma.volunteerAvailability.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends VolunteerAvailabilityUpdateArgs>(args: SelectSubset<T, VolunteerAvailabilityUpdateArgs<ExtArgs>>): Prisma__VolunteerAvailabilityClient<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more VolunteerAvailabilities.
     * @param {VolunteerAvailabilityDeleteManyArgs} args - Arguments to filter VolunteerAvailabilities to delete.
     * @example
     * // Delete a few VolunteerAvailabilities
     * const { count } = await prisma.volunteerAvailability.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends VolunteerAvailabilityDeleteManyArgs>(args?: SelectSubset<T, VolunteerAvailabilityDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAvailabilityUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VolunteerAvailabilities
     * const volunteerAvailability = await prisma.volunteerAvailability.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends VolunteerAvailabilityUpdateManyArgs>(args: SelectSubset<T, VolunteerAvailabilityUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VolunteerAvailabilities and returns the data updated in the database.
     * @param {VolunteerAvailabilityUpdateManyAndReturnArgs} args - Arguments to update many VolunteerAvailabilities.
     * @example
     * // Update many VolunteerAvailabilities
     * const volunteerAvailability = await prisma.volunteerAvailability.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more VolunteerAvailabilities and only return the `id`
     * const volunteerAvailabilityWithIdOnly = await prisma.volunteerAvailability.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends VolunteerAvailabilityUpdateManyAndReturnArgs>(args: SelectSubset<T, VolunteerAvailabilityUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one VolunteerAvailability.
     * @param {VolunteerAvailabilityUpsertArgs} args - Arguments to update or create a VolunteerAvailability.
     * @example
     * // Update or create a VolunteerAvailability
     * const volunteerAvailability = await prisma.volunteerAvailability.upsert({
     *   create: {
     *     // ... data to create a VolunteerAvailability
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VolunteerAvailability we want to update
     *   }
     * })
     */
    upsert<T extends VolunteerAvailabilityUpsertArgs>(args: SelectSubset<T, VolunteerAvailabilityUpsertArgs<ExtArgs>>): Prisma__VolunteerAvailabilityClient<$Result.GetResult<Prisma.$VolunteerAvailabilityPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of VolunteerAvailabilities.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAvailabilityCountArgs} args - Arguments to filter VolunteerAvailabilities to count.
     * @example
     * // Count the number of VolunteerAvailabilities
     * const count = await prisma.volunteerAvailability.count({
     *   where: {
     *     // ... the filter for the VolunteerAvailabilities we want to count
     *   }
     * })
    **/
    count<T extends VolunteerAvailabilityCountArgs>(
      args?: Subset<T, VolunteerAvailabilityCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VolunteerAvailabilityCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VolunteerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAvailabilityAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends VolunteerAvailabilityAggregateArgs>(args: Subset<T, VolunteerAvailabilityAggregateArgs>): Prisma.PrismaPromise<GetVolunteerAvailabilityAggregateType<T>>

    /**
     * Group by VolunteerAvailability.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VolunteerAvailabilityGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends VolunteerAvailabilityGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VolunteerAvailabilityGroupByArgs['orderBy'] }
        : { orderBy?: VolunteerAvailabilityGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, VolunteerAvailabilityGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVolunteerAvailabilityGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VolunteerAvailability model
   */
  readonly fields: VolunteerAvailabilityFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VolunteerAvailability.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VolunteerAvailabilityClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    volunteer<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the VolunteerAvailability model
   */
  interface VolunteerAvailabilityFieldRefs {
    readonly id: FieldRef<"VolunteerAvailability", 'String'>
    readonly volunteerId: FieldRef<"VolunteerAvailability", 'String'>
    readonly dayOfWeek: FieldRef<"VolunteerAvailability", 'Int'>
    readonly startTime: FieldRef<"VolunteerAvailability", 'String'>
    readonly endTime: FieldRef<"VolunteerAvailability", 'String'>
    readonly timezone: FieldRef<"VolunteerAvailability", 'String'>
    readonly createdAt: FieldRef<"VolunteerAvailability", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * VolunteerAvailability findUnique
   */
  export type VolunteerAvailabilityFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAvailability to fetch.
     */
    where: VolunteerAvailabilityWhereUniqueInput
  }

  /**
   * VolunteerAvailability findUniqueOrThrow
   */
  export type VolunteerAvailabilityFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAvailability to fetch.
     */
    where: VolunteerAvailabilityWhereUniqueInput
  }

  /**
   * VolunteerAvailability findFirst
   */
  export type VolunteerAvailabilityFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAvailability to fetch.
     */
    where?: VolunteerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerAvailabilities to fetch.
     */
    orderBy?: VolunteerAvailabilityOrderByWithRelationInput | VolunteerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerAvailabilities.
     */
    cursor?: VolunteerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerAvailabilities.
     */
    distinct?: VolunteerAvailabilityScalarFieldEnum | VolunteerAvailabilityScalarFieldEnum[]
  }

  /**
   * VolunteerAvailability findFirstOrThrow
   */
  export type VolunteerAvailabilityFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAvailability to fetch.
     */
    where?: VolunteerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerAvailabilities to fetch.
     */
    orderBy?: VolunteerAvailabilityOrderByWithRelationInput | VolunteerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VolunteerAvailabilities.
     */
    cursor?: VolunteerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerAvailabilities.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VolunteerAvailabilities.
     */
    distinct?: VolunteerAvailabilityScalarFieldEnum | VolunteerAvailabilityScalarFieldEnum[]
  }

  /**
   * VolunteerAvailability findMany
   */
  export type VolunteerAvailabilityFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter, which VolunteerAvailabilities to fetch.
     */
    where?: VolunteerAvailabilityWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VolunteerAvailabilities to fetch.
     */
    orderBy?: VolunteerAvailabilityOrderByWithRelationInput | VolunteerAvailabilityOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VolunteerAvailabilities.
     */
    cursor?: VolunteerAvailabilityWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VolunteerAvailabilities from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VolunteerAvailabilities.
     */
    skip?: number
    distinct?: VolunteerAvailabilityScalarFieldEnum | VolunteerAvailabilityScalarFieldEnum[]
  }

  /**
   * VolunteerAvailability create
   */
  export type VolunteerAvailabilityCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to create a VolunteerAvailability.
     */
    data: XOR<VolunteerAvailabilityCreateInput, VolunteerAvailabilityUncheckedCreateInput>
  }

  /**
   * VolunteerAvailability createMany
   */
  export type VolunteerAvailabilityCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VolunteerAvailabilities.
     */
    data: VolunteerAvailabilityCreateManyInput | VolunteerAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * VolunteerAvailability createManyAndReturn
   */
  export type VolunteerAvailabilityCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to create many VolunteerAvailabilities.
     */
    data: VolunteerAvailabilityCreateManyInput | VolunteerAvailabilityCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * VolunteerAvailability update
   */
  export type VolunteerAvailabilityUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * The data needed to update a VolunteerAvailability.
     */
    data: XOR<VolunteerAvailabilityUpdateInput, VolunteerAvailabilityUncheckedUpdateInput>
    /**
     * Choose, which VolunteerAvailability to update.
     */
    where: VolunteerAvailabilityWhereUniqueInput
  }

  /**
   * VolunteerAvailability updateMany
   */
  export type VolunteerAvailabilityUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VolunteerAvailabilities.
     */
    data: XOR<VolunteerAvailabilityUpdateManyMutationInput, VolunteerAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerAvailabilities to update
     */
    where?: VolunteerAvailabilityWhereInput
    /**
     * Limit how many VolunteerAvailabilities to update.
     */
    limit?: number
  }

  /**
   * VolunteerAvailability updateManyAndReturn
   */
  export type VolunteerAvailabilityUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * The data used to update VolunteerAvailabilities.
     */
    data: XOR<VolunteerAvailabilityUpdateManyMutationInput, VolunteerAvailabilityUncheckedUpdateManyInput>
    /**
     * Filter which VolunteerAvailabilities to update
     */
    where?: VolunteerAvailabilityWhereInput
    /**
     * Limit how many VolunteerAvailabilities to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * VolunteerAvailability upsert
   */
  export type VolunteerAvailabilityUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * The filter to search for the VolunteerAvailability to update in case it exists.
     */
    where: VolunteerAvailabilityWhereUniqueInput
    /**
     * In case the VolunteerAvailability found by the `where` argument doesn't exist, create a new VolunteerAvailability with this data.
     */
    create: XOR<VolunteerAvailabilityCreateInput, VolunteerAvailabilityUncheckedCreateInput>
    /**
     * In case the VolunteerAvailability was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VolunteerAvailabilityUpdateInput, VolunteerAvailabilityUncheckedUpdateInput>
  }

  /**
   * VolunteerAvailability delete
   */
  export type VolunteerAvailabilityDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
    /**
     * Filter which VolunteerAvailability to delete.
     */
    where: VolunteerAvailabilityWhereUniqueInput
  }

  /**
   * VolunteerAvailability deleteMany
   */
  export type VolunteerAvailabilityDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which VolunteerAvailabilities to delete
     */
    where?: VolunteerAvailabilityWhereInput
    /**
     * Limit how many VolunteerAvailabilities to delete.
     */
    limit?: number
  }

  /**
   * VolunteerAvailability without action
   */
  export type VolunteerAvailabilityDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VolunteerAvailability
     */
    select?: VolunteerAvailabilitySelect<ExtArgs> | null
    /**
     * Omit specific fields from the VolunteerAvailability
     */
    omit?: VolunteerAvailabilityOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerAvailabilityInclude<ExtArgs> | null
  }


  /**
   * Model Application
   */

  export type AggregateApplication = {
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  export type ApplicationMinAggregateOutputType = {
    id: string | null
    opportunityId: string | null
    volunteerId: string | null
    organizationId: string | null
    coverLetter: string | null
    status: $Enums.ApplicationStatus | null
    appliedAt: Date | null
    reviewedAt: Date | null
  }

  export type ApplicationMaxAggregateOutputType = {
    id: string | null
    opportunityId: string | null
    volunteerId: string | null
    organizationId: string | null
    coverLetter: string | null
    status: $Enums.ApplicationStatus | null
    appliedAt: Date | null
    reviewedAt: Date | null
  }

  export type ApplicationCountAggregateOutputType = {
    id: number
    opportunityId: number
    volunteerId: number
    organizationId: number
    coverLetter: number
    status: number
    appliedAt: number
    reviewedAt: number
    _all: number
  }


  export type ApplicationMinAggregateInputType = {
    id?: true
    opportunityId?: true
    volunteerId?: true
    organizationId?: true
    coverLetter?: true
    status?: true
    appliedAt?: true
    reviewedAt?: true
  }

  export type ApplicationMaxAggregateInputType = {
    id?: true
    opportunityId?: true
    volunteerId?: true
    organizationId?: true
    coverLetter?: true
    status?: true
    appliedAt?: true
    reviewedAt?: true
  }

  export type ApplicationCountAggregateInputType = {
    id?: true
    opportunityId?: true
    volunteerId?: true
    organizationId?: true
    coverLetter?: true
    status?: true
    appliedAt?: true
    reviewedAt?: true
    _all?: true
  }

  export type ApplicationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Application to aggregate.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Applications
    **/
    _count?: true | ApplicationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ApplicationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ApplicationMaxAggregateInputType
  }

  export type GetApplicationAggregateType<T extends ApplicationAggregateArgs> = {
        [P in keyof T & keyof AggregateApplication]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateApplication[P]>
      : GetScalarType<T[P], AggregateApplication[P]>
  }




  export type ApplicationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ApplicationWhereInput
    orderBy?: ApplicationOrderByWithAggregationInput | ApplicationOrderByWithAggregationInput[]
    by: ApplicationScalarFieldEnum[] | ApplicationScalarFieldEnum
    having?: ApplicationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ApplicationCountAggregateInputType | true
    _min?: ApplicationMinAggregateInputType
    _max?: ApplicationMaxAggregateInputType
  }

  export type ApplicationGroupByOutputType = {
    id: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    coverLetter: string | null
    status: $Enums.ApplicationStatus
    appliedAt: Date
    reviewedAt: Date | null
    _count: ApplicationCountAggregateOutputType | null
    _min: ApplicationMinAggregateOutputType | null
    _max: ApplicationMaxAggregateOutputType | null
  }

  type GetApplicationGroupByPayload<T extends ApplicationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ApplicationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ApplicationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
            : GetScalarType<T[P], ApplicationGroupByOutputType[P]>
        }
      >
    >


  export type ApplicationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    volunteerId?: boolean
    organizationId?: boolean
    coverLetter?: boolean
    status?: boolean
    appliedAt?: boolean
    reviewedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    assignment?: boolean | Application$assignmentArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    volunteerId?: boolean
    organizationId?: boolean
    coverLetter?: boolean
    status?: boolean
    appliedAt?: boolean
    reviewedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    opportunityId?: boolean
    volunteerId?: boolean
    organizationId?: boolean
    coverLetter?: boolean
    status?: boolean
    appliedAt?: boolean
    reviewedAt?: boolean
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["application"]>

  export type ApplicationSelectScalar = {
    id?: boolean
    opportunityId?: boolean
    volunteerId?: boolean
    organizationId?: boolean
    coverLetter?: boolean
    status?: boolean
    appliedAt?: boolean
    reviewedAt?: boolean
  }

  export type ApplicationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "opportunityId" | "volunteerId" | "organizationId" | "coverLetter" | "status" | "appliedAt" | "reviewedAt", ExtArgs["result"]["application"]>
  export type ApplicationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    assignment?: boolean | Application$assignmentArgs<ExtArgs>
  }
  export type ApplicationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type ApplicationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $ApplicationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Application"
    objects: {
      opportunity: Prisma.$OpportunityPayload<ExtArgs>
      volunteer: Prisma.$VolunteerPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
      assignment: Prisma.$AssignmentPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      opportunityId: string
      volunteerId: string
      organizationId: string
      coverLetter: string | null
      status: $Enums.ApplicationStatus
      appliedAt: Date
      reviewedAt: Date | null
    }, ExtArgs["result"]["application"]>
    composites: {}
  }

  type ApplicationGetPayload<S extends boolean | null | undefined | ApplicationDefaultArgs> = $Result.GetResult<Prisma.$ApplicationPayload, S>

  type ApplicationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ApplicationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ApplicationCountAggregateInputType | true
    }

  export interface ApplicationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Application'], meta: { name: 'Application' } }
    /**
     * Find zero or one Application that matches the filter.
     * @param {ApplicationFindUniqueArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ApplicationFindUniqueArgs>(args: SelectSubset<T, ApplicationFindUniqueArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Application that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ApplicationFindUniqueOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ApplicationFindUniqueOrThrowArgs>(args: SelectSubset<T, ApplicationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ApplicationFindFirstArgs>(args?: SelectSubset<T, ApplicationFindFirstArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Application that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindFirstOrThrowArgs} args - Arguments to find a Application
     * @example
     * // Get one Application
     * const application = await prisma.application.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ApplicationFindFirstOrThrowArgs>(args?: SelectSubset<T, ApplicationFindFirstOrThrowArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Applications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Applications
     * const applications = await prisma.application.findMany()
     * 
     * // Get first 10 Applications
     * const applications = await prisma.application.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const applicationWithIdOnly = await prisma.application.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ApplicationFindManyArgs>(args?: SelectSubset<T, ApplicationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Application.
     * @param {ApplicationCreateArgs} args - Arguments to create a Application.
     * @example
     * // Create one Application
     * const Application = await prisma.application.create({
     *   data: {
     *     // ... data to create a Application
     *   }
     * })
     * 
     */
    create<T extends ApplicationCreateArgs>(args: SelectSubset<T, ApplicationCreateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Applications.
     * @param {ApplicationCreateManyArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ApplicationCreateManyArgs>(args?: SelectSubset<T, ApplicationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Applications and returns the data saved in the database.
     * @param {ApplicationCreateManyAndReturnArgs} args - Arguments to create many Applications.
     * @example
     * // Create many Applications
     * const application = await prisma.application.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ApplicationCreateManyAndReturnArgs>(args?: SelectSubset<T, ApplicationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Application.
     * @param {ApplicationDeleteArgs} args - Arguments to delete one Application.
     * @example
     * // Delete one Application
     * const Application = await prisma.application.delete({
     *   where: {
     *     // ... filter to delete one Application
     *   }
     * })
     * 
     */
    delete<T extends ApplicationDeleteArgs>(args: SelectSubset<T, ApplicationDeleteArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Application.
     * @param {ApplicationUpdateArgs} args - Arguments to update one Application.
     * @example
     * // Update one Application
     * const application = await prisma.application.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ApplicationUpdateArgs>(args: SelectSubset<T, ApplicationUpdateArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Applications.
     * @param {ApplicationDeleteManyArgs} args - Arguments to filter Applications to delete.
     * @example
     * // Delete a few Applications
     * const { count } = await prisma.application.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ApplicationDeleteManyArgs>(args?: SelectSubset<T, ApplicationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ApplicationUpdateManyArgs>(args: SelectSubset<T, ApplicationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Applications and returns the data updated in the database.
     * @param {ApplicationUpdateManyAndReturnArgs} args - Arguments to update many Applications.
     * @example
     * // Update many Applications
     * const application = await prisma.application.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Applications and only return the `id`
     * const applicationWithIdOnly = await prisma.application.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ApplicationUpdateManyAndReturnArgs>(args: SelectSubset<T, ApplicationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Application.
     * @param {ApplicationUpsertArgs} args - Arguments to update or create a Application.
     * @example
     * // Update or create a Application
     * const application = await prisma.application.upsert({
     *   create: {
     *     // ... data to create a Application
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Application we want to update
     *   }
     * })
     */
    upsert<T extends ApplicationUpsertArgs>(args: SelectSubset<T, ApplicationUpsertArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Applications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationCountArgs} args - Arguments to filter Applications to count.
     * @example
     * // Count the number of Applications
     * const count = await prisma.application.count({
     *   where: {
     *     // ... the filter for the Applications we want to count
     *   }
     * })
    **/
    count<T extends ApplicationCountArgs>(
      args?: Subset<T, ApplicationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ApplicationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ApplicationAggregateArgs>(args: Subset<T, ApplicationAggregateArgs>): Prisma.PrismaPromise<GetApplicationAggregateType<T>>

    /**
     * Group by Application.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ApplicationGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ApplicationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ApplicationGroupByArgs['orderBy'] }
        : { orderBy?: ApplicationGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ApplicationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetApplicationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Application model
   */
  readonly fields: ApplicationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Application.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ApplicationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    opportunity<T extends OpportunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpportunityDefaultArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volunteer<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    assignment<T extends Application$assignmentArgs<ExtArgs> = {}>(args?: Subset<T, Application$assignmentArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Application model
   */
  interface ApplicationFieldRefs {
    readonly id: FieldRef<"Application", 'String'>
    readonly opportunityId: FieldRef<"Application", 'String'>
    readonly volunteerId: FieldRef<"Application", 'String'>
    readonly organizationId: FieldRef<"Application", 'String'>
    readonly coverLetter: FieldRef<"Application", 'String'>
    readonly status: FieldRef<"Application", 'ApplicationStatus'>
    readonly appliedAt: FieldRef<"Application", 'DateTime'>
    readonly reviewedAt: FieldRef<"Application", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Application findUnique
   */
  export type ApplicationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findUniqueOrThrow
   */
  export type ApplicationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application findFirst
   */
  export type ApplicationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findFirstOrThrow
   */
  export type ApplicationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Application to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Applications.
     */
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application findMany
   */
  export type ApplicationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter, which Applications to fetch.
     */
    where?: ApplicationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Applications to fetch.
     */
    orderBy?: ApplicationOrderByWithRelationInput | ApplicationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Applications.
     */
    cursor?: ApplicationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Applications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Applications.
     */
    skip?: number
    distinct?: ApplicationScalarFieldEnum | ApplicationScalarFieldEnum[]
  }

  /**
   * Application create
   */
  export type ApplicationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to create a Application.
     */
    data: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
  }

  /**
   * Application createMany
   */
  export type ApplicationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Application createManyAndReturn
   */
  export type ApplicationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to create many Applications.
     */
    data: ApplicationCreateManyInput | ApplicationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application update
   */
  export type ApplicationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The data needed to update a Application.
     */
    data: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
    /**
     * Choose, which Application to update.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application updateMany
   */
  export type ApplicationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
  }

  /**
   * Application updateManyAndReturn
   */
  export type ApplicationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * The data used to update Applications.
     */
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyInput>
    /**
     * Filter which Applications to update
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Application upsert
   */
  export type ApplicationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * The filter to search for the Application to update in case it exists.
     */
    where: ApplicationWhereUniqueInput
    /**
     * In case the Application found by the `where` argument doesn't exist, create a new Application with this data.
     */
    create: XOR<ApplicationCreateInput, ApplicationUncheckedCreateInput>
    /**
     * In case the Application was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ApplicationUpdateInput, ApplicationUncheckedUpdateInput>
  }

  /**
   * Application delete
   */
  export type ApplicationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
    /**
     * Filter which Application to delete.
     */
    where: ApplicationWhereUniqueInput
  }

  /**
   * Application deleteMany
   */
  export type ApplicationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Applications to delete
     */
    where?: ApplicationWhereInput
    /**
     * Limit how many Applications to delete.
     */
    limit?: number
  }

  /**
   * Application.assignment
   */
  export type Application$assignmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    where?: AssignmentWhereInput
  }

  /**
   * Application without action
   */
  export type ApplicationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Application
     */
    select?: ApplicationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Application
     */
    omit?: ApplicationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ApplicationInclude<ExtArgs> | null
  }


  /**
   * Model Assignment
   */

  export type AggregateAssignment = {
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  export type AssignmentAvgAggregateOutputType = {
    hoursLogged: number | null
  }

  export type AssignmentSumAggregateOutputType = {
    hoursLogged: number | null
  }

  export type AssignmentMinAggregateOutputType = {
    id: string | null
    applicationId: string | null
    opportunityId: string | null
    volunteerId: string | null
    organizationId: string | null
    status: $Enums.AssignmentStatus | null
    hoursLogged: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentMaxAggregateOutputType = {
    id: string | null
    applicationId: string | null
    opportunityId: string | null
    volunteerId: string | null
    organizationId: string | null
    status: $Enums.AssignmentStatus | null
    hoursLogged: number | null
    startDate: Date | null
    endDate: Date | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type AssignmentCountAggregateOutputType = {
    id: number
    applicationId: number
    opportunityId: number
    volunteerId: number
    organizationId: number
    status: number
    hoursLogged: number
    startDate: number
    endDate: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type AssignmentAvgAggregateInputType = {
    hoursLogged?: true
  }

  export type AssignmentSumAggregateInputType = {
    hoursLogged?: true
  }

  export type AssignmentMinAggregateInputType = {
    id?: true
    applicationId?: true
    opportunityId?: true
    volunteerId?: true
    organizationId?: true
    status?: true
    hoursLogged?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentMaxAggregateInputType = {
    id?: true
    applicationId?: true
    opportunityId?: true
    volunteerId?: true
    organizationId?: true
    status?: true
    hoursLogged?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
  }

  export type AssignmentCountAggregateInputType = {
    id?: true
    applicationId?: true
    opportunityId?: true
    volunteerId?: true
    organizationId?: true
    status?: true
    hoursLogged?: true
    startDate?: true
    endDate?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type AssignmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignment to aggregate.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Assignments
    **/
    _count?: true | AssignmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AssignmentAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AssignmentSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AssignmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AssignmentMaxAggregateInputType
  }

  export type GetAssignmentAggregateType<T extends AssignmentAggregateArgs> = {
        [P in keyof T & keyof AggregateAssignment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAssignment[P]>
      : GetScalarType<T[P], AggregateAssignment[P]>
  }




  export type AssignmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: AssignmentWhereInput
    orderBy?: AssignmentOrderByWithAggregationInput | AssignmentOrderByWithAggregationInput[]
    by: AssignmentScalarFieldEnum[] | AssignmentScalarFieldEnum
    having?: AssignmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AssignmentCountAggregateInputType | true
    _avg?: AssignmentAvgAggregateInputType
    _sum?: AssignmentSumAggregateInputType
    _min?: AssignmentMinAggregateInputType
    _max?: AssignmentMaxAggregateInputType
  }

  export type AssignmentGroupByOutputType = {
    id: string
    applicationId: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    status: $Enums.AssignmentStatus
    hoursLogged: number
    startDate: Date
    endDate: Date | null
    createdAt: Date
    updatedAt: Date
    _count: AssignmentCountAggregateOutputType | null
    _avg: AssignmentAvgAggregateOutputType | null
    _sum: AssignmentSumAggregateOutputType | null
    _min: AssignmentMinAggregateOutputType | null
    _max: AssignmentMaxAggregateOutputType | null
  }

  type GetAssignmentGroupByPayload<T extends AssignmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AssignmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AssignmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
            : GetScalarType<T[P], AssignmentGroupByOutputType[P]>
        }
      >
    >


  export type AssignmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    opportunityId?: boolean
    volunteerId?: boolean
    organizationId?: boolean
    status?: boolean
    hoursLogged?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    sessions?: boolean | Assignment$sessionsArgs<ExtArgs>
    reviews?: boolean | Assignment$reviewsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    opportunityId?: boolean
    volunteerId?: boolean
    organizationId?: boolean
    status?: boolean
    hoursLogged?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    applicationId?: boolean
    opportunityId?: boolean
    volunteerId?: boolean
    organizationId?: boolean
    status?: boolean
    hoursLogged?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["assignment"]>

  export type AssignmentSelectScalar = {
    id?: boolean
    applicationId?: boolean
    opportunityId?: boolean
    volunteerId?: boolean
    organizationId?: boolean
    status?: boolean
    hoursLogged?: boolean
    startDate?: boolean
    endDate?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type AssignmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "applicationId" | "opportunityId" | "volunteerId" | "organizationId" | "status" | "hoursLogged" | "startDate" | "endDate" | "createdAt" | "updatedAt", ExtArgs["result"]["assignment"]>
  export type AssignmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
    sessions?: boolean | Assignment$sessionsArgs<ExtArgs>
    reviews?: boolean | Assignment$reviewsArgs<ExtArgs>
    _count?: boolean | AssignmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }
  export type AssignmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    application?: boolean | ApplicationDefaultArgs<ExtArgs>
    opportunity?: boolean | OpportunityDefaultArgs<ExtArgs>
    volunteer?: boolean | VolunteerDefaultArgs<ExtArgs>
    organization?: boolean | OrganizationDefaultArgs<ExtArgs>
  }

  export type $AssignmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Assignment"
    objects: {
      application: Prisma.$ApplicationPayload<ExtArgs>
      opportunity: Prisma.$OpportunityPayload<ExtArgs>
      volunteer: Prisma.$VolunteerPayload<ExtArgs>
      organization: Prisma.$OrganizationPayload<ExtArgs>
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      reviews: Prisma.$ReviewPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      applicationId: string
      opportunityId: string
      volunteerId: string
      organizationId: string
      status: $Enums.AssignmentStatus
      hoursLogged: number
      startDate: Date
      endDate: Date | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["assignment"]>
    composites: {}
  }

  type AssignmentGetPayload<S extends boolean | null | undefined | AssignmentDefaultArgs> = $Result.GetResult<Prisma.$AssignmentPayload, S>

  type AssignmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<AssignmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: AssignmentCountAggregateInputType | true
    }

  export interface AssignmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Assignment'], meta: { name: 'Assignment' } }
    /**
     * Find zero or one Assignment that matches the filter.
     * @param {AssignmentFindUniqueArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends AssignmentFindUniqueArgs>(args: SelectSubset<T, AssignmentFindUniqueArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Assignment that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {AssignmentFindUniqueOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends AssignmentFindUniqueOrThrowArgs>(args: SelectSubset<T, AssignmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends AssignmentFindFirstArgs>(args?: SelectSubset<T, AssignmentFindFirstArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Assignment that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindFirstOrThrowArgs} args - Arguments to find a Assignment
     * @example
     * // Get one Assignment
     * const assignment = await prisma.assignment.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends AssignmentFindFirstOrThrowArgs>(args?: SelectSubset<T, AssignmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Assignments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Assignments
     * const assignments = await prisma.assignment.findMany()
     * 
     * // Get first 10 Assignments
     * const assignments = await prisma.assignment.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const assignmentWithIdOnly = await prisma.assignment.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends AssignmentFindManyArgs>(args?: SelectSubset<T, AssignmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Assignment.
     * @param {AssignmentCreateArgs} args - Arguments to create a Assignment.
     * @example
     * // Create one Assignment
     * const Assignment = await prisma.assignment.create({
     *   data: {
     *     // ... data to create a Assignment
     *   }
     * })
     * 
     */
    create<T extends AssignmentCreateArgs>(args: SelectSubset<T, AssignmentCreateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Assignments.
     * @param {AssignmentCreateManyArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends AssignmentCreateManyArgs>(args?: SelectSubset<T, AssignmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Assignments and returns the data saved in the database.
     * @param {AssignmentCreateManyAndReturnArgs} args - Arguments to create many Assignments.
     * @example
     * // Create many Assignments
     * const assignment = await prisma.assignment.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends AssignmentCreateManyAndReturnArgs>(args?: SelectSubset<T, AssignmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Assignment.
     * @param {AssignmentDeleteArgs} args - Arguments to delete one Assignment.
     * @example
     * // Delete one Assignment
     * const Assignment = await prisma.assignment.delete({
     *   where: {
     *     // ... filter to delete one Assignment
     *   }
     * })
     * 
     */
    delete<T extends AssignmentDeleteArgs>(args: SelectSubset<T, AssignmentDeleteArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Assignment.
     * @param {AssignmentUpdateArgs} args - Arguments to update one Assignment.
     * @example
     * // Update one Assignment
     * const assignment = await prisma.assignment.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends AssignmentUpdateArgs>(args: SelectSubset<T, AssignmentUpdateArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Assignments.
     * @param {AssignmentDeleteManyArgs} args - Arguments to filter Assignments to delete.
     * @example
     * // Delete a few Assignments
     * const { count } = await prisma.assignment.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends AssignmentDeleteManyArgs>(args?: SelectSubset<T, AssignmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends AssignmentUpdateManyArgs>(args: SelectSubset<T, AssignmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Assignments and returns the data updated in the database.
     * @param {AssignmentUpdateManyAndReturnArgs} args - Arguments to update many Assignments.
     * @example
     * // Update many Assignments
     * const assignment = await prisma.assignment.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Assignments and only return the `id`
     * const assignmentWithIdOnly = await prisma.assignment.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends AssignmentUpdateManyAndReturnArgs>(args: SelectSubset<T, AssignmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Assignment.
     * @param {AssignmentUpsertArgs} args - Arguments to update or create a Assignment.
     * @example
     * // Update or create a Assignment
     * const assignment = await prisma.assignment.upsert({
     *   create: {
     *     // ... data to create a Assignment
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Assignment we want to update
     *   }
     * })
     */
    upsert<T extends AssignmentUpsertArgs>(args: SelectSubset<T, AssignmentUpsertArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Assignments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentCountArgs} args - Arguments to filter Assignments to count.
     * @example
     * // Count the number of Assignments
     * const count = await prisma.assignment.count({
     *   where: {
     *     // ... the filter for the Assignments we want to count
     *   }
     * })
    **/
    count<T extends AssignmentCountArgs>(
      args?: Subset<T, AssignmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AssignmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends AssignmentAggregateArgs>(args: Subset<T, AssignmentAggregateArgs>): Prisma.PrismaPromise<GetAssignmentAggregateType<T>>

    /**
     * Group by Assignment.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AssignmentGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends AssignmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AssignmentGroupByArgs['orderBy'] }
        : { orderBy?: AssignmentGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, AssignmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAssignmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Assignment model
   */
  readonly fields: AssignmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Assignment.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AssignmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    application<T extends ApplicationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ApplicationDefaultArgs<ExtArgs>>): Prisma__ApplicationClient<$Result.GetResult<Prisma.$ApplicationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    opportunity<T extends OpportunityDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OpportunityDefaultArgs<ExtArgs>>): Prisma__OpportunityClient<$Result.GetResult<Prisma.$OpportunityPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    volunteer<T extends VolunteerDefaultArgs<ExtArgs> = {}>(args?: Subset<T, VolunteerDefaultArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    organization<T extends OrganizationDefaultArgs<ExtArgs> = {}>(args?: Subset<T, OrganizationDefaultArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    sessions<T extends Assignment$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    reviews<T extends Assignment$reviewsArgs<ExtArgs> = {}>(args?: Subset<T, Assignment$reviewsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Assignment model
   */
  interface AssignmentFieldRefs {
    readonly id: FieldRef<"Assignment", 'String'>
    readonly applicationId: FieldRef<"Assignment", 'String'>
    readonly opportunityId: FieldRef<"Assignment", 'String'>
    readonly volunteerId: FieldRef<"Assignment", 'String'>
    readonly organizationId: FieldRef<"Assignment", 'String'>
    readonly status: FieldRef<"Assignment", 'AssignmentStatus'>
    readonly hoursLogged: FieldRef<"Assignment", 'Int'>
    readonly startDate: FieldRef<"Assignment", 'DateTime'>
    readonly endDate: FieldRef<"Assignment", 'DateTime'>
    readonly createdAt: FieldRef<"Assignment", 'DateTime'>
    readonly updatedAt: FieldRef<"Assignment", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Assignment findUnique
   */
  export type AssignmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findUniqueOrThrow
   */
  export type AssignmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment findFirst
   */
  export type AssignmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findFirstOrThrow
   */
  export type AssignmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignment to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Assignments.
     */
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment findMany
   */
  export type AssignmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter, which Assignments to fetch.
     */
    where?: AssignmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Assignments to fetch.
     */
    orderBy?: AssignmentOrderByWithRelationInput | AssignmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Assignments.
     */
    cursor?: AssignmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Assignments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Assignments.
     */
    skip?: number
    distinct?: AssignmentScalarFieldEnum | AssignmentScalarFieldEnum[]
  }

  /**
   * Assignment create
   */
  export type AssignmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Assignment.
     */
    data: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
  }

  /**
   * Assignment createMany
   */
  export type AssignmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Assignment createManyAndReturn
   */
  export type AssignmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to create many Assignments.
     */
    data: AssignmentCreateManyInput | AssignmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment update
   */
  export type AssignmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Assignment.
     */
    data: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
    /**
     * Choose, which Assignment to update.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment updateMany
   */
  export type AssignmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
  }

  /**
   * Assignment updateManyAndReturn
   */
  export type AssignmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * The data used to update Assignments.
     */
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyInput>
    /**
     * Filter which Assignments to update
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Assignment upsert
   */
  export type AssignmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Assignment to update in case it exists.
     */
    where: AssignmentWhereUniqueInput
    /**
     * In case the Assignment found by the `where` argument doesn't exist, create a new Assignment with this data.
     */
    create: XOR<AssignmentCreateInput, AssignmentUncheckedCreateInput>
    /**
     * In case the Assignment was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AssignmentUpdateInput, AssignmentUncheckedUpdateInput>
  }

  /**
   * Assignment delete
   */
  export type AssignmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
    /**
     * Filter which Assignment to delete.
     */
    where: AssignmentWhereUniqueInput
  }

  /**
   * Assignment deleteMany
   */
  export type AssignmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Assignments to delete
     */
    where?: AssignmentWhereInput
    /**
     * Limit how many Assignments to delete.
     */
    limit?: number
  }

  /**
   * Assignment.sessions
   */
  export type Assignment$sessionsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    cursor?: SessionWhereUniqueInput
    take?: number
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Assignment.reviews
   */
  export type Assignment$reviewsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    cursor?: ReviewWhereUniqueInput
    take?: number
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Assignment without action
   */
  export type AssignmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Assignment
     */
    select?: AssignmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Assignment
     */
    omit?: AssignmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: AssignmentInclude<ExtArgs> | null
  }


  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionAvgAggregateOutputType = {
    duration: number | null
  }

  export type SessionSumAggregateOutputType = {
    duration: number | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    scheduledAt: Date | null
    duration: number | null
    status: $Enums.SessionStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    scheduledAt: Date | null
    duration: number | null
    status: $Enums.SessionStatus | null
    notes: string | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    assignmentId: number
    scheduledAt: number
    duration: number
    status: number
    notes: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type SessionAvgAggregateInputType = {
    duration?: true
  }

  export type SessionSumAggregateInputType = {
    duration?: true
  }

  export type SessionMinAggregateInputType = {
    id?: true
    assignmentId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    assignmentId?: true
    scheduledAt?: true
    duration?: true
    status?: true
    notes?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Session to aggregate.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Sessions
    **/
    _count?: true | SessionCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: SessionAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: SessionSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: SessionMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: SessionMaxAggregateInputType
  }

  export type GetSessionAggregateType<T extends SessionAggregateArgs> = {
        [P in keyof T & keyof AggregateSession]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateSession[P]>
      : GetScalarType<T[P], AggregateSession[P]>
  }




  export type SessionGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _avg?: SessionAvgAggregateInputType
    _sum?: SessionSumAggregateInputType
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    assignmentId: string
    scheduledAt: Date
    duration: number
    status: $Enums.SessionStatus
    notes: string | null
    createdAt: Date
    updatedAt: Date
    _count: SessionCountAggregateOutputType | null
    _avg: SessionAvgAggregateOutputType | null
    _sum: SessionSumAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  type GetSessionGroupByPayload<T extends SessionGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<SessionGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof SessionGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], SessionGroupByOutputType[P]>
            : GetScalarType<T[P], SessionGroupByOutputType[P]>
        }
      >
    >


  export type SessionSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    scheduledAt?: boolean
    duration?: boolean
    status?: boolean
    notes?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type SessionOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "scheduledAt" | "duration" | "status" | "notes" | "createdAt" | "updatedAt", ExtArgs["result"]["session"]>
  export type SessionInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }
  export type SessionIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }
  export type SessionIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
  }

  export type $SessionPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      scheduledAt: Date
      duration: number
      status: $Enums.SessionStatus
      notes: string | null
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }

  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<SessionFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Session'], meta: { name: 'Session' } }
    /**
     * Find zero or one Session that matches the filter.
     * @param {SessionFindUniqueArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends SessionFindUniqueArgs>(args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Session that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs>(args: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends SessionFindFirstArgs>(args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Session that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindFirstOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs>(args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Sessions
     * const sessions = await prisma.session.findMany()
     * 
     * // Get first 10 Sessions
     * const sessions = await prisma.session.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const sessionWithIdOnly = await prisma.session.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends SessionFindManyArgs>(args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Session.
     * @param {SessionCreateArgs} args - Arguments to create a Session.
     * @example
     * // Create one Session
     * const Session = await prisma.session.create({
     *   data: {
     *     // ... data to create a Session
     *   }
     * })
     * 
     */
    create<T extends SessionCreateArgs>(args: SelectSubset<T, SessionCreateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Sessions.
     * @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends SessionCreateManyArgs>(args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Sessions and returns the data saved in the database.
     * @param {SessionCreateManyAndReturnArgs} args - Arguments to create many Sessions.
     * @example
     * // Create many Sessions
     * const session = await prisma.session.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends SessionCreateManyAndReturnArgs>(args?: SelectSubset<T, SessionCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Session.
     * @param {SessionDeleteArgs} args - Arguments to delete one Session.
     * @example
     * // Delete one Session
     * const Session = await prisma.session.delete({
     *   where: {
     *     // ... filter to delete one Session
     *   }
     * })
     * 
     */
    delete<T extends SessionDeleteArgs>(args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Session.
     * @param {SessionUpdateArgs} args - Arguments to update one Session.
     * @example
     * // Update one Session
     * const session = await prisma.session.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends SessionUpdateArgs>(args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Sessions.
     * @param {SessionDeleteManyArgs} args - Arguments to filter Sessions to delete.
     * @example
     * // Delete a few Sessions
     * const { count } = await prisma.session.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends SessionDeleteManyArgs>(args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends SessionUpdateManyArgs>(args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Sessions and returns the data updated in the database.
     * @param {SessionUpdateManyAndReturnArgs} args - Arguments to update many Sessions.
     * @example
     * // Update many Sessions
     * const session = await prisma.session.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Sessions and only return the `id`
     * const sessionWithIdOnly = await prisma.session.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends SessionUpdateManyAndReturnArgs>(args: SelectSubset<T, SessionUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Session.
     * @param {SessionUpsertArgs} args - Arguments to update or create a Session.
     * @example
     * // Update or create a Session
     * const session = await prisma.session.upsert({
     *   create: {
     *     // ... data to create a Session
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Session we want to update
     *   }
     * })
     */
    upsert<T extends SessionUpsertArgs>(args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Sessions.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionCountArgs} args - Arguments to filter Sessions to count.
     * @example
     * // Count the number of Sessions
     * const count = await prisma.session.count({
     *   where: {
     *     // ... the filter for the Sessions we want to count
     *   }
     * })
    **/
    count<T extends SessionCountArgs>(
      args?: Subset<T, SessionCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], SessionCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends SessionAggregateArgs>(args: Subset<T, SessionAggregateArgs>): Prisma.PrismaPromise<GetSessionAggregateType<T>>

    /**
     * Group by Session.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends SessionGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: SessionGroupByArgs['orderBy'] }
        : { orderBy?: SessionGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, SessionGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetSessionGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Session model
   */
  readonly fields: SessionFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Session.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Session model
   */
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly assignmentId: FieldRef<"Session", 'String'>
    readonly scheduledAt: FieldRef<"Session", 'DateTime'>
    readonly duration: FieldRef<"Session", 'Int'>
    readonly status: FieldRef<"Session", 'SessionStatus'>
    readonly notes: FieldRef<"Session", 'String'>
    readonly createdAt: FieldRef<"Session", 'DateTime'>
    readonly updatedAt: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findUniqueOrThrow
   */
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session findFirst
   */
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findFirstOrThrow
   */
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Session to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Sessions.
     */
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session findMany
   */
  export type SessionFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter, which Sessions to fetch.
     */
    where?: SessionWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Sessions to fetch.
     */
    orderBy?: SessionOrderByWithRelationInput | SessionOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Sessions.
     */
    cursor?: SessionWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Sessions from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Sessions.
     */
    skip?: number
    distinct?: SessionScalarFieldEnum | SessionScalarFieldEnum[]
  }

  /**
   * Session create
   */
  export type SessionCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to create a Session.
     */
    data: XOR<SessionCreateInput, SessionUncheckedCreateInput>
  }

  /**
   * Session createMany
   */
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Session createManyAndReturn
   */
  export type SessionCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The data needed to update a Session.
     */
    data: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
    /**
     * Choose, which Session to update.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session updateMany
   */
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
  }

  /**
   * Session updateManyAndReturn
   */
  export type SessionUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * The filter to search for the Session to update in case it exists.
     */
    where: SessionWhereUniqueInput
    /**
     * In case the Session found by the `where` argument doesn't exist, create a new Session with this data.
     */
    create: XOR<SessionCreateInput, SessionUncheckedCreateInput>
    /**
     * In case the Session was found with the provided `where` argument, update it with this data.
     */
    update: XOR<SessionUpdateInput, SessionUncheckedUpdateInput>
  }

  /**
   * Session delete
   */
  export type SessionDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
    /**
     * Filter which Session to delete.
     */
    where: SessionWhereUniqueInput
  }

  /**
   * Session deleteMany
   */
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
    /**
     * Limit how many Sessions to delete.
     */
    limit?: number
  }

  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Session
     */
    omit?: SessionOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: SessionInclude<ExtArgs> | null
  }


  /**
   * Model Review
   */

  export type AggregateReview = {
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  export type ReviewAvgAggregateOutputType = {
    rating: number | null
  }

  export type ReviewSumAggregateOutputType = {
    rating: number | null
  }

  export type ReviewMinAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    reviewerId: string | null
    revieweeId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewMaxAggregateOutputType = {
    id: string | null
    assignmentId: string | null
    reviewerId: string | null
    revieweeId: string | null
    rating: number | null
    comment: string | null
    createdAt: Date | null
  }

  export type ReviewCountAggregateOutputType = {
    id: number
    assignmentId: number
    reviewerId: number
    revieweeId: number
    rating: number
    comment: number
    createdAt: number
    _all: number
  }


  export type ReviewAvgAggregateInputType = {
    rating?: true
  }

  export type ReviewSumAggregateInputType = {
    rating?: true
  }

  export type ReviewMinAggregateInputType = {
    id?: true
    assignmentId?: true
    reviewerId?: true
    revieweeId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewMaxAggregateInputType = {
    id?: true
    assignmentId?: true
    reviewerId?: true
    revieweeId?: true
    rating?: true
    comment?: true
    createdAt?: true
  }

  export type ReviewCountAggregateInputType = {
    id?: true
    assignmentId?: true
    reviewerId?: true
    revieweeId?: true
    rating?: true
    comment?: true
    createdAt?: true
    _all?: true
  }

  export type ReviewAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Review to aggregate.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Reviews
    **/
    _count?: true | ReviewCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: ReviewAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: ReviewSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: ReviewMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: ReviewMaxAggregateInputType
  }

  export type GetReviewAggregateType<T extends ReviewAggregateArgs> = {
        [P in keyof T & keyof AggregateReview]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateReview[P]>
      : GetScalarType<T[P], AggregateReview[P]>
  }




  export type ReviewGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: ReviewWhereInput
    orderBy?: ReviewOrderByWithAggregationInput | ReviewOrderByWithAggregationInput[]
    by: ReviewScalarFieldEnum[] | ReviewScalarFieldEnum
    having?: ReviewScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: ReviewCountAggregateInputType | true
    _avg?: ReviewAvgAggregateInputType
    _sum?: ReviewSumAggregateInputType
    _min?: ReviewMinAggregateInputType
    _max?: ReviewMaxAggregateInputType
  }

  export type ReviewGroupByOutputType = {
    id: string
    assignmentId: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment: string | null
    createdAt: Date
    _count: ReviewCountAggregateOutputType | null
    _avg: ReviewAvgAggregateOutputType | null
    _sum: ReviewSumAggregateOutputType | null
    _min: ReviewMinAggregateOutputType | null
    _max: ReviewMaxAggregateOutputType | null
  }

  type GetReviewGroupByPayload<T extends ReviewGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<ReviewGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof ReviewGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], ReviewGroupByOutputType[P]>
            : GetScalarType<T[P], ReviewGroupByOutputType[P]>
        }
      >
    >


  export type ReviewSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewerVolunteer?: boolean | Review$reviewerVolunteerArgs<ExtArgs>
    revieweeVolunteer?: boolean | Review$revieweeVolunteerArgs<ExtArgs>
    reviewerOrganization?: boolean | Review$reviewerOrganizationArgs<ExtArgs>
    revieweeOrganization?: boolean | Review$revieweeOrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewerVolunteer?: boolean | Review$reviewerVolunteerArgs<ExtArgs>
    revieweeVolunteer?: boolean | Review$revieweeVolunteerArgs<ExtArgs>
    reviewerOrganization?: boolean | Review$reviewerOrganizationArgs<ExtArgs>
    revieweeOrganization?: boolean | Review$revieweeOrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    assignmentId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewerVolunteer?: boolean | Review$reviewerVolunteerArgs<ExtArgs>
    revieweeVolunteer?: boolean | Review$revieweeVolunteerArgs<ExtArgs>
    reviewerOrganization?: boolean | Review$reviewerOrganizationArgs<ExtArgs>
    revieweeOrganization?: boolean | Review$revieweeOrganizationArgs<ExtArgs>
  }, ExtArgs["result"]["review"]>

  export type ReviewSelectScalar = {
    id?: boolean
    assignmentId?: boolean
    reviewerId?: boolean
    revieweeId?: boolean
    rating?: boolean
    comment?: boolean
    createdAt?: boolean
  }

  export type ReviewOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "assignmentId" | "reviewerId" | "revieweeId" | "rating" | "comment" | "createdAt", ExtArgs["result"]["review"]>
  export type ReviewInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewerVolunteer?: boolean | Review$reviewerVolunteerArgs<ExtArgs>
    revieweeVolunteer?: boolean | Review$revieweeVolunteerArgs<ExtArgs>
    reviewerOrganization?: boolean | Review$reviewerOrganizationArgs<ExtArgs>
    revieweeOrganization?: boolean | Review$revieweeOrganizationArgs<ExtArgs>
  }
  export type ReviewIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewerVolunteer?: boolean | Review$reviewerVolunteerArgs<ExtArgs>
    revieweeVolunteer?: boolean | Review$revieweeVolunteerArgs<ExtArgs>
    reviewerOrganization?: boolean | Review$reviewerOrganizationArgs<ExtArgs>
    revieweeOrganization?: boolean | Review$revieweeOrganizationArgs<ExtArgs>
  }
  export type ReviewIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    assignment?: boolean | AssignmentDefaultArgs<ExtArgs>
    reviewerVolunteer?: boolean | Review$reviewerVolunteerArgs<ExtArgs>
    revieweeVolunteer?: boolean | Review$revieweeVolunteerArgs<ExtArgs>
    reviewerOrganization?: boolean | Review$reviewerOrganizationArgs<ExtArgs>
    revieweeOrganization?: boolean | Review$revieweeOrganizationArgs<ExtArgs>
  }

  export type $ReviewPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Review"
    objects: {
      assignment: Prisma.$AssignmentPayload<ExtArgs>
      reviewerVolunteer: Prisma.$VolunteerPayload<ExtArgs> | null
      revieweeVolunteer: Prisma.$VolunteerPayload<ExtArgs> | null
      reviewerOrganization: Prisma.$OrganizationPayload<ExtArgs> | null
      revieweeOrganization: Prisma.$OrganizationPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      assignmentId: string
      reviewerId: string
      revieweeId: string
      rating: number
      comment: string | null
      createdAt: Date
    }, ExtArgs["result"]["review"]>
    composites: {}
  }

  type ReviewGetPayload<S extends boolean | null | undefined | ReviewDefaultArgs> = $Result.GetResult<Prisma.$ReviewPayload, S>

  type ReviewCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<ReviewFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: ReviewCountAggregateInputType | true
    }

  export interface ReviewDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Review'], meta: { name: 'Review' } }
    /**
     * Find zero or one Review that matches the filter.
     * @param {ReviewFindUniqueArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends ReviewFindUniqueArgs>(args: SelectSubset<T, ReviewFindUniqueArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Review that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {ReviewFindUniqueOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends ReviewFindUniqueOrThrowArgs>(args: SelectSubset<T, ReviewFindUniqueOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends ReviewFindFirstArgs>(args?: SelectSubset<T, ReviewFindFirstArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Review that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindFirstOrThrowArgs} args - Arguments to find a Review
     * @example
     * // Get one Review
     * const review = await prisma.review.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends ReviewFindFirstOrThrowArgs>(args?: SelectSubset<T, ReviewFindFirstOrThrowArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Reviews that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Reviews
     * const reviews = await prisma.review.findMany()
     * 
     * // Get first 10 Reviews
     * const reviews = await prisma.review.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const reviewWithIdOnly = await prisma.review.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends ReviewFindManyArgs>(args?: SelectSubset<T, ReviewFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Review.
     * @param {ReviewCreateArgs} args - Arguments to create a Review.
     * @example
     * // Create one Review
     * const Review = await prisma.review.create({
     *   data: {
     *     // ... data to create a Review
     *   }
     * })
     * 
     */
    create<T extends ReviewCreateArgs>(args: SelectSubset<T, ReviewCreateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Reviews.
     * @param {ReviewCreateManyArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends ReviewCreateManyArgs>(args?: SelectSubset<T, ReviewCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Reviews and returns the data saved in the database.
     * @param {ReviewCreateManyAndReturnArgs} args - Arguments to create many Reviews.
     * @example
     * // Create many Reviews
     * const review = await prisma.review.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends ReviewCreateManyAndReturnArgs>(args?: SelectSubset<T, ReviewCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Review.
     * @param {ReviewDeleteArgs} args - Arguments to delete one Review.
     * @example
     * // Delete one Review
     * const Review = await prisma.review.delete({
     *   where: {
     *     // ... filter to delete one Review
     *   }
     * })
     * 
     */
    delete<T extends ReviewDeleteArgs>(args: SelectSubset<T, ReviewDeleteArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Review.
     * @param {ReviewUpdateArgs} args - Arguments to update one Review.
     * @example
     * // Update one Review
     * const review = await prisma.review.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends ReviewUpdateArgs>(args: SelectSubset<T, ReviewUpdateArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Reviews.
     * @param {ReviewDeleteManyArgs} args - Arguments to filter Reviews to delete.
     * @example
     * // Delete a few Reviews
     * const { count } = await prisma.review.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends ReviewDeleteManyArgs>(args?: SelectSubset<T, ReviewDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends ReviewUpdateManyArgs>(args: SelectSubset<T, ReviewUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Reviews and returns the data updated in the database.
     * @param {ReviewUpdateManyAndReturnArgs} args - Arguments to update many Reviews.
     * @example
     * // Update many Reviews
     * const review = await prisma.review.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Reviews and only return the `id`
     * const reviewWithIdOnly = await prisma.review.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends ReviewUpdateManyAndReturnArgs>(args: SelectSubset<T, ReviewUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Review.
     * @param {ReviewUpsertArgs} args - Arguments to update or create a Review.
     * @example
     * // Update or create a Review
     * const review = await prisma.review.upsert({
     *   create: {
     *     // ... data to create a Review
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Review we want to update
     *   }
     * })
     */
    upsert<T extends ReviewUpsertArgs>(args: SelectSubset<T, ReviewUpsertArgs<ExtArgs>>): Prisma__ReviewClient<$Result.GetResult<Prisma.$ReviewPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Reviews.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewCountArgs} args - Arguments to filter Reviews to count.
     * @example
     * // Count the number of Reviews
     * const count = await prisma.review.count({
     *   where: {
     *     // ... the filter for the Reviews we want to count
     *   }
     * })
    **/
    count<T extends ReviewCountArgs>(
      args?: Subset<T, ReviewCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], ReviewCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends ReviewAggregateArgs>(args: Subset<T, ReviewAggregateArgs>): Prisma.PrismaPromise<GetReviewAggregateType<T>>

    /**
     * Group by Review.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {ReviewGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends ReviewGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: ReviewGroupByArgs['orderBy'] }
        : { orderBy?: ReviewGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, ReviewGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetReviewGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Review model
   */
  readonly fields: ReviewFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Review.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__ReviewClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    assignment<T extends AssignmentDefaultArgs<ExtArgs> = {}>(args?: Subset<T, AssignmentDefaultArgs<ExtArgs>>): Prisma__AssignmentClient<$Result.GetResult<Prisma.$AssignmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    reviewerVolunteer<T extends Review$reviewerVolunteerArgs<ExtArgs> = {}>(args?: Subset<T, Review$reviewerVolunteerArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    revieweeVolunteer<T extends Review$revieweeVolunteerArgs<ExtArgs> = {}>(args?: Subset<T, Review$revieweeVolunteerArgs<ExtArgs>>): Prisma__VolunteerClient<$Result.GetResult<Prisma.$VolunteerPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    reviewerOrganization<T extends Review$reviewerOrganizationArgs<ExtArgs> = {}>(args?: Subset<T, Review$reviewerOrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    revieweeOrganization<T extends Review$revieweeOrganizationArgs<ExtArgs> = {}>(args?: Subset<T, Review$revieweeOrganizationArgs<ExtArgs>>): Prisma__OrganizationClient<$Result.GetResult<Prisma.$OrganizationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Review model
   */
  interface ReviewFieldRefs {
    readonly id: FieldRef<"Review", 'String'>
    readonly assignmentId: FieldRef<"Review", 'String'>
    readonly reviewerId: FieldRef<"Review", 'String'>
    readonly revieweeId: FieldRef<"Review", 'String'>
    readonly rating: FieldRef<"Review", 'Int'>
    readonly comment: FieldRef<"Review", 'String'>
    readonly createdAt: FieldRef<"Review", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Review findUnique
   */
  export type ReviewFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findUniqueOrThrow
   */
  export type ReviewFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review findFirst
   */
  export type ReviewFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findFirstOrThrow
   */
  export type ReviewFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Review to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Reviews.
     */
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review findMany
   */
  export type ReviewFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter, which Reviews to fetch.
     */
    where?: ReviewWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Reviews to fetch.
     */
    orderBy?: ReviewOrderByWithRelationInput | ReviewOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Reviews.
     */
    cursor?: ReviewWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Reviews from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Reviews.
     */
    skip?: number
    distinct?: ReviewScalarFieldEnum | ReviewScalarFieldEnum[]
  }

  /**
   * Review create
   */
  export type ReviewCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to create a Review.
     */
    data: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
  }

  /**
   * Review createMany
   */
  export type ReviewCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Review createManyAndReturn
   */
  export type ReviewCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to create many Reviews.
     */
    data: ReviewCreateManyInput | ReviewCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review update
   */
  export type ReviewUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The data needed to update a Review.
     */
    data: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
    /**
     * Choose, which Review to update.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review updateMany
   */
  export type ReviewUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
  }

  /**
   * Review updateManyAndReturn
   */
  export type ReviewUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * The data used to update Reviews.
     */
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyInput>
    /**
     * Filter which Reviews to update
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Review upsert
   */
  export type ReviewUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * The filter to search for the Review to update in case it exists.
     */
    where: ReviewWhereUniqueInput
    /**
     * In case the Review found by the `where` argument doesn't exist, create a new Review with this data.
     */
    create: XOR<ReviewCreateInput, ReviewUncheckedCreateInput>
    /**
     * In case the Review was found with the provided `where` argument, update it with this data.
     */
    update: XOR<ReviewUpdateInput, ReviewUncheckedUpdateInput>
  }

  /**
   * Review delete
   */
  export type ReviewDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
    /**
     * Filter which Review to delete.
     */
    where: ReviewWhereUniqueInput
  }

  /**
   * Review deleteMany
   */
  export type ReviewDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Reviews to delete
     */
    where?: ReviewWhereInput
    /**
     * Limit how many Reviews to delete.
     */
    limit?: number
  }

  /**
   * Review.reviewerVolunteer
   */
  export type Review$reviewerVolunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
  }

  /**
   * Review.revieweeVolunteer
   */
  export type Review$revieweeVolunteerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Volunteer
     */
    select?: VolunteerSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Volunteer
     */
    omit?: VolunteerOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: VolunteerInclude<ExtArgs> | null
    where?: VolunteerWhereInput
  }

  /**
   * Review.reviewerOrganization
   */
  export type Review$reviewerOrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Review.revieweeOrganization
   */
  export type Review$revieweeOrganizationArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Organization
     */
    select?: OrganizationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Organization
     */
    omit?: OrganizationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: OrganizationInclude<ExtArgs> | null
    where?: OrganizationWhereInput
  }

  /**
   * Review without action
   */
  export type ReviewDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Review
     */
    select?: ReviewSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Review
     */
    omit?: ReviewOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: ReviewInclude<ExtArgs> | null
  }


  /**
   * Model Message
   */

  export type AggregateMessage = {
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  export type MessageMinAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    subject: string | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageMaxAggregateOutputType = {
    id: string | null
    senderId: string | null
    receiverId: string | null
    subject: string | null
    content: string | null
    isRead: boolean | null
    createdAt: Date | null
  }

  export type MessageCountAggregateOutputType = {
    id: number
    senderId: number
    receiverId: number
    subject: number
    content: number
    isRead: number
    createdAt: number
    _all: number
  }


  export type MessageMinAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    subject?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageMaxAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    subject?: true
    content?: true
    isRead?: true
    createdAt?: true
  }

  export type MessageCountAggregateInputType = {
    id?: true
    senderId?: true
    receiverId?: true
    subject?: true
    content?: true
    isRead?: true
    createdAt?: true
    _all?: true
  }

  export type MessageAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Message to aggregate.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Messages
    **/
    _count?: true | MessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageMaxAggregateInputType
  }

  export type GetMessageAggregateType<T extends MessageAggregateArgs> = {
        [P in keyof T & keyof AggregateMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessage[P]>
      : GetScalarType<T[P], AggregateMessage[P]>
  }




  export type MessageGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: MessageWhereInput
    orderBy?: MessageOrderByWithAggregationInput | MessageOrderByWithAggregationInput[]
    by: MessageScalarFieldEnum[] | MessageScalarFieldEnum
    having?: MessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageCountAggregateInputType | true
    _min?: MessageMinAggregateInputType
    _max?: MessageMaxAggregateInputType
  }

  export type MessageGroupByOutputType = {
    id: string
    senderId: string
    receiverId: string
    subject: string | null
    content: string
    isRead: boolean
    createdAt: Date
    _count: MessageCountAggregateOutputType | null
    _min: MessageMinAggregateOutputType | null
    _max: MessageMaxAggregateOutputType | null
  }

  type GetMessageGroupByPayload<T extends MessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageGroupByOutputType[P]>
            : GetScalarType<T[P], MessageGroupByOutputType[P]>
        }
      >
    >


  export type MessageSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    subject?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    sender?: boolean | ProfileDefaultArgs<ExtArgs>
    receiver?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    subject?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    sender?: boolean | ProfileDefaultArgs<ExtArgs>
    receiver?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    subject?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
    sender?: boolean | ProfileDefaultArgs<ExtArgs>
    receiver?: boolean | ProfileDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["message"]>

  export type MessageSelectScalar = {
    id?: boolean
    senderId?: boolean
    receiverId?: boolean
    subject?: boolean
    content?: boolean
    isRead?: boolean
    createdAt?: boolean
  }

  export type MessageOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "senderId" | "receiverId" | "subject" | "content" | "isRead" | "createdAt", ExtArgs["result"]["message"]>
  export type MessageInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | ProfileDefaultArgs<ExtArgs>
    receiver?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type MessageIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | ProfileDefaultArgs<ExtArgs>
    receiver?: boolean | ProfileDefaultArgs<ExtArgs>
  }
  export type MessageIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    sender?: boolean | ProfileDefaultArgs<ExtArgs>
    receiver?: boolean | ProfileDefaultArgs<ExtArgs>
  }

  export type $MessagePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Message"
    objects: {
      sender: Prisma.$ProfilePayload<ExtArgs>
      receiver: Prisma.$ProfilePayload<ExtArgs>
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      senderId: string
      receiverId: string
      subject: string | null
      content: string
      isRead: boolean
      createdAt: Date
    }, ExtArgs["result"]["message"]>
    composites: {}
  }

  type MessageGetPayload<S extends boolean | null | undefined | MessageDefaultArgs> = $Result.GetResult<Prisma.$MessagePayload, S>

  type MessageCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<MessageFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: MessageCountAggregateInputType | true
    }

  export interface MessageDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Message'], meta: { name: 'Message' } }
    /**
     * Find zero or one Message that matches the filter.
     * @param {MessageFindUniqueArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends MessageFindUniqueArgs>(args: SelectSubset<T, MessageFindUniqueArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Message that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {MessageFindUniqueOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends MessageFindUniqueOrThrowArgs>(args: SelectSubset<T, MessageFindUniqueOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends MessageFindFirstArgs>(args?: SelectSubset<T, MessageFindFirstArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Message that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindFirstOrThrowArgs} args - Arguments to find a Message
     * @example
     * // Get one Message
     * const message = await prisma.message.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends MessageFindFirstOrThrowArgs>(args?: SelectSubset<T, MessageFindFirstOrThrowArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Messages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Messages
     * const messages = await prisma.message.findMany()
     * 
     * // Get first 10 Messages
     * const messages = await prisma.message.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageWithIdOnly = await prisma.message.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends MessageFindManyArgs>(args?: SelectSubset<T, MessageFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Message.
     * @param {MessageCreateArgs} args - Arguments to create a Message.
     * @example
     * // Create one Message
     * const Message = await prisma.message.create({
     *   data: {
     *     // ... data to create a Message
     *   }
     * })
     * 
     */
    create<T extends MessageCreateArgs>(args: SelectSubset<T, MessageCreateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Messages.
     * @param {MessageCreateManyArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends MessageCreateManyArgs>(args?: SelectSubset<T, MessageCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Messages and returns the data saved in the database.
     * @param {MessageCreateManyAndReturnArgs} args - Arguments to create many Messages.
     * @example
     * // Create many Messages
     * const message = await prisma.message.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends MessageCreateManyAndReturnArgs>(args?: SelectSubset<T, MessageCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Message.
     * @param {MessageDeleteArgs} args - Arguments to delete one Message.
     * @example
     * // Delete one Message
     * const Message = await prisma.message.delete({
     *   where: {
     *     // ... filter to delete one Message
     *   }
     * })
     * 
     */
    delete<T extends MessageDeleteArgs>(args: SelectSubset<T, MessageDeleteArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Message.
     * @param {MessageUpdateArgs} args - Arguments to update one Message.
     * @example
     * // Update one Message
     * const message = await prisma.message.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends MessageUpdateArgs>(args: SelectSubset<T, MessageUpdateArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Messages.
     * @param {MessageDeleteManyArgs} args - Arguments to filter Messages to delete.
     * @example
     * // Delete a few Messages
     * const { count } = await prisma.message.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends MessageDeleteManyArgs>(args?: SelectSubset<T, MessageDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends MessageUpdateManyArgs>(args: SelectSubset<T, MessageUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Messages and returns the data updated in the database.
     * @param {MessageUpdateManyAndReturnArgs} args - Arguments to update many Messages.
     * @example
     * // Update many Messages
     * const message = await prisma.message.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Messages and only return the `id`
     * const messageWithIdOnly = await prisma.message.updateManyAndReturn({
     *   select: { id: true },
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    updateManyAndReturn<T extends MessageUpdateManyAndReturnArgs>(args: SelectSubset<T, MessageUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Message.
     * @param {MessageUpsertArgs} args - Arguments to update or create a Message.
     * @example
     * // Update or create a Message
     * const message = await prisma.message.upsert({
     *   create: {
     *     // ... data to create a Message
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Message we want to update
     *   }
     * })
     */
    upsert<T extends MessageUpsertArgs>(args: SelectSubset<T, MessageUpsertArgs<ExtArgs>>): Prisma__MessageClient<$Result.GetResult<Prisma.$MessagePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Messages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageCountArgs} args - Arguments to filter Messages to count.
     * @example
     * // Count the number of Messages
     * const count = await prisma.message.count({
     *   where: {
     *     // ... the filter for the Messages we want to count
     *   }
     * })
    **/
    count<T extends MessageCountArgs>(
      args?: Subset<T, MessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
     * @example
     * // Ordered by age ascending
     * // Where email contains prisma.io
     * // Limited to the 10 users
     * const aggregations = await prisma.user.aggregate({
     *   _avg: {
     *     age: true,
     *   },
     *   where: {
     *     email: {
     *       contains: "prisma.io",
     *     },
     *   },
     *   orderBy: {
     *     age: "asc",
     *   },
     *   take: 10,
     * })
    **/
    aggregate<T extends MessageAggregateArgs>(args: Subset<T, MessageAggregateArgs>): Prisma.PrismaPromise<GetMessageAggregateType<T>>

    /**
     * Group by Message.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageGroupByArgs} args - Group by arguments.
     * @example
     * // Group by city, order by createdAt, get count
     * const result = await prisma.user.groupBy({
     *   by: ['city', 'createdAt'],
     *   orderBy: {
     *     createdAt: true
     *   },
     *   _count: {
     *     _all: true
     *   },
     * })
     * 
    **/
    groupBy<
      T extends MessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageGroupByArgs['orderBy'] }
        : { orderBy?: MessageGroupByArgs['orderBy'] },
      OrderFields extends ExcludeUnderscoreKeys<Keys<MaybeTupleToUnion<T['orderBy']>>>,
      ByFields extends MaybeTupleToUnion<T['by']>,
      ByValid extends Has<ByFields, OrderFields>,
      HavingFields extends GetHavingFields<T['having']>,
      HavingValid extends Has<ByFields, HavingFields>,
      ByEmpty extends T['by'] extends never[] ? True : False,
      InputErrors extends ByEmpty extends True
      ? `Error: "by" must not be empty.`
      : HavingValid extends False
      ? {
          [P in HavingFields]: P extends ByFields
            ? never
            : P extends string
            ? `Error: Field "${P}" used in "having" needs to be provided in "by".`
            : [
                Error,
                'Field ',
                P,
                ` in "having" needs to be provided in "by"`,
              ]
        }[HavingFields]
      : 'take' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "take", you also need to provide "orderBy"'
      : 'skip' extends Keys<T>
      ? 'orderBy' extends Keys<T>
        ? ByValid extends True
          ? {}
          : {
              [P in OrderFields]: P extends ByFields
                ? never
                : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
            }[OrderFields]
        : 'Error: If you provide "skip", you also need to provide "orderBy"'
      : ByValid extends True
      ? {}
      : {
          [P in OrderFields]: P extends ByFields
            ? never
            : `Error: Field "${P}" in "orderBy" needs to be provided in "by"`
        }[OrderFields]
    >(args: SubsetIntersection<T, MessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Message model
   */
  readonly fields: MessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Message.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    sender<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    receiver<T extends ProfileDefaultArgs<ExtArgs> = {}>(args?: Subset<T, ProfileDefaultArgs<ExtArgs>>): Prisma__ProfileClient<$Result.GetResult<Prisma.$ProfilePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>
  }




  /**
   * Fields of the Message model
   */
  interface MessageFieldRefs {
    readonly id: FieldRef<"Message", 'String'>
    readonly senderId: FieldRef<"Message", 'String'>
    readonly receiverId: FieldRef<"Message", 'String'>
    readonly subject: FieldRef<"Message", 'String'>
    readonly content: FieldRef<"Message", 'String'>
    readonly isRead: FieldRef<"Message", 'Boolean'>
    readonly createdAt: FieldRef<"Message", 'DateTime'>
  }
    

  // Custom InputTypes
  /**
   * Message findUnique
   */
  export type MessageFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findUniqueOrThrow
   */
  export type MessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message findFirst
   */
  export type MessageFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findFirstOrThrow
   */
  export type MessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Message to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Messages.
     */
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message findMany
   */
  export type MessageFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter, which Messages to fetch.
     */
    where?: MessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Messages to fetch.
     */
    orderBy?: MessageOrderByWithRelationInput | MessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Messages.
     */
    cursor?: MessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Messages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Messages.
     */
    skip?: number
    distinct?: MessageScalarFieldEnum | MessageScalarFieldEnum[]
  }

  /**
   * Message create
   */
  export type MessageCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to create a Message.
     */
    data: XOR<MessageCreateInput, MessageUncheckedCreateInput>
  }

  /**
   * Message createMany
   */
  export type MessageCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Message createManyAndReturn
   */
  export type MessageCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to create many Messages.
     */
    data: MessageCreateManyInput | MessageCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message update
   */
  export type MessageUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The data needed to update a Message.
     */
    data: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
    /**
     * Choose, which Message to update.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message updateMany
   */
  export type MessageUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
  }

  /**
   * Message updateManyAndReturn
   */
  export type MessageUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * The data used to update Messages.
     */
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyInput>
    /**
     * Filter which Messages to update
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Message upsert
   */
  export type MessageUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * The filter to search for the Message to update in case it exists.
     */
    where: MessageWhereUniqueInput
    /**
     * In case the Message found by the `where` argument doesn't exist, create a new Message with this data.
     */
    create: XOR<MessageCreateInput, MessageUncheckedCreateInput>
    /**
     * In case the Message was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageUpdateInput, MessageUncheckedUpdateInput>
  }

  /**
   * Message delete
   */
  export type MessageDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
    /**
     * Filter which Message to delete.
     */
    where: MessageWhereUniqueInput
  }

  /**
   * Message deleteMany
   */
  export type MessageDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Messages to delete
     */
    where?: MessageWhereInput
    /**
     * Limit how many Messages to delete.
     */
    limit?: number
  }

  /**
   * Message without action
   */
  export type MessageDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Message
     */
    select?: MessageSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Message
     */
    omit?: MessageOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: MessageInclude<ExtArgs> | null
  }


  /**
   * Enums
   */

  export const TransactionIsolationLevel: {
    ReadUncommitted: 'ReadUncommitted',
    ReadCommitted: 'ReadCommitted',
    RepeatableRead: 'RepeatableRead',
    Serializable: 'Serializable'
  };

  export type TransactionIsolationLevel = (typeof TransactionIsolationLevel)[keyof typeof TransactionIsolationLevel]


  export const ProfileScalarFieldEnum: {
    id: 'id',
    email: 'email',
    fullName: 'fullName',
    userType: 'userType',
    avatar: 'avatar',
    bio: 'bio',
    phone: 'phone',
    location: 'location',
    website: 'website',
    verified: 'verified',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type ProfileScalarFieldEnum = (typeof ProfileScalarFieldEnum)[keyof typeof ProfileScalarFieldEnum]


  export const VolunteerScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    languages: 'languages',
    experience: 'experience',
    education: 'education',
    certifications: 'certifications',
    totalHours: 'totalHours',
    impactScore: 'impactScore',
    completedTasks: 'completedTasks',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type VolunteerScalarFieldEnum = (typeof VolunteerScalarFieldEnum)[keyof typeof VolunteerScalarFieldEnum]


  export const OrganizationScalarFieldEnum: {
    id: 'id',
    profileId: 'profileId',
    organizationName: 'organizationName',
    organizationType: 'organizationType',
    registrationNumber: 'registrationNumber',
    description: 'description',
    focusAreas: 'focusAreas',
    operatingRegions: 'operatingRegions',
    totalRequests: 'totalRequests',
    activeVolunteers: 'activeVolunteers',
    completedProjects: 'completedProjects',
    averageRating: 'averageRating',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OrganizationScalarFieldEnum = (typeof OrganizationScalarFieldEnum)[keyof typeof OrganizationScalarFieldEnum]


  export const OpportunityScalarFieldEnum: {
    id: 'id',
    organizationId: 'organizationId',
    title: 'title',
    description: 'description',
    category: 'category',
    type: 'type',
    urgency: 'urgency',
    skillsNeeded: 'skillsNeeded',
    timeCommitment: 'timeCommitment',
    location: 'location',
    isRemote: 'isRemote',
    requirements: 'requirements',
    benefits: 'benefits',
    startDate: 'startDate',
    endDate: 'endDate',
    maxVolunteers: 'maxVolunteers',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type OpportunityScalarFieldEnum = (typeof OpportunityScalarFieldEnum)[keyof typeof OpportunityScalarFieldEnum]


  export const VolunteerSkillScalarFieldEnum: {
    id: 'id',
    volunteerId: 'volunteerId',
    category: 'category',
    name: 'name',
    level: 'level',
    verified: 'verified',
    createdAt: 'createdAt'
  };

  export type VolunteerSkillScalarFieldEnum = (typeof VolunteerSkillScalarFieldEnum)[keyof typeof VolunteerSkillScalarFieldEnum]


  export const VolunteerAvailabilityScalarFieldEnum: {
    id: 'id',
    volunteerId: 'volunteerId',
    dayOfWeek: 'dayOfWeek',
    startTime: 'startTime',
    endTime: 'endTime',
    timezone: 'timezone',
    createdAt: 'createdAt'
  };

  export type VolunteerAvailabilityScalarFieldEnum = (typeof VolunteerAvailabilityScalarFieldEnum)[keyof typeof VolunteerAvailabilityScalarFieldEnum]


  export const ApplicationScalarFieldEnum: {
    id: 'id',
    opportunityId: 'opportunityId',
    volunteerId: 'volunteerId',
    organizationId: 'organizationId',
    coverLetter: 'coverLetter',
    status: 'status',
    appliedAt: 'appliedAt',
    reviewedAt: 'reviewedAt'
  };

  export type ApplicationScalarFieldEnum = (typeof ApplicationScalarFieldEnum)[keyof typeof ApplicationScalarFieldEnum]


  export const AssignmentScalarFieldEnum: {
    id: 'id',
    applicationId: 'applicationId',
    opportunityId: 'opportunityId',
    volunteerId: 'volunteerId',
    organizationId: 'organizationId',
    status: 'status',
    hoursLogged: 'hoursLogged',
    startDate: 'startDate',
    endDate: 'endDate',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type AssignmentScalarFieldEnum = (typeof AssignmentScalarFieldEnum)[keyof typeof AssignmentScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    scheduledAt: 'scheduledAt',
    duration: 'duration',
    status: 'status',
    notes: 'notes',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const ReviewScalarFieldEnum: {
    id: 'id',
    assignmentId: 'assignmentId',
    reviewerId: 'reviewerId',
    revieweeId: 'revieweeId',
    rating: 'rating',
    comment: 'comment',
    createdAt: 'createdAt'
  };

  export type ReviewScalarFieldEnum = (typeof ReviewScalarFieldEnum)[keyof typeof ReviewScalarFieldEnum]


  export const MessageScalarFieldEnum: {
    id: 'id',
    senderId: 'senderId',
    receiverId: 'receiverId',
    subject: 'subject',
    content: 'content',
    isRead: 'isRead',
    createdAt: 'createdAt'
  };

  export type MessageScalarFieldEnum = (typeof MessageScalarFieldEnum)[keyof typeof MessageScalarFieldEnum]


  export const SortOrder: {
    asc: 'asc',
    desc: 'desc'
  };

  export type SortOrder = (typeof SortOrder)[keyof typeof SortOrder]


  export const QueryMode: {
    default: 'default',
    insensitive: 'insensitive'
  };

  export type QueryMode = (typeof QueryMode)[keyof typeof QueryMode]


  export const NullsOrder: {
    first: 'first',
    last: 'last'
  };

  export type NullsOrder = (typeof NullsOrder)[keyof typeof NullsOrder]


  /**
   * Field references
   */


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'UserType'
   */
  export type EnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType'>
    


  /**
   * Reference to a field of type 'UserType[]'
   */
  export type ListEnumUserTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserType[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    


  /**
   * Reference to a field of type 'OpportunityCategory'
   */
  export type EnumOpportunityCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityCategory'>
    


  /**
   * Reference to a field of type 'OpportunityCategory[]'
   */
  export type ListEnumOpportunityCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityCategory[]'>
    


  /**
   * Reference to a field of type 'OpportunityType'
   */
  export type EnumOpportunityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityType'>
    


  /**
   * Reference to a field of type 'OpportunityType[]'
   */
  export type ListEnumOpportunityTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityType[]'>
    


  /**
   * Reference to a field of type 'UrgencyLevel'
   */
  export type EnumUrgencyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrgencyLevel'>
    


  /**
   * Reference to a field of type 'UrgencyLevel[]'
   */
  export type ListEnumUrgencyLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UrgencyLevel[]'>
    


  /**
   * Reference to a field of type 'OpportunityStatus'
   */
  export type EnumOpportunityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityStatus'>
    


  /**
   * Reference to a field of type 'OpportunityStatus[]'
   */
  export type ListEnumOpportunityStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'OpportunityStatus[]'>
    


  /**
   * Reference to a field of type 'SkillCategory'
   */
  export type EnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory'>
    


  /**
   * Reference to a field of type 'SkillCategory[]'
   */
  export type ListEnumSkillCategoryFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillCategory[]'>
    


  /**
   * Reference to a field of type 'SkillLevel'
   */
  export type EnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel'>
    


  /**
   * Reference to a field of type 'SkillLevel[]'
   */
  export type ListEnumSkillLevelFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SkillLevel[]'>
    


  /**
   * Reference to a field of type 'ApplicationStatus'
   */
  export type EnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus'>
    


  /**
   * Reference to a field of type 'ApplicationStatus[]'
   */
  export type ListEnumApplicationStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'ApplicationStatus[]'>
    


  /**
   * Reference to a field of type 'AssignmentStatus'
   */
  export type EnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus'>
    


  /**
   * Reference to a field of type 'AssignmentStatus[]'
   */
  export type ListEnumAssignmentStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'AssignmentStatus[]'>
    


  /**
   * Reference to a field of type 'SessionStatus'
   */
  export type EnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus'>
    


  /**
   * Reference to a field of type 'SessionStatus[]'
   */
  export type ListEnumSessionStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'SessionStatus[]'>
    
  /**
   * Deep Input Types
   */


  export type ProfileWhereInput = {
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    id?: UuidFilter<"Profile"> | string
    email?: StringFilter<"Profile"> | string
    fullName?: StringFilter<"Profile"> | string
    userType?: EnumUserTypeFilter<"Profile"> | $Enums.UserType
    avatar?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    location?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    verified?: BoolFilter<"Profile"> | boolean
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }

  export type ProfileOrderByWithRelationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    userType?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    volunteer?: VolunteerOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    sentMessages?: MessageOrderByRelationAggregateInput
    receivedMessages?: MessageOrderByRelationAggregateInput
  }

  export type ProfileWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: ProfileWhereInput | ProfileWhereInput[]
    OR?: ProfileWhereInput[]
    NOT?: ProfileWhereInput | ProfileWhereInput[]
    fullName?: StringFilter<"Profile"> | string
    userType?: EnumUserTypeFilter<"Profile"> | $Enums.UserType
    avatar?: StringNullableFilter<"Profile"> | string | null
    bio?: StringNullableFilter<"Profile"> | string | null
    phone?: StringNullableFilter<"Profile"> | string | null
    location?: StringNullableFilter<"Profile"> | string | null
    website?: StringNullableFilter<"Profile"> | string | null
    verified?: BoolFilter<"Profile"> | boolean
    createdAt?: DateTimeFilter<"Profile"> | Date | string
    updatedAt?: DateTimeFilter<"Profile"> | Date | string
    volunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    organization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    sentMessages?: MessageListRelationFilter
    receivedMessages?: MessageListRelationFilter
  }, "id" | "email">

  export type ProfileOrderByWithAggregationInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    userType?: SortOrder
    avatar?: SortOrderInput | SortOrder
    bio?: SortOrderInput | SortOrder
    phone?: SortOrderInput | SortOrder
    location?: SortOrderInput | SortOrder
    website?: SortOrderInput | SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: ProfileCountOrderByAggregateInput
    _max?: ProfileMaxOrderByAggregateInput
    _min?: ProfileMinOrderByAggregateInput
  }

  export type ProfileScalarWhereWithAggregatesInput = {
    AND?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    OR?: ProfileScalarWhereWithAggregatesInput[]
    NOT?: ProfileScalarWhereWithAggregatesInput | ProfileScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Profile"> | string
    email?: StringWithAggregatesFilter<"Profile"> | string
    fullName?: StringWithAggregatesFilter<"Profile"> | string
    userType?: EnumUserTypeWithAggregatesFilter<"Profile"> | $Enums.UserType
    avatar?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    bio?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    phone?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    location?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    website?: StringNullableWithAggregatesFilter<"Profile"> | string | null
    verified?: BoolWithAggregatesFilter<"Profile"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Profile"> | Date | string
  }

  export type VolunteerWhereInput = {
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    id?: UuidFilter<"Volunteer"> | string
    profileId?: UuidFilter<"Volunteer"> | string
    languages?: StringNullableListFilter<"Volunteer">
    experience?: StringNullableFilter<"Volunteer"> | string | null
    education?: StringNullableFilter<"Volunteer"> | string | null
    certifications?: StringNullableListFilter<"Volunteer">
    totalHours?: IntFilter<"Volunteer"> | number
    impactScore?: FloatFilter<"Volunteer"> | number
    completedTasks?: IntFilter<"Volunteer"> | number
    createdAt?: DateTimeFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeFilter<"Volunteer"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    skills?: VolunteerSkillListRelationFilter
    availability?: VolunteerAvailabilityListRelationFilter
    applications?: ApplicationListRelationFilter
    assignments?: AssignmentListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
  }

  export type VolunteerOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    languages?: SortOrder
    experience?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    certifications?: SortOrder
    totalHours?: SortOrder
    impactScore?: SortOrder
    completedTasks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    skills?: VolunteerSkillOrderByRelationAggregateInput
    availability?: VolunteerAvailabilityOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
  }

  export type VolunteerWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    AND?: VolunteerWhereInput | VolunteerWhereInput[]
    OR?: VolunteerWhereInput[]
    NOT?: VolunteerWhereInput | VolunteerWhereInput[]
    languages?: StringNullableListFilter<"Volunteer">
    experience?: StringNullableFilter<"Volunteer"> | string | null
    education?: StringNullableFilter<"Volunteer"> | string | null
    certifications?: StringNullableListFilter<"Volunteer">
    totalHours?: IntFilter<"Volunteer"> | number
    impactScore?: FloatFilter<"Volunteer"> | number
    completedTasks?: IntFilter<"Volunteer"> | number
    createdAt?: DateTimeFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeFilter<"Volunteer"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    skills?: VolunteerSkillListRelationFilter
    availability?: VolunteerAvailabilityListRelationFilter
    applications?: ApplicationListRelationFilter
    assignments?: AssignmentListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
  }, "id" | "profileId">

  export type VolunteerOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    languages?: SortOrder
    experience?: SortOrderInput | SortOrder
    education?: SortOrderInput | SortOrder
    certifications?: SortOrder
    totalHours?: SortOrder
    impactScore?: SortOrder
    completedTasks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: VolunteerCountOrderByAggregateInput
    _avg?: VolunteerAvgOrderByAggregateInput
    _max?: VolunteerMaxOrderByAggregateInput
    _min?: VolunteerMinOrderByAggregateInput
    _sum?: VolunteerSumOrderByAggregateInput
  }

  export type VolunteerScalarWhereWithAggregatesInput = {
    AND?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    OR?: VolunteerScalarWhereWithAggregatesInput[]
    NOT?: VolunteerScalarWhereWithAggregatesInput | VolunteerScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Volunteer"> | string
    profileId?: UuidWithAggregatesFilter<"Volunteer"> | string
    languages?: StringNullableListFilter<"Volunteer">
    experience?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    education?: StringNullableWithAggregatesFilter<"Volunteer"> | string | null
    certifications?: StringNullableListFilter<"Volunteer">
    totalHours?: IntWithAggregatesFilter<"Volunteer"> | number
    impactScore?: FloatWithAggregatesFilter<"Volunteer"> | number
    completedTasks?: IntWithAggregatesFilter<"Volunteer"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Volunteer"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Volunteer"> | Date | string
  }

  export type OrganizationWhereInput = {
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    id?: UuidFilter<"Organization"> | string
    profileId?: UuidFilter<"Organization"> | string
    organizationName?: StringFilter<"Organization"> | string
    organizationType?: StringFilter<"Organization"> | string
    registrationNumber?: StringNullableFilter<"Organization"> | string | null
    description?: StringNullableFilter<"Organization"> | string | null
    focusAreas?: StringNullableListFilter<"Organization">
    operatingRegions?: StringNullableListFilter<"Organization">
    totalRequests?: IntFilter<"Organization"> | number
    activeVolunteers?: IntFilter<"Organization"> | number
    completedProjects?: IntFilter<"Organization"> | number
    averageRating?: FloatFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    opportunities?: OpportunityListRelationFilter
    applications?: ApplicationListRelationFilter
    assignments?: AssignmentListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
  }

  export type OrganizationOrderByWithRelationInput = {
    id?: SortOrder
    profileId?: SortOrder
    organizationName?: SortOrder
    organizationType?: SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    focusAreas?: SortOrder
    operatingRegions?: SortOrder
    totalRequests?: SortOrder
    activeVolunteers?: SortOrder
    completedProjects?: SortOrder
    averageRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    profile?: ProfileOrderByWithRelationInput
    opportunities?: OpportunityOrderByRelationAggregateInput
    applications?: ApplicationOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
    reviewsReceived?: ReviewOrderByRelationAggregateInput
    reviewsGiven?: ReviewOrderByRelationAggregateInput
  }

  export type OrganizationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    profileId?: string
    AND?: OrganizationWhereInput | OrganizationWhereInput[]
    OR?: OrganizationWhereInput[]
    NOT?: OrganizationWhereInput | OrganizationWhereInput[]
    organizationName?: StringFilter<"Organization"> | string
    organizationType?: StringFilter<"Organization"> | string
    registrationNumber?: StringNullableFilter<"Organization"> | string | null
    description?: StringNullableFilter<"Organization"> | string | null
    focusAreas?: StringNullableListFilter<"Organization">
    operatingRegions?: StringNullableListFilter<"Organization">
    totalRequests?: IntFilter<"Organization"> | number
    activeVolunteers?: IntFilter<"Organization"> | number
    completedProjects?: IntFilter<"Organization"> | number
    averageRating?: FloatFilter<"Organization"> | number
    createdAt?: DateTimeFilter<"Organization"> | Date | string
    updatedAt?: DateTimeFilter<"Organization"> | Date | string
    profile?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    opportunities?: OpportunityListRelationFilter
    applications?: ApplicationListRelationFilter
    assignments?: AssignmentListRelationFilter
    reviewsReceived?: ReviewListRelationFilter
    reviewsGiven?: ReviewListRelationFilter
  }, "id" | "profileId">

  export type OrganizationOrderByWithAggregationInput = {
    id?: SortOrder
    profileId?: SortOrder
    organizationName?: SortOrder
    organizationType?: SortOrder
    registrationNumber?: SortOrderInput | SortOrder
    description?: SortOrderInput | SortOrder
    focusAreas?: SortOrder
    operatingRegions?: SortOrder
    totalRequests?: SortOrder
    activeVolunteers?: SortOrder
    completedProjects?: SortOrder
    averageRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OrganizationCountOrderByAggregateInput
    _avg?: OrganizationAvgOrderByAggregateInput
    _max?: OrganizationMaxOrderByAggregateInput
    _min?: OrganizationMinOrderByAggregateInput
    _sum?: OrganizationSumOrderByAggregateInput
  }

  export type OrganizationScalarWhereWithAggregatesInput = {
    AND?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    OR?: OrganizationScalarWhereWithAggregatesInput[]
    NOT?: OrganizationScalarWhereWithAggregatesInput | OrganizationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Organization"> | string
    profileId?: UuidWithAggregatesFilter<"Organization"> | string
    organizationName?: StringWithAggregatesFilter<"Organization"> | string
    organizationType?: StringWithAggregatesFilter<"Organization"> | string
    registrationNumber?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    description?: StringNullableWithAggregatesFilter<"Organization"> | string | null
    focusAreas?: StringNullableListFilter<"Organization">
    operatingRegions?: StringNullableListFilter<"Organization">
    totalRequests?: IntWithAggregatesFilter<"Organization"> | number
    activeVolunteers?: IntWithAggregatesFilter<"Organization"> | number
    completedProjects?: IntWithAggregatesFilter<"Organization"> | number
    averageRating?: FloatWithAggregatesFilter<"Organization"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Organization"> | Date | string
  }

  export type OpportunityWhereInput = {
    AND?: OpportunityWhereInput | OpportunityWhereInput[]
    OR?: OpportunityWhereInput[]
    NOT?: OpportunityWhereInput | OpportunityWhereInput[]
    id?: UuidFilter<"Opportunity"> | string
    organizationId?: UuidFilter<"Opportunity"> | string
    title?: StringFilter<"Opportunity"> | string
    description?: StringFilter<"Opportunity"> | string
    category?: EnumOpportunityCategoryFilter<"Opportunity"> | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFilter<"Opportunity"> | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFilter<"Opportunity"> | $Enums.UrgencyLevel
    skillsNeeded?: StringNullableListFilter<"Opportunity">
    timeCommitment?: StringFilter<"Opportunity"> | string
    location?: StringFilter<"Opportunity"> | string
    isRemote?: BoolFilter<"Opportunity"> | boolean
    requirements?: StringNullableFilter<"Opportunity"> | string | null
    benefits?: StringNullableFilter<"Opportunity"> | string | null
    startDate?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    maxVolunteers?: IntFilter<"Opportunity"> | number
    status?: EnumOpportunityStatusFilter<"Opportunity"> | $Enums.OpportunityStatus
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeFilter<"Opportunity"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    applications?: ApplicationListRelationFilter
    assignments?: AssignmentListRelationFilter
  }

  export type OpportunityOrderByWithRelationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    urgency?: SortOrder
    skillsNeeded?: SortOrder
    timeCommitment?: SortOrder
    location?: SortOrder
    isRemote?: SortOrder
    requirements?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    maxVolunteers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    organization?: OrganizationOrderByWithRelationInput
    applications?: ApplicationOrderByRelationAggregateInput
    assignments?: AssignmentOrderByRelationAggregateInput
  }

  export type OpportunityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: OpportunityWhereInput | OpportunityWhereInput[]
    OR?: OpportunityWhereInput[]
    NOT?: OpportunityWhereInput | OpportunityWhereInput[]
    organizationId?: UuidFilter<"Opportunity"> | string
    title?: StringFilter<"Opportunity"> | string
    description?: StringFilter<"Opportunity"> | string
    category?: EnumOpportunityCategoryFilter<"Opportunity"> | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFilter<"Opportunity"> | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFilter<"Opportunity"> | $Enums.UrgencyLevel
    skillsNeeded?: StringNullableListFilter<"Opportunity">
    timeCommitment?: StringFilter<"Opportunity"> | string
    location?: StringFilter<"Opportunity"> | string
    isRemote?: BoolFilter<"Opportunity"> | boolean
    requirements?: StringNullableFilter<"Opportunity"> | string | null
    benefits?: StringNullableFilter<"Opportunity"> | string | null
    startDate?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    maxVolunteers?: IntFilter<"Opportunity"> | number
    status?: EnumOpportunityStatusFilter<"Opportunity"> | $Enums.OpportunityStatus
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeFilter<"Opportunity"> | Date | string
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    applications?: ApplicationListRelationFilter
    assignments?: AssignmentListRelationFilter
  }, "id">

  export type OpportunityOrderByWithAggregationInput = {
    id?: SortOrder
    organizationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    urgency?: SortOrder
    skillsNeeded?: SortOrder
    timeCommitment?: SortOrder
    location?: SortOrder
    isRemote?: SortOrder
    requirements?: SortOrderInput | SortOrder
    benefits?: SortOrderInput | SortOrder
    startDate?: SortOrderInput | SortOrder
    endDate?: SortOrderInput | SortOrder
    maxVolunteers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: OpportunityCountOrderByAggregateInput
    _avg?: OpportunityAvgOrderByAggregateInput
    _max?: OpportunityMaxOrderByAggregateInput
    _min?: OpportunityMinOrderByAggregateInput
    _sum?: OpportunitySumOrderByAggregateInput
  }

  export type OpportunityScalarWhereWithAggregatesInput = {
    AND?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[]
    OR?: OpportunityScalarWhereWithAggregatesInput[]
    NOT?: OpportunityScalarWhereWithAggregatesInput | OpportunityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Opportunity"> | string
    organizationId?: UuidWithAggregatesFilter<"Opportunity"> | string
    title?: StringWithAggregatesFilter<"Opportunity"> | string
    description?: StringWithAggregatesFilter<"Opportunity"> | string
    category?: EnumOpportunityCategoryWithAggregatesFilter<"Opportunity"> | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeWithAggregatesFilter<"Opportunity"> | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelWithAggregatesFilter<"Opportunity"> | $Enums.UrgencyLevel
    skillsNeeded?: StringNullableListFilter<"Opportunity">
    timeCommitment?: StringWithAggregatesFilter<"Opportunity"> | string
    location?: StringWithAggregatesFilter<"Opportunity"> | string
    isRemote?: BoolWithAggregatesFilter<"Opportunity"> | boolean
    requirements?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    benefits?: StringNullableWithAggregatesFilter<"Opportunity"> | string | null
    startDate?: DateTimeNullableWithAggregatesFilter<"Opportunity"> | Date | string | null
    endDate?: DateTimeNullableWithAggregatesFilter<"Opportunity"> | Date | string | null
    maxVolunteers?: IntWithAggregatesFilter<"Opportunity"> | number
    status?: EnumOpportunityStatusWithAggregatesFilter<"Opportunity"> | $Enums.OpportunityStatus
    createdAt?: DateTimeWithAggregatesFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Opportunity"> | Date | string
  }

  export type VolunteerSkillWhereInput = {
    AND?: VolunteerSkillWhereInput | VolunteerSkillWhereInput[]
    OR?: VolunteerSkillWhereInput[]
    NOT?: VolunteerSkillWhereInput | VolunteerSkillWhereInput[]
    id?: UuidFilter<"VolunteerSkill"> | string
    volunteerId?: UuidFilter<"VolunteerSkill"> | string
    category?: EnumSkillCategoryFilter<"VolunteerSkill"> | $Enums.SkillCategory
    name?: StringFilter<"VolunteerSkill"> | string
    level?: EnumSkillLevelFilter<"VolunteerSkill"> | $Enums.SkillLevel
    verified?: BoolFilter<"VolunteerSkill"> | boolean
    createdAt?: DateTimeFilter<"VolunteerSkill"> | Date | string
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }

  export type VolunteerSkillOrderByWithRelationInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    category?: SortOrder
    name?: SortOrder
    level?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    volunteer?: VolunteerOrderByWithRelationInput
  }

  export type VolunteerSkillWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    volunteerId_category_name?: VolunteerSkillVolunteerIdCategoryNameCompoundUniqueInput
    AND?: VolunteerSkillWhereInput | VolunteerSkillWhereInput[]
    OR?: VolunteerSkillWhereInput[]
    NOT?: VolunteerSkillWhereInput | VolunteerSkillWhereInput[]
    volunteerId?: UuidFilter<"VolunteerSkill"> | string
    category?: EnumSkillCategoryFilter<"VolunteerSkill"> | $Enums.SkillCategory
    name?: StringFilter<"VolunteerSkill"> | string
    level?: EnumSkillLevelFilter<"VolunteerSkill"> | $Enums.SkillLevel
    verified?: BoolFilter<"VolunteerSkill"> | boolean
    createdAt?: DateTimeFilter<"VolunteerSkill"> | Date | string
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }, "id" | "volunteerId_category_name">

  export type VolunteerSkillOrderByWithAggregationInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    category?: SortOrder
    name?: SortOrder
    level?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    _count?: VolunteerSkillCountOrderByAggregateInput
    _max?: VolunteerSkillMaxOrderByAggregateInput
    _min?: VolunteerSkillMinOrderByAggregateInput
  }

  export type VolunteerSkillScalarWhereWithAggregatesInput = {
    AND?: VolunteerSkillScalarWhereWithAggregatesInput | VolunteerSkillScalarWhereWithAggregatesInput[]
    OR?: VolunteerSkillScalarWhereWithAggregatesInput[]
    NOT?: VolunteerSkillScalarWhereWithAggregatesInput | VolunteerSkillScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VolunteerSkill"> | string
    volunteerId?: UuidWithAggregatesFilter<"VolunteerSkill"> | string
    category?: EnumSkillCategoryWithAggregatesFilter<"VolunteerSkill"> | $Enums.SkillCategory
    name?: StringWithAggregatesFilter<"VolunteerSkill"> | string
    level?: EnumSkillLevelWithAggregatesFilter<"VolunteerSkill"> | $Enums.SkillLevel
    verified?: BoolWithAggregatesFilter<"VolunteerSkill"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"VolunteerSkill"> | Date | string
  }

  export type VolunteerAvailabilityWhereInput = {
    AND?: VolunteerAvailabilityWhereInput | VolunteerAvailabilityWhereInput[]
    OR?: VolunteerAvailabilityWhereInput[]
    NOT?: VolunteerAvailabilityWhereInput | VolunteerAvailabilityWhereInput[]
    id?: UuidFilter<"VolunteerAvailability"> | string
    volunteerId?: UuidFilter<"VolunteerAvailability"> | string
    dayOfWeek?: IntFilter<"VolunteerAvailability"> | number
    startTime?: StringFilter<"VolunteerAvailability"> | string
    endTime?: StringFilter<"VolunteerAvailability"> | string
    timezone?: StringFilter<"VolunteerAvailability"> | string
    createdAt?: DateTimeFilter<"VolunteerAvailability"> | Date | string
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }

  export type VolunteerAvailabilityOrderByWithRelationInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    volunteer?: VolunteerOrderByWithRelationInput
  }

  export type VolunteerAvailabilityWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: VolunteerAvailabilityWhereInput | VolunteerAvailabilityWhereInput[]
    OR?: VolunteerAvailabilityWhereInput[]
    NOT?: VolunteerAvailabilityWhereInput | VolunteerAvailabilityWhereInput[]
    volunteerId?: UuidFilter<"VolunteerAvailability"> | string
    dayOfWeek?: IntFilter<"VolunteerAvailability"> | number
    startTime?: StringFilter<"VolunteerAvailability"> | string
    endTime?: StringFilter<"VolunteerAvailability"> | string
    timezone?: StringFilter<"VolunteerAvailability"> | string
    createdAt?: DateTimeFilter<"VolunteerAvailability"> | Date | string
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
  }, "id">

  export type VolunteerAvailabilityOrderByWithAggregationInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
    _count?: VolunteerAvailabilityCountOrderByAggregateInput
    _avg?: VolunteerAvailabilityAvgOrderByAggregateInput
    _max?: VolunteerAvailabilityMaxOrderByAggregateInput
    _min?: VolunteerAvailabilityMinOrderByAggregateInput
    _sum?: VolunteerAvailabilitySumOrderByAggregateInput
  }

  export type VolunteerAvailabilityScalarWhereWithAggregatesInput = {
    AND?: VolunteerAvailabilityScalarWhereWithAggregatesInput | VolunteerAvailabilityScalarWhereWithAggregatesInput[]
    OR?: VolunteerAvailabilityScalarWhereWithAggregatesInput[]
    NOT?: VolunteerAvailabilityScalarWhereWithAggregatesInput | VolunteerAvailabilityScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"VolunteerAvailability"> | string
    volunteerId?: UuidWithAggregatesFilter<"VolunteerAvailability"> | string
    dayOfWeek?: IntWithAggregatesFilter<"VolunteerAvailability"> | number
    startTime?: StringWithAggregatesFilter<"VolunteerAvailability"> | string
    endTime?: StringWithAggregatesFilter<"VolunteerAvailability"> | string
    timezone?: StringWithAggregatesFilter<"VolunteerAvailability"> | string
    createdAt?: DateTimeWithAggregatesFilter<"VolunteerAvailability"> | Date | string
  }

  export type ApplicationWhereInput = {
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    id?: UuidFilter<"Application"> | string
    opportunityId?: UuidFilter<"Application"> | string
    volunteerId?: UuidFilter<"Application"> | string
    organizationId?: UuidFilter<"Application"> | string
    coverLetter?: StringNullableFilter<"Application"> | string | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    appliedAt?: DateTimeFilter<"Application"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    assignment?: XOR<AssignmentNullableScalarRelationFilter, AssignmentWhereInput> | null
  }

  export type ApplicationOrderByWithRelationInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    opportunity?: OpportunityOrderByWithRelationInput
    volunteer?: VolunteerOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    assignment?: AssignmentOrderByWithRelationInput
  }

  export type ApplicationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    opportunityId_volunteerId?: ApplicationOpportunityIdVolunteerIdCompoundUniqueInput
    AND?: ApplicationWhereInput | ApplicationWhereInput[]
    OR?: ApplicationWhereInput[]
    NOT?: ApplicationWhereInput | ApplicationWhereInput[]
    opportunityId?: UuidFilter<"Application"> | string
    volunteerId?: UuidFilter<"Application"> | string
    organizationId?: UuidFilter<"Application"> | string
    coverLetter?: StringNullableFilter<"Application"> | string | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    appliedAt?: DateTimeFilter<"Application"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    assignment?: XOR<AssignmentNullableScalarRelationFilter, AssignmentWhereInput> | null
  }, "id" | "opportunityId_volunteerId">

  export type ApplicationOrderByWithAggregationInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    coverLetter?: SortOrderInput | SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    reviewedAt?: SortOrderInput | SortOrder
    _count?: ApplicationCountOrderByAggregateInput
    _max?: ApplicationMaxOrderByAggregateInput
    _min?: ApplicationMinOrderByAggregateInput
  }

  export type ApplicationScalarWhereWithAggregatesInput = {
    AND?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    OR?: ApplicationScalarWhereWithAggregatesInput[]
    NOT?: ApplicationScalarWhereWithAggregatesInput | ApplicationScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Application"> | string
    opportunityId?: UuidWithAggregatesFilter<"Application"> | string
    volunteerId?: UuidWithAggregatesFilter<"Application"> | string
    organizationId?: UuidWithAggregatesFilter<"Application"> | string
    coverLetter?: StringNullableWithAggregatesFilter<"Application"> | string | null
    status?: EnumApplicationStatusWithAggregatesFilter<"Application"> | $Enums.ApplicationStatus
    appliedAt?: DateTimeWithAggregatesFilter<"Application"> | Date | string
    reviewedAt?: DateTimeNullableWithAggregatesFilter<"Application"> | Date | string | null
  }

  export type AssignmentWhereInput = {
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    id?: UuidFilter<"Assignment"> | string
    applicationId?: UuidFilter<"Assignment"> | string
    opportunityId?: UuidFilter<"Assignment"> | string
    volunteerId?: UuidFilter<"Assignment"> | string
    organizationId?: UuidFilter<"Assignment"> | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    hoursLogged?: IntFilter<"Assignment"> | number
    startDate?: DateTimeFilter<"Assignment"> | Date | string
    endDate?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    sessions?: SessionListRelationFilter
    reviews?: ReviewListRelationFilter
  }

  export type AssignmentOrderByWithRelationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    hoursLogged?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    application?: ApplicationOrderByWithRelationInput
    opportunity?: OpportunityOrderByWithRelationInput
    volunteer?: VolunteerOrderByWithRelationInput
    organization?: OrganizationOrderByWithRelationInput
    sessions?: SessionOrderByRelationAggregateInput
    reviews?: ReviewOrderByRelationAggregateInput
  }

  export type AssignmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    applicationId?: string
    AND?: AssignmentWhereInput | AssignmentWhereInput[]
    OR?: AssignmentWhereInput[]
    NOT?: AssignmentWhereInput | AssignmentWhereInput[]
    opportunityId?: UuidFilter<"Assignment"> | string
    volunteerId?: UuidFilter<"Assignment"> | string
    organizationId?: UuidFilter<"Assignment"> | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    hoursLogged?: IntFilter<"Assignment"> | number
    startDate?: DateTimeFilter<"Assignment"> | Date | string
    endDate?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
    application?: XOR<ApplicationScalarRelationFilter, ApplicationWhereInput>
    opportunity?: XOR<OpportunityScalarRelationFilter, OpportunityWhereInput>
    volunteer?: XOR<VolunteerScalarRelationFilter, VolunteerWhereInput>
    organization?: XOR<OrganizationScalarRelationFilter, OrganizationWhereInput>
    sessions?: SessionListRelationFilter
    reviews?: ReviewListRelationFilter
  }, "id" | "applicationId">

  export type AssignmentOrderByWithAggregationInput = {
    id?: SortOrder
    applicationId?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    hoursLogged?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: AssignmentCountOrderByAggregateInput
    _avg?: AssignmentAvgOrderByAggregateInput
    _max?: AssignmentMaxOrderByAggregateInput
    _min?: AssignmentMinOrderByAggregateInput
    _sum?: AssignmentSumOrderByAggregateInput
  }

  export type AssignmentScalarWhereWithAggregatesInput = {
    AND?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    OR?: AssignmentScalarWhereWithAggregatesInput[]
    NOT?: AssignmentScalarWhereWithAggregatesInput | AssignmentScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Assignment"> | string
    applicationId?: UuidWithAggregatesFilter<"Assignment"> | string
    opportunityId?: UuidWithAggregatesFilter<"Assignment"> | string
    volunteerId?: UuidWithAggregatesFilter<"Assignment"> | string
    organizationId?: UuidWithAggregatesFilter<"Assignment"> | string
    status?: EnumAssignmentStatusWithAggregatesFilter<"Assignment"> | $Enums.AssignmentStatus
    hoursLogged?: IntWithAggregatesFilter<"Assignment"> | number
    startDate?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    endDate?: DateTimeNullableWithAggregatesFilter<"Assignment"> | Date | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Assignment"> | Date | string
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: UuidFilter<"Session"> | string
    assignmentId?: UuidFilter<"Session"> | string
    scheduledAt?: DateTimeFilter<"Session"> | Date | string
    duration?: IntFilter<"Session"> | number
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    notes?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    assignmentId?: UuidFilter<"Session"> | string
    scheduledAt?: DateTimeFilter<"Session"> | Date | string
    duration?: IntFilter<"Session"> | number
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    notes?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
  }, "id">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _avg?: SessionAvgOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
    _sum?: SessionSumOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Session"> | string
    assignmentId?: UuidWithAggregatesFilter<"Session"> | string
    scheduledAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    duration?: IntWithAggregatesFilter<"Session"> | number
    status?: EnumSessionStatusWithAggregatesFilter<"Session"> | $Enums.SessionStatus
    notes?: StringNullableWithAggregatesFilter<"Session"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type ReviewWhereInput = {
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    id?: UuidFilter<"Review"> | string
    assignmentId?: UuidFilter<"Review"> | string
    reviewerId?: UuidFilter<"Review"> | string
    revieweeId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    reviewerVolunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    revieweeVolunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    reviewerOrganization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    revieweeOrganization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }

  export type ReviewOrderByWithRelationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    assignment?: AssignmentOrderByWithRelationInput
    reviewerVolunteer?: VolunteerOrderByWithRelationInput
    revieweeVolunteer?: VolunteerOrderByWithRelationInput
    reviewerOrganization?: OrganizationOrderByWithRelationInput
    revieweeOrganization?: OrganizationOrderByWithRelationInput
  }

  export type ReviewWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: ReviewWhereInput | ReviewWhereInput[]
    OR?: ReviewWhereInput[]
    NOT?: ReviewWhereInput | ReviewWhereInput[]
    assignmentId?: UuidFilter<"Review"> | string
    reviewerId?: UuidFilter<"Review"> | string
    revieweeId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
    assignment?: XOR<AssignmentScalarRelationFilter, AssignmentWhereInput>
    reviewerVolunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    revieweeVolunteer?: XOR<VolunteerNullableScalarRelationFilter, VolunteerWhereInput> | null
    reviewerOrganization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
    revieweeOrganization?: XOR<OrganizationNullableScalarRelationFilter, OrganizationWhereInput> | null
  }, "id">

  export type ReviewOrderByWithAggregationInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrderInput | SortOrder
    createdAt?: SortOrder
    _count?: ReviewCountOrderByAggregateInput
    _avg?: ReviewAvgOrderByAggregateInput
    _max?: ReviewMaxOrderByAggregateInput
    _min?: ReviewMinOrderByAggregateInput
    _sum?: ReviewSumOrderByAggregateInput
  }

  export type ReviewScalarWhereWithAggregatesInput = {
    AND?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    OR?: ReviewScalarWhereWithAggregatesInput[]
    NOT?: ReviewScalarWhereWithAggregatesInput | ReviewScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Review"> | string
    assignmentId?: UuidWithAggregatesFilter<"Review"> | string
    reviewerId?: UuidWithAggregatesFilter<"Review"> | string
    revieweeId?: UuidWithAggregatesFilter<"Review"> | string
    rating?: IntWithAggregatesFilter<"Review"> | number
    comment?: StringNullableWithAggregatesFilter<"Review"> | string | null
    createdAt?: DateTimeWithAggregatesFilter<"Review"> | Date | string
  }

  export type MessageWhereInput = {
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    id?: UuidFilter<"Message"> | string
    senderId?: UuidFilter<"Message"> | string
    receiverId?: UuidFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    receiver?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }

  export type MessageOrderByWithRelationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    sender?: ProfileOrderByWithRelationInput
    receiver?: ProfileOrderByWithRelationInput
  }

  export type MessageWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: MessageWhereInput | MessageWhereInput[]
    OR?: MessageWhereInput[]
    NOT?: MessageWhereInput | MessageWhereInput[]
    senderId?: UuidFilter<"Message"> | string
    receiverId?: UuidFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
    sender?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
    receiver?: XOR<ProfileScalarRelationFilter, ProfileWhereInput>
  }, "id">

  export type MessageOrderByWithAggregationInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    subject?: SortOrderInput | SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
    _count?: MessageCountOrderByAggregateInput
    _max?: MessageMaxOrderByAggregateInput
    _min?: MessageMinOrderByAggregateInput
  }

  export type MessageScalarWhereWithAggregatesInput = {
    AND?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    OR?: MessageScalarWhereWithAggregatesInput[]
    NOT?: MessageScalarWhereWithAggregatesInput | MessageScalarWhereWithAggregatesInput[]
    id?: UuidWithAggregatesFilter<"Message"> | string
    senderId?: UuidWithAggregatesFilter<"Message"> | string
    receiverId?: UuidWithAggregatesFilter<"Message"> | string
    subject?: StringNullableWithAggregatesFilter<"Message"> | string | null
    content?: StringWithAggregatesFilter<"Message"> | string
    isRead?: BoolWithAggregatesFilter<"Message"> | boolean
    createdAt?: DateTimeWithAggregatesFilter<"Message"> | Date | string
  }

  export type ProfileCreateInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer?: VolunteerCreateNestedOneWithoutProfileInput
    organization?: OrganizationCreateNestedOneWithoutProfileInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type ProfileUncheckedCreateInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutProfileInput
    organization?: OrganizationUncheckedCreateNestedOneWithoutProfileInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type ProfileUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneWithoutProfileNestedInput
    organization?: OrganizationUpdateOneWithoutProfileNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type ProfileUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUncheckedUpdateOneWithoutProfileNestedInput
    organization?: OrganizationUncheckedUpdateOneWithoutProfileNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ProfileCreateManyInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ProfileUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ProfileUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerCreateInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutVolunteerInput
    skills?: VolunteerSkillCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerUncheckedCreateInput = {
    id?: string
    profileId: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: VolunteerSkillUncheckedCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityUncheckedCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVolunteerNestedInput
    skills?: VolunteerSkillUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: VolunteerSkillUncheckedUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerCreateManyInput = {
    id?: string
    profileId: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type VolunteerUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationCreateInput = {
    id?: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrganizationInput
    opportunities?: OpportunityCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationUncheckedCreateInput = {
    id?: string
    profileId: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrganizationNestedInput
    opportunities?: OpportunityUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUncheckedUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type OrganizationCreateManyInput = {
    id?: string
    profileId: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OrganizationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OrganizationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityCreateInput = {
    id?: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutOpportunitiesInput
    applications?: ApplicationCreateNestedManyWithoutOpportunityInput
    assignments?: AssignmentCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateInput = {
    id?: string
    organizationId: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutOpportunityInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutOpportunitiesNestedInput
    applications?: ApplicationUpdateManyWithoutOpportunityNestedInput
    assignments?: AssignmentUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityCreateManyInput = {
    id?: string
    organizationId: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type OpportunityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerSkillCreateInput = {
    id?: string
    category: $Enums.SkillCategory
    name: string
    level: $Enums.SkillLevel
    verified?: boolean
    createdAt?: Date | string
    volunteer: VolunteerCreateNestedOneWithoutSkillsInput
  }

  export type VolunteerSkillUncheckedCreateInput = {
    id?: string
    volunteerId: string
    category: $Enums.SkillCategory
    name: string
    level: $Enums.SkillLevel
    verified?: boolean
    createdAt?: Date | string
  }

  export type VolunteerSkillUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneRequiredWithoutSkillsNestedInput
  }

  export type VolunteerSkillUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerSkillCreateManyInput = {
    id?: string
    volunteerId: string
    category: $Enums.SkillCategory
    name: string
    level: $Enums.SkillLevel
    verified?: boolean
    createdAt?: Date | string
  }

  export type VolunteerSkillUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerSkillUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerAvailabilityCreateInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    createdAt?: Date | string
    volunteer: VolunteerCreateNestedOneWithoutAvailabilityInput
  }

  export type VolunteerAvailabilityUncheckedCreateInput = {
    id?: string
    volunteerId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    createdAt?: Date | string
  }

  export type VolunteerAvailabilityUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneRequiredWithoutAvailabilityNestedInput
  }

  export type VolunteerAvailabilityUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerAvailabilityCreateManyInput = {
    id?: string
    volunteerId: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    createdAt?: Date | string
  }

  export type VolunteerAvailabilityUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerAvailabilityUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateInput = {
    id?: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    opportunity: OpportunityCreateNestedOneWithoutApplicationsInput
    volunteer: VolunteerCreateNestedOneWithoutApplicationsInput
    organization: OrganizationCreateNestedOneWithoutApplicationsInput
    assignment?: AssignmentCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateInput = {
    id?: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    assignment?: AssignmentUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opportunity?: OpportunityUpdateOneRequiredWithoutApplicationsNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutApplicationsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutApplicationsNestedInput
    assignment?: AssignmentUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignment?: AssignmentUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationCreateManyInput = {
    id?: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type ApplicationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type ApplicationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentCreateInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAssignmentInput
    opportunity: OpportunityCreateNestedOneWithoutAssignmentsInput
    volunteer: VolunteerCreateNestedOneWithoutAssignmentsInput
    organization: OrganizationCreateNestedOneWithoutAssignmentsInput
    sessions?: SessionCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateInput = {
    id?: string
    applicationId: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAssignmentNestedInput
    opportunity?: OpportunityUpdateOneRequiredWithoutAssignmentsNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutAssignmentsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAssignmentsNestedInput
    sessions?: SessionUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateManyInput = {
    id?: string
    applicationId: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type AssignmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AssignmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateInput = {
    id?: string
    scheduledAt: Date | string
    duration: number
    status?: $Enums.SessionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    assignmentId: string
    scheduledAt: Date | string
    duration: number
    status?: $Enums.SessionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    assignmentId: string
    scheduledAt: Date | string
    duration: number
    status?: $Enums.SessionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutReviewsInput
    reviewerVolunteer?: VolunteerCreateNestedOneWithoutReviewsGivenInput
    revieweeVolunteer?: VolunteerCreateNestedOneWithoutReviewsReceivedInput
    reviewerOrganization?: OrganizationCreateNestedOneWithoutReviewsGivenInput
    revieweeOrganization?: OrganizationCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateInput = {
    id?: string
    assignmentId: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutReviewsNestedInput
    reviewerVolunteer?: VolunteerUpdateOneWithoutReviewsGivenNestedInput
    revieweeVolunteer?: VolunteerUpdateOneWithoutReviewsReceivedNestedInput
    reviewerOrganization?: OrganizationUpdateOneWithoutReviewsGivenNestedInput
    revieweeOrganization?: OrganizationUpdateOneWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewCreateManyInput = {
    id?: string
    assignmentId: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateInput = {
    id?: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
    sender: ProfileCreateNestedOneWithoutSentMessagesInput
    receiver: ProfileCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateInput = {
    id?: string
    senderId: string
    receiverId: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: ProfileUpdateOneRequiredWithoutSentMessagesNestedInput
    receiver?: ProfileUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageCreateManyInput = {
    id?: string
    senderId: string
    receiverId: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type StringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type EnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type StringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type DateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type VolunteerNullableScalarRelationFilter = {
    is?: VolunteerWhereInput | null
    isNot?: VolunteerWhereInput | null
  }

  export type OrganizationNullableScalarRelationFilter = {
    is?: OrganizationWhereInput | null
    isNot?: OrganizationWhereInput | null
  }

  export type MessageListRelationFilter = {
    every?: MessageWhereInput
    some?: MessageWhereInput
    none?: MessageWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type MessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ProfileCountOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    userType?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    website?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMaxOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    userType?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    website?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type ProfileMinOrderByAggregateInput = {
    id?: SortOrder
    email?: SortOrder
    fullName?: SortOrder
    userType?: SortOrder
    avatar?: SortOrder
    bio?: SortOrder
    phone?: SortOrder
    location?: SortOrder
    website?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type UuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type StringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type EnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type StringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    mode?: QueryMode
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type DateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type StringNullableListFilter<$PrismaModel = never> = {
    equals?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    has?: string | StringFieldRefInput<$PrismaModel> | null
    hasEvery?: string[] | ListStringFieldRefInput<$PrismaModel>
    hasSome?: string[] | ListStringFieldRefInput<$PrismaModel>
    isEmpty?: boolean
  }

  export type IntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type FloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type ProfileScalarRelationFilter = {
    is?: ProfileWhereInput
    isNot?: ProfileWhereInput
  }

  export type VolunteerSkillListRelationFilter = {
    every?: VolunteerSkillWhereInput
    some?: VolunteerSkillWhereInput
    none?: VolunteerSkillWhereInput
  }

  export type VolunteerAvailabilityListRelationFilter = {
    every?: VolunteerAvailabilityWhereInput
    some?: VolunteerAvailabilityWhereInput
    none?: VolunteerAvailabilityWhereInput
  }

  export type ApplicationListRelationFilter = {
    every?: ApplicationWhereInput
    some?: ApplicationWhereInput
    none?: ApplicationWhereInput
  }

  export type AssignmentListRelationFilter = {
    every?: AssignmentWhereInput
    some?: AssignmentWhereInput
    none?: AssignmentWhereInput
  }

  export type ReviewListRelationFilter = {
    every?: ReviewWhereInput
    some?: ReviewWhereInput
    none?: ReviewWhereInput
  }

  export type VolunteerSkillOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolunteerAvailabilityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ApplicationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type ReviewOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type VolunteerCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    languages?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    certifications?: SortOrder
    totalHours?: SortOrder
    impactScore?: SortOrder
    completedTasks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerAvgOrderByAggregateInput = {
    totalHours?: SortOrder
    impactScore?: SortOrder
    completedTasks?: SortOrder
  }

  export type VolunteerMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    totalHours?: SortOrder
    impactScore?: SortOrder
    completedTasks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    experience?: SortOrder
    education?: SortOrder
    totalHours?: SortOrder
    impactScore?: SortOrder
    completedTasks?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type VolunteerSumOrderByAggregateInput = {
    totalHours?: SortOrder
    impactScore?: SortOrder
    completedTasks?: SortOrder
  }

  export type IntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type FloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type OpportunityListRelationFilter = {
    every?: OpportunityWhereInput
    some?: OpportunityWhereInput
    none?: OpportunityWhereInput
  }

  export type OpportunityOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type OrganizationCountOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    organizationName?: SortOrder
    organizationType?: SortOrder
    registrationNumber?: SortOrder
    description?: SortOrder
    focusAreas?: SortOrder
    operatingRegions?: SortOrder
    totalRequests?: SortOrder
    activeVolunteers?: SortOrder
    completedProjects?: SortOrder
    averageRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationAvgOrderByAggregateInput = {
    totalRequests?: SortOrder
    activeVolunteers?: SortOrder
    completedProjects?: SortOrder
    averageRating?: SortOrder
  }

  export type OrganizationMaxOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    organizationName?: SortOrder
    organizationType?: SortOrder
    registrationNumber?: SortOrder
    description?: SortOrder
    totalRequests?: SortOrder
    activeVolunteers?: SortOrder
    completedProjects?: SortOrder
    averageRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationMinOrderByAggregateInput = {
    id?: SortOrder
    profileId?: SortOrder
    organizationName?: SortOrder
    organizationType?: SortOrder
    registrationNumber?: SortOrder
    description?: SortOrder
    totalRequests?: SortOrder
    activeVolunteers?: SortOrder
    completedProjects?: SortOrder
    averageRating?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OrganizationSumOrderByAggregateInput = {
    totalRequests?: SortOrder
    activeVolunteers?: SortOrder
    completedProjects?: SortOrder
    averageRating?: SortOrder
  }

  export type EnumOpportunityCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityCategory | EnumOpportunityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityCategory[] | ListEnumOpportunityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityCategory[] | ListEnumOpportunityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityCategoryFilter<$PrismaModel> | $Enums.OpportunityCategory
  }

  export type EnumOpportunityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityType | EnumOpportunityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypeFilter<$PrismaModel> | $Enums.OpportunityType
  }

  export type EnumUrgencyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyLevelFilter<$PrismaModel> | $Enums.UrgencyLevel
  }

  export type DateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type EnumOpportunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusFilter<$PrismaModel> | $Enums.OpportunityStatus
  }

  export type OrganizationScalarRelationFilter = {
    is?: OrganizationWhereInput
    isNot?: OrganizationWhereInput
  }

  export type OpportunityCountOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    urgency?: SortOrder
    skillsNeeded?: SortOrder
    timeCommitment?: SortOrder
    location?: SortOrder
    isRemote?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxVolunteers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunityAvgOrderByAggregateInput = {
    maxVolunteers?: SortOrder
  }

  export type OpportunityMaxOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    urgency?: SortOrder
    timeCommitment?: SortOrder
    location?: SortOrder
    isRemote?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxVolunteers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunityMinOrderByAggregateInput = {
    id?: SortOrder
    organizationId?: SortOrder
    title?: SortOrder
    description?: SortOrder
    category?: SortOrder
    type?: SortOrder
    urgency?: SortOrder
    timeCommitment?: SortOrder
    location?: SortOrder
    isRemote?: SortOrder
    requirements?: SortOrder
    benefits?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    maxVolunteers?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type OpportunitySumOrderByAggregateInput = {
    maxVolunteers?: SortOrder
  }

  export type EnumOpportunityCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityCategory | EnumOpportunityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityCategory[] | ListEnumOpportunityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityCategory[] | ListEnumOpportunityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityCategoryWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityCategoryFilter<$PrismaModel>
    _max?: NestedEnumOpportunityCategoryFilter<$PrismaModel>
  }

  export type EnumOpportunityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityType | EnumOpportunityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypeWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityTypeFilter<$PrismaModel>
    _max?: NestedEnumOpportunityTypeFilter<$PrismaModel>
  }

  export type EnumUrgencyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel> | $Enums.UrgencyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyLevelFilter<$PrismaModel>
    _max?: NestedEnumUrgencyLevelFilter<$PrismaModel>
  }

  export type DateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type EnumOpportunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityStatusFilter<$PrismaModel>
    _max?: NestedEnumOpportunityStatusFilter<$PrismaModel>
  }

  export type EnumSkillCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryFilter<$PrismaModel> | $Enums.SkillCategory
  }

  export type EnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type VolunteerScalarRelationFilter = {
    is?: VolunteerWhereInput
    isNot?: VolunteerWhereInput
  }

  export type VolunteerSkillVolunteerIdCategoryNameCompoundUniqueInput = {
    volunteerId: string
    category: $Enums.SkillCategory
    name: string
  }

  export type VolunteerSkillCountOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    category?: SortOrder
    name?: SortOrder
    level?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type VolunteerSkillMaxOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    category?: SortOrder
    name?: SortOrder
    level?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type VolunteerSkillMinOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    category?: SortOrder
    name?: SortOrder
    level?: SortOrder
    verified?: SortOrder
    createdAt?: SortOrder
  }

  export type EnumSkillCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel> | $Enums.SkillCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillCategoryFilter<$PrismaModel>
    _max?: NestedEnumSkillCategoryFilter<$PrismaModel>
  }

  export type EnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type VolunteerAvailabilityCountOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type VolunteerAvailabilityAvgOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type VolunteerAvailabilityMaxOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type VolunteerAvailabilityMinOrderByAggregateInput = {
    id?: SortOrder
    volunteerId?: SortOrder
    dayOfWeek?: SortOrder
    startTime?: SortOrder
    endTime?: SortOrder
    timezone?: SortOrder
    createdAt?: SortOrder
  }

  export type VolunteerAvailabilitySumOrderByAggregateInput = {
    dayOfWeek?: SortOrder
  }

  export type EnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type OpportunityScalarRelationFilter = {
    is?: OpportunityWhereInput
    isNot?: OpportunityWhereInput
  }

  export type AssignmentNullableScalarRelationFilter = {
    is?: AssignmentWhereInput | null
    isNot?: AssignmentWhereInput | null
  }

  export type ApplicationOpportunityIdVolunteerIdCompoundUniqueInput = {
    opportunityId: string
    volunteerId: string
  }

  export type ApplicationCountOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    reviewedAt?: SortOrder
  }

  export type ApplicationMaxOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    reviewedAt?: SortOrder
  }

  export type ApplicationMinOrderByAggregateInput = {
    id?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    coverLetter?: SortOrder
    status?: SortOrder
    appliedAt?: SortOrder
    reviewedAt?: SortOrder
  }

  export type EnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type EnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type ApplicationScalarRelationFilter = {
    is?: ApplicationWhereInput
    isNot?: ApplicationWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type AssignmentCountOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    hoursLogged?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentAvgOrderByAggregateInput = {
    hoursLogged?: SortOrder
  }

  export type AssignmentMaxOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    hoursLogged?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentMinOrderByAggregateInput = {
    id?: SortOrder
    applicationId?: SortOrder
    opportunityId?: SortOrder
    volunteerId?: SortOrder
    organizationId?: SortOrder
    status?: SortOrder
    hoursLogged?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type AssignmentSumOrderByAggregateInput = {
    hoursLogged?: SortOrder
  }

  export type EnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type EnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type AssignmentScalarRelationFilter = {
    is?: AssignmentWhereInput
    isNot?: AssignmentWhereInput
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionAvgOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    scheduledAt?: SortOrder
    duration?: SortOrder
    status?: SortOrder
    notes?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type SessionSumOrderByAggregateInput = {
    duration?: SortOrder
  }

  export type EnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type ReviewCountOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewAvgOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type ReviewMaxOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewMinOrderByAggregateInput = {
    id?: SortOrder
    assignmentId?: SortOrder
    reviewerId?: SortOrder
    revieweeId?: SortOrder
    rating?: SortOrder
    comment?: SortOrder
    createdAt?: SortOrder
  }

  export type ReviewSumOrderByAggregateInput = {
    rating?: SortOrder
  }

  export type MessageCountOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMaxOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type MessageMinOrderByAggregateInput = {
    id?: SortOrder
    senderId?: SortOrder
    receiverId?: SortOrder
    subject?: SortOrder
    content?: SortOrder
    isRead?: SortOrder
    createdAt?: SortOrder
  }

  export type VolunteerCreateNestedOneWithoutProfileInput = {
    create?: XOR<VolunteerCreateWithoutProfileInput, VolunteerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutProfileInput
    connect?: VolunteerWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutProfileInput = {
    create?: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfileInput
    connect?: OrganizationWhereUniqueInput
  }

  export type MessageCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type VolunteerUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<VolunteerCreateWithoutProfileInput, VolunteerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutProfileInput
    connect?: VolunteerWhereUniqueInput
  }

  export type OrganizationUncheckedCreateNestedOneWithoutProfileInput = {
    create?: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfileInput
    connect?: OrganizationWhereUniqueInput
  }

  export type MessageUncheckedCreateNestedManyWithoutSenderInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type MessageUncheckedCreateNestedManyWithoutReceiverInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type EnumUserTypeFieldUpdateOperationsInput = {
    set?: $Enums.UserType
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type VolunteerUpdateOneWithoutProfileNestedInput = {
    create?: XOR<VolunteerCreateWithoutProfileInput, VolunteerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutProfileInput
    upsert?: VolunteerUpsertWithoutProfileInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutProfileInput, VolunteerUpdateWithoutProfileInput>, VolunteerUncheckedUpdateWithoutProfileInput>
  }

  export type OrganizationUpdateOneWithoutProfileNestedInput = {
    create?: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfileInput
    upsert?: OrganizationUpsertWithoutProfileInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutProfileInput, OrganizationUpdateWithoutProfileInput>, OrganizationUncheckedUpdateWithoutProfileInput>
  }

  export type MessageUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type VolunteerUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<VolunteerCreateWithoutProfileInput, VolunteerUncheckedCreateWithoutProfileInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutProfileInput
    upsert?: VolunteerUpsertWithoutProfileInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutProfileInput, VolunteerUpdateWithoutProfileInput>, VolunteerUncheckedUpdateWithoutProfileInput>
  }

  export type OrganizationUncheckedUpdateOneWithoutProfileNestedInput = {
    create?: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutProfileInput
    upsert?: OrganizationUpsertWithoutProfileInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutProfileInput, OrganizationUpdateWithoutProfileInput>, OrganizationUncheckedUpdateWithoutProfileInput>
  }

  export type MessageUncheckedUpdateManyWithoutSenderNestedInput = {
    create?: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput> | MessageCreateWithoutSenderInput[] | MessageUncheckedCreateWithoutSenderInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutSenderInput | MessageCreateOrConnectWithoutSenderInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutSenderInput | MessageUpsertWithWhereUniqueWithoutSenderInput[]
    createMany?: MessageCreateManySenderInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutSenderInput | MessageUpdateWithWhereUniqueWithoutSenderInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutSenderInput | MessageUpdateManyWithWhereWithoutSenderInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type MessageUncheckedUpdateManyWithoutReceiverNestedInput = {
    create?: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput> | MessageCreateWithoutReceiverInput[] | MessageUncheckedCreateWithoutReceiverInput[]
    connectOrCreate?: MessageCreateOrConnectWithoutReceiverInput | MessageCreateOrConnectWithoutReceiverInput[]
    upsert?: MessageUpsertWithWhereUniqueWithoutReceiverInput | MessageUpsertWithWhereUniqueWithoutReceiverInput[]
    createMany?: MessageCreateManyReceiverInputEnvelope
    set?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    disconnect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    delete?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    connect?: MessageWhereUniqueInput | MessageWhereUniqueInput[]
    update?: MessageUpdateWithWhereUniqueWithoutReceiverInput | MessageUpdateWithWhereUniqueWithoutReceiverInput[]
    updateMany?: MessageUpdateManyWithWhereWithoutReceiverInput | MessageUpdateManyWithWhereWithoutReceiverInput[]
    deleteMany?: MessageScalarWhereInput | MessageScalarWhereInput[]
  }

  export type VolunteerCreatelanguagesInput = {
    set: string[]
  }

  export type VolunteerCreatecertificationsInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutVolunteerInput = {
    create?: XOR<ProfileCreateWithoutVolunteerInput, ProfileUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutVolunteerInput
    connect?: ProfileWhereUniqueInput
  }

  export type VolunteerSkillCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<VolunteerSkillCreateWithoutVolunteerInput, VolunteerSkillUncheckedCreateWithoutVolunteerInput> | VolunteerSkillCreateWithoutVolunteerInput[] | VolunteerSkillUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerSkillCreateOrConnectWithoutVolunteerInput | VolunteerSkillCreateOrConnectWithoutVolunteerInput[]
    createMany?: VolunteerSkillCreateManyVolunteerInputEnvelope
    connect?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
  }

  export type VolunteerAvailabilityCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<VolunteerAvailabilityCreateWithoutVolunteerInput, VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput> | VolunteerAvailabilityCreateWithoutVolunteerInput[] | VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput | VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput[]
    createMany?: VolunteerAvailabilityCreateManyVolunteerInputEnvelope
    connect?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<ApplicationCreateWithoutVolunteerInput, ApplicationUncheckedCreateWithoutVolunteerInput> | ApplicationCreateWithoutVolunteerInput[] | ApplicationUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutVolunteerInput | ApplicationCreateOrConnectWithoutVolunteerInput[]
    createMany?: ApplicationCreateManyVolunteerInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<AssignmentCreateWithoutVolunteerInput, AssignmentUncheckedCreateWithoutVolunteerInput> | AssignmentCreateWithoutVolunteerInput[] | AssignmentUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutVolunteerInput | AssignmentCreateOrConnectWithoutVolunteerInput[]
    createMany?: AssignmentCreateManyVolunteerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRevieweeVolunteerInput = {
    create?: XOR<ReviewCreateWithoutRevieweeVolunteerInput, ReviewUncheckedCreateWithoutRevieweeVolunteerInput> | ReviewCreateWithoutRevieweeVolunteerInput[] | ReviewUncheckedCreateWithoutRevieweeVolunteerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeVolunteerInput | ReviewCreateOrConnectWithoutRevieweeVolunteerInput[]
    createMany?: ReviewCreateManyRevieweeVolunteerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerVolunteerInput = {
    create?: XOR<ReviewCreateWithoutReviewerVolunteerInput, ReviewUncheckedCreateWithoutReviewerVolunteerInput> | ReviewCreateWithoutReviewerVolunteerInput[] | ReviewUncheckedCreateWithoutReviewerVolunteerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerVolunteerInput | ReviewCreateOrConnectWithoutReviewerVolunteerInput[]
    createMany?: ReviewCreateManyReviewerVolunteerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VolunteerSkillUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<VolunteerSkillCreateWithoutVolunteerInput, VolunteerSkillUncheckedCreateWithoutVolunteerInput> | VolunteerSkillCreateWithoutVolunteerInput[] | VolunteerSkillUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerSkillCreateOrConnectWithoutVolunteerInput | VolunteerSkillCreateOrConnectWithoutVolunteerInput[]
    createMany?: VolunteerSkillCreateManyVolunteerInputEnvelope
    connect?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
  }

  export type VolunteerAvailabilityUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<VolunteerAvailabilityCreateWithoutVolunteerInput, VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput> | VolunteerAvailabilityCreateWithoutVolunteerInput[] | VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput | VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput[]
    createMany?: VolunteerAvailabilityCreateManyVolunteerInputEnvelope
    connect?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<ApplicationCreateWithoutVolunteerInput, ApplicationUncheckedCreateWithoutVolunteerInput> | ApplicationCreateWithoutVolunteerInput[] | ApplicationUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutVolunteerInput | ApplicationCreateOrConnectWithoutVolunteerInput[]
    createMany?: ApplicationCreateManyVolunteerInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutVolunteerInput = {
    create?: XOR<AssignmentCreateWithoutVolunteerInput, AssignmentUncheckedCreateWithoutVolunteerInput> | AssignmentCreateWithoutVolunteerInput[] | AssignmentUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutVolunteerInput | AssignmentCreateOrConnectWithoutVolunteerInput[]
    createMany?: AssignmentCreateManyVolunteerInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRevieweeVolunteerInput = {
    create?: XOR<ReviewCreateWithoutRevieweeVolunteerInput, ReviewUncheckedCreateWithoutRevieweeVolunteerInput> | ReviewCreateWithoutRevieweeVolunteerInput[] | ReviewUncheckedCreateWithoutRevieweeVolunteerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeVolunteerInput | ReviewCreateOrConnectWithoutRevieweeVolunteerInput[]
    createMany?: ReviewCreateManyRevieweeVolunteerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerVolunteerInput = {
    create?: XOR<ReviewCreateWithoutReviewerVolunteerInput, ReviewUncheckedCreateWithoutReviewerVolunteerInput> | ReviewCreateWithoutReviewerVolunteerInput[] | ReviewUncheckedCreateWithoutReviewerVolunteerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerVolunteerInput | ReviewCreateOrConnectWithoutReviewerVolunteerInput[]
    createMany?: ReviewCreateManyReviewerVolunteerInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type VolunteerUpdatelanguagesInput = {
    set?: string[]
    push?: string | string[]
  }

  export type VolunteerUpdatecertificationsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type FloatFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type ProfileUpdateOneRequiredWithoutVolunteerNestedInput = {
    create?: XOR<ProfileCreateWithoutVolunteerInput, ProfileUncheckedCreateWithoutVolunteerInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutVolunteerInput
    upsert?: ProfileUpsertWithoutVolunteerInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutVolunteerInput, ProfileUpdateWithoutVolunteerInput>, ProfileUncheckedUpdateWithoutVolunteerInput>
  }

  export type VolunteerSkillUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<VolunteerSkillCreateWithoutVolunteerInput, VolunteerSkillUncheckedCreateWithoutVolunteerInput> | VolunteerSkillCreateWithoutVolunteerInput[] | VolunteerSkillUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerSkillCreateOrConnectWithoutVolunteerInput | VolunteerSkillCreateOrConnectWithoutVolunteerInput[]
    upsert?: VolunteerSkillUpsertWithWhereUniqueWithoutVolunteerInput | VolunteerSkillUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: VolunteerSkillCreateManyVolunteerInputEnvelope
    set?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
    disconnect?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
    delete?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
    connect?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
    update?: VolunteerSkillUpdateWithWhereUniqueWithoutVolunteerInput | VolunteerSkillUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: VolunteerSkillUpdateManyWithWhereWithoutVolunteerInput | VolunteerSkillUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: VolunteerSkillScalarWhereInput | VolunteerSkillScalarWhereInput[]
  }

  export type VolunteerAvailabilityUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<VolunteerAvailabilityCreateWithoutVolunteerInput, VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput> | VolunteerAvailabilityCreateWithoutVolunteerInput[] | VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput | VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput[]
    upsert?: VolunteerAvailabilityUpsertWithWhereUniqueWithoutVolunteerInput | VolunteerAvailabilityUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: VolunteerAvailabilityCreateManyVolunteerInputEnvelope
    set?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
    disconnect?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
    delete?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
    connect?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
    update?: VolunteerAvailabilityUpdateWithWhereUniqueWithoutVolunteerInput | VolunteerAvailabilityUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: VolunteerAvailabilityUpdateManyWithWhereWithoutVolunteerInput | VolunteerAvailabilityUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: VolunteerAvailabilityScalarWhereInput | VolunteerAvailabilityScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<ApplicationCreateWithoutVolunteerInput, ApplicationUncheckedCreateWithoutVolunteerInput> | ApplicationCreateWithoutVolunteerInput[] | ApplicationUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutVolunteerInput | ApplicationCreateOrConnectWithoutVolunteerInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutVolunteerInput | ApplicationUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: ApplicationCreateManyVolunteerInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutVolunteerInput | ApplicationUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutVolunteerInput | ApplicationUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<AssignmentCreateWithoutVolunteerInput, AssignmentUncheckedCreateWithoutVolunteerInput> | AssignmentCreateWithoutVolunteerInput[] | AssignmentUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutVolunteerInput | AssignmentCreateOrConnectWithoutVolunteerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutVolunteerInput | AssignmentUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: AssignmentCreateManyVolunteerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutVolunteerInput | AssignmentUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutVolunteerInput | AssignmentUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRevieweeVolunteerNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeVolunteerInput, ReviewUncheckedCreateWithoutRevieweeVolunteerInput> | ReviewCreateWithoutRevieweeVolunteerInput[] | ReviewUncheckedCreateWithoutRevieweeVolunteerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeVolunteerInput | ReviewCreateOrConnectWithoutRevieweeVolunteerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeVolunteerInput | ReviewUpsertWithWhereUniqueWithoutRevieweeVolunteerInput[]
    createMany?: ReviewCreateManyRevieweeVolunteerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeVolunteerInput | ReviewUpdateWithWhereUniqueWithoutRevieweeVolunteerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeVolunteerInput | ReviewUpdateManyWithWhereWithoutRevieweeVolunteerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerVolunteerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerVolunteerInput, ReviewUncheckedCreateWithoutReviewerVolunteerInput> | ReviewCreateWithoutReviewerVolunteerInput[] | ReviewUncheckedCreateWithoutReviewerVolunteerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerVolunteerInput | ReviewCreateOrConnectWithoutReviewerVolunteerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerVolunteerInput | ReviewUpsertWithWhereUniqueWithoutReviewerVolunteerInput[]
    createMany?: ReviewCreateManyReviewerVolunteerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerVolunteerInput | ReviewUpdateWithWhereUniqueWithoutReviewerVolunteerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerVolunteerInput | ReviewUpdateManyWithWhereWithoutReviewerVolunteerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type VolunteerSkillUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<VolunteerSkillCreateWithoutVolunteerInput, VolunteerSkillUncheckedCreateWithoutVolunteerInput> | VolunteerSkillCreateWithoutVolunteerInput[] | VolunteerSkillUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerSkillCreateOrConnectWithoutVolunteerInput | VolunteerSkillCreateOrConnectWithoutVolunteerInput[]
    upsert?: VolunteerSkillUpsertWithWhereUniqueWithoutVolunteerInput | VolunteerSkillUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: VolunteerSkillCreateManyVolunteerInputEnvelope
    set?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
    disconnect?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
    delete?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
    connect?: VolunteerSkillWhereUniqueInput | VolunteerSkillWhereUniqueInput[]
    update?: VolunteerSkillUpdateWithWhereUniqueWithoutVolunteerInput | VolunteerSkillUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: VolunteerSkillUpdateManyWithWhereWithoutVolunteerInput | VolunteerSkillUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: VolunteerSkillScalarWhereInput | VolunteerSkillScalarWhereInput[]
  }

  export type VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<VolunteerAvailabilityCreateWithoutVolunteerInput, VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput> | VolunteerAvailabilityCreateWithoutVolunteerInput[] | VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput | VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput[]
    upsert?: VolunteerAvailabilityUpsertWithWhereUniqueWithoutVolunteerInput | VolunteerAvailabilityUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: VolunteerAvailabilityCreateManyVolunteerInputEnvelope
    set?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
    disconnect?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
    delete?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
    connect?: VolunteerAvailabilityWhereUniqueInput | VolunteerAvailabilityWhereUniqueInput[]
    update?: VolunteerAvailabilityUpdateWithWhereUniqueWithoutVolunteerInput | VolunteerAvailabilityUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: VolunteerAvailabilityUpdateManyWithWhereWithoutVolunteerInput | VolunteerAvailabilityUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: VolunteerAvailabilityScalarWhereInput | VolunteerAvailabilityScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<ApplicationCreateWithoutVolunteerInput, ApplicationUncheckedCreateWithoutVolunteerInput> | ApplicationCreateWithoutVolunteerInput[] | ApplicationUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutVolunteerInput | ApplicationCreateOrConnectWithoutVolunteerInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutVolunteerInput | ApplicationUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: ApplicationCreateManyVolunteerInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutVolunteerInput | ApplicationUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutVolunteerInput | ApplicationUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutVolunteerNestedInput = {
    create?: XOR<AssignmentCreateWithoutVolunteerInput, AssignmentUncheckedCreateWithoutVolunteerInput> | AssignmentCreateWithoutVolunteerInput[] | AssignmentUncheckedCreateWithoutVolunteerInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutVolunteerInput | AssignmentCreateOrConnectWithoutVolunteerInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutVolunteerInput | AssignmentUpsertWithWhereUniqueWithoutVolunteerInput[]
    createMany?: AssignmentCreateManyVolunteerInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutVolunteerInput | AssignmentUpdateWithWhereUniqueWithoutVolunteerInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutVolunteerInput | AssignmentUpdateManyWithWhereWithoutVolunteerInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeVolunteerNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeVolunteerInput, ReviewUncheckedCreateWithoutRevieweeVolunteerInput> | ReviewCreateWithoutRevieweeVolunteerInput[] | ReviewUncheckedCreateWithoutRevieweeVolunteerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeVolunteerInput | ReviewCreateOrConnectWithoutRevieweeVolunteerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeVolunteerInput | ReviewUpsertWithWhereUniqueWithoutRevieweeVolunteerInput[]
    createMany?: ReviewCreateManyRevieweeVolunteerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeVolunteerInput | ReviewUpdateWithWhereUniqueWithoutRevieweeVolunteerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeVolunteerInput | ReviewUpdateManyWithWhereWithoutRevieweeVolunteerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerVolunteerNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerVolunteerInput, ReviewUncheckedCreateWithoutReviewerVolunteerInput> | ReviewCreateWithoutReviewerVolunteerInput[] | ReviewUncheckedCreateWithoutReviewerVolunteerInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerVolunteerInput | ReviewCreateOrConnectWithoutReviewerVolunteerInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerVolunteerInput | ReviewUpsertWithWhereUniqueWithoutReviewerVolunteerInput[]
    createMany?: ReviewCreateManyReviewerVolunteerInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerVolunteerInput | ReviewUpdateWithWhereUniqueWithoutReviewerVolunteerInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerVolunteerInput | ReviewUpdateManyWithWhereWithoutReviewerVolunteerInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OrganizationCreatefocusAreasInput = {
    set: string[]
  }

  export type OrganizationCreateoperatingRegionsInput = {
    set: string[]
  }

  export type ProfileCreateNestedOneWithoutOrganizationInput = {
    create?: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutOrganizationInput
    connect?: ProfileWhereUniqueInput
  }

  export type OpportunityCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OpportunityCreateWithoutOrganizationInput, OpportunityUncheckedCreateWithoutOrganizationInput> | OpportunityCreateWithoutOrganizationInput[] | OpportunityUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutOrganizationInput | OpportunityCreateOrConnectWithoutOrganizationInput[]
    createMany?: OpportunityCreateManyOrganizationInputEnvelope
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
  }

  export type ApplicationCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ApplicationCreateWithoutOrganizationInput, ApplicationUncheckedCreateWithoutOrganizationInput> | ApplicationCreateWithoutOrganizationInput[] | ApplicationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOrganizationInput | ApplicationCreateOrConnectWithoutOrganizationInput[]
    createMany?: ApplicationCreateManyOrganizationInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AssignmentCreateWithoutOrganizationInput, AssignmentUncheckedCreateWithoutOrganizationInput> | AssignmentCreateWithoutOrganizationInput[] | AssignmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOrganizationInput | AssignmentCreateOrConnectWithoutOrganizationInput[]
    createMany?: AssignmentCreateManyOrganizationInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutRevieweeOrganizationInput = {
    create?: XOR<ReviewCreateWithoutRevieweeOrganizationInput, ReviewUncheckedCreateWithoutRevieweeOrganizationInput> | ReviewCreateWithoutRevieweeOrganizationInput[] | ReviewUncheckedCreateWithoutRevieweeOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeOrganizationInput | ReviewCreateOrConnectWithoutRevieweeOrganizationInput[]
    createMany?: ReviewCreateManyRevieweeOrganizationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutReviewerOrganizationInput = {
    create?: XOR<ReviewCreateWithoutReviewerOrganizationInput, ReviewUncheckedCreateWithoutReviewerOrganizationInput> | ReviewCreateWithoutReviewerOrganizationInput[] | ReviewUncheckedCreateWithoutReviewerOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerOrganizationInput | ReviewCreateOrConnectWithoutReviewerOrganizationInput[]
    createMany?: ReviewCreateManyReviewerOrganizationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OpportunityUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<OpportunityCreateWithoutOrganizationInput, OpportunityUncheckedCreateWithoutOrganizationInput> | OpportunityCreateWithoutOrganizationInput[] | OpportunityUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutOrganizationInput | OpportunityCreateOrConnectWithoutOrganizationInput[]
    createMany?: OpportunityCreateManyOrganizationInputEnvelope
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<ApplicationCreateWithoutOrganizationInput, ApplicationUncheckedCreateWithoutOrganizationInput> | ApplicationCreateWithoutOrganizationInput[] | ApplicationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOrganizationInput | ApplicationCreateOrConnectWithoutOrganizationInput[]
    createMany?: ApplicationCreateManyOrganizationInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutOrganizationInput = {
    create?: XOR<AssignmentCreateWithoutOrganizationInput, AssignmentUncheckedCreateWithoutOrganizationInput> | AssignmentCreateWithoutOrganizationInput[] | AssignmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOrganizationInput | AssignmentCreateOrConnectWithoutOrganizationInput[]
    createMany?: AssignmentCreateManyOrganizationInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutRevieweeOrganizationInput = {
    create?: XOR<ReviewCreateWithoutRevieweeOrganizationInput, ReviewUncheckedCreateWithoutRevieweeOrganizationInput> | ReviewCreateWithoutRevieweeOrganizationInput[] | ReviewUncheckedCreateWithoutRevieweeOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeOrganizationInput | ReviewCreateOrConnectWithoutRevieweeOrganizationInput[]
    createMany?: ReviewCreateManyRevieweeOrganizationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutReviewerOrganizationInput = {
    create?: XOR<ReviewCreateWithoutReviewerOrganizationInput, ReviewUncheckedCreateWithoutReviewerOrganizationInput> | ReviewCreateWithoutReviewerOrganizationInput[] | ReviewUncheckedCreateWithoutReviewerOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerOrganizationInput | ReviewCreateOrConnectWithoutReviewerOrganizationInput[]
    createMany?: ReviewCreateManyReviewerOrganizationInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type OrganizationUpdatefocusAreasInput = {
    set?: string[]
    push?: string | string[]
  }

  export type OrganizationUpdateoperatingRegionsInput = {
    set?: string[]
    push?: string | string[]
  }

  export type ProfileUpdateOneRequiredWithoutOrganizationNestedInput = {
    create?: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutOrganizationInput
    upsert?: ProfileUpsertWithoutOrganizationInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutOrganizationInput, ProfileUpdateWithoutOrganizationInput>, ProfileUncheckedUpdateWithoutOrganizationInput>
  }

  export type OpportunityUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OpportunityCreateWithoutOrganizationInput, OpportunityUncheckedCreateWithoutOrganizationInput> | OpportunityCreateWithoutOrganizationInput[] | OpportunityUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutOrganizationInput | OpportunityCreateOrConnectWithoutOrganizationInput[]
    upsert?: OpportunityUpsertWithWhereUniqueWithoutOrganizationInput | OpportunityUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OpportunityCreateManyOrganizationInputEnvelope
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    update?: OpportunityUpdateWithWhereUniqueWithoutOrganizationInput | OpportunityUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OpportunityUpdateManyWithWhereWithoutOrganizationInput | OpportunityUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
  }

  export type ApplicationUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ApplicationCreateWithoutOrganizationInput, ApplicationUncheckedCreateWithoutOrganizationInput> | ApplicationCreateWithoutOrganizationInput[] | ApplicationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOrganizationInput | ApplicationCreateOrConnectWithoutOrganizationInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutOrganizationInput | ApplicationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ApplicationCreateManyOrganizationInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutOrganizationInput | ApplicationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutOrganizationInput | ApplicationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AssignmentCreateWithoutOrganizationInput, AssignmentUncheckedCreateWithoutOrganizationInput> | AssignmentCreateWithoutOrganizationInput[] | AssignmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOrganizationInput | AssignmentCreateOrConnectWithoutOrganizationInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutOrganizationInput | AssignmentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AssignmentCreateManyOrganizationInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutOrganizationInput | AssignmentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutOrganizationInput | AssignmentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutRevieweeOrganizationNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeOrganizationInput, ReviewUncheckedCreateWithoutRevieweeOrganizationInput> | ReviewCreateWithoutRevieweeOrganizationInput[] | ReviewUncheckedCreateWithoutRevieweeOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeOrganizationInput | ReviewCreateOrConnectWithoutRevieweeOrganizationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeOrganizationInput | ReviewUpsertWithWhereUniqueWithoutRevieweeOrganizationInput[]
    createMany?: ReviewCreateManyRevieweeOrganizationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeOrganizationInput | ReviewUpdateWithWhereUniqueWithoutRevieweeOrganizationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeOrganizationInput | ReviewUpdateManyWithWhereWithoutRevieweeOrganizationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutReviewerOrganizationNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerOrganizationInput, ReviewUncheckedCreateWithoutReviewerOrganizationInput> | ReviewCreateWithoutReviewerOrganizationInput[] | ReviewUncheckedCreateWithoutReviewerOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerOrganizationInput | ReviewCreateOrConnectWithoutReviewerOrganizationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerOrganizationInput | ReviewUpsertWithWhereUniqueWithoutReviewerOrganizationInput[]
    createMany?: ReviewCreateManyReviewerOrganizationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerOrganizationInput | ReviewUpdateWithWhereUniqueWithoutReviewerOrganizationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerOrganizationInput | ReviewUpdateManyWithWhereWithoutReviewerOrganizationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OpportunityUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<OpportunityCreateWithoutOrganizationInput, OpportunityUncheckedCreateWithoutOrganizationInput> | OpportunityCreateWithoutOrganizationInput[] | OpportunityUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: OpportunityCreateOrConnectWithoutOrganizationInput | OpportunityCreateOrConnectWithoutOrganizationInput[]
    upsert?: OpportunityUpsertWithWhereUniqueWithoutOrganizationInput | OpportunityUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: OpportunityCreateManyOrganizationInputEnvelope
    set?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    disconnect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    delete?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    connect?: OpportunityWhereUniqueInput | OpportunityWhereUniqueInput[]
    update?: OpportunityUpdateWithWhereUniqueWithoutOrganizationInput | OpportunityUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: OpportunityUpdateManyWithWhereWithoutOrganizationInput | OpportunityUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<ApplicationCreateWithoutOrganizationInput, ApplicationUncheckedCreateWithoutOrganizationInput> | ApplicationCreateWithoutOrganizationInput[] | ApplicationUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOrganizationInput | ApplicationCreateOrConnectWithoutOrganizationInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutOrganizationInput | ApplicationUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: ApplicationCreateManyOrganizationInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutOrganizationInput | ApplicationUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutOrganizationInput | ApplicationUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutOrganizationNestedInput = {
    create?: XOR<AssignmentCreateWithoutOrganizationInput, AssignmentUncheckedCreateWithoutOrganizationInput> | AssignmentCreateWithoutOrganizationInput[] | AssignmentUncheckedCreateWithoutOrganizationInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOrganizationInput | AssignmentCreateOrConnectWithoutOrganizationInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutOrganizationInput | AssignmentUpsertWithWhereUniqueWithoutOrganizationInput[]
    createMany?: AssignmentCreateManyOrganizationInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutOrganizationInput | AssignmentUpdateWithWhereUniqueWithoutOrganizationInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutOrganizationInput | AssignmentUpdateManyWithWhereWithoutOrganizationInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeOrganizationNestedInput = {
    create?: XOR<ReviewCreateWithoutRevieweeOrganizationInput, ReviewUncheckedCreateWithoutRevieweeOrganizationInput> | ReviewCreateWithoutRevieweeOrganizationInput[] | ReviewUncheckedCreateWithoutRevieweeOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutRevieweeOrganizationInput | ReviewCreateOrConnectWithoutRevieweeOrganizationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutRevieweeOrganizationInput | ReviewUpsertWithWhereUniqueWithoutRevieweeOrganizationInput[]
    createMany?: ReviewCreateManyRevieweeOrganizationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutRevieweeOrganizationInput | ReviewUpdateWithWhereUniqueWithoutRevieweeOrganizationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutRevieweeOrganizationInput | ReviewUpdateManyWithWhereWithoutRevieweeOrganizationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerOrganizationNestedInput = {
    create?: XOR<ReviewCreateWithoutReviewerOrganizationInput, ReviewUncheckedCreateWithoutReviewerOrganizationInput> | ReviewCreateWithoutReviewerOrganizationInput[] | ReviewUncheckedCreateWithoutReviewerOrganizationInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutReviewerOrganizationInput | ReviewCreateOrConnectWithoutReviewerOrganizationInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutReviewerOrganizationInput | ReviewUpsertWithWhereUniqueWithoutReviewerOrganizationInput[]
    createMany?: ReviewCreateManyReviewerOrganizationInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutReviewerOrganizationInput | ReviewUpdateWithWhereUniqueWithoutReviewerOrganizationInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutReviewerOrganizationInput | ReviewUpdateManyWithWhereWithoutReviewerOrganizationInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type OpportunityCreateskillsNeededInput = {
    set: string[]
  }

  export type OrganizationCreateNestedOneWithoutOpportunitiesInput = {
    create?: XOR<OrganizationCreateWithoutOpportunitiesInput, OrganizationUncheckedCreateWithoutOpportunitiesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutOpportunitiesInput
    connect?: OrganizationWhereUniqueInput
  }

  export type ApplicationCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput> | ApplicationCreateWithoutOpportunityInput[] | ApplicationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOpportunityInput | ApplicationCreateOrConnectWithoutOpportunityInput[]
    createMany?: ApplicationCreateManyOpportunityInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AssignmentCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<AssignmentCreateWithoutOpportunityInput, AssignmentUncheckedCreateWithoutOpportunityInput> | AssignmentCreateWithoutOpportunityInput[] | AssignmentUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOpportunityInput | AssignmentCreateOrConnectWithoutOpportunityInput[]
    createMany?: AssignmentCreateManyOpportunityInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type ApplicationUncheckedCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput> | ApplicationCreateWithoutOpportunityInput[] | ApplicationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOpportunityInput | ApplicationCreateOrConnectWithoutOpportunityInput[]
    createMany?: ApplicationCreateManyOpportunityInputEnvelope
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
  }

  export type AssignmentUncheckedCreateNestedManyWithoutOpportunityInput = {
    create?: XOR<AssignmentCreateWithoutOpportunityInput, AssignmentUncheckedCreateWithoutOpportunityInput> | AssignmentCreateWithoutOpportunityInput[] | AssignmentUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOpportunityInput | AssignmentCreateOrConnectWithoutOpportunityInput[]
    createMany?: AssignmentCreateManyOpportunityInputEnvelope
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
  }

  export type EnumOpportunityCategoryFieldUpdateOperationsInput = {
    set?: $Enums.OpportunityCategory
  }

  export type EnumOpportunityTypeFieldUpdateOperationsInput = {
    set?: $Enums.OpportunityType
  }

  export type EnumUrgencyLevelFieldUpdateOperationsInput = {
    set?: $Enums.UrgencyLevel
  }

  export type OpportunityUpdateskillsNeededInput = {
    set?: string[]
    push?: string | string[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type EnumOpportunityStatusFieldUpdateOperationsInput = {
    set?: $Enums.OpportunityStatus
  }

  export type OrganizationUpdateOneRequiredWithoutOpportunitiesNestedInput = {
    create?: XOR<OrganizationCreateWithoutOpportunitiesInput, OrganizationUncheckedCreateWithoutOpportunitiesInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutOpportunitiesInput
    upsert?: OrganizationUpsertWithoutOpportunitiesInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutOpportunitiesInput, OrganizationUpdateWithoutOpportunitiesInput>, OrganizationUncheckedUpdateWithoutOpportunitiesInput>
  }

  export type ApplicationUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput> | ApplicationCreateWithoutOpportunityInput[] | ApplicationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOpportunityInput | ApplicationCreateOrConnectWithoutOpportunityInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutOpportunityInput | ApplicationUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: ApplicationCreateManyOpportunityInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutOpportunityInput | ApplicationUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutOpportunityInput | ApplicationUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AssignmentUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<AssignmentCreateWithoutOpportunityInput, AssignmentUncheckedCreateWithoutOpportunityInput> | AssignmentCreateWithoutOpportunityInput[] | AssignmentUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOpportunityInput | AssignmentCreateOrConnectWithoutOpportunityInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutOpportunityInput | AssignmentUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: AssignmentCreateManyOpportunityInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutOpportunityInput | AssignmentUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutOpportunityInput | AssignmentUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput> | ApplicationCreateWithoutOpportunityInput[] | ApplicationUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: ApplicationCreateOrConnectWithoutOpportunityInput | ApplicationCreateOrConnectWithoutOpportunityInput[]
    upsert?: ApplicationUpsertWithWhereUniqueWithoutOpportunityInput | ApplicationUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: ApplicationCreateManyOpportunityInputEnvelope
    set?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    disconnect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    delete?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    connect?: ApplicationWhereUniqueInput | ApplicationWhereUniqueInput[]
    update?: ApplicationUpdateWithWhereUniqueWithoutOpportunityInput | ApplicationUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: ApplicationUpdateManyWithWhereWithoutOpportunityInput | ApplicationUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
  }

  export type AssignmentUncheckedUpdateManyWithoutOpportunityNestedInput = {
    create?: XOR<AssignmentCreateWithoutOpportunityInput, AssignmentUncheckedCreateWithoutOpportunityInput> | AssignmentCreateWithoutOpportunityInput[] | AssignmentUncheckedCreateWithoutOpportunityInput[]
    connectOrCreate?: AssignmentCreateOrConnectWithoutOpportunityInput | AssignmentCreateOrConnectWithoutOpportunityInput[]
    upsert?: AssignmentUpsertWithWhereUniqueWithoutOpportunityInput | AssignmentUpsertWithWhereUniqueWithoutOpportunityInput[]
    createMany?: AssignmentCreateManyOpportunityInputEnvelope
    set?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    disconnect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    delete?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    connect?: AssignmentWhereUniqueInput | AssignmentWhereUniqueInput[]
    update?: AssignmentUpdateWithWhereUniqueWithoutOpportunityInput | AssignmentUpdateWithWhereUniqueWithoutOpportunityInput[]
    updateMany?: AssignmentUpdateManyWithWhereWithoutOpportunityInput | AssignmentUpdateManyWithWhereWithoutOpportunityInput[]
    deleteMany?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
  }

  export type VolunteerCreateNestedOneWithoutSkillsInput = {
    create?: XOR<VolunteerCreateWithoutSkillsInput, VolunteerUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutSkillsInput
    connect?: VolunteerWhereUniqueInput
  }

  export type EnumSkillCategoryFieldUpdateOperationsInput = {
    set?: $Enums.SkillCategory
  }

  export type EnumSkillLevelFieldUpdateOperationsInput = {
    set?: $Enums.SkillLevel
  }

  export type VolunteerUpdateOneRequiredWithoutSkillsNestedInput = {
    create?: XOR<VolunteerCreateWithoutSkillsInput, VolunteerUncheckedCreateWithoutSkillsInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutSkillsInput
    upsert?: VolunteerUpsertWithoutSkillsInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutSkillsInput, VolunteerUpdateWithoutSkillsInput>, VolunteerUncheckedUpdateWithoutSkillsInput>
  }

  export type VolunteerCreateNestedOneWithoutAvailabilityInput = {
    create?: XOR<VolunteerCreateWithoutAvailabilityInput, VolunteerUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutAvailabilityInput
    connect?: VolunteerWhereUniqueInput
  }

  export type VolunteerUpdateOneRequiredWithoutAvailabilityNestedInput = {
    create?: XOR<VolunteerCreateWithoutAvailabilityInput, VolunteerUncheckedCreateWithoutAvailabilityInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutAvailabilityInput
    upsert?: VolunteerUpsertWithoutAvailabilityInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutAvailabilityInput, VolunteerUpdateWithoutAvailabilityInput>, VolunteerUncheckedUpdateWithoutAvailabilityInput>
  }

  export type OpportunityCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<OpportunityCreateWithoutApplicationsInput, OpportunityUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutApplicationsInput
    connect?: OpportunityWhereUniqueInput
  }

  export type VolunteerCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<VolunteerCreateWithoutApplicationsInput, VolunteerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutApplicationsInput
    connect?: VolunteerWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutApplicationsInput = {
    create?: XOR<OrganizationCreateWithoutApplicationsInput, OrganizationUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApplicationsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AssignmentCreateNestedOneWithoutApplicationInput = {
    create?: XOR<AssignmentCreateWithoutApplicationInput, AssignmentUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutApplicationInput
    connect?: AssignmentWhereUniqueInput
  }

  export type AssignmentUncheckedCreateNestedOneWithoutApplicationInput = {
    create?: XOR<AssignmentCreateWithoutApplicationInput, AssignmentUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutApplicationInput
    connect?: AssignmentWhereUniqueInput
  }

  export type EnumApplicationStatusFieldUpdateOperationsInput = {
    set?: $Enums.ApplicationStatus
  }

  export type OpportunityUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<OpportunityCreateWithoutApplicationsInput, OpportunityUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutApplicationsInput
    upsert?: OpportunityUpsertWithoutApplicationsInput
    connect?: OpportunityWhereUniqueInput
    update?: XOR<XOR<OpportunityUpdateToOneWithWhereWithoutApplicationsInput, OpportunityUpdateWithoutApplicationsInput>, OpportunityUncheckedUpdateWithoutApplicationsInput>
  }

  export type VolunteerUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<VolunteerCreateWithoutApplicationsInput, VolunteerUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutApplicationsInput
    upsert?: VolunteerUpsertWithoutApplicationsInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutApplicationsInput, VolunteerUpdateWithoutApplicationsInput>, VolunteerUncheckedUpdateWithoutApplicationsInput>
  }

  export type OrganizationUpdateOneRequiredWithoutApplicationsNestedInput = {
    create?: XOR<OrganizationCreateWithoutApplicationsInput, OrganizationUncheckedCreateWithoutApplicationsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutApplicationsInput
    upsert?: OrganizationUpsertWithoutApplicationsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutApplicationsInput, OrganizationUpdateWithoutApplicationsInput>, OrganizationUncheckedUpdateWithoutApplicationsInput>
  }

  export type AssignmentUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<AssignmentCreateWithoutApplicationInput, AssignmentUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutApplicationInput
    upsert?: AssignmentUpsertWithoutApplicationInput
    disconnect?: AssignmentWhereInput | boolean
    delete?: AssignmentWhereInput | boolean
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutApplicationInput, AssignmentUpdateWithoutApplicationInput>, AssignmentUncheckedUpdateWithoutApplicationInput>
  }

  export type AssignmentUncheckedUpdateOneWithoutApplicationNestedInput = {
    create?: XOR<AssignmentCreateWithoutApplicationInput, AssignmentUncheckedCreateWithoutApplicationInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutApplicationInput
    upsert?: AssignmentUpsertWithoutApplicationInput
    disconnect?: AssignmentWhereInput | boolean
    delete?: AssignmentWhereInput | boolean
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutApplicationInput, AssignmentUpdateWithoutApplicationInput>, AssignmentUncheckedUpdateWithoutApplicationInput>
  }

  export type ApplicationCreateNestedOneWithoutAssignmentInput = {
    create?: XOR<ApplicationCreateWithoutAssignmentInput, ApplicationUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAssignmentInput
    connect?: ApplicationWhereUniqueInput
  }

  export type OpportunityCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<OpportunityCreateWithoutAssignmentsInput, OpportunityUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutAssignmentsInput
    connect?: OpportunityWhereUniqueInput
  }

  export type VolunteerCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<VolunteerCreateWithoutAssignmentsInput, VolunteerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutAssignmentsInput
    connect?: VolunteerWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutAssignmentsInput = {
    create?: XOR<OrganizationCreateWithoutAssignmentsInput, OrganizationUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAssignmentsInput
    connect?: OrganizationWhereUniqueInput
  }

  export type SessionCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SessionCreateWithoutAssignmentInput, SessionUncheckedCreateWithoutAssignmentInput> | SessionCreateWithoutAssignmentInput[] | SessionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAssignmentInput | SessionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SessionCreateManyAssignmentInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ReviewCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput> | ReviewCreateWithoutAssignmentInput[] | ReviewUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAssignmentInput | ReviewCreateOrConnectWithoutAssignmentInput[]
    createMany?: ReviewCreateManyAssignmentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<SessionCreateWithoutAssignmentInput, SessionUncheckedCreateWithoutAssignmentInput> | SessionCreateWithoutAssignmentInput[] | SessionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAssignmentInput | SessionCreateOrConnectWithoutAssignmentInput[]
    createMany?: SessionCreateManyAssignmentInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type ReviewUncheckedCreateNestedManyWithoutAssignmentInput = {
    create?: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput> | ReviewCreateWithoutAssignmentInput[] | ReviewUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAssignmentInput | ReviewCreateOrConnectWithoutAssignmentInput[]
    createMany?: ReviewCreateManyAssignmentInputEnvelope
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
  }

  export type EnumAssignmentStatusFieldUpdateOperationsInput = {
    set?: $Enums.AssignmentStatus
  }

  export type ApplicationUpdateOneRequiredWithoutAssignmentNestedInput = {
    create?: XOR<ApplicationCreateWithoutAssignmentInput, ApplicationUncheckedCreateWithoutAssignmentInput>
    connectOrCreate?: ApplicationCreateOrConnectWithoutAssignmentInput
    upsert?: ApplicationUpsertWithoutAssignmentInput
    connect?: ApplicationWhereUniqueInput
    update?: XOR<XOR<ApplicationUpdateToOneWithWhereWithoutAssignmentInput, ApplicationUpdateWithoutAssignmentInput>, ApplicationUncheckedUpdateWithoutAssignmentInput>
  }

  export type OpportunityUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<OpportunityCreateWithoutAssignmentsInput, OpportunityUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: OpportunityCreateOrConnectWithoutAssignmentsInput
    upsert?: OpportunityUpsertWithoutAssignmentsInput
    connect?: OpportunityWhereUniqueInput
    update?: XOR<XOR<OpportunityUpdateToOneWithWhereWithoutAssignmentsInput, OpportunityUpdateWithoutAssignmentsInput>, OpportunityUncheckedUpdateWithoutAssignmentsInput>
  }

  export type VolunteerUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<VolunteerCreateWithoutAssignmentsInput, VolunteerUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutAssignmentsInput
    upsert?: VolunteerUpsertWithoutAssignmentsInput
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutAssignmentsInput, VolunteerUpdateWithoutAssignmentsInput>, VolunteerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type OrganizationUpdateOneRequiredWithoutAssignmentsNestedInput = {
    create?: XOR<OrganizationCreateWithoutAssignmentsInput, OrganizationUncheckedCreateWithoutAssignmentsInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutAssignmentsInput
    upsert?: OrganizationUpsertWithoutAssignmentsInput
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutAssignmentsInput, OrganizationUpdateWithoutAssignmentsInput>, OrganizationUncheckedUpdateWithoutAssignmentsInput>
  }

  export type SessionUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SessionCreateWithoutAssignmentInput, SessionUncheckedCreateWithoutAssignmentInput> | SessionCreateWithoutAssignmentInput[] | SessionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAssignmentInput | SessionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutAssignmentInput | SessionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SessionCreateManyAssignmentInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutAssignmentInput | SessionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutAssignmentInput | SessionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ReviewUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput> | ReviewCreateWithoutAssignmentInput[] | ReviewUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAssignmentInput | ReviewCreateOrConnectWithoutAssignmentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAssignmentInput | ReviewUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: ReviewCreateManyAssignmentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAssignmentInput | ReviewUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAssignmentInput | ReviewUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<SessionCreateWithoutAssignmentInput, SessionUncheckedCreateWithoutAssignmentInput> | SessionCreateWithoutAssignmentInput[] | SessionUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutAssignmentInput | SessionCreateOrConnectWithoutAssignmentInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutAssignmentInput | SessionUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: SessionCreateManyAssignmentInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutAssignmentInput | SessionUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutAssignmentInput | SessionUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type ReviewUncheckedUpdateManyWithoutAssignmentNestedInput = {
    create?: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput> | ReviewCreateWithoutAssignmentInput[] | ReviewUncheckedCreateWithoutAssignmentInput[]
    connectOrCreate?: ReviewCreateOrConnectWithoutAssignmentInput | ReviewCreateOrConnectWithoutAssignmentInput[]
    upsert?: ReviewUpsertWithWhereUniqueWithoutAssignmentInput | ReviewUpsertWithWhereUniqueWithoutAssignmentInput[]
    createMany?: ReviewCreateManyAssignmentInputEnvelope
    set?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    disconnect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    delete?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    connect?: ReviewWhereUniqueInput | ReviewWhereUniqueInput[]
    update?: ReviewUpdateWithWhereUniqueWithoutAssignmentInput | ReviewUpdateWithWhereUniqueWithoutAssignmentInput[]
    updateMany?: ReviewUpdateManyWithWhereWithoutAssignmentInput | ReviewUpdateManyWithWhereWithoutAssignmentInput[]
    deleteMany?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
  }

  export type AssignmentCreateNestedOneWithoutSessionsInput = {
    create?: XOR<AssignmentCreateWithoutSessionsInput, AssignmentUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSessionsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type EnumSessionStatusFieldUpdateOperationsInput = {
    set?: $Enums.SessionStatus
  }

  export type AssignmentUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<AssignmentCreateWithoutSessionsInput, AssignmentUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutSessionsInput
    upsert?: AssignmentUpsertWithoutSessionsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutSessionsInput, AssignmentUpdateWithoutSessionsInput>, AssignmentUncheckedUpdateWithoutSessionsInput>
  }

  export type AssignmentCreateNestedOneWithoutReviewsInput = {
    create?: XOR<AssignmentCreateWithoutReviewsInput, AssignmentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutReviewsInput
    connect?: AssignmentWhereUniqueInput
  }

  export type VolunteerCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<VolunteerCreateWithoutReviewsGivenInput, VolunteerUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutReviewsGivenInput
    connect?: VolunteerWhereUniqueInput
  }

  export type VolunteerCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<VolunteerCreateWithoutReviewsReceivedInput, VolunteerUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutReviewsReceivedInput
    connect?: VolunteerWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutReviewsGivenInput = {
    create?: XOR<OrganizationCreateWithoutReviewsGivenInput, OrganizationUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutReviewsGivenInput
    connect?: OrganizationWhereUniqueInput
  }

  export type OrganizationCreateNestedOneWithoutReviewsReceivedInput = {
    create?: XOR<OrganizationCreateWithoutReviewsReceivedInput, OrganizationUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutReviewsReceivedInput
    connect?: OrganizationWhereUniqueInput
  }

  export type AssignmentUpdateOneRequiredWithoutReviewsNestedInput = {
    create?: XOR<AssignmentCreateWithoutReviewsInput, AssignmentUncheckedCreateWithoutReviewsInput>
    connectOrCreate?: AssignmentCreateOrConnectWithoutReviewsInput
    upsert?: AssignmentUpsertWithoutReviewsInput
    connect?: AssignmentWhereUniqueInput
    update?: XOR<XOR<AssignmentUpdateToOneWithWhereWithoutReviewsInput, AssignmentUpdateWithoutReviewsInput>, AssignmentUncheckedUpdateWithoutReviewsInput>
  }

  export type VolunteerUpdateOneWithoutReviewsGivenNestedInput = {
    create?: XOR<VolunteerCreateWithoutReviewsGivenInput, VolunteerUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutReviewsGivenInput
    upsert?: VolunteerUpsertWithoutReviewsGivenInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutReviewsGivenInput, VolunteerUpdateWithoutReviewsGivenInput>, VolunteerUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type VolunteerUpdateOneWithoutReviewsReceivedNestedInput = {
    create?: XOR<VolunteerCreateWithoutReviewsReceivedInput, VolunteerUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: VolunteerCreateOrConnectWithoutReviewsReceivedInput
    upsert?: VolunteerUpsertWithoutReviewsReceivedInput
    disconnect?: VolunteerWhereInput | boolean
    delete?: VolunteerWhereInput | boolean
    connect?: VolunteerWhereUniqueInput
    update?: XOR<XOR<VolunteerUpdateToOneWithWhereWithoutReviewsReceivedInput, VolunteerUpdateWithoutReviewsReceivedInput>, VolunteerUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type OrganizationUpdateOneWithoutReviewsGivenNestedInput = {
    create?: XOR<OrganizationCreateWithoutReviewsGivenInput, OrganizationUncheckedCreateWithoutReviewsGivenInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutReviewsGivenInput
    upsert?: OrganizationUpsertWithoutReviewsGivenInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutReviewsGivenInput, OrganizationUpdateWithoutReviewsGivenInput>, OrganizationUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type OrganizationUpdateOneWithoutReviewsReceivedNestedInput = {
    create?: XOR<OrganizationCreateWithoutReviewsReceivedInput, OrganizationUncheckedCreateWithoutReviewsReceivedInput>
    connectOrCreate?: OrganizationCreateOrConnectWithoutReviewsReceivedInput
    upsert?: OrganizationUpsertWithoutReviewsReceivedInput
    disconnect?: OrganizationWhereInput | boolean
    delete?: OrganizationWhereInput | boolean
    connect?: OrganizationWhereUniqueInput
    update?: XOR<XOR<OrganizationUpdateToOneWithWhereWithoutReviewsReceivedInput, OrganizationUpdateWithoutReviewsReceivedInput>, OrganizationUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type ProfileCreateNestedOneWithoutSentMessagesInput = {
    create?: XOR<ProfileCreateWithoutSentMessagesInput, ProfileUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSentMessagesInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileCreateNestedOneWithoutReceivedMessagesInput = {
    create?: XOR<ProfileCreateWithoutReceivedMessagesInput, ProfileUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutReceivedMessagesInput
    connect?: ProfileWhereUniqueInput
  }

  export type ProfileUpdateOneRequiredWithoutSentMessagesNestedInput = {
    create?: XOR<ProfileCreateWithoutSentMessagesInput, ProfileUncheckedCreateWithoutSentMessagesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutSentMessagesInput
    upsert?: ProfileUpsertWithoutSentMessagesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutSentMessagesInput, ProfileUpdateWithoutSentMessagesInput>, ProfileUncheckedUpdateWithoutSentMessagesInput>
  }

  export type ProfileUpdateOneRequiredWithoutReceivedMessagesNestedInput = {
    create?: XOR<ProfileCreateWithoutReceivedMessagesInput, ProfileUncheckedCreateWithoutReceivedMessagesInput>
    connectOrCreate?: ProfileCreateOrConnectWithoutReceivedMessagesInput
    upsert?: ProfileUpsertWithoutReceivedMessagesInput
    connect?: ProfileWhereUniqueInput
    update?: XOR<XOR<ProfileUpdateToOneWithWhereWithoutReceivedMessagesInput, ProfileUpdateWithoutReceivedMessagesInput>, ProfileUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type NestedUuidFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidFilter<$PrismaModel> | string
  }

  export type NestedStringFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringFilter<$PrismaModel> | string
  }

  export type NestedEnumUserTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeFilter<$PrismaModel> | $Enums.UserType
  }

  export type NestedStringNullableFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableFilter<$PrismaModel> | string | null
  }

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
  }

  export type NestedDateTimeFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeFilter<$PrismaModel> | Date | string
  }

  export type NestedUuidWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedUuidWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedIntFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntFilter<$PrismaModel> | number
  }

  export type NestedStringWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel>
    in?: string[] | ListStringFieldRefInput<$PrismaModel>
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel>
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringWithAggregatesFilter<$PrismaModel> | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedStringFilter<$PrismaModel>
    _max?: NestedStringFilter<$PrismaModel>
  }

  export type NestedEnumUserTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserType | EnumUserTypeFieldRefInput<$PrismaModel>
    in?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserType[] | ListEnumUserTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumUserTypeWithAggregatesFilter<$PrismaModel> | $Enums.UserType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserTypeFilter<$PrismaModel>
    _max?: NestedEnumUserTypeFilter<$PrismaModel>
  }

  export type NestedStringNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: string | StringFieldRefInput<$PrismaModel> | null
    in?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    notIn?: string[] | ListStringFieldRefInput<$PrismaModel> | null
    lt?: string | StringFieldRefInput<$PrismaModel>
    lte?: string | StringFieldRefInput<$PrismaModel>
    gt?: string | StringFieldRefInput<$PrismaModel>
    gte?: string | StringFieldRefInput<$PrismaModel>
    contains?: string | StringFieldRefInput<$PrismaModel>
    startsWith?: string | StringFieldRefInput<$PrismaModel>
    endsWith?: string | StringFieldRefInput<$PrismaModel>
    not?: NestedStringNullableWithAggregatesFilter<$PrismaModel> | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedStringNullableFilter<$PrismaModel>
    _max?: NestedStringNullableFilter<$PrismaModel>
  }

  export type NestedIntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
  }

  export type NestedDateTimeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel>
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeWithAggregatesFilter<$PrismaModel> | Date | string
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedDateTimeFilter<$PrismaModel>
    _max?: NestedDateTimeFilter<$PrismaModel>
  }

  export type NestedFloatFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatFilter<$PrismaModel> | number
  }

  export type NestedIntWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel>
    in?: number[] | ListIntFieldRefInput<$PrismaModel>
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel>
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedIntFilter<$PrismaModel>
    _min?: NestedIntFilter<$PrismaModel>
    _max?: NestedIntFilter<$PrismaModel>
  }

  export type NestedFloatWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel>
    in?: number[] | ListFloatFieldRefInput<$PrismaModel>
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel>
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatWithAggregatesFilter<$PrismaModel> | number
    _count?: NestedIntFilter<$PrismaModel>
    _avg?: NestedFloatFilter<$PrismaModel>
    _sum?: NestedFloatFilter<$PrismaModel>
    _min?: NestedFloatFilter<$PrismaModel>
    _max?: NestedFloatFilter<$PrismaModel>
  }

  export type NestedEnumOpportunityCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityCategory | EnumOpportunityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityCategory[] | ListEnumOpportunityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityCategory[] | ListEnumOpportunityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityCategoryFilter<$PrismaModel> | $Enums.OpportunityCategory
  }

  export type NestedEnumOpportunityTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityType | EnumOpportunityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypeFilter<$PrismaModel> | $Enums.OpportunityType
  }

  export type NestedEnumUrgencyLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyLevelFilter<$PrismaModel> | $Enums.UrgencyLevel
  }

  export type NestedDateTimeNullableFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableFilter<$PrismaModel> | Date | string | null
  }

  export type NestedEnumOpportunityStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusFilter<$PrismaModel> | $Enums.OpportunityStatus
  }

  export type NestedEnumOpportunityCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityCategory | EnumOpportunityCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityCategory[] | ListEnumOpportunityCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityCategory[] | ListEnumOpportunityCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityCategoryWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityCategoryFilter<$PrismaModel>
    _max?: NestedEnumOpportunityCategoryFilter<$PrismaModel>
  }

  export type NestedEnumOpportunityTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityType | EnumOpportunityTypeFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityType[] | ListEnumOpportunityTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityTypeWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityTypeFilter<$PrismaModel>
    _max?: NestedEnumOpportunityTypeFilter<$PrismaModel>
  }

  export type NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UrgencyLevel | EnumUrgencyLevelFieldRefInput<$PrismaModel>
    in?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.UrgencyLevel[] | ListEnumUrgencyLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumUrgencyLevelWithAggregatesFilter<$PrismaModel> | $Enums.UrgencyLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUrgencyLevelFilter<$PrismaModel>
    _max?: NestedEnumUrgencyLevelFilter<$PrismaModel>
  }

  export type NestedDateTimeNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: Date | string | DateTimeFieldRefInput<$PrismaModel> | null
    in?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    notIn?: Date[] | string[] | ListDateTimeFieldRefInput<$PrismaModel> | null
    lt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    lte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gt?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    gte?: Date | string | DateTimeFieldRefInput<$PrismaModel>
    not?: NestedDateTimeNullableWithAggregatesFilter<$PrismaModel> | Date | string | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedDateTimeNullableFilter<$PrismaModel>
    _max?: NestedDateTimeNullableFilter<$PrismaModel>
  }

  export type NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.OpportunityStatus | EnumOpportunityStatusFieldRefInput<$PrismaModel>
    in?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.OpportunityStatus[] | ListEnumOpportunityStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumOpportunityStatusWithAggregatesFilter<$PrismaModel> | $Enums.OpportunityStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumOpportunityStatusFilter<$PrismaModel>
    _max?: NestedEnumOpportunityStatusFilter<$PrismaModel>
  }

  export type NestedEnumSkillCategoryFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryFilter<$PrismaModel> | $Enums.SkillCategory
  }

  export type NestedEnumSkillLevelFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelFilter<$PrismaModel> | $Enums.SkillLevel
  }

  export type NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillCategory | EnumSkillCategoryFieldRefInput<$PrismaModel>
    in?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillCategory[] | ListEnumSkillCategoryFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillCategoryWithAggregatesFilter<$PrismaModel> | $Enums.SkillCategory
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillCategoryFilter<$PrismaModel>
    _max?: NestedEnumSkillCategoryFilter<$PrismaModel>
  }

  export type NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SkillLevel | EnumSkillLevelFieldRefInput<$PrismaModel>
    in?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    notIn?: $Enums.SkillLevel[] | ListEnumSkillLevelFieldRefInput<$PrismaModel>
    not?: NestedEnumSkillLevelWithAggregatesFilter<$PrismaModel> | $Enums.SkillLevel
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSkillLevelFilter<$PrismaModel>
    _max?: NestedEnumSkillLevelFilter<$PrismaModel>
  }

  export type NestedEnumApplicationStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusFilter<$PrismaModel> | $Enums.ApplicationStatus
  }

  export type NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.ApplicationStatus | EnumApplicationStatusFieldRefInput<$PrismaModel>
    in?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.ApplicationStatus[] | ListEnumApplicationStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumApplicationStatusWithAggregatesFilter<$PrismaModel> | $Enums.ApplicationStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumApplicationStatusFilter<$PrismaModel>
    _max?: NestedEnumApplicationStatusFilter<$PrismaModel>
  }

  export type NestedEnumAssignmentStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusFilter<$PrismaModel> | $Enums.AssignmentStatus
  }

  export type NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.AssignmentStatus | EnumAssignmentStatusFieldRefInput<$PrismaModel>
    in?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.AssignmentStatus[] | ListEnumAssignmentStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumAssignmentStatusWithAggregatesFilter<$PrismaModel> | $Enums.AssignmentStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumAssignmentStatusFilter<$PrismaModel>
    _max?: NestedEnumAssignmentStatusFilter<$PrismaModel>
  }

  export type NestedEnumSessionStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusFilter<$PrismaModel> | $Enums.SessionStatus
  }

  export type NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.SessionStatus | EnumSessionStatusFieldRefInput<$PrismaModel>
    in?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.SessionStatus[] | ListEnumSessionStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumSessionStatusWithAggregatesFilter<$PrismaModel> | $Enums.SessionStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumSessionStatusFilter<$PrismaModel>
    _max?: NestedEnumSessionStatusFilter<$PrismaModel>
  }

  export type VolunteerCreateWithoutProfileInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: VolunteerSkillCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutProfileInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: VolunteerSkillUncheckedCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityUncheckedCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutProfileInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutProfileInput, VolunteerUncheckedCreateWithoutProfileInput>
  }

  export type OrganizationCreateWithoutProfileInput = {
    id?: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutProfileInput = {
    id?: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutProfileInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput>
  }

  export type MessageCreateWithoutSenderInput = {
    id?: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
    receiver: ProfileCreateNestedOneWithoutReceivedMessagesInput
  }

  export type MessageUncheckedCreateWithoutSenderInput = {
    id?: string
    receiverId: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutSenderInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageCreateManySenderInputEnvelope = {
    data: MessageCreateManySenderInput | MessageCreateManySenderInput[]
    skipDuplicates?: boolean
  }

  export type MessageCreateWithoutReceiverInput = {
    id?: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
    sender: ProfileCreateNestedOneWithoutSentMessagesInput
  }

  export type MessageUncheckedCreateWithoutReceiverInput = {
    id?: string
    senderId: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateOrConnectWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageCreateManyReceiverInputEnvelope = {
    data: MessageCreateManyReceiverInput | MessageCreateManyReceiverInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerUpsertWithoutProfileInput = {
    update: XOR<VolunteerUpdateWithoutProfileInput, VolunteerUncheckedUpdateWithoutProfileInput>
    create: XOR<VolunteerCreateWithoutProfileInput, VolunteerUncheckedCreateWithoutProfileInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutProfileInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutProfileInput, VolunteerUncheckedUpdateWithoutProfileInput>
  }

  export type VolunteerUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: VolunteerSkillUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: VolunteerSkillUncheckedUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type OrganizationUpsertWithoutProfileInput = {
    update: XOR<OrganizationUpdateWithoutProfileInput, OrganizationUncheckedUpdateWithoutProfileInput>
    create: XOR<OrganizationCreateWithoutProfileInput, OrganizationUncheckedCreateWithoutProfileInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutProfileInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutProfileInput, OrganizationUncheckedUpdateWithoutProfileInput>
  }

  export type OrganizationUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutProfileInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUncheckedUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type MessageUpsertWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
    create: XOR<MessageCreateWithoutSenderInput, MessageUncheckedCreateWithoutSenderInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutSenderInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutSenderInput, MessageUncheckedUpdateWithoutSenderInput>
  }

  export type MessageUpdateManyWithWhereWithoutSenderInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutSenderInput>
  }

  export type MessageScalarWhereInput = {
    AND?: MessageScalarWhereInput | MessageScalarWhereInput[]
    OR?: MessageScalarWhereInput[]
    NOT?: MessageScalarWhereInput | MessageScalarWhereInput[]
    id?: UuidFilter<"Message"> | string
    senderId?: UuidFilter<"Message"> | string
    receiverId?: UuidFilter<"Message"> | string
    subject?: StringNullableFilter<"Message"> | string | null
    content?: StringFilter<"Message"> | string
    isRead?: BoolFilter<"Message"> | boolean
    createdAt?: DateTimeFilter<"Message"> | Date | string
  }

  export type MessageUpsertWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    update: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
    create: XOR<MessageCreateWithoutReceiverInput, MessageUncheckedCreateWithoutReceiverInput>
  }

  export type MessageUpdateWithWhereUniqueWithoutReceiverInput = {
    where: MessageWhereUniqueInput
    data: XOR<MessageUpdateWithoutReceiverInput, MessageUncheckedUpdateWithoutReceiverInput>
  }

  export type MessageUpdateManyWithWhereWithoutReceiverInput = {
    where: MessageScalarWhereInput
    data: XOR<MessageUpdateManyMutationInput, MessageUncheckedUpdateManyWithoutReceiverInput>
  }

  export type ProfileCreateWithoutVolunteerInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationCreateNestedOneWithoutProfileInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type ProfileUncheckedCreateWithoutVolunteerInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    organization?: OrganizationUncheckedCreateNestedOneWithoutProfileInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type ProfileCreateOrConnectWithoutVolunteerInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutVolunteerInput, ProfileUncheckedCreateWithoutVolunteerInput>
  }

  export type VolunteerSkillCreateWithoutVolunteerInput = {
    id?: string
    category: $Enums.SkillCategory
    name: string
    level: $Enums.SkillLevel
    verified?: boolean
    createdAt?: Date | string
  }

  export type VolunteerSkillUncheckedCreateWithoutVolunteerInput = {
    id?: string
    category: $Enums.SkillCategory
    name: string
    level: $Enums.SkillLevel
    verified?: boolean
    createdAt?: Date | string
  }

  export type VolunteerSkillCreateOrConnectWithoutVolunteerInput = {
    where: VolunteerSkillWhereUniqueInput
    create: XOR<VolunteerSkillCreateWithoutVolunteerInput, VolunteerSkillUncheckedCreateWithoutVolunteerInput>
  }

  export type VolunteerSkillCreateManyVolunteerInputEnvelope = {
    data: VolunteerSkillCreateManyVolunteerInput | VolunteerSkillCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type VolunteerAvailabilityCreateWithoutVolunteerInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    createdAt?: Date | string
  }

  export type VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    createdAt?: Date | string
  }

  export type VolunteerAvailabilityCreateOrConnectWithoutVolunteerInput = {
    where: VolunteerAvailabilityWhereUniqueInput
    create: XOR<VolunteerAvailabilityCreateWithoutVolunteerInput, VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput>
  }

  export type VolunteerAvailabilityCreateManyVolunteerInputEnvelope = {
    data: VolunteerAvailabilityCreateManyVolunteerInput | VolunteerAvailabilityCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutVolunteerInput = {
    id?: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    opportunity: OpportunityCreateNestedOneWithoutApplicationsInput
    organization: OrganizationCreateNestedOneWithoutApplicationsInput
    assignment?: AssignmentCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutVolunteerInput = {
    id?: string
    opportunityId: string
    organizationId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    assignment?: AssignmentUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutVolunteerInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutVolunteerInput, ApplicationUncheckedCreateWithoutVolunteerInput>
  }

  export type ApplicationCreateManyVolunteerInputEnvelope = {
    data: ApplicationCreateManyVolunteerInput | ApplicationCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutVolunteerInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAssignmentInput
    opportunity: OpportunityCreateNestedOneWithoutAssignmentsInput
    organization: OrganizationCreateNestedOneWithoutAssignmentsInput
    sessions?: SessionCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutVolunteerInput = {
    id?: string
    applicationId: string
    opportunityId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutVolunteerInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutVolunteerInput, AssignmentUncheckedCreateWithoutVolunteerInput>
  }

  export type AssignmentCreateManyVolunteerInputEnvelope = {
    data: AssignmentCreateManyVolunteerInput | AssignmentCreateManyVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRevieweeVolunteerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutReviewsInput
    reviewerVolunteer?: VolunteerCreateNestedOneWithoutReviewsGivenInput
    reviewerOrganization?: OrganizationCreateNestedOneWithoutReviewsGivenInput
    revieweeOrganization?: OrganizationCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutRevieweeVolunteerInput = {
    id?: string
    assignmentId: string
    reviewerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRevieweeVolunteerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRevieweeVolunteerInput, ReviewUncheckedCreateWithoutRevieweeVolunteerInput>
  }

  export type ReviewCreateManyRevieweeVolunteerInputEnvelope = {
    data: ReviewCreateManyRevieweeVolunteerInput | ReviewCreateManyRevieweeVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerVolunteerInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutReviewsInput
    revieweeVolunteer?: VolunteerCreateNestedOneWithoutReviewsReceivedInput
    reviewerOrganization?: OrganizationCreateNestedOneWithoutReviewsGivenInput
    revieweeOrganization?: OrganizationCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutReviewerVolunteerInput = {
    id?: string
    assignmentId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerVolunteerInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerVolunteerInput, ReviewUncheckedCreateWithoutReviewerVolunteerInput>
  }

  export type ReviewCreateManyReviewerVolunteerInputEnvelope = {
    data: ReviewCreateManyReviewerVolunteerInput | ReviewCreateManyReviewerVolunteerInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutVolunteerInput = {
    update: XOR<ProfileUpdateWithoutVolunteerInput, ProfileUncheckedUpdateWithoutVolunteerInput>
    create: XOR<ProfileCreateWithoutVolunteerInput, ProfileUncheckedCreateWithoutVolunteerInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutVolunteerInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutVolunteerInput, ProfileUncheckedUpdateWithoutVolunteerInput>
  }

  export type ProfileUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneWithoutProfileNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type ProfileUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUncheckedUpdateOneWithoutProfileNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type VolunteerSkillUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: VolunteerSkillWhereUniqueInput
    update: XOR<VolunteerSkillUpdateWithoutVolunteerInput, VolunteerSkillUncheckedUpdateWithoutVolunteerInput>
    create: XOR<VolunteerSkillCreateWithoutVolunteerInput, VolunteerSkillUncheckedCreateWithoutVolunteerInput>
  }

  export type VolunteerSkillUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: VolunteerSkillWhereUniqueInput
    data: XOR<VolunteerSkillUpdateWithoutVolunteerInput, VolunteerSkillUncheckedUpdateWithoutVolunteerInput>
  }

  export type VolunteerSkillUpdateManyWithWhereWithoutVolunteerInput = {
    where: VolunteerSkillScalarWhereInput
    data: XOR<VolunteerSkillUpdateManyMutationInput, VolunteerSkillUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type VolunteerSkillScalarWhereInput = {
    AND?: VolunteerSkillScalarWhereInput | VolunteerSkillScalarWhereInput[]
    OR?: VolunteerSkillScalarWhereInput[]
    NOT?: VolunteerSkillScalarWhereInput | VolunteerSkillScalarWhereInput[]
    id?: UuidFilter<"VolunteerSkill"> | string
    volunteerId?: UuidFilter<"VolunteerSkill"> | string
    category?: EnumSkillCategoryFilter<"VolunteerSkill"> | $Enums.SkillCategory
    name?: StringFilter<"VolunteerSkill"> | string
    level?: EnumSkillLevelFilter<"VolunteerSkill"> | $Enums.SkillLevel
    verified?: BoolFilter<"VolunteerSkill"> | boolean
    createdAt?: DateTimeFilter<"VolunteerSkill"> | Date | string
  }

  export type VolunteerAvailabilityUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: VolunteerAvailabilityWhereUniqueInput
    update: XOR<VolunteerAvailabilityUpdateWithoutVolunteerInput, VolunteerAvailabilityUncheckedUpdateWithoutVolunteerInput>
    create: XOR<VolunteerAvailabilityCreateWithoutVolunteerInput, VolunteerAvailabilityUncheckedCreateWithoutVolunteerInput>
  }

  export type VolunteerAvailabilityUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: VolunteerAvailabilityWhereUniqueInput
    data: XOR<VolunteerAvailabilityUpdateWithoutVolunteerInput, VolunteerAvailabilityUncheckedUpdateWithoutVolunteerInput>
  }

  export type VolunteerAvailabilityUpdateManyWithWhereWithoutVolunteerInput = {
    where: VolunteerAvailabilityScalarWhereInput
    data: XOR<VolunteerAvailabilityUpdateManyMutationInput, VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type VolunteerAvailabilityScalarWhereInput = {
    AND?: VolunteerAvailabilityScalarWhereInput | VolunteerAvailabilityScalarWhereInput[]
    OR?: VolunteerAvailabilityScalarWhereInput[]
    NOT?: VolunteerAvailabilityScalarWhereInput | VolunteerAvailabilityScalarWhereInput[]
    id?: UuidFilter<"VolunteerAvailability"> | string
    volunteerId?: UuidFilter<"VolunteerAvailability"> | string
    dayOfWeek?: IntFilter<"VolunteerAvailability"> | number
    startTime?: StringFilter<"VolunteerAvailability"> | string
    endTime?: StringFilter<"VolunteerAvailability"> | string
    timezone?: StringFilter<"VolunteerAvailability"> | string
    createdAt?: DateTimeFilter<"VolunteerAvailability"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutVolunteerInput, ApplicationUncheckedUpdateWithoutVolunteerInput>
    create: XOR<ApplicationCreateWithoutVolunteerInput, ApplicationUncheckedCreateWithoutVolunteerInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutVolunteerInput, ApplicationUncheckedUpdateWithoutVolunteerInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutVolunteerInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type ApplicationScalarWhereInput = {
    AND?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    OR?: ApplicationScalarWhereInput[]
    NOT?: ApplicationScalarWhereInput | ApplicationScalarWhereInput[]
    id?: UuidFilter<"Application"> | string
    opportunityId?: UuidFilter<"Application"> | string
    volunteerId?: UuidFilter<"Application"> | string
    organizationId?: UuidFilter<"Application"> | string
    coverLetter?: StringNullableFilter<"Application"> | string | null
    status?: EnumApplicationStatusFilter<"Application"> | $Enums.ApplicationStatus
    appliedAt?: DateTimeFilter<"Application"> | Date | string
    reviewedAt?: DateTimeNullableFilter<"Application"> | Date | string | null
  }

  export type AssignmentUpsertWithWhereUniqueWithoutVolunteerInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutVolunteerInput, AssignmentUncheckedUpdateWithoutVolunteerInput>
    create: XOR<AssignmentCreateWithoutVolunteerInput, AssignmentUncheckedCreateWithoutVolunteerInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutVolunteerInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutVolunteerInput, AssignmentUncheckedUpdateWithoutVolunteerInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutVolunteerInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutVolunteerInput>
  }

  export type AssignmentScalarWhereInput = {
    AND?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    OR?: AssignmentScalarWhereInput[]
    NOT?: AssignmentScalarWhereInput | AssignmentScalarWhereInput[]
    id?: UuidFilter<"Assignment"> | string
    applicationId?: UuidFilter<"Assignment"> | string
    opportunityId?: UuidFilter<"Assignment"> | string
    volunteerId?: UuidFilter<"Assignment"> | string
    organizationId?: UuidFilter<"Assignment"> | string
    status?: EnumAssignmentStatusFilter<"Assignment"> | $Enums.AssignmentStatus
    hoursLogged?: IntFilter<"Assignment"> | number
    startDate?: DateTimeFilter<"Assignment"> | Date | string
    endDate?: DateTimeNullableFilter<"Assignment"> | Date | string | null
    createdAt?: DateTimeFilter<"Assignment"> | Date | string
    updatedAt?: DateTimeFilter<"Assignment"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutRevieweeVolunteerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRevieweeVolunteerInput, ReviewUncheckedUpdateWithoutRevieweeVolunteerInput>
    create: XOR<ReviewCreateWithoutRevieweeVolunteerInput, ReviewUncheckedCreateWithoutRevieweeVolunteerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRevieweeVolunteerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRevieweeVolunteerInput, ReviewUncheckedUpdateWithoutRevieweeVolunteerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRevieweeVolunteerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRevieweeVolunteerInput>
  }

  export type ReviewScalarWhereInput = {
    AND?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    OR?: ReviewScalarWhereInput[]
    NOT?: ReviewScalarWhereInput | ReviewScalarWhereInput[]
    id?: UuidFilter<"Review"> | string
    assignmentId?: UuidFilter<"Review"> | string
    reviewerId?: UuidFilter<"Review"> | string
    revieweeId?: UuidFilter<"Review"> | string
    rating?: IntFilter<"Review"> | number
    comment?: StringNullableFilter<"Review"> | string | null
    createdAt?: DateTimeFilter<"Review"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerVolunteerInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerVolunteerInput, ReviewUncheckedUpdateWithoutReviewerVolunteerInput>
    create: XOR<ReviewCreateWithoutReviewerVolunteerInput, ReviewUncheckedCreateWithoutReviewerVolunteerInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerVolunteerInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerVolunteerInput, ReviewUncheckedUpdateWithoutReviewerVolunteerInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerVolunteerInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerVolunteerInput>
  }

  export type ProfileCreateWithoutOrganizationInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer?: VolunteerCreateNestedOneWithoutProfileInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type ProfileUncheckedCreateWithoutOrganizationInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutProfileInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type ProfileCreateOrConnectWithoutOrganizationInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput>
  }

  export type OpportunityCreateWithoutOrganizationInput = {
    id?: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationCreateNestedManyWithoutOpportunityInput
    assignments?: AssignmentCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateWithoutOrganizationInput = {
    id?: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutOpportunityInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityCreateOrConnectWithoutOrganizationInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutOrganizationInput, OpportunityUncheckedCreateWithoutOrganizationInput>
  }

  export type OpportunityCreateManyOrganizationInputEnvelope = {
    data: OpportunityCreateManyOrganizationInput | OpportunityCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationCreateWithoutOrganizationInput = {
    id?: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    opportunity: OpportunityCreateNestedOneWithoutApplicationsInput
    volunteer: VolunteerCreateNestedOneWithoutApplicationsInput
    assignment?: AssignmentCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutOrganizationInput = {
    id?: string
    opportunityId: string
    volunteerId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    assignment?: AssignmentUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutOrganizationInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutOrganizationInput, ApplicationUncheckedCreateWithoutOrganizationInput>
  }

  export type ApplicationCreateManyOrganizationInputEnvelope = {
    data: ApplicationCreateManyOrganizationInput | ApplicationCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutOrganizationInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAssignmentInput
    opportunity: OpportunityCreateNestedOneWithoutAssignmentsInput
    volunteer: VolunteerCreateNestedOneWithoutAssignmentsInput
    sessions?: SessionCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutOrganizationInput = {
    id?: string
    applicationId: string
    opportunityId: string
    volunteerId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutOrganizationInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutOrganizationInput, AssignmentUncheckedCreateWithoutOrganizationInput>
  }

  export type AssignmentCreateManyOrganizationInputEnvelope = {
    data: AssignmentCreateManyOrganizationInput | AssignmentCreateManyOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutRevieweeOrganizationInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutReviewsInput
    reviewerVolunteer?: VolunteerCreateNestedOneWithoutReviewsGivenInput
    revieweeVolunteer?: VolunteerCreateNestedOneWithoutReviewsReceivedInput
    reviewerOrganization?: OrganizationCreateNestedOneWithoutReviewsGivenInput
  }

  export type ReviewUncheckedCreateWithoutRevieweeOrganizationInput = {
    id?: string
    assignmentId: string
    reviewerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutRevieweeOrganizationInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutRevieweeOrganizationInput, ReviewUncheckedCreateWithoutRevieweeOrganizationInput>
  }

  export type ReviewCreateManyRevieweeOrganizationInputEnvelope = {
    data: ReviewCreateManyRevieweeOrganizationInput | ReviewCreateManyRevieweeOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutReviewerOrganizationInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    assignment: AssignmentCreateNestedOneWithoutReviewsInput
    reviewerVolunteer?: VolunteerCreateNestedOneWithoutReviewsGivenInput
    revieweeVolunteer?: VolunteerCreateNestedOneWithoutReviewsReceivedInput
    revieweeOrganization?: OrganizationCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutReviewerOrganizationInput = {
    id?: string
    assignmentId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutReviewerOrganizationInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutReviewerOrganizationInput, ReviewUncheckedCreateWithoutReviewerOrganizationInput>
  }

  export type ReviewCreateManyReviewerOrganizationInputEnvelope = {
    data: ReviewCreateManyReviewerOrganizationInput | ReviewCreateManyReviewerOrganizationInput[]
    skipDuplicates?: boolean
  }

  export type ProfileUpsertWithoutOrganizationInput = {
    update: XOR<ProfileUpdateWithoutOrganizationInput, ProfileUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ProfileCreateWithoutOrganizationInput, ProfileUncheckedCreateWithoutOrganizationInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutOrganizationInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutOrganizationInput, ProfileUncheckedUpdateWithoutOrganizationInput>
  }

  export type ProfileUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneWithoutProfileNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type ProfileUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUncheckedUpdateOneWithoutProfileNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type OpportunityUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: OpportunityWhereUniqueInput
    update: XOR<OpportunityUpdateWithoutOrganizationInput, OpportunityUncheckedUpdateWithoutOrganizationInput>
    create: XOR<OpportunityCreateWithoutOrganizationInput, OpportunityUncheckedCreateWithoutOrganizationInput>
  }

  export type OpportunityUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: OpportunityWhereUniqueInput
    data: XOR<OpportunityUpdateWithoutOrganizationInput, OpportunityUncheckedUpdateWithoutOrganizationInput>
  }

  export type OpportunityUpdateManyWithWhereWithoutOrganizationInput = {
    where: OpportunityScalarWhereInput
    data: XOR<OpportunityUpdateManyMutationInput, OpportunityUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type OpportunityScalarWhereInput = {
    AND?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
    OR?: OpportunityScalarWhereInput[]
    NOT?: OpportunityScalarWhereInput | OpportunityScalarWhereInput[]
    id?: UuidFilter<"Opportunity"> | string
    organizationId?: UuidFilter<"Opportunity"> | string
    title?: StringFilter<"Opportunity"> | string
    description?: StringFilter<"Opportunity"> | string
    category?: EnumOpportunityCategoryFilter<"Opportunity"> | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFilter<"Opportunity"> | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFilter<"Opportunity"> | $Enums.UrgencyLevel
    skillsNeeded?: StringNullableListFilter<"Opportunity">
    timeCommitment?: StringFilter<"Opportunity"> | string
    location?: StringFilter<"Opportunity"> | string
    isRemote?: BoolFilter<"Opportunity"> | boolean
    requirements?: StringNullableFilter<"Opportunity"> | string | null
    benefits?: StringNullableFilter<"Opportunity"> | string | null
    startDate?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    endDate?: DateTimeNullableFilter<"Opportunity"> | Date | string | null
    maxVolunteers?: IntFilter<"Opportunity"> | number
    status?: EnumOpportunityStatusFilter<"Opportunity"> | $Enums.OpportunityStatus
    createdAt?: DateTimeFilter<"Opportunity"> | Date | string
    updatedAt?: DateTimeFilter<"Opportunity"> | Date | string
  }

  export type ApplicationUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutOrganizationInput, ApplicationUncheckedUpdateWithoutOrganizationInput>
    create: XOR<ApplicationCreateWithoutOrganizationInput, ApplicationUncheckedCreateWithoutOrganizationInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutOrganizationInput, ApplicationUncheckedUpdateWithoutOrganizationInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutOrganizationInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutOrganizationInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutOrganizationInput, AssignmentUncheckedUpdateWithoutOrganizationInput>
    create: XOR<AssignmentCreateWithoutOrganizationInput, AssignmentUncheckedCreateWithoutOrganizationInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutOrganizationInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutOrganizationInput, AssignmentUncheckedUpdateWithoutOrganizationInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutOrganizationInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutOrganizationInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutRevieweeOrganizationInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutRevieweeOrganizationInput, ReviewUncheckedUpdateWithoutRevieweeOrganizationInput>
    create: XOR<ReviewCreateWithoutRevieweeOrganizationInput, ReviewUncheckedCreateWithoutRevieweeOrganizationInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutRevieweeOrganizationInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutRevieweeOrganizationInput, ReviewUncheckedUpdateWithoutRevieweeOrganizationInput>
  }

  export type ReviewUpdateManyWithWhereWithoutRevieweeOrganizationInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutRevieweeOrganizationInput>
  }

  export type ReviewUpsertWithWhereUniqueWithoutReviewerOrganizationInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutReviewerOrganizationInput, ReviewUncheckedUpdateWithoutReviewerOrganizationInput>
    create: XOR<ReviewCreateWithoutReviewerOrganizationInput, ReviewUncheckedCreateWithoutReviewerOrganizationInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutReviewerOrganizationInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutReviewerOrganizationInput, ReviewUncheckedUpdateWithoutReviewerOrganizationInput>
  }

  export type ReviewUpdateManyWithWhereWithoutReviewerOrganizationInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutReviewerOrganizationInput>
  }

  export type OrganizationCreateWithoutOpportunitiesInput = {
    id?: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrganizationInput
    applications?: ApplicationCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutOpportunitiesInput = {
    id?: string
    profileId: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutOpportunitiesInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutOpportunitiesInput, OrganizationUncheckedCreateWithoutOpportunitiesInput>
  }

  export type ApplicationCreateWithoutOpportunityInput = {
    id?: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    volunteer: VolunteerCreateNestedOneWithoutApplicationsInput
    organization: OrganizationCreateNestedOneWithoutApplicationsInput
    assignment?: AssignmentCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationUncheckedCreateWithoutOpportunityInput = {
    id?: string
    volunteerId: string
    organizationId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    assignment?: AssignmentUncheckedCreateNestedOneWithoutApplicationInput
  }

  export type ApplicationCreateOrConnectWithoutOpportunityInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput>
  }

  export type ApplicationCreateManyOpportunityInputEnvelope = {
    data: ApplicationCreateManyOpportunityInput | ApplicationCreateManyOpportunityInput[]
    skipDuplicates?: boolean
  }

  export type AssignmentCreateWithoutOpportunityInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAssignmentInput
    volunteer: VolunteerCreateNestedOneWithoutAssignmentsInput
    organization: OrganizationCreateNestedOneWithoutAssignmentsInput
    sessions?: SessionCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutOpportunityInput = {
    id?: string
    applicationId: string
    volunteerId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutOpportunityInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutOpportunityInput, AssignmentUncheckedCreateWithoutOpportunityInput>
  }

  export type AssignmentCreateManyOpportunityInputEnvelope = {
    data: AssignmentCreateManyOpportunityInput | AssignmentCreateManyOpportunityInput[]
    skipDuplicates?: boolean
  }

  export type OrganizationUpsertWithoutOpportunitiesInput = {
    update: XOR<OrganizationUpdateWithoutOpportunitiesInput, OrganizationUncheckedUpdateWithoutOpportunitiesInput>
    create: XOR<OrganizationCreateWithoutOpportunitiesInput, OrganizationUncheckedCreateWithoutOpportunitiesInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutOpportunitiesInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutOpportunitiesInput, OrganizationUncheckedUpdateWithoutOpportunitiesInput>
  }

  export type OrganizationUpdateWithoutOpportunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrganizationNestedInput
    applications?: ApplicationUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutOpportunitiesInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type ApplicationUpsertWithWhereUniqueWithoutOpportunityInput = {
    where: ApplicationWhereUniqueInput
    update: XOR<ApplicationUpdateWithoutOpportunityInput, ApplicationUncheckedUpdateWithoutOpportunityInput>
    create: XOR<ApplicationCreateWithoutOpportunityInput, ApplicationUncheckedCreateWithoutOpportunityInput>
  }

  export type ApplicationUpdateWithWhereUniqueWithoutOpportunityInput = {
    where: ApplicationWhereUniqueInput
    data: XOR<ApplicationUpdateWithoutOpportunityInput, ApplicationUncheckedUpdateWithoutOpportunityInput>
  }

  export type ApplicationUpdateManyWithWhereWithoutOpportunityInput = {
    where: ApplicationScalarWhereInput
    data: XOR<ApplicationUpdateManyMutationInput, ApplicationUncheckedUpdateManyWithoutOpportunityInput>
  }

  export type AssignmentUpsertWithWhereUniqueWithoutOpportunityInput = {
    where: AssignmentWhereUniqueInput
    update: XOR<AssignmentUpdateWithoutOpportunityInput, AssignmentUncheckedUpdateWithoutOpportunityInput>
    create: XOR<AssignmentCreateWithoutOpportunityInput, AssignmentUncheckedCreateWithoutOpportunityInput>
  }

  export type AssignmentUpdateWithWhereUniqueWithoutOpportunityInput = {
    where: AssignmentWhereUniqueInput
    data: XOR<AssignmentUpdateWithoutOpportunityInput, AssignmentUncheckedUpdateWithoutOpportunityInput>
  }

  export type AssignmentUpdateManyWithWhereWithoutOpportunityInput = {
    where: AssignmentScalarWhereInput
    data: XOR<AssignmentUpdateManyMutationInput, AssignmentUncheckedUpdateManyWithoutOpportunityInput>
  }

  export type VolunteerCreateWithoutSkillsInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutVolunteerInput
    availability?: VolunteerAvailabilityCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutSkillsInput = {
    id?: string
    profileId: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    availability?: VolunteerAvailabilityUncheckedCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutSkillsInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutSkillsInput, VolunteerUncheckedCreateWithoutSkillsInput>
  }

  export type VolunteerUpsertWithoutSkillsInput = {
    update: XOR<VolunteerUpdateWithoutSkillsInput, VolunteerUncheckedUpdateWithoutSkillsInput>
    create: XOR<VolunteerCreateWithoutSkillsInput, VolunteerUncheckedCreateWithoutSkillsInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutSkillsInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutSkillsInput, VolunteerUncheckedUpdateWithoutSkillsInput>
  }

  export type VolunteerUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutSkillsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    availability?: VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerCreateWithoutAvailabilityInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutVolunteerInput
    skills?: VolunteerSkillCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutAvailabilityInput = {
    id?: string
    profileId: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: VolunteerSkillUncheckedCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutAvailabilityInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutAvailabilityInput, VolunteerUncheckedCreateWithoutAvailabilityInput>
  }

  export type VolunteerUpsertWithoutAvailabilityInput = {
    update: XOR<VolunteerUpdateWithoutAvailabilityInput, VolunteerUncheckedUpdateWithoutAvailabilityInput>
    create: XOR<VolunteerCreateWithoutAvailabilityInput, VolunteerUncheckedCreateWithoutAvailabilityInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutAvailabilityInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutAvailabilityInput, VolunteerUncheckedUpdateWithoutAvailabilityInput>
  }

  export type VolunteerUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVolunteerNestedInput
    skills?: VolunteerSkillUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutAvailabilityInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: VolunteerSkillUncheckedUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type OpportunityCreateWithoutApplicationsInput = {
    id?: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutOpportunitiesInput
    assignments?: AssignmentCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateWithoutApplicationsInput = {
    id?: string
    organizationId: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityCreateOrConnectWithoutApplicationsInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutApplicationsInput, OpportunityUncheckedCreateWithoutApplicationsInput>
  }

  export type VolunteerCreateWithoutApplicationsInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutVolunteerInput
    skills?: VolunteerSkillCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutApplicationsInput = {
    id?: string
    profileId: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: VolunteerSkillUncheckedCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityUncheckedCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutApplicationsInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutApplicationsInput, VolunteerUncheckedCreateWithoutApplicationsInput>
  }

  export type OrganizationCreateWithoutApplicationsInput = {
    id?: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrganizationInput
    opportunities?: OpportunityCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutApplicationsInput = {
    id?: string
    profileId: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutApplicationsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutApplicationsInput, OrganizationUncheckedCreateWithoutApplicationsInput>
  }

  export type AssignmentCreateWithoutApplicationInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunity: OpportunityCreateNestedOneWithoutAssignmentsInput
    volunteer: VolunteerCreateNestedOneWithoutAssignmentsInput
    organization: OrganizationCreateNestedOneWithoutAssignmentsInput
    sessions?: SessionCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutApplicationInput = {
    id?: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutAssignmentInput
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutApplicationInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutApplicationInput, AssignmentUncheckedCreateWithoutApplicationInput>
  }

  export type OpportunityUpsertWithoutApplicationsInput = {
    update: XOR<OpportunityUpdateWithoutApplicationsInput, OpportunityUncheckedUpdateWithoutApplicationsInput>
    create: XOR<OpportunityCreateWithoutApplicationsInput, OpportunityUncheckedCreateWithoutApplicationsInput>
    where?: OpportunityWhereInput
  }

  export type OpportunityUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: OpportunityWhereInput
    data: XOR<OpportunityUpdateWithoutApplicationsInput, OpportunityUncheckedUpdateWithoutApplicationsInput>
  }

  export type OpportunityUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutOpportunitiesNestedInput
    assignments?: AssignmentUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignments?: AssignmentUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type VolunteerUpsertWithoutApplicationsInput = {
    update: XOR<VolunteerUpdateWithoutApplicationsInput, VolunteerUncheckedUpdateWithoutApplicationsInput>
    create: XOR<VolunteerCreateWithoutApplicationsInput, VolunteerUncheckedCreateWithoutApplicationsInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutApplicationsInput, VolunteerUncheckedUpdateWithoutApplicationsInput>
  }

  export type VolunteerUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVolunteerNestedInput
    skills?: VolunteerSkillUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: VolunteerSkillUncheckedUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type OrganizationUpsertWithoutApplicationsInput = {
    update: XOR<OrganizationUpdateWithoutApplicationsInput, OrganizationUncheckedUpdateWithoutApplicationsInput>
    create: XOR<OrganizationCreateWithoutApplicationsInput, OrganizationUncheckedCreateWithoutApplicationsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutApplicationsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutApplicationsInput, OrganizationUncheckedUpdateWithoutApplicationsInput>
  }

  export type OrganizationUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrganizationNestedInput
    opportunities?: OpportunityUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutApplicationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUncheckedUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type AssignmentUpsertWithoutApplicationInput = {
    update: XOR<AssignmentUpdateWithoutApplicationInput, AssignmentUncheckedUpdateWithoutApplicationInput>
    create: XOR<AssignmentCreateWithoutApplicationInput, AssignmentUncheckedCreateWithoutApplicationInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutApplicationInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutApplicationInput, AssignmentUncheckedUpdateWithoutApplicationInput>
  }

  export type AssignmentUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunity?: OpportunityUpdateOneRequiredWithoutAssignmentsNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutAssignmentsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAssignmentsNestedInput
    sessions?: SessionUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutApplicationInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type ApplicationCreateWithoutAssignmentInput = {
    id?: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
    opportunity: OpportunityCreateNestedOneWithoutApplicationsInput
    volunteer: VolunteerCreateNestedOneWithoutApplicationsInput
    organization: OrganizationCreateNestedOneWithoutApplicationsInput
  }

  export type ApplicationUncheckedCreateWithoutAssignmentInput = {
    id?: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type ApplicationCreateOrConnectWithoutAssignmentInput = {
    where: ApplicationWhereUniqueInput
    create: XOR<ApplicationCreateWithoutAssignmentInput, ApplicationUncheckedCreateWithoutAssignmentInput>
  }

  export type OpportunityCreateWithoutAssignmentsInput = {
    id?: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    organization: OrganizationCreateNestedOneWithoutOpportunitiesInput
    applications?: ApplicationCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    organizationId: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    applications?: ApplicationUncheckedCreateNestedManyWithoutOpportunityInput
  }

  export type OpportunityCreateOrConnectWithoutAssignmentsInput = {
    where: OpportunityWhereUniqueInput
    create: XOR<OpportunityCreateWithoutAssignmentsInput, OpportunityUncheckedCreateWithoutAssignmentsInput>
  }

  export type VolunteerCreateWithoutAssignmentsInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutVolunteerInput
    skills?: VolunteerSkillCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    profileId: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: VolunteerSkillUncheckedCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityUncheckedCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeVolunteerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutAssignmentsInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutAssignmentsInput, VolunteerUncheckedCreateWithoutAssignmentsInput>
  }

  export type OrganizationCreateWithoutAssignmentsInput = {
    id?: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrganizationInput
    opportunities?: OpportunityCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutAssignmentsInput = {
    id?: string
    profileId: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeOrganizationInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutAssignmentsInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutAssignmentsInput, OrganizationUncheckedCreateWithoutAssignmentsInput>
  }

  export type SessionCreateWithoutAssignmentInput = {
    id?: string
    scheduledAt: Date | string
    duration: number
    status?: $Enums.SessionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionUncheckedCreateWithoutAssignmentInput = {
    id?: string
    scheduledAt: Date | string
    duration: number
    status?: $Enums.SessionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type SessionCreateOrConnectWithoutAssignmentInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutAssignmentInput, SessionUncheckedCreateWithoutAssignmentInput>
  }

  export type SessionCreateManyAssignmentInputEnvelope = {
    data: SessionCreateManyAssignmentInput | SessionCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type ReviewCreateWithoutAssignmentInput = {
    id?: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
    reviewerVolunteer?: VolunteerCreateNestedOneWithoutReviewsGivenInput
    revieweeVolunteer?: VolunteerCreateNestedOneWithoutReviewsReceivedInput
    reviewerOrganization?: OrganizationCreateNestedOneWithoutReviewsGivenInput
    revieweeOrganization?: OrganizationCreateNestedOneWithoutReviewsReceivedInput
  }

  export type ReviewUncheckedCreateWithoutAssignmentInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateOrConnectWithoutAssignmentInput = {
    where: ReviewWhereUniqueInput
    create: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput>
  }

  export type ReviewCreateManyAssignmentInputEnvelope = {
    data: ReviewCreateManyAssignmentInput | ReviewCreateManyAssignmentInput[]
    skipDuplicates?: boolean
  }

  export type ApplicationUpsertWithoutAssignmentInput = {
    update: XOR<ApplicationUpdateWithoutAssignmentInput, ApplicationUncheckedUpdateWithoutAssignmentInput>
    create: XOR<ApplicationCreateWithoutAssignmentInput, ApplicationUncheckedCreateWithoutAssignmentInput>
    where?: ApplicationWhereInput
  }

  export type ApplicationUpdateToOneWithWhereWithoutAssignmentInput = {
    where?: ApplicationWhereInput
    data: XOR<ApplicationUpdateWithoutAssignmentInput, ApplicationUncheckedUpdateWithoutAssignmentInput>
  }

  export type ApplicationUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opportunity?: OpportunityUpdateOneRequiredWithoutApplicationsNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutApplicationsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutApplicationsNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type OpportunityUpsertWithoutAssignmentsInput = {
    update: XOR<OpportunityUpdateWithoutAssignmentsInput, OpportunityUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<OpportunityCreateWithoutAssignmentsInput, OpportunityUncheckedCreateWithoutAssignmentsInput>
    where?: OpportunityWhereInput
  }

  export type OpportunityUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: OpportunityWhereInput
    data: XOR<OpportunityUpdateWithoutAssignmentsInput, OpportunityUncheckedUpdateWithoutAssignmentsInput>
  }

  export type OpportunityUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    organization?: OrganizationUpdateOneRequiredWithoutOpportunitiesNestedInput
    applications?: ApplicationUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type VolunteerUpsertWithoutAssignmentsInput = {
    update: XOR<VolunteerUpdateWithoutAssignmentsInput, VolunteerUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<VolunteerCreateWithoutAssignmentsInput, VolunteerUncheckedCreateWithoutAssignmentsInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutAssignmentsInput, VolunteerUncheckedUpdateWithoutAssignmentsInput>
  }

  export type VolunteerUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVolunteerNestedInput
    skills?: VolunteerSkillUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: VolunteerSkillUncheckedUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeVolunteerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type OrganizationUpsertWithoutAssignmentsInput = {
    update: XOR<OrganizationUpdateWithoutAssignmentsInput, OrganizationUncheckedUpdateWithoutAssignmentsInput>
    create: XOR<OrganizationCreateWithoutAssignmentsInput, OrganizationUncheckedCreateWithoutAssignmentsInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutAssignmentsInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutAssignmentsInput, OrganizationUncheckedUpdateWithoutAssignmentsInput>
  }

  export type OrganizationUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrganizationNestedInput
    opportunities?: OpportunityUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutAssignmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUncheckedUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeOrganizationNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type SessionUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutAssignmentInput, SessionUncheckedUpdateWithoutAssignmentInput>
    create: XOR<SessionCreateWithoutAssignmentInput, SessionUncheckedCreateWithoutAssignmentInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutAssignmentInput, SessionUncheckedUpdateWithoutAssignmentInput>
  }

  export type SessionUpdateManyWithWhereWithoutAssignmentInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: UuidFilter<"Session"> | string
    assignmentId?: UuidFilter<"Session"> | string
    scheduledAt?: DateTimeFilter<"Session"> | Date | string
    duration?: IntFilter<"Session"> | number
    status?: EnumSessionStatusFilter<"Session"> | $Enums.SessionStatus
    notes?: StringNullableFilter<"Session"> | string | null
    createdAt?: DateTimeFilter<"Session"> | Date | string
    updatedAt?: DateTimeFilter<"Session"> | Date | string
  }

  export type ReviewUpsertWithWhereUniqueWithoutAssignmentInput = {
    where: ReviewWhereUniqueInput
    update: XOR<ReviewUpdateWithoutAssignmentInput, ReviewUncheckedUpdateWithoutAssignmentInput>
    create: XOR<ReviewCreateWithoutAssignmentInput, ReviewUncheckedCreateWithoutAssignmentInput>
  }

  export type ReviewUpdateWithWhereUniqueWithoutAssignmentInput = {
    where: ReviewWhereUniqueInput
    data: XOR<ReviewUpdateWithoutAssignmentInput, ReviewUncheckedUpdateWithoutAssignmentInput>
  }

  export type ReviewUpdateManyWithWhereWithoutAssignmentInput = {
    where: ReviewScalarWhereInput
    data: XOR<ReviewUpdateManyMutationInput, ReviewUncheckedUpdateManyWithoutAssignmentInput>
  }

  export type AssignmentCreateWithoutSessionsInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAssignmentInput
    opportunity: OpportunityCreateNestedOneWithoutAssignmentsInput
    volunteer: VolunteerCreateNestedOneWithoutAssignmentsInput
    organization: OrganizationCreateNestedOneWithoutAssignmentsInput
    reviews?: ReviewCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutSessionsInput = {
    id?: string
    applicationId: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    reviews?: ReviewUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutSessionsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutSessionsInput, AssignmentUncheckedCreateWithoutSessionsInput>
  }

  export type AssignmentUpsertWithoutSessionsInput = {
    update: XOR<AssignmentUpdateWithoutSessionsInput, AssignmentUncheckedUpdateWithoutSessionsInput>
    create: XOR<AssignmentCreateWithoutSessionsInput, AssignmentUncheckedCreateWithoutSessionsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutSessionsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutSessionsInput, AssignmentUncheckedUpdateWithoutSessionsInput>
  }

  export type AssignmentUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAssignmentNestedInput
    opportunity?: OpportunityUpdateOneRequiredWithoutAssignmentsNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutAssignmentsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAssignmentsNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentCreateWithoutReviewsInput = {
    id?: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    application: ApplicationCreateNestedOneWithoutAssignmentInput
    opportunity: OpportunityCreateNestedOneWithoutAssignmentsInput
    volunteer: VolunteerCreateNestedOneWithoutAssignmentsInput
    organization: OrganizationCreateNestedOneWithoutAssignmentsInput
    sessions?: SessionCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentUncheckedCreateWithoutReviewsInput = {
    id?: string
    applicationId: string
    opportunityId: string
    volunteerId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
    sessions?: SessionUncheckedCreateNestedManyWithoutAssignmentInput
  }

  export type AssignmentCreateOrConnectWithoutReviewsInput = {
    where: AssignmentWhereUniqueInput
    create: XOR<AssignmentCreateWithoutReviewsInput, AssignmentUncheckedCreateWithoutReviewsInput>
  }

  export type VolunteerCreateWithoutReviewsGivenInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutVolunteerInput
    skills?: VolunteerSkillCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutReviewsGivenInput = {
    id?: string
    profileId: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: VolunteerSkillUncheckedCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityUncheckedCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutVolunteerInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutReviewsGivenInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutReviewsGivenInput, VolunteerUncheckedCreateWithoutReviewsGivenInput>
  }

  export type VolunteerCreateWithoutReviewsReceivedInput = {
    id?: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutVolunteerInput
    skills?: VolunteerSkillCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentCreateNestedManyWithoutVolunteerInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    profileId: string
    languages?: VolunteerCreatelanguagesInput | string[]
    experience?: string | null
    education?: string | null
    certifications?: VolunteerCreatecertificationsInput | string[]
    totalHours?: number
    impactScore?: number
    completedTasks?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    skills?: VolunteerSkillUncheckedCreateNestedManyWithoutVolunteerInput
    availability?: VolunteerAvailabilityUncheckedCreateNestedManyWithoutVolunteerInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutVolunteerInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutVolunteerInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerVolunteerInput
  }

  export type VolunteerCreateOrConnectWithoutReviewsReceivedInput = {
    where: VolunteerWhereUniqueInput
    create: XOR<VolunteerCreateWithoutReviewsReceivedInput, VolunteerUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type OrganizationCreateWithoutReviewsGivenInput = {
    id?: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrganizationInput
    opportunities?: OpportunityCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewCreateNestedManyWithoutRevieweeOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutReviewsGivenInput = {
    id?: string
    profileId: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOrganizationInput
    reviewsReceived?: ReviewUncheckedCreateNestedManyWithoutRevieweeOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutReviewsGivenInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutReviewsGivenInput, OrganizationUncheckedCreateWithoutReviewsGivenInput>
  }

  export type OrganizationCreateWithoutReviewsReceivedInput = {
    id?: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    profile: ProfileCreateNestedOneWithoutOrganizationInput
    opportunities?: OpportunityCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentCreateNestedManyWithoutOrganizationInput
    reviewsGiven?: ReviewCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationUncheckedCreateWithoutReviewsReceivedInput = {
    id?: string
    profileId: string
    organizationName: string
    organizationType: string
    registrationNumber?: string | null
    description?: string | null
    focusAreas?: OrganizationCreatefocusAreasInput | string[]
    operatingRegions?: OrganizationCreateoperatingRegionsInput | string[]
    totalRequests?: number
    activeVolunteers?: number
    completedProjects?: number
    averageRating?: number
    createdAt?: Date | string
    updatedAt?: Date | string
    opportunities?: OpportunityUncheckedCreateNestedManyWithoutOrganizationInput
    applications?: ApplicationUncheckedCreateNestedManyWithoutOrganizationInput
    assignments?: AssignmentUncheckedCreateNestedManyWithoutOrganizationInput
    reviewsGiven?: ReviewUncheckedCreateNestedManyWithoutReviewerOrganizationInput
  }

  export type OrganizationCreateOrConnectWithoutReviewsReceivedInput = {
    where: OrganizationWhereUniqueInput
    create: XOR<OrganizationCreateWithoutReviewsReceivedInput, OrganizationUncheckedCreateWithoutReviewsReceivedInput>
  }

  export type AssignmentUpsertWithoutReviewsInput = {
    update: XOR<AssignmentUpdateWithoutReviewsInput, AssignmentUncheckedUpdateWithoutReviewsInput>
    create: XOR<AssignmentCreateWithoutReviewsInput, AssignmentUncheckedCreateWithoutReviewsInput>
    where?: AssignmentWhereInput
  }

  export type AssignmentUpdateToOneWithWhereWithoutReviewsInput = {
    where?: AssignmentWhereInput
    data: XOR<AssignmentUpdateWithoutReviewsInput, AssignmentUncheckedUpdateWithoutReviewsInput>
  }

  export type AssignmentUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAssignmentNestedInput
    opportunity?: OpportunityUpdateOneRequiredWithoutAssignmentsNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutAssignmentsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAssignmentsNestedInput
    sessions?: SessionUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutReviewsInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type VolunteerUpsertWithoutReviewsGivenInput = {
    update: XOR<VolunteerUpdateWithoutReviewsGivenInput, VolunteerUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<VolunteerCreateWithoutReviewsGivenInput, VolunteerUncheckedCreateWithoutReviewsGivenInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutReviewsGivenInput, VolunteerUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type VolunteerUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVolunteerNestedInput
    skills?: VolunteerSkillUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: VolunteerSkillUncheckedUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeVolunteerNestedInput
  }

  export type VolunteerUpsertWithoutReviewsReceivedInput = {
    update: XOR<VolunteerUpdateWithoutReviewsReceivedInput, VolunteerUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<VolunteerCreateWithoutReviewsReceivedInput, VolunteerUncheckedCreateWithoutReviewsReceivedInput>
    where?: VolunteerWhereInput
  }

  export type VolunteerUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: VolunteerWhereInput
    data: XOR<VolunteerUpdateWithoutReviewsReceivedInput, VolunteerUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type VolunteerUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutVolunteerNestedInput
    skills?: VolunteerSkillUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUpdateManyWithoutVolunteerNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type VolunteerUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    languages?: VolunteerUpdatelanguagesInput | string[]
    experience?: NullableStringFieldUpdateOperationsInput | string | null
    education?: NullableStringFieldUpdateOperationsInput | string | null
    certifications?: VolunteerUpdatecertificationsInput | string[]
    totalHours?: IntFieldUpdateOperationsInput | number
    impactScore?: FloatFieldUpdateOperationsInput | number
    completedTasks?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    skills?: VolunteerSkillUncheckedUpdateManyWithoutVolunteerNestedInput
    availability?: VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutVolunteerNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutVolunteerNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerVolunteerNestedInput
  }

  export type OrganizationUpsertWithoutReviewsGivenInput = {
    update: XOR<OrganizationUpdateWithoutReviewsGivenInput, OrganizationUncheckedUpdateWithoutReviewsGivenInput>
    create: XOR<OrganizationCreateWithoutReviewsGivenInput, OrganizationUncheckedCreateWithoutReviewsGivenInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutReviewsGivenInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutReviewsGivenInput, OrganizationUncheckedUpdateWithoutReviewsGivenInput>
  }

  export type OrganizationUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrganizationNestedInput
    opportunities?: OpportunityUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUpdateManyWithoutRevieweeOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutReviewsGivenInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUncheckedUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutOrganizationNestedInput
    reviewsReceived?: ReviewUncheckedUpdateManyWithoutRevieweeOrganizationNestedInput
  }

  export type OrganizationUpsertWithoutReviewsReceivedInput = {
    update: XOR<OrganizationUpdateWithoutReviewsReceivedInput, OrganizationUncheckedUpdateWithoutReviewsReceivedInput>
    create: XOR<OrganizationCreateWithoutReviewsReceivedInput, OrganizationUncheckedCreateWithoutReviewsReceivedInput>
    where?: OrganizationWhereInput
  }

  export type OrganizationUpdateToOneWithWhereWithoutReviewsReceivedInput = {
    where?: OrganizationWhereInput
    data: XOR<OrganizationUpdateWithoutReviewsReceivedInput, OrganizationUncheckedUpdateWithoutReviewsReceivedInput>
  }

  export type OrganizationUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    profile?: ProfileUpdateOneRequiredWithoutOrganizationNestedInput
    opportunities?: OpportunityUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUpdateManyWithoutOrganizationNestedInput
    reviewsGiven?: ReviewUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type OrganizationUncheckedUpdateWithoutReviewsReceivedInput = {
    id?: StringFieldUpdateOperationsInput | string
    profileId?: StringFieldUpdateOperationsInput | string
    organizationName?: StringFieldUpdateOperationsInput | string
    organizationType?: StringFieldUpdateOperationsInput | string
    registrationNumber?: NullableStringFieldUpdateOperationsInput | string | null
    description?: NullableStringFieldUpdateOperationsInput | string | null
    focusAreas?: OrganizationUpdatefocusAreasInput | string[]
    operatingRegions?: OrganizationUpdateoperatingRegionsInput | string[]
    totalRequests?: IntFieldUpdateOperationsInput | number
    activeVolunteers?: IntFieldUpdateOperationsInput | number
    completedProjects?: IntFieldUpdateOperationsInput | number
    averageRating?: FloatFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    opportunities?: OpportunityUncheckedUpdateManyWithoutOrganizationNestedInput
    applications?: ApplicationUncheckedUpdateManyWithoutOrganizationNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutOrganizationNestedInput
    reviewsGiven?: ReviewUncheckedUpdateManyWithoutReviewerOrganizationNestedInput
  }

  export type ProfileCreateWithoutSentMessagesInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer?: VolunteerCreateNestedOneWithoutProfileInput
    organization?: OrganizationCreateNestedOneWithoutProfileInput
    receivedMessages?: MessageCreateNestedManyWithoutReceiverInput
  }

  export type ProfileUncheckedCreateWithoutSentMessagesInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutProfileInput
    organization?: OrganizationUncheckedCreateNestedOneWithoutProfileInput
    receivedMessages?: MessageUncheckedCreateNestedManyWithoutReceiverInput
  }

  export type ProfileCreateOrConnectWithoutSentMessagesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutSentMessagesInput, ProfileUncheckedCreateWithoutSentMessagesInput>
  }

  export type ProfileCreateWithoutReceivedMessagesInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer?: VolunteerCreateNestedOneWithoutProfileInput
    organization?: OrganizationCreateNestedOneWithoutProfileInput
    sentMessages?: MessageCreateNestedManyWithoutSenderInput
  }

  export type ProfileUncheckedCreateWithoutReceivedMessagesInput = {
    id: string
    email: string
    fullName: string
    userType: $Enums.UserType
    avatar?: string | null
    bio?: string | null
    phone?: string | null
    location?: string | null
    website?: string | null
    verified?: boolean
    createdAt?: Date | string
    updatedAt?: Date | string
    volunteer?: VolunteerUncheckedCreateNestedOneWithoutProfileInput
    organization?: OrganizationUncheckedCreateNestedOneWithoutProfileInput
    sentMessages?: MessageUncheckedCreateNestedManyWithoutSenderInput
  }

  export type ProfileCreateOrConnectWithoutReceivedMessagesInput = {
    where: ProfileWhereUniqueInput
    create: XOR<ProfileCreateWithoutReceivedMessagesInput, ProfileUncheckedCreateWithoutReceivedMessagesInput>
  }

  export type ProfileUpsertWithoutSentMessagesInput = {
    update: XOR<ProfileUpdateWithoutSentMessagesInput, ProfileUncheckedUpdateWithoutSentMessagesInput>
    create: XOR<ProfileCreateWithoutSentMessagesInput, ProfileUncheckedCreateWithoutSentMessagesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutSentMessagesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutSentMessagesInput, ProfileUncheckedUpdateWithoutSentMessagesInput>
  }

  export type ProfileUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneWithoutProfileNestedInput
    organization?: OrganizationUpdateOneWithoutProfileNestedInput
    receivedMessages?: MessageUpdateManyWithoutReceiverNestedInput
  }

  export type ProfileUncheckedUpdateWithoutSentMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUncheckedUpdateOneWithoutProfileNestedInput
    organization?: OrganizationUncheckedUpdateOneWithoutProfileNestedInput
    receivedMessages?: MessageUncheckedUpdateManyWithoutReceiverNestedInput
  }

  export type ProfileUpsertWithoutReceivedMessagesInput = {
    update: XOR<ProfileUpdateWithoutReceivedMessagesInput, ProfileUncheckedUpdateWithoutReceivedMessagesInput>
    create: XOR<ProfileCreateWithoutReceivedMessagesInput, ProfileUncheckedCreateWithoutReceivedMessagesInput>
    where?: ProfileWhereInput
  }

  export type ProfileUpdateToOneWithWhereWithoutReceivedMessagesInput = {
    where?: ProfileWhereInput
    data: XOR<ProfileUpdateWithoutReceivedMessagesInput, ProfileUncheckedUpdateWithoutReceivedMessagesInput>
  }

  export type ProfileUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUpdateOneWithoutProfileNestedInput
    organization?: OrganizationUpdateOneWithoutProfileNestedInput
    sentMessages?: MessageUpdateManyWithoutSenderNestedInput
  }

  export type ProfileUncheckedUpdateWithoutReceivedMessagesInput = {
    id?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    fullName?: StringFieldUpdateOperationsInput | string
    userType?: EnumUserTypeFieldUpdateOperationsInput | $Enums.UserType
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    bio?: NullableStringFieldUpdateOperationsInput | string | null
    phone?: NullableStringFieldUpdateOperationsInput | string | null
    location?: NullableStringFieldUpdateOperationsInput | string | null
    website?: NullableStringFieldUpdateOperationsInput | string | null
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    volunteer?: VolunteerUncheckedUpdateOneWithoutProfileNestedInput
    organization?: OrganizationUncheckedUpdateOneWithoutProfileNestedInput
    sentMessages?: MessageUncheckedUpdateManyWithoutSenderNestedInput
  }

  export type MessageCreateManySenderInput = {
    id?: string
    receiverId: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageCreateManyReceiverInput = {
    id?: string
    senderId: string
    subject?: string | null
    content: string
    isRead?: boolean
    createdAt?: Date | string
  }

  export type MessageUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    receiver?: ProfileUpdateOneRequiredWithoutReceivedMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutSenderInput = {
    id?: StringFieldUpdateOperationsInput | string
    receiverId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sender?: ProfileUpdateOneRequiredWithoutSentMessagesNestedInput
  }

  export type MessageUncheckedUpdateWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type MessageUncheckedUpdateManyWithoutReceiverInput = {
    id?: StringFieldUpdateOperationsInput | string
    senderId?: StringFieldUpdateOperationsInput | string
    subject?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    isRead?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerSkillCreateManyVolunteerInput = {
    id?: string
    category: $Enums.SkillCategory
    name: string
    level: $Enums.SkillLevel
    verified?: boolean
    createdAt?: Date | string
  }

  export type VolunteerAvailabilityCreateManyVolunteerInput = {
    id?: string
    dayOfWeek: number
    startTime: string
    endTime: string
    timezone?: string
    createdAt?: Date | string
  }

  export type ApplicationCreateManyVolunteerInput = {
    id?: string
    opportunityId: string
    organizationId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type AssignmentCreateManyVolunteerInput = {
    id?: string
    applicationId: string
    opportunityId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyRevieweeVolunteerInput = {
    id?: string
    assignmentId: string
    reviewerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyReviewerVolunteerInput = {
    id?: string
    assignmentId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type VolunteerSkillUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerSkillUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerSkillUncheckedUpdateManyWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    category?: EnumSkillCategoryFieldUpdateOperationsInput | $Enums.SkillCategory
    name?: StringFieldUpdateOperationsInput | string
    level?: EnumSkillLevelFieldUpdateOperationsInput | $Enums.SkillLevel
    verified?: BoolFieldUpdateOperationsInput | boolean
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerAvailabilityUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerAvailabilityUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VolunteerAvailabilityUncheckedUpdateManyWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    dayOfWeek?: IntFieldUpdateOperationsInput | number
    startTime?: StringFieldUpdateOperationsInput | string
    endTime?: StringFieldUpdateOperationsInput | string
    timezone?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opportunity?: OpportunityUpdateOneRequiredWithoutApplicationsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutApplicationsNestedInput
    assignment?: AssignmentUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignment?: AssignmentUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAssignmentNestedInput
    opportunity?: OpportunityUpdateOneRequiredWithoutAssignmentsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAssignmentsNestedInput
    sessions?: SessionUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutRevieweeVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutReviewsNestedInput
    reviewerVolunteer?: VolunteerUpdateOneWithoutReviewsGivenNestedInput
    reviewerOrganization?: OrganizationUpdateOneWithoutReviewsGivenNestedInput
    revieweeOrganization?: OrganizationUpdateOneWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRevieweeVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutReviewsNestedInput
    revieweeVolunteer?: VolunteerUpdateOneWithoutReviewsReceivedNestedInput
    reviewerOrganization?: OrganizationUpdateOneWithoutReviewsGivenNestedInput
    revieweeOrganization?: OrganizationUpdateOneWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerVolunteerInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type OpportunityCreateManyOrganizationInput = {
    id?: string
    title: string
    description: string
    category: $Enums.OpportunityCategory
    type: $Enums.OpportunityType
    urgency: $Enums.UrgencyLevel
    skillsNeeded?: OpportunityCreateskillsNeededInput | string[]
    timeCommitment: string
    location: string
    isRemote?: boolean
    requirements?: string | null
    benefits?: string | null
    startDate?: Date | string | null
    endDate?: Date | string | null
    maxVolunteers?: number
    status?: $Enums.OpportunityStatus
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationCreateManyOrganizationInput = {
    id?: string
    opportunityId: string
    volunteerId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type AssignmentCreateManyOrganizationInput = {
    id?: string
    applicationId: string
    opportunityId: string
    volunteerId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyRevieweeOrganizationInput = {
    id?: string
    assignmentId: string
    reviewerId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type ReviewCreateManyReviewerOrganizationInput = {
    id?: string
    assignmentId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type OpportunityUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUpdateManyWithoutOpportunityNestedInput
    assignments?: AssignmentUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    applications?: ApplicationUncheckedUpdateManyWithoutOpportunityNestedInput
    assignments?: AssignmentUncheckedUpdateManyWithoutOpportunityNestedInput
  }

  export type OpportunityUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    category?: EnumOpportunityCategoryFieldUpdateOperationsInput | $Enums.OpportunityCategory
    type?: EnumOpportunityTypeFieldUpdateOperationsInput | $Enums.OpportunityType
    urgency?: EnumUrgencyLevelFieldUpdateOperationsInput | $Enums.UrgencyLevel
    skillsNeeded?: OpportunityUpdateskillsNeededInput | string[]
    timeCommitment?: StringFieldUpdateOperationsInput | string
    location?: StringFieldUpdateOperationsInput | string
    isRemote?: BoolFieldUpdateOperationsInput | boolean
    requirements?: NullableStringFieldUpdateOperationsInput | string | null
    benefits?: NullableStringFieldUpdateOperationsInput | string | null
    startDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    maxVolunteers?: IntFieldUpdateOperationsInput | number
    status?: EnumOpportunityStatusFieldUpdateOperationsInput | $Enums.OpportunityStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    opportunity?: OpportunityUpdateOneRequiredWithoutApplicationsNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutApplicationsNestedInput
    assignment?: AssignmentUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignment?: AssignmentUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAssignmentNestedInput
    opportunity?: OpportunityUpdateOneRequiredWithoutAssignmentsNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutAssignmentsNestedInput
    sessions?: SessionUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    opportunityId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutRevieweeOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutReviewsNestedInput
    reviewerVolunteer?: VolunteerUpdateOneWithoutReviewsGivenNestedInput
    revieweeVolunteer?: VolunteerUpdateOneWithoutReviewsReceivedNestedInput
    reviewerOrganization?: OrganizationUpdateOneWithoutReviewsGivenNestedInput
  }

  export type ReviewUncheckedUpdateWithoutRevieweeOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutRevieweeOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutReviewerOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    assignment?: AssignmentUpdateOneRequiredWithoutReviewsNestedInput
    reviewerVolunteer?: VolunteerUpdateOneWithoutReviewsGivenNestedInput
    revieweeVolunteer?: VolunteerUpdateOneWithoutReviewsReceivedNestedInput
    revieweeOrganization?: OrganizationUpdateOneWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutReviewerOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutReviewerOrganizationInput = {
    id?: StringFieldUpdateOperationsInput | string
    assignmentId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ApplicationCreateManyOpportunityInput = {
    id?: string
    volunteerId: string
    organizationId: string
    coverLetter?: string | null
    status?: $Enums.ApplicationStatus
    appliedAt?: Date | string
    reviewedAt?: Date | string | null
  }

  export type AssignmentCreateManyOpportunityInput = {
    id?: string
    applicationId: string
    volunteerId: string
    organizationId: string
    status?: $Enums.AssignmentStatus
    hoursLogged?: number
    startDate?: Date | string
    endDate?: Date | string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ApplicationUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    volunteer?: VolunteerUpdateOneRequiredWithoutApplicationsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutApplicationsNestedInput
    assignment?: AssignmentUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    assignment?: AssignmentUncheckedUpdateOneWithoutApplicationNestedInput
  }

  export type ApplicationUncheckedUpdateManyWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    coverLetter?: NullableStringFieldUpdateOperationsInput | string | null
    status?: EnumApplicationStatusFieldUpdateOperationsInput | $Enums.ApplicationStatus
    appliedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewedAt?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type AssignmentUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    application?: ApplicationUpdateOneRequiredWithoutAssignmentNestedInput
    volunteer?: VolunteerUpdateOneRequiredWithoutAssignmentsNestedInput
    organization?: OrganizationUpdateOneRequiredWithoutAssignmentsNestedInput
    sessions?: SessionUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    sessions?: SessionUncheckedUpdateManyWithoutAssignmentNestedInput
    reviews?: ReviewUncheckedUpdateManyWithoutAssignmentNestedInput
  }

  export type AssignmentUncheckedUpdateManyWithoutOpportunityInput = {
    id?: StringFieldUpdateOperationsInput | string
    applicationId?: StringFieldUpdateOperationsInput | string
    volunteerId?: StringFieldUpdateOperationsInput | string
    organizationId?: StringFieldUpdateOperationsInput | string
    status?: EnumAssignmentStatusFieldUpdateOperationsInput | $Enums.AssignmentStatus
    hoursLogged?: IntFieldUpdateOperationsInput | number
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyAssignmentInput = {
    id?: string
    scheduledAt: Date | string
    duration: number
    status?: $Enums.SessionStatus
    notes?: string | null
    createdAt?: Date | string
    updatedAt?: Date | string
  }

  export type ReviewCreateManyAssignmentInput = {
    id?: string
    reviewerId: string
    revieweeId: string
    rating: number
    comment?: string | null
    createdAt?: Date | string
  }

  export type SessionUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    scheduledAt?: DateTimeFieldUpdateOperationsInput | Date | string
    duration?: IntFieldUpdateOperationsInput | number
    status?: EnumSessionStatusFieldUpdateOperationsInput | $Enums.SessionStatus
    notes?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    reviewerVolunteer?: VolunteerUpdateOneWithoutReviewsGivenNestedInput
    revieweeVolunteer?: VolunteerUpdateOneWithoutReviewsReceivedNestedInput
    reviewerOrganization?: OrganizationUpdateOneWithoutReviewsGivenNestedInput
    revieweeOrganization?: OrganizationUpdateOneWithoutReviewsReceivedNestedInput
  }

  export type ReviewUncheckedUpdateWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type ReviewUncheckedUpdateManyWithoutAssignmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    reviewerId?: StringFieldUpdateOperationsInput | string
    revieweeId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
    comment?: NullableStringFieldUpdateOperationsInput | string | null
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }



  /**
   * Batch Payload for updateMany & deleteMany & createMany
   */

  export type BatchPayload = {
    count: number
  }

  /**
   * DMMF
   */
  export const dmmf: runtime.BaseDMMF
}