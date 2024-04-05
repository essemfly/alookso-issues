
/**
 * Client
**/

import * as runtime from './runtime/library';
import $Types = runtime.Types // general types
import $Public = runtime.Types.Public
import $Utils = runtime.Types.Utils
import $Extensions = runtime.Types.Extensions
import $Result = runtime.Types.Result

export type PrismaPromise<T> = $Public.PrismaPromise<T>


/**
 * Model Issue
 * 
 */
export type Issue = $Result.DefaultSelection<Prisma.$IssuePayload>
/**
 * Model IssueBlock
 * 
 */
export type IssueBlock = $Result.DefaultSelection<Prisma.$IssueBlockPayload>
/**
 * Model IssueMessage
 * 
 */
export type IssueMessage = $Result.DefaultSelection<Prisma.$IssueMessagePayload>
/**
 * Model Celeb
 * 
 */
export type Celeb = $Result.DefaultSelection<Prisma.$CelebPayload>
/**
 * Model Account
 * 
 */
export type Account = $Result.DefaultSelection<Prisma.$AccountPayload>
/**
 * Model Session
 * 
 */
export type Session = $Result.DefaultSelection<Prisma.$SessionPayload>
/**
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model VerificationToken
 * 
 */
export type VerificationToken = $Result.DefaultSelection<Prisma.$VerificationTokenPayload>
/**
 * Model Rating
 * 
 */
export type Rating = $Result.DefaultSelection<Prisma.$RatingPayload>
/**
 * Model MessageLike
 * 
 */
export type MessageLike = $Result.DefaultSelection<Prisma.$MessageLikePayload>
/**
 * Model IssueReply
 * 
 */
export type IssueReply = $Result.DefaultSelection<Prisma.$IssueReplyPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const IssueStatus: {
  DRAFT: 'DRAFT',
  PUBLISHED: 'PUBLISHED',
  REMOVED: 'REMOVED',
  CLOSED: 'CLOSED'
};

export type IssueStatus = (typeof IssueStatus)[keyof typeof IssueStatus]


export const Bias: {
  LEFT: 'LEFT',
  CENTER: 'CENTER',
  RIGHT: 'RIGHT'
};

export type Bias = (typeof Bias)[keyof typeof Bias]

}

export type IssueStatus = $Enums.IssueStatus

export const IssueStatus: typeof $Enums.IssueStatus

export type Bias = $Enums.Bias

export const Bias: typeof $Enums.Bias

/**
 * ##  Prisma Client ʲˢ
 * 
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Issues
 * const issues = await prisma.issue.findMany()
 * ```
 *
 * 
 * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
 */
export class PrismaClient<
  T extends Prisma.PrismaClientOptions = Prisma.PrismaClientOptions,
  U = 'log' extends keyof T ? T['log'] extends Array<Prisma.LogLevel | Prisma.LogDefinition> ? Prisma.GetEvents<T['log']> : never : never,
  ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs
> {
  [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['other'] }

    /**
   * ##  Prisma Client ʲˢ
   * 
   * Type-safe database client for TypeScript & Node.js
   * @example
   * ```
   * const prisma = new PrismaClient()
   * // Fetch zero or more Issues
   * const issues = await prisma.issue.findMany()
   * ```
   *
   * 
   * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client).
   */

  constructor(optionsArg ?: Prisma.Subset<T, Prisma.PrismaClientOptions>);
  $on<V extends U>(eventType: V, callback: (event: V extends 'query' ? Prisma.QueryEvent : Prisma.LogEvent) => void): void;

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


  $extends: $Extensions.ExtendsHook<'extends', Prisma.TypeMapCb, ExtArgs>

      /**
   * `prisma.issue`: Exposes CRUD operations for the **Issue** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Issues
    * const issues = await prisma.issue.findMany()
    * ```
    */
  get issue(): Prisma.IssueDelegate<ExtArgs>;

  /**
   * `prisma.issueBlock`: Exposes CRUD operations for the **IssueBlock** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssueBlocks
    * const issueBlocks = await prisma.issueBlock.findMany()
    * ```
    */
  get issueBlock(): Prisma.IssueBlockDelegate<ExtArgs>;

  /**
   * `prisma.issueMessage`: Exposes CRUD operations for the **IssueMessage** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssueMessages
    * const issueMessages = await prisma.issueMessage.findMany()
    * ```
    */
  get issueMessage(): Prisma.IssueMessageDelegate<ExtArgs>;

  /**
   * `prisma.celeb`: Exposes CRUD operations for the **Celeb** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Celebs
    * const celebs = await prisma.celeb.findMany()
    * ```
    */
  get celeb(): Prisma.CelebDelegate<ExtArgs>;

  /**
   * `prisma.account`: Exposes CRUD operations for the **Account** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Accounts
    * const accounts = await prisma.account.findMany()
    * ```
    */
  get account(): Prisma.AccountDelegate<ExtArgs>;

  /**
   * `prisma.session`: Exposes CRUD operations for the **Session** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Sessions
    * const sessions = await prisma.session.findMany()
    * ```
    */
  get session(): Prisma.SessionDelegate<ExtArgs>;

  /**
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs>;

  /**
   * `prisma.verificationToken`: Exposes CRUD operations for the **VerificationToken** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more VerificationTokens
    * const verificationTokens = await prisma.verificationToken.findMany()
    * ```
    */
  get verificationToken(): Prisma.VerificationTokenDelegate<ExtArgs>;

  /**
   * `prisma.rating`: Exposes CRUD operations for the **Rating** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Ratings
    * const ratings = await prisma.rating.findMany()
    * ```
    */
  get rating(): Prisma.RatingDelegate<ExtArgs>;

  /**
   * `prisma.messageLike`: Exposes CRUD operations for the **MessageLike** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more MessageLikes
    * const messageLikes = await prisma.messageLike.findMany()
    * ```
    */
  get messageLike(): Prisma.MessageLikeDelegate<ExtArgs>;

  /**
   * `prisma.issueReply`: Exposes CRUD operations for the **IssueReply** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more IssueReplies
    * const issueReplies = await prisma.issueReply.findMany()
    * ```
    */
  get issueReply(): Prisma.IssueReplyDelegate<ExtArgs>;
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
  export import NotFoundError = runtime.NotFoundError

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
   * Prisma Client JS version: 5.1.1
   * Query Engine version: efd2449663b3d73d637ea1fd226bafbcf45b3102
   */
  export type PrismaVersion = {
    client: string
  }

  export const prismaVersion: PrismaVersion 

  /**
   * Utility Types
   */

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON object.
   * This type can be useful to enforce some input to be JSON-compatible or as a super-type to be extended from. 
   */
  export type JsonObject = {[Key in string]?: JsonValue}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches a JSON array.
   */
  export interface JsonArray extends Array<JsonValue> {}

  /**
   * From https://github.com/sindresorhus/type-fest/
   * Matches any valid JSON value.
   */
  export type JsonValue = string | number | boolean | JsonObject | JsonArray | null

  /**
   * Matches a JSON object.
   * Unlike `JsonObject`, this type allows undefined and read-only properties.
   */
  export type InputJsonObject = {readonly [Key in string]?: InputJsonValue | null}

  /**
   * Matches a JSON array.
   * Unlike `JsonArray`, readonly arrays are assignable to this type.
   */
  export interface InputJsonArray extends ReadonlyArray<InputJsonValue | null> {}

  /**
   * Matches any valid value that can be used as an input for operations like
   * create and update as the value of a JSON field. Unlike `JsonValue`, this
   * type allows read-only arrays and read-only object properties and disallows
   * `null` at the top level.
   *
   * `null` cannot be used as the value of a JSON field because its meaning
   * would be ambiguous. Use `Prisma.JsonNull` to store the JSON null value or
   * `Prisma.DbNull` to clear the JSON value and set the field to the database
   * NULL value instead.
   *
   * @see https://www.prisma.io/docs/concepts/components/prisma-client/working-with-fields/working-with-json-fields#filtering-by-null-values
   */
  export type InputJsonValue = string | number | boolean | InputJsonObject | InputJsonArray | { toJSON(): unknown }

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
      | {[P in keyof O as P extends K ? K : never]-?: O[P]} & O
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
    Issue: 'Issue',
    IssueBlock: 'IssueBlock',
    IssueMessage: 'IssueMessage',
    Celeb: 'Celeb',
    Account: 'Account',
    Session: 'Session',
    User: 'User',
    VerificationToken: 'VerificationToken',
    Rating: 'Rating',
    MessageLike: 'MessageLike',
    IssueReply: 'IssueReply'
  };

  export type ModelName = (typeof ModelName)[keyof typeof ModelName]


  export type Datasources = {
    db?: Datasource
  }


  interface TypeMapCb extends $Utils.Fn<{extArgs: $Extensions.Args}, $Utils.Record<string, any>> {
    returns: Prisma.TypeMap<this['params']['extArgs']>
  }

  export type TypeMap<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    meta: {
      modelProps: 'issue' | 'issueBlock' | 'issueMessage' | 'celeb' | 'account' | 'session' | 'user' | 'verificationToken' | 'rating' | 'messageLike' | 'issueReply'
      txIsolationLevel: Prisma.TransactionIsolationLevel
    },
    model: {
      Issue: {
        payload: Prisma.$IssuePayload<ExtArgs>
        fields: Prisma.IssueFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findFirst: {
            args: Prisma.IssueFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          findMany: {
            args: Prisma.IssueFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>[]
          }
          create: {
            args: Prisma.IssueCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          createMany: {
            args: Prisma.IssueCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IssueDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          update: {
            args: Prisma.IssueUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          deleteMany: {
            args: Prisma.IssueDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IssueUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IssueUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssuePayload>
          }
          aggregate: {
            args: Prisma.IssueAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIssue>
          }
          groupBy: {
            args: Prisma.IssueGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IssueGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueCountArgs<ExtArgs>,
            result: $Utils.Optional<IssueCountAggregateOutputType> | number
          }
        }
      }
      IssueBlock: {
        payload: Prisma.$IssueBlockPayload<ExtArgs>
        fields: Prisma.IssueBlockFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueBlockFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueBlockFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload>
          }
          findFirst: {
            args: Prisma.IssueBlockFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueBlockFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload>
          }
          findMany: {
            args: Prisma.IssueBlockFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload>[]
          }
          create: {
            args: Prisma.IssueBlockCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload>
          }
          createMany: {
            args: Prisma.IssueBlockCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IssueBlockDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload>
          }
          update: {
            args: Prisma.IssueBlockUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload>
          }
          deleteMany: {
            args: Prisma.IssueBlockDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IssueBlockUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IssueBlockUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueBlockPayload>
          }
          aggregate: {
            args: Prisma.IssueBlockAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIssueBlock>
          }
          groupBy: {
            args: Prisma.IssueBlockGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IssueBlockGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueBlockCountArgs<ExtArgs>,
            result: $Utils.Optional<IssueBlockCountAggregateOutputType> | number
          }
        }
      }
      IssueMessage: {
        payload: Prisma.$IssueMessagePayload<ExtArgs>
        fields: Prisma.IssueMessageFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueMessageFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueMessageFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload>
          }
          findFirst: {
            args: Prisma.IssueMessageFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueMessageFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload>
          }
          findMany: {
            args: Prisma.IssueMessageFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload>[]
          }
          create: {
            args: Prisma.IssueMessageCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload>
          }
          createMany: {
            args: Prisma.IssueMessageCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IssueMessageDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload>
          }
          update: {
            args: Prisma.IssueMessageUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload>
          }
          deleteMany: {
            args: Prisma.IssueMessageDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IssueMessageUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IssueMessageUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueMessagePayload>
          }
          aggregate: {
            args: Prisma.IssueMessageAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIssueMessage>
          }
          groupBy: {
            args: Prisma.IssueMessageGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IssueMessageGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueMessageCountArgs<ExtArgs>,
            result: $Utils.Optional<IssueMessageCountAggregateOutputType> | number
          }
        }
      }
      Celeb: {
        payload: Prisma.$CelebPayload<ExtArgs>
        fields: Prisma.CelebFieldRefs
        operations: {
          findUnique: {
            args: Prisma.CelebFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.CelebFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          findFirst: {
            args: Prisma.CelebFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.CelebFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          findMany: {
            args: Prisma.CelebFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>[]
          }
          create: {
            args: Prisma.CelebCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          createMany: {
            args: Prisma.CelebCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.CelebDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          update: {
            args: Prisma.CelebUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          deleteMany: {
            args: Prisma.CelebDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.CelebUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.CelebUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$CelebPayload>
          }
          aggregate: {
            args: Prisma.CelebAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateCeleb>
          }
          groupBy: {
            args: Prisma.CelebGroupByArgs<ExtArgs>,
            result: $Utils.Optional<CelebGroupByOutputType>[]
          }
          count: {
            args: Prisma.CelebCountArgs<ExtArgs>,
            result: $Utils.Optional<CelebCountAggregateOutputType> | number
          }
        }
      }
      Account: {
        payload: Prisma.$AccountPayload<ExtArgs>
        fields: Prisma.AccountFieldRefs
        operations: {
          findUnique: {
            args: Prisma.AccountFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.AccountFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findFirst: {
            args: Prisma.AccountFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.AccountFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          findMany: {
            args: Prisma.AccountFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>[]
          }
          create: {
            args: Prisma.AccountCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          createMany: {
            args: Prisma.AccountCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.AccountDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          update: {
            args: Prisma.AccountUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          deleteMany: {
            args: Prisma.AccountDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.AccountUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.AccountUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$AccountPayload>
          }
          aggregate: {
            args: Prisma.AccountAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateAccount>
          }
          groupBy: {
            args: Prisma.AccountGroupByArgs<ExtArgs>,
            result: $Utils.Optional<AccountGroupByOutputType>[]
          }
          count: {
            args: Prisma.AccountCountArgs<ExtArgs>,
            result: $Utils.Optional<AccountCountAggregateOutputType> | number
          }
        }
      }
      Session: {
        payload: Prisma.$SessionPayload<ExtArgs>
        fields: Prisma.SessionFieldRefs
        operations: {
          findUnique: {
            args: Prisma.SessionFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.SessionFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findFirst: {
            args: Prisma.SessionFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.SessionFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          findMany: {
            args: Prisma.SessionFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>[]
          }
          create: {
            args: Prisma.SessionCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          createMany: {
            args: Prisma.SessionCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.SessionDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          update: {
            args: Prisma.SessionUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          deleteMany: {
            args: Prisma.SessionDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.SessionUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.SessionUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$SessionPayload>
          }
          aggregate: {
            args: Prisma.SessionAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateSession>
          }
          groupBy: {
            args: Prisma.SessionGroupByArgs<ExtArgs>,
            result: $Utils.Optional<SessionGroupByOutputType>[]
          }
          count: {
            args: Prisma.SessionCountArgs<ExtArgs>,
            result: $Utils.Optional<SessionCountAggregateOutputType> | number
          }
        }
      }
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>,
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>,
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      VerificationToken: {
        payload: Prisma.$VerificationTokenPayload<ExtArgs>
        fields: Prisma.VerificationTokenFieldRefs
        operations: {
          findUnique: {
            args: Prisma.VerificationTokenFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.VerificationTokenFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findFirst: {
            args: Prisma.VerificationTokenFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.VerificationTokenFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          findMany: {
            args: Prisma.VerificationTokenFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>[]
          }
          create: {
            args: Prisma.VerificationTokenCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          createMany: {
            args: Prisma.VerificationTokenCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.VerificationTokenDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          update: {
            args: Prisma.VerificationTokenUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          deleteMany: {
            args: Prisma.VerificationTokenDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.VerificationTokenUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.VerificationTokenUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$VerificationTokenPayload>
          }
          aggregate: {
            args: Prisma.VerificationTokenAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateVerificationToken>
          }
          groupBy: {
            args: Prisma.VerificationTokenGroupByArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenGroupByOutputType>[]
          }
          count: {
            args: Prisma.VerificationTokenCountArgs<ExtArgs>,
            result: $Utils.Optional<VerificationTokenCountAggregateOutputType> | number
          }
        }
      }
      Rating: {
        payload: Prisma.$RatingPayload<ExtArgs>
        fields: Prisma.RatingFieldRefs
        operations: {
          findUnique: {
            args: Prisma.RatingFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.RatingFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findFirst: {
            args: Prisma.RatingFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.RatingFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          findMany: {
            args: Prisma.RatingFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>[]
          }
          create: {
            args: Prisma.RatingCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          createMany: {
            args: Prisma.RatingCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.RatingDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          update: {
            args: Prisma.RatingUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          deleteMany: {
            args: Prisma.RatingDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.RatingUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.RatingUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$RatingPayload>
          }
          aggregate: {
            args: Prisma.RatingAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateRating>
          }
          groupBy: {
            args: Prisma.RatingGroupByArgs<ExtArgs>,
            result: $Utils.Optional<RatingGroupByOutputType>[]
          }
          count: {
            args: Prisma.RatingCountArgs<ExtArgs>,
            result: $Utils.Optional<RatingCountAggregateOutputType> | number
          }
        }
      }
      MessageLike: {
        payload: Prisma.$MessageLikePayload<ExtArgs>
        fields: Prisma.MessageLikeFieldRefs
        operations: {
          findUnique: {
            args: Prisma.MessageLikeFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.MessageLikeFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          findFirst: {
            args: Prisma.MessageLikeFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.MessageLikeFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          findMany: {
            args: Prisma.MessageLikeFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>[]
          }
          create: {
            args: Prisma.MessageLikeCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          createMany: {
            args: Prisma.MessageLikeCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.MessageLikeDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          update: {
            args: Prisma.MessageLikeUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          deleteMany: {
            args: Prisma.MessageLikeDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.MessageLikeUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.MessageLikeUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$MessageLikePayload>
          }
          aggregate: {
            args: Prisma.MessageLikeAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateMessageLike>
          }
          groupBy: {
            args: Prisma.MessageLikeGroupByArgs<ExtArgs>,
            result: $Utils.Optional<MessageLikeGroupByOutputType>[]
          }
          count: {
            args: Prisma.MessageLikeCountArgs<ExtArgs>,
            result: $Utils.Optional<MessageLikeCountAggregateOutputType> | number
          }
        }
      }
      IssueReply: {
        payload: Prisma.$IssueReplyPayload<ExtArgs>
        fields: Prisma.IssueReplyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.IssueReplyFindUniqueArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.IssueReplyFindUniqueOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload>
          }
          findFirst: {
            args: Prisma.IssueReplyFindFirstArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.IssueReplyFindFirstOrThrowArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload>
          }
          findMany: {
            args: Prisma.IssueReplyFindManyArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload>[]
          }
          create: {
            args: Prisma.IssueReplyCreateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload>
          }
          createMany: {
            args: Prisma.IssueReplyCreateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          delete: {
            args: Prisma.IssueReplyDeleteArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload>
          }
          update: {
            args: Prisma.IssueReplyUpdateArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload>
          }
          deleteMany: {
            args: Prisma.IssueReplyDeleteManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          updateMany: {
            args: Prisma.IssueReplyUpdateManyArgs<ExtArgs>,
            result: Prisma.BatchPayload
          }
          upsert: {
            args: Prisma.IssueReplyUpsertArgs<ExtArgs>,
            result: $Utils.PayloadToResult<Prisma.$IssueReplyPayload>
          }
          aggregate: {
            args: Prisma.IssueReplyAggregateArgs<ExtArgs>,
            result: $Utils.Optional<AggregateIssueReply>
          }
          groupBy: {
            args: Prisma.IssueReplyGroupByArgs<ExtArgs>,
            result: $Utils.Optional<IssueReplyGroupByOutputType>[]
          }
          count: {
            args: Prisma.IssueReplyCountArgs<ExtArgs>,
            result: $Utils.Optional<IssueReplyCountAggregateOutputType> | number
          }
        }
      }
    }
  } & {
    other: {
      payload: any
      operations: {
        $executeRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $executeRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
        $queryRawUnsafe: {
          args: [query: string, ...values: any[]],
          result: any
        }
        $queryRaw: {
          args: [query: TemplateStringsArray | Prisma.Sql, ...values: any[]],
          result: any
        }
      }
    }
  }
  export const defineExtension: $Extensions.ExtendsHook<'define', Prisma.TypeMapCb, $Extensions.DefaultArgs>
  export type DefaultPrismaClient = PrismaClient
  export type ErrorFormat = 'pretty' | 'colorless' | 'minimal'

  export interface PrismaClientOptions {
    /**
     * Overwrites the datasource url from your schema.prisma file
     */
    datasources?: Datasources

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
     *  { emit: 'stdout', level: 'query' },
     *  { emit: 'stdout', level: 'info' },
     *  { emit: 'stdout', level: 'warn' }
     *  { emit: 'stdout', level: 'error' }
     * ]
     * ```
     * Read more in our [docs](https://www.prisma.io/docs/reference/tools-and-interfaces/prisma-client/logging#the-log-option).
     */
    log?: Array<LogLevel | LogDefinition>
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
    | 'update'
    | 'updateMany'
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
   * Count Type IssueCountOutputType
   */

  export type IssueCountOutputType = {
    issueBlocks: number
    celebs: number
    ratings: number
    issueMessages: number
    messageLike: number
    replys: number
  }

  export type IssueCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    issueBlocks?: boolean | IssueCountOutputTypeCountIssueBlocksArgs
    celebs?: boolean | IssueCountOutputTypeCountCelebsArgs
    ratings?: boolean | IssueCountOutputTypeCountRatingsArgs
    issueMessages?: boolean | IssueCountOutputTypeCountIssueMessagesArgs
    messageLike?: boolean | IssueCountOutputTypeCountMessageLikeArgs
    replys?: boolean | IssueCountOutputTypeCountReplysArgs
  }

  // Custom InputTypes

  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueCountOutputType
     */
    select?: IssueCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountIssueBlocksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueBlockWhereInput
  }


  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountCelebsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CelebWhereInput
  }


  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountIssueMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueMessageWhereInput
  }


  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountMessageLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageLikeWhereInput
  }


  /**
   * IssueCountOutputType without action
   */
  export type IssueCountOutputTypeCountReplysArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueReplyWhereInput
  }



  /**
   * Count Type IssueBlockCountOutputType
   */

  export type IssueBlockCountOutputType = {
    messages: number
  }

  export type IssueBlockCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messages?: boolean | IssueBlockCountOutputTypeCountMessagesArgs
  }

  // Custom InputTypes

  /**
   * IssueBlockCountOutputType without action
   */
  export type IssueBlockCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlockCountOutputType
     */
    select?: IssueBlockCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IssueBlockCountOutputType without action
   */
  export type IssueBlockCountOutputTypeCountMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueMessageWhereInput
  }



  /**
   * Count Type IssueMessageCountOutputType
   */

  export type IssueMessageCountOutputType = {
    messageLike: number
  }

  export type IssueMessageCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    messageLike?: boolean | IssueMessageCountOutputTypeCountMessageLikeArgs
  }

  // Custom InputTypes

  /**
   * IssueMessageCountOutputType without action
   */
  export type IssueMessageCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessageCountOutputType
     */
    select?: IssueMessageCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * IssueMessageCountOutputType without action
   */
  export type IssueMessageCountOutputTypeCountMessageLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageLikeWhereInput
  }



  /**
   * Count Type CelebCountOutputType
   */

  export type CelebCountOutputType = {
    issues: number
  }

  export type CelebCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    issues?: boolean | CelebCountOutputTypeCountIssuesArgs
  }

  // Custom InputTypes

  /**
   * CelebCountOutputType without action
   */
  export type CelebCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the CelebCountOutputType
     */
    select?: CelebCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * CelebCountOutputType without action
   */
  export type CelebCountOutputTypeCountIssuesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
  }



  /**
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    accounts: number
    sessions: number
    ratings: number
    messageLikes: number
    replys: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | UserCountOutputTypeCountAccountsArgs
    sessions?: boolean | UserCountOutputTypeCountSessionsArgs
    ratings?: boolean | UserCountOutputTypeCountRatingsArgs
    messageLikes?: boolean | UserCountOutputTypeCountMessageLikesArgs
    replys?: boolean | UserCountOutputTypeCountReplysArgs
  }

  // Custom InputTypes

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountAccountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountSessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRatingsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountMessageLikesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageLikeWhereInput
  }


  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountReplysArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueReplyWhereInput
  }



  /**
   * Models
   */

  /**
   * Model Issue
   */

  export type AggregateIssue = {
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  export type IssueAvgAggregateOutputType = {
    id: number | null
    weight: number | null
  }

  export type IssueSumAggregateOutputType = {
    id: number | null
    weight: number | null
  }

  export type IssueMinAggregateOutputType = {
    id: number | null
    slug: string | null
    weight: number | null
    title: string | null
    description: string | null
    coverImage: string | null
    status: $Enums.IssueStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssueMaxAggregateOutputType = {
    id: number | null
    slug: string | null
    weight: number | null
    title: string | null
    description: string | null
    coverImage: string | null
    status: $Enums.IssueStatus | null
    createdAt: Date | null
    updatedAt: Date | null
  }

  export type IssueCountAggregateOutputType = {
    id: number
    slug: number
    weight: number
    title: number
    description: number
    coverImage: number
    status: number
    createdAt: number
    updatedAt: number
    _all: number
  }


  export type IssueAvgAggregateInputType = {
    id?: true
    weight?: true
  }

  export type IssueSumAggregateInputType = {
    id?: true
    weight?: true
  }

  export type IssueMinAggregateInputType = {
    id?: true
    slug?: true
    weight?: true
    title?: true
    description?: true
    coverImage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssueMaxAggregateInputType = {
    id?: true
    slug?: true
    weight?: true
    title?: true
    description?: true
    coverImage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
  }

  export type IssueCountAggregateInputType = {
    id?: true
    slug?: true
    weight?: true
    title?: true
    description?: true
    coverImage?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    _all?: true
  }

  export type IssueAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issue to aggregate.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Issues
    **/
    _count?: true | IssueCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMaxAggregateInputType
  }

  export type GetIssueAggregateType<T extends IssueAggregateArgs> = {
        [P in keyof T & keyof AggregateIssue]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssue[P]>
      : GetScalarType<T[P], AggregateIssue[P]>
  }




  export type IssueGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithAggregationInput | IssueOrderByWithAggregationInput[]
    by: IssueScalarFieldEnum[] | IssueScalarFieldEnum
    having?: IssueScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueCountAggregateInputType | true
    _avg?: IssueAvgAggregateInputType
    _sum?: IssueSumAggregateInputType
    _min?: IssueMinAggregateInputType
    _max?: IssueMaxAggregateInputType
  }

  export type IssueGroupByOutputType = {
    id: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date
    updatedAt: Date
    _count: IssueCountAggregateOutputType | null
    _avg: IssueAvgAggregateOutputType | null
    _sum: IssueSumAggregateOutputType | null
    _min: IssueMinAggregateOutputType | null
    _max: IssueMaxAggregateOutputType | null
  }

  type GetIssueGroupByPayload<T extends IssueGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueGroupByOutputType[P]>
            : GetScalarType<T[P], IssueGroupByOutputType[P]>
        }
      >
    >


  export type IssueSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    slug?: boolean
    weight?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issueBlocks?: boolean | Issue$issueBlocksArgs<ExtArgs>
    celebs?: boolean | Issue$celebsArgs<ExtArgs>
    ratings?: boolean | Issue$ratingsArgs<ExtArgs>
    issueMessages?: boolean | Issue$issueMessagesArgs<ExtArgs>
    messageLike?: boolean | Issue$messageLikeArgs<ExtArgs>
    replys?: boolean | Issue$replysArgs<ExtArgs>
    _count?: boolean | IssueCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issue"]>

  export type IssueSelectScalar = {
    id?: boolean
    slug?: boolean
    weight?: boolean
    title?: boolean
    description?: boolean
    coverImage?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
  }

  export type IssueInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    issueBlocks?: boolean | Issue$issueBlocksArgs<ExtArgs>
    celebs?: boolean | Issue$celebsArgs<ExtArgs>
    ratings?: boolean | Issue$ratingsArgs<ExtArgs>
    issueMessages?: boolean | Issue$issueMessagesArgs<ExtArgs>
    messageLike?: boolean | Issue$messageLikeArgs<ExtArgs>
    replys?: boolean | Issue$replysArgs<ExtArgs>
    _count?: boolean | IssueCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IssuePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Issue"
    objects: {
      issueBlocks: Prisma.$IssueBlockPayload<ExtArgs>[]
      celebs: Prisma.$CelebPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      issueMessages: Prisma.$IssueMessagePayload<ExtArgs>[]
      messageLike: Prisma.$MessageLikePayload<ExtArgs>[]
      replys: Prisma.$IssueReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      slug: string
      weight: number
      title: string
      description: string
      coverImage: string
      status: $Enums.IssueStatus
      createdAt: Date
      updatedAt: Date
    }, ExtArgs["result"]["issue"]>
    composites: {}
  }


  type IssueGetPayload<S extends boolean | null | undefined | IssueDefaultArgs> = $Result.GetResult<Prisma.$IssuePayload, S>

  type IssueCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<IssueFindManyArgs, 'select' | 'include'> & {
      select?: IssueCountAggregateInputType | true
    }

  export interface IssueDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Issue'], meta: { name: 'Issue' } }
    /**
     * Find zero or one Issue that matches the filter.
     * @param {IssueFindUniqueArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IssueFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IssueFindUniqueArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Issue that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IssueFindUniqueOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IssueFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Issue that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IssueFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueFindFirstArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Issue that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindFirstOrThrowArgs} args - Arguments to find a Issue
     * @example
     * // Get one Issue
     * const issue = await prisma.issue.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IssueFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Issues that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Issues
     * const issues = await prisma.issue.findMany()
     * 
     * // Get first 10 Issues
     * const issues = await prisma.issue.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueWithIdOnly = await prisma.issue.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IssueFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Issue.
     * @param {IssueCreateArgs} args - Arguments to create a Issue.
     * @example
     * // Create one Issue
     * const Issue = await prisma.issue.create({
     *   data: {
     *     // ... data to create a Issue
     *   }
     * })
     * 
    **/
    create<T extends IssueCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueCreateArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Issues.
     *     @param {IssueCreateManyArgs} args - Arguments to create many Issues.
     *     @example
     *     // Create many Issues
     *     const issue = await prisma.issue.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IssueCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Issue.
     * @param {IssueDeleteArgs} args - Arguments to delete one Issue.
     * @example
     * // Delete one Issue
     * const Issue = await prisma.issue.delete({
     *   where: {
     *     // ... filter to delete one Issue
     *   }
     * })
     * 
    **/
    delete<T extends IssueDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IssueDeleteArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Issue.
     * @param {IssueUpdateArgs} args - Arguments to update one Issue.
     * @example
     * // Update one Issue
     * const issue = await prisma.issue.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IssueUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueUpdateArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Issues.
     * @param {IssueDeleteManyArgs} args - Arguments to filter Issues to delete.
     * @example
     * // Delete a few Issues
     * const { count } = await prisma.issue.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IssueDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Issues
     * const issue = await prisma.issue.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IssueUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IssueUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Issue.
     * @param {IssueUpsertArgs} args - Arguments to update or create a Issue.
     * @example
     * // Update or create a Issue
     * const issue = await prisma.issue.upsert({
     *   create: {
     *     // ... data to create a Issue
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Issue we want to update
     *   }
     * })
    **/
    upsert<T extends IssueUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IssueUpsertArgs<ExtArgs>>
    ): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Issues.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueCountArgs} args - Arguments to filter Issues to count.
     * @example
     * // Count the number of Issues
     * const count = await prisma.issue.count({
     *   where: {
     *     // ... the filter for the Issues we want to count
     *   }
     * })
    **/
    count<T extends IssueCountArgs>(
      args?: Subset<T, IssueCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueAggregateArgs>(args: Subset<T, IssueAggregateArgs>): Prisma.PrismaPromise<GetIssueAggregateType<T>>

    /**
     * Group by Issue.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueGroupByArgs} args - Group by arguments.
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
      T extends IssueGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueGroupByArgs['orderBy'] }
        : { orderBy?: IssueGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssueGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Issue model
   */
  readonly fields: IssueFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Issue.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    issueBlocks<T extends Issue$issueBlocksArgs<ExtArgs> = {}>(args?: Subset<T, Issue$issueBlocksArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'findMany'> | Null>;

    celebs<T extends Issue$celebsArgs<ExtArgs> = {}>(args?: Subset<T, Issue$celebsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'findMany'> | Null>;

    ratings<T extends Issue$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, Issue$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'findMany'> | Null>;

    issueMessages<T extends Issue$issueMessagesArgs<ExtArgs> = {}>(args?: Subset<T, Issue$issueMessagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    messageLike<T extends Issue$messageLikeArgs<ExtArgs> = {}>(args?: Subset<T, Issue$messageLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'findMany'> | Null>;

    replys<T extends Issue$replysArgs<ExtArgs> = {}>(args?: Subset<T, Issue$replysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Issue model
   */ 
  interface IssueFieldRefs {
    readonly id: FieldRef<"Issue", 'Int'>
    readonly slug: FieldRef<"Issue", 'String'>
    readonly weight: FieldRef<"Issue", 'Int'>
    readonly title: FieldRef<"Issue", 'String'>
    readonly description: FieldRef<"Issue", 'String'>
    readonly coverImage: FieldRef<"Issue", 'String'>
    readonly status: FieldRef<"Issue", 'IssueStatus'>
    readonly createdAt: FieldRef<"Issue", 'DateTime'>
    readonly updatedAt: FieldRef<"Issue", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Issue findUnique
   */
  export type IssueFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }


  /**
   * Issue findUniqueOrThrow
   */
  export type IssueFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where: IssueWhereUniqueInput
  }


  /**
   * Issue findFirst
   */
  export type IssueFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }


  /**
   * Issue findFirstOrThrow
   */
  export type IssueFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issue to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Issues.
     */
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }


  /**
   * Issue findMany
   */
  export type IssueFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter, which Issues to fetch.
     */
    where?: IssueWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Issues to fetch.
     */
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Issues.
     */
    cursor?: IssueWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Issues from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Issues.
     */
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }


  /**
   * Issue create
   */
  export type IssueCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to create a Issue.
     */
    data: XOR<IssueCreateInput, IssueUncheckedCreateInput>
  }


  /**
   * Issue createMany
   */
  export type IssueCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Issues.
     */
    data: IssueCreateManyInput | IssueCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Issue update
   */
  export type IssueUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The data needed to update a Issue.
     */
    data: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
    /**
     * Choose, which Issue to update.
     */
    where: IssueWhereUniqueInput
  }


  /**
   * Issue updateMany
   */
  export type IssueUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Issues.
     */
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyInput>
    /**
     * Filter which Issues to update
     */
    where?: IssueWhereInput
  }


  /**
   * Issue upsert
   */
  export type IssueUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * The filter to search for the Issue to update in case it exists.
     */
    where: IssueWhereUniqueInput
    /**
     * In case the Issue found by the `where` argument doesn't exist, create a new Issue with this data.
     */
    create: XOR<IssueCreateInput, IssueUncheckedCreateInput>
    /**
     * In case the Issue was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueUpdateInput, IssueUncheckedUpdateInput>
  }


  /**
   * Issue delete
   */
  export type IssueDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    /**
     * Filter which Issue to delete.
     */
    where: IssueWhereUniqueInput
  }


  /**
   * Issue deleteMany
   */
  export type IssueDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Issues to delete
     */
    where?: IssueWhereInput
  }


  /**
   * Issue.issueBlocks
   */
  export type Issue$issueBlocksArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    where?: IssueBlockWhereInput
    orderBy?: IssueBlockOrderByWithRelationInput | IssueBlockOrderByWithRelationInput[]
    cursor?: IssueBlockWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueBlockScalarFieldEnum | IssueBlockScalarFieldEnum[]
  }


  /**
   * Issue.celebs
   */
  export type Issue$celebsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    where?: CelebWhereInput
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    cursor?: CelebWhereUniqueInput
    take?: number
    skip?: number
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }


  /**
   * Issue.ratings
   */
  export type Issue$ratingsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }


  /**
   * Issue.issueMessages
   */
  export type Issue$issueMessagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    where?: IssueMessageWhereInput
    orderBy?: IssueMessageOrderByWithRelationInput | IssueMessageOrderByWithRelationInput[]
    cursor?: IssueMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueMessageScalarFieldEnum | IssueMessageScalarFieldEnum[]
  }


  /**
   * Issue.messageLike
   */
  export type Issue$messageLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    where?: MessageLikeWhereInput
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    cursor?: MessageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }


  /**
   * Issue.replys
   */
  export type Issue$replysArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    where?: IssueReplyWhereInput
    orderBy?: IssueReplyOrderByWithRelationInput | IssueReplyOrderByWithRelationInput[]
    cursor?: IssueReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueReplyScalarFieldEnum | IssueReplyScalarFieldEnum[]
  }


  /**
   * Issue without action
   */
  export type IssueDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
  }



  /**
   * Model IssueBlock
   */

  export type AggregateIssueBlock = {
    _count: IssueBlockCountAggregateOutputType | null
    _avg: IssueBlockAvgAggregateOutputType | null
    _sum: IssueBlockSumAggregateOutputType | null
    _min: IssueBlockMinAggregateOutputType | null
    _max: IssueBlockMaxAggregateOutputType | null
  }

  export type IssueBlockAvgAggregateOutputType = {
    id: number | null
    issueId: number | null
    seq: number | null
  }

  export type IssueBlockSumAggregateOutputType = {
    id: number | null
    issueId: number | null
    seq: number | null
  }

  export type IssueBlockMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    issueId: number | null
    seq: number | null
    title: string | null
    blockType: string | null
    content: string | null
    isRemoved: boolean | null
  }

  export type IssueBlockMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    issueId: number | null
    seq: number | null
    title: string | null
    blockType: string | null
    content: string | null
    isRemoved: boolean | null
  }

  export type IssueBlockCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    issueId: number
    seq: number
    title: number
    blockType: number
    content: number
    isRemoved: number
    _all: number
  }


  export type IssueBlockAvgAggregateInputType = {
    id?: true
    issueId?: true
    seq?: true
  }

  export type IssueBlockSumAggregateInputType = {
    id?: true
    issueId?: true
    seq?: true
  }

  export type IssueBlockMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    issueId?: true
    seq?: true
    title?: true
    blockType?: true
    content?: true
    isRemoved?: true
  }

  export type IssueBlockMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    issueId?: true
    seq?: true
    title?: true
    blockType?: true
    content?: true
    isRemoved?: true
  }

  export type IssueBlockCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    issueId?: true
    seq?: true
    title?: true
    blockType?: true
    content?: true
    isRemoved?: true
    _all?: true
  }

  export type IssueBlockAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueBlock to aggregate.
     */
    where?: IssueBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueBlocks to fetch.
     */
    orderBy?: IssueBlockOrderByWithRelationInput | IssueBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssueBlocks
    **/
    _count?: true | IssueBlockCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueBlockAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueBlockSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueBlockMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueBlockMaxAggregateInputType
  }

  export type GetIssueBlockAggregateType<T extends IssueBlockAggregateArgs> = {
        [P in keyof T & keyof AggregateIssueBlock]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssueBlock[P]>
      : GetScalarType<T[P], AggregateIssueBlock[P]>
  }




  export type IssueBlockGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueBlockWhereInput
    orderBy?: IssueBlockOrderByWithAggregationInput | IssueBlockOrderByWithAggregationInput[]
    by: IssueBlockScalarFieldEnum[] | IssueBlockScalarFieldEnum
    having?: IssueBlockScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueBlockCountAggregateInputType | true
    _avg?: IssueBlockAvgAggregateInputType
    _sum?: IssueBlockSumAggregateInputType
    _min?: IssueBlockMinAggregateInputType
    _max?: IssueBlockMaxAggregateInputType
  }

  export type IssueBlockGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    issueId: number
    seq: number
    title: string | null
    blockType: string
    content: string | null
    isRemoved: boolean
    _count: IssueBlockCountAggregateOutputType | null
    _avg: IssueBlockAvgAggregateOutputType | null
    _sum: IssueBlockSumAggregateOutputType | null
    _min: IssueBlockMinAggregateOutputType | null
    _max: IssueBlockMaxAggregateOutputType | null
  }

  type GetIssueBlockGroupByPayload<T extends IssueBlockGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueBlockGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueBlockGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueBlockGroupByOutputType[P]>
            : GetScalarType<T[P], IssueBlockGroupByOutputType[P]>
        }
      >
    >


  export type IssueBlockSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issueId?: boolean
    seq?: boolean
    title?: boolean
    blockType?: boolean
    content?: boolean
    isRemoved?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    messages?: boolean | IssueBlock$messagesArgs<ExtArgs>
    _count?: boolean | IssueBlockCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueBlock"]>

  export type IssueBlockSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issueId?: boolean
    seq?: boolean
    title?: boolean
    blockType?: boolean
    content?: boolean
    isRemoved?: boolean
  }

  export type IssueBlockInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    messages?: boolean | IssueBlock$messagesArgs<ExtArgs>
    _count?: boolean | IssueBlockCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IssueBlockPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "IssueBlock"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
      messages: Prisma.$IssueMessagePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      issueId: number
      seq: number
      title: string | null
      blockType: string
      content: string | null
      isRemoved: boolean
    }, ExtArgs["result"]["issueBlock"]>
    composites: {}
  }


  type IssueBlockGetPayload<S extends boolean | null | undefined | IssueBlockDefaultArgs> = $Result.GetResult<Prisma.$IssueBlockPayload, S>

  type IssueBlockCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<IssueBlockFindManyArgs, 'select' | 'include'> & {
      select?: IssueBlockCountAggregateInputType | true
    }

  export interface IssueBlockDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssueBlock'], meta: { name: 'IssueBlock' } }
    /**
     * Find zero or one IssueBlock that matches the filter.
     * @param {IssueBlockFindUniqueArgs} args - Arguments to find a IssueBlock
     * @example
     * // Get one IssueBlock
     * const issueBlock = await prisma.issueBlock.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IssueBlockFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IssueBlockFindUniqueArgs<ExtArgs>>
    ): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IssueBlock that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IssueBlockFindUniqueOrThrowArgs} args - Arguments to find a IssueBlock
     * @example
     * // Get one IssueBlock
     * const issueBlock = await prisma.issueBlock.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IssueBlockFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueBlockFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IssueBlock that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueBlockFindFirstArgs} args - Arguments to find a IssueBlock
     * @example
     * // Get one IssueBlock
     * const issueBlock = await prisma.issueBlock.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IssueBlockFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueBlockFindFirstArgs<ExtArgs>>
    ): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IssueBlock that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueBlockFindFirstOrThrowArgs} args - Arguments to find a IssueBlock
     * @example
     * // Get one IssueBlock
     * const issueBlock = await prisma.issueBlock.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IssueBlockFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueBlockFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IssueBlocks that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueBlockFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssueBlocks
     * const issueBlocks = await prisma.issueBlock.findMany()
     * 
     * // Get first 10 IssueBlocks
     * const issueBlocks = await prisma.issueBlock.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueBlockWithIdOnly = await prisma.issueBlock.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IssueBlockFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueBlockFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IssueBlock.
     * @param {IssueBlockCreateArgs} args - Arguments to create a IssueBlock.
     * @example
     * // Create one IssueBlock
     * const IssueBlock = await prisma.issueBlock.create({
     *   data: {
     *     // ... data to create a IssueBlock
     *   }
     * })
     * 
    **/
    create<T extends IssueBlockCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueBlockCreateArgs<ExtArgs>>
    ): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IssueBlocks.
     *     @param {IssueBlockCreateManyArgs} args - Arguments to create many IssueBlocks.
     *     @example
     *     // Create many IssueBlocks
     *     const issueBlock = await prisma.issueBlock.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IssueBlockCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueBlockCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IssueBlock.
     * @param {IssueBlockDeleteArgs} args - Arguments to delete one IssueBlock.
     * @example
     * // Delete one IssueBlock
     * const IssueBlock = await prisma.issueBlock.delete({
     *   where: {
     *     // ... filter to delete one IssueBlock
     *   }
     * })
     * 
    **/
    delete<T extends IssueBlockDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IssueBlockDeleteArgs<ExtArgs>>
    ): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IssueBlock.
     * @param {IssueBlockUpdateArgs} args - Arguments to update one IssueBlock.
     * @example
     * // Update one IssueBlock
     * const issueBlock = await prisma.issueBlock.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IssueBlockUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueBlockUpdateArgs<ExtArgs>>
    ): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IssueBlocks.
     * @param {IssueBlockDeleteManyArgs} args - Arguments to filter IssueBlocks to delete.
     * @example
     * // Delete a few IssueBlocks
     * const { count } = await prisma.issueBlock.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IssueBlockDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueBlockDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssueBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueBlockUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssueBlocks
     * const issueBlock = await prisma.issueBlock.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IssueBlockUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IssueBlockUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IssueBlock.
     * @param {IssueBlockUpsertArgs} args - Arguments to update or create a IssueBlock.
     * @example
     * // Update or create a IssueBlock
     * const issueBlock = await prisma.issueBlock.upsert({
     *   create: {
     *     // ... data to create a IssueBlock
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssueBlock we want to update
     *   }
     * })
    **/
    upsert<T extends IssueBlockUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IssueBlockUpsertArgs<ExtArgs>>
    ): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IssueBlocks.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueBlockCountArgs} args - Arguments to filter IssueBlocks to count.
     * @example
     * // Count the number of IssueBlocks
     * const count = await prisma.issueBlock.count({
     *   where: {
     *     // ... the filter for the IssueBlocks we want to count
     *   }
     * })
    **/
    count<T extends IssueBlockCountArgs>(
      args?: Subset<T, IssueBlockCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueBlockCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssueBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueBlockAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueBlockAggregateArgs>(args: Subset<T, IssueBlockAggregateArgs>): Prisma.PrismaPromise<GetIssueBlockAggregateType<T>>

    /**
     * Group by IssueBlock.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueBlockGroupByArgs} args - Group by arguments.
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
      T extends IssueBlockGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueBlockGroupByArgs['orderBy'] }
        : { orderBy?: IssueBlockGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssueBlockGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueBlockGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssueBlock model
   */
  readonly fields: IssueBlockFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssueBlock.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueBlockClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    messages<T extends IssueBlock$messagesArgs<ExtArgs> = {}>(args?: Subset<T, IssueBlock$messagesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IssueBlock model
   */ 
  interface IssueBlockFieldRefs {
    readonly id: FieldRef<"IssueBlock", 'Int'>
    readonly createdAt: FieldRef<"IssueBlock", 'DateTime'>
    readonly updatedAt: FieldRef<"IssueBlock", 'DateTime'>
    readonly issueId: FieldRef<"IssueBlock", 'Int'>
    readonly seq: FieldRef<"IssueBlock", 'Int'>
    readonly title: FieldRef<"IssueBlock", 'String'>
    readonly blockType: FieldRef<"IssueBlock", 'String'>
    readonly content: FieldRef<"IssueBlock", 'String'>
    readonly isRemoved: FieldRef<"IssueBlock", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * IssueBlock findUnique
   */
  export type IssueBlockFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * Filter, which IssueBlock to fetch.
     */
    where: IssueBlockWhereUniqueInput
  }


  /**
   * IssueBlock findUniqueOrThrow
   */
  export type IssueBlockFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * Filter, which IssueBlock to fetch.
     */
    where: IssueBlockWhereUniqueInput
  }


  /**
   * IssueBlock findFirst
   */
  export type IssueBlockFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * Filter, which IssueBlock to fetch.
     */
    where?: IssueBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueBlocks to fetch.
     */
    orderBy?: IssueBlockOrderByWithRelationInput | IssueBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueBlocks.
     */
    cursor?: IssueBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueBlocks.
     */
    distinct?: IssueBlockScalarFieldEnum | IssueBlockScalarFieldEnum[]
  }


  /**
   * IssueBlock findFirstOrThrow
   */
  export type IssueBlockFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * Filter, which IssueBlock to fetch.
     */
    where?: IssueBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueBlocks to fetch.
     */
    orderBy?: IssueBlockOrderByWithRelationInput | IssueBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueBlocks.
     */
    cursor?: IssueBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueBlocks.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueBlocks.
     */
    distinct?: IssueBlockScalarFieldEnum | IssueBlockScalarFieldEnum[]
  }


  /**
   * IssueBlock findMany
   */
  export type IssueBlockFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * Filter, which IssueBlocks to fetch.
     */
    where?: IssueBlockWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueBlocks to fetch.
     */
    orderBy?: IssueBlockOrderByWithRelationInput | IssueBlockOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssueBlocks.
     */
    cursor?: IssueBlockWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueBlocks from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueBlocks.
     */
    skip?: number
    distinct?: IssueBlockScalarFieldEnum | IssueBlockScalarFieldEnum[]
  }


  /**
   * IssueBlock create
   */
  export type IssueBlockCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * The data needed to create a IssueBlock.
     */
    data: XOR<IssueBlockCreateInput, IssueBlockUncheckedCreateInput>
  }


  /**
   * IssueBlock createMany
   */
  export type IssueBlockCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssueBlocks.
     */
    data: IssueBlockCreateManyInput | IssueBlockCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IssueBlock update
   */
  export type IssueBlockUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * The data needed to update a IssueBlock.
     */
    data: XOR<IssueBlockUpdateInput, IssueBlockUncheckedUpdateInput>
    /**
     * Choose, which IssueBlock to update.
     */
    where: IssueBlockWhereUniqueInput
  }


  /**
   * IssueBlock updateMany
   */
  export type IssueBlockUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssueBlocks.
     */
    data: XOR<IssueBlockUpdateManyMutationInput, IssueBlockUncheckedUpdateManyInput>
    /**
     * Filter which IssueBlocks to update
     */
    where?: IssueBlockWhereInput
  }


  /**
   * IssueBlock upsert
   */
  export type IssueBlockUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * The filter to search for the IssueBlock to update in case it exists.
     */
    where: IssueBlockWhereUniqueInput
    /**
     * In case the IssueBlock found by the `where` argument doesn't exist, create a new IssueBlock with this data.
     */
    create: XOR<IssueBlockCreateInput, IssueBlockUncheckedCreateInput>
    /**
     * In case the IssueBlock was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueBlockUpdateInput, IssueBlockUncheckedUpdateInput>
  }


  /**
   * IssueBlock delete
   */
  export type IssueBlockDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
    /**
     * Filter which IssueBlock to delete.
     */
    where: IssueBlockWhereUniqueInput
  }


  /**
   * IssueBlock deleteMany
   */
  export type IssueBlockDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueBlocks to delete
     */
    where?: IssueBlockWhereInput
  }


  /**
   * IssueBlock.messages
   */
  export type IssueBlock$messagesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    where?: IssueMessageWhereInput
    orderBy?: IssueMessageOrderByWithRelationInput | IssueMessageOrderByWithRelationInput[]
    cursor?: IssueMessageWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueMessageScalarFieldEnum | IssueMessageScalarFieldEnum[]
  }


  /**
   * IssueBlock without action
   */
  export type IssueBlockDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueBlock
     */
    select?: IssueBlockSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueBlockInclude<ExtArgs> | null
  }



  /**
   * Model IssueMessage
   */

  export type AggregateIssueMessage = {
    _count: IssueMessageCountAggregateOutputType | null
    _avg: IssueMessageAvgAggregateOutputType | null
    _sum: IssueMessageSumAggregateOutputType | null
    _min: IssueMessageMinAggregateOutputType | null
    _max: IssueMessageMaxAggregateOutputType | null
  }

  export type IssueMessageAvgAggregateOutputType = {
    id: number | null
    issueId: number | null
    blockId: number | null
    celebId: number | null
    likeCount: number | null
  }

  export type IssueMessageSumAggregateOutputType = {
    id: number | null
    issueId: number | null
    blockId: number | null
    celebId: number | null
    likeCount: number | null
  }

  export type IssueMessageMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isRemoved: boolean | null
    issueId: number | null
    blockId: number | null
    celebId: number | null
    celebName: string | null
    celebDescription: string | null
    celebAvatar: string | null
    content: string | null
    link: string | null
    linkFrom: string | null
    backgroundColor: string | null
    bias: $Enums.Bias | null
    reportedAt: Date | null
    likeCount: number | null
  }

  export type IssueMessageMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    isRemoved: boolean | null
    issueId: number | null
    blockId: number | null
    celebId: number | null
    celebName: string | null
    celebDescription: string | null
    celebAvatar: string | null
    content: string | null
    link: string | null
    linkFrom: string | null
    backgroundColor: string | null
    bias: $Enums.Bias | null
    reportedAt: Date | null
    likeCount: number | null
  }

  export type IssueMessageCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    isRemoved: number
    issueId: number
    blockId: number
    celebId: number
    celebName: number
    celebDescription: number
    celebAvatar: number
    content: number
    link: number
    linkFrom: number
    backgroundColor: number
    bias: number
    reportedAt: number
    likeCount: number
    _all: number
  }


  export type IssueMessageAvgAggregateInputType = {
    id?: true
    issueId?: true
    blockId?: true
    celebId?: true
    likeCount?: true
  }

  export type IssueMessageSumAggregateInputType = {
    id?: true
    issueId?: true
    blockId?: true
    celebId?: true
    likeCount?: true
  }

  export type IssueMessageMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isRemoved?: true
    issueId?: true
    blockId?: true
    celebId?: true
    celebName?: true
    celebDescription?: true
    celebAvatar?: true
    content?: true
    link?: true
    linkFrom?: true
    backgroundColor?: true
    bias?: true
    reportedAt?: true
    likeCount?: true
  }

  export type IssueMessageMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isRemoved?: true
    issueId?: true
    blockId?: true
    celebId?: true
    celebName?: true
    celebDescription?: true
    celebAvatar?: true
    content?: true
    link?: true
    linkFrom?: true
    backgroundColor?: true
    bias?: true
    reportedAt?: true
    likeCount?: true
  }

  export type IssueMessageCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    isRemoved?: true
    issueId?: true
    blockId?: true
    celebId?: true
    celebName?: true
    celebDescription?: true
    celebAvatar?: true
    content?: true
    link?: true
    linkFrom?: true
    backgroundColor?: true
    bias?: true
    reportedAt?: true
    likeCount?: true
    _all?: true
  }

  export type IssueMessageAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueMessage to aggregate.
     */
    where?: IssueMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueMessages to fetch.
     */
    orderBy?: IssueMessageOrderByWithRelationInput | IssueMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssueMessages
    **/
    _count?: true | IssueMessageCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueMessageAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueMessageSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueMessageMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueMessageMaxAggregateInputType
  }

  export type GetIssueMessageAggregateType<T extends IssueMessageAggregateArgs> = {
        [P in keyof T & keyof AggregateIssueMessage]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssueMessage[P]>
      : GetScalarType<T[P], AggregateIssueMessage[P]>
  }




  export type IssueMessageGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueMessageWhereInput
    orderBy?: IssueMessageOrderByWithAggregationInput | IssueMessageOrderByWithAggregationInput[]
    by: IssueMessageScalarFieldEnum[] | IssueMessageScalarFieldEnum
    having?: IssueMessageScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueMessageCountAggregateInputType | true
    _avg?: IssueMessageAvgAggregateInputType
    _sum?: IssueMessageSumAggregateInputType
    _min?: IssueMessageMinAggregateInputType
    _max?: IssueMessageMaxAggregateInputType
  }

  export type IssueMessageGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    isRemoved: boolean
    issueId: number
    blockId: number
    celebId: number
    celebName: string
    celebDescription: string | null
    celebAvatar: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date
    likeCount: number
    _count: IssueMessageCountAggregateOutputType | null
    _avg: IssueMessageAvgAggregateOutputType | null
    _sum: IssueMessageSumAggregateOutputType | null
    _min: IssueMessageMinAggregateOutputType | null
    _max: IssueMessageMaxAggregateOutputType | null
  }

  type GetIssueMessageGroupByPayload<T extends IssueMessageGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueMessageGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueMessageGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueMessageGroupByOutputType[P]>
            : GetScalarType<T[P], IssueMessageGroupByOutputType[P]>
        }
      >
    >


  export type IssueMessageSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isRemoved?: boolean
    issueId?: boolean
    blockId?: boolean
    celebId?: boolean
    celebName?: boolean
    celebDescription?: boolean
    celebAvatar?: boolean
    content?: boolean
    link?: boolean
    linkFrom?: boolean
    backgroundColor?: boolean
    bias?: boolean
    reportedAt?: boolean
    likeCount?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    block?: boolean | IssueBlockDefaultArgs<ExtArgs>
    messageLike?: boolean | IssueMessage$messageLikeArgs<ExtArgs>
    _count?: boolean | IssueMessageCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueMessage"]>

  export type IssueMessageSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    isRemoved?: boolean
    issueId?: boolean
    blockId?: boolean
    celebId?: boolean
    celebName?: boolean
    celebDescription?: boolean
    celebAvatar?: boolean
    content?: boolean
    link?: boolean
    linkFrom?: boolean
    backgroundColor?: boolean
    bias?: boolean
    reportedAt?: boolean
    likeCount?: boolean
  }

  export type IssueMessageInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    block?: boolean | IssueBlockDefaultArgs<ExtArgs>
    messageLike?: boolean | IssueMessage$messageLikeArgs<ExtArgs>
    _count?: boolean | IssueMessageCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $IssueMessagePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "IssueMessage"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
      block: Prisma.$IssueBlockPayload<ExtArgs>
      messageLike: Prisma.$MessageLikePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      isRemoved: boolean
      issueId: number
      blockId: number
      celebId: number
      celebName: string
      celebDescription: string | null
      celebAvatar: string | null
      content: string
      link: string
      linkFrom: string
      backgroundColor: string
      bias: $Enums.Bias
      reportedAt: Date
      likeCount: number
    }, ExtArgs["result"]["issueMessage"]>
    composites: {}
  }


  type IssueMessageGetPayload<S extends boolean | null | undefined | IssueMessageDefaultArgs> = $Result.GetResult<Prisma.$IssueMessagePayload, S>

  type IssueMessageCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<IssueMessageFindManyArgs, 'select' | 'include'> & {
      select?: IssueMessageCountAggregateInputType | true
    }

  export interface IssueMessageDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssueMessage'], meta: { name: 'IssueMessage' } }
    /**
     * Find zero or one IssueMessage that matches the filter.
     * @param {IssueMessageFindUniqueArgs} args - Arguments to find a IssueMessage
     * @example
     * // Get one IssueMessage
     * const issueMessage = await prisma.issueMessage.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IssueMessageFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IssueMessageFindUniqueArgs<ExtArgs>>
    ): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IssueMessage that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IssueMessageFindUniqueOrThrowArgs} args - Arguments to find a IssueMessage
     * @example
     * // Get one IssueMessage
     * const issueMessage = await prisma.issueMessage.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IssueMessageFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueMessageFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IssueMessage that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueMessageFindFirstArgs} args - Arguments to find a IssueMessage
     * @example
     * // Get one IssueMessage
     * const issueMessage = await prisma.issueMessage.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IssueMessageFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueMessageFindFirstArgs<ExtArgs>>
    ): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IssueMessage that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueMessageFindFirstOrThrowArgs} args - Arguments to find a IssueMessage
     * @example
     * // Get one IssueMessage
     * const issueMessage = await prisma.issueMessage.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IssueMessageFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueMessageFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IssueMessages that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueMessageFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssueMessages
     * const issueMessages = await prisma.issueMessage.findMany()
     * 
     * // Get first 10 IssueMessages
     * const issueMessages = await prisma.issueMessage.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueMessageWithIdOnly = await prisma.issueMessage.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IssueMessageFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueMessageFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IssueMessage.
     * @param {IssueMessageCreateArgs} args - Arguments to create a IssueMessage.
     * @example
     * // Create one IssueMessage
     * const IssueMessage = await prisma.issueMessage.create({
     *   data: {
     *     // ... data to create a IssueMessage
     *   }
     * })
     * 
    **/
    create<T extends IssueMessageCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueMessageCreateArgs<ExtArgs>>
    ): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IssueMessages.
     *     @param {IssueMessageCreateManyArgs} args - Arguments to create many IssueMessages.
     *     @example
     *     // Create many IssueMessages
     *     const issueMessage = await prisma.issueMessage.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IssueMessageCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueMessageCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IssueMessage.
     * @param {IssueMessageDeleteArgs} args - Arguments to delete one IssueMessage.
     * @example
     * // Delete one IssueMessage
     * const IssueMessage = await prisma.issueMessage.delete({
     *   where: {
     *     // ... filter to delete one IssueMessage
     *   }
     * })
     * 
    **/
    delete<T extends IssueMessageDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IssueMessageDeleteArgs<ExtArgs>>
    ): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IssueMessage.
     * @param {IssueMessageUpdateArgs} args - Arguments to update one IssueMessage.
     * @example
     * // Update one IssueMessage
     * const issueMessage = await prisma.issueMessage.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IssueMessageUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueMessageUpdateArgs<ExtArgs>>
    ): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IssueMessages.
     * @param {IssueMessageDeleteManyArgs} args - Arguments to filter IssueMessages to delete.
     * @example
     * // Delete a few IssueMessages
     * const { count } = await prisma.issueMessage.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IssueMessageDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueMessageDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssueMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueMessageUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssueMessages
     * const issueMessage = await prisma.issueMessage.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IssueMessageUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IssueMessageUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IssueMessage.
     * @param {IssueMessageUpsertArgs} args - Arguments to update or create a IssueMessage.
     * @example
     * // Update or create a IssueMessage
     * const issueMessage = await prisma.issueMessage.upsert({
     *   create: {
     *     // ... data to create a IssueMessage
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssueMessage we want to update
     *   }
     * })
    **/
    upsert<T extends IssueMessageUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IssueMessageUpsertArgs<ExtArgs>>
    ): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IssueMessages.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueMessageCountArgs} args - Arguments to filter IssueMessages to count.
     * @example
     * // Count the number of IssueMessages
     * const count = await prisma.issueMessage.count({
     *   where: {
     *     // ... the filter for the IssueMessages we want to count
     *   }
     * })
    **/
    count<T extends IssueMessageCountArgs>(
      args?: Subset<T, IssueMessageCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueMessageCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssueMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueMessageAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueMessageAggregateArgs>(args: Subset<T, IssueMessageAggregateArgs>): Prisma.PrismaPromise<GetIssueMessageAggregateType<T>>

    /**
     * Group by IssueMessage.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueMessageGroupByArgs} args - Group by arguments.
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
      T extends IssueMessageGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueMessageGroupByArgs['orderBy'] }
        : { orderBy?: IssueMessageGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssueMessageGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueMessageGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssueMessage model
   */
  readonly fields: IssueMessageFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssueMessage.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueMessageClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    block<T extends IssueBlockDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueBlockDefaultArgs<ExtArgs>>): Prisma__IssueBlockClient<$Result.GetResult<Prisma.$IssueBlockPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    messageLike<T extends IssueMessage$messageLikeArgs<ExtArgs> = {}>(args?: Subset<T, IssueMessage$messageLikeArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IssueMessage model
   */ 
  interface IssueMessageFieldRefs {
    readonly id: FieldRef<"IssueMessage", 'Int'>
    readonly createdAt: FieldRef<"IssueMessage", 'DateTime'>
    readonly updatedAt: FieldRef<"IssueMessage", 'DateTime'>
    readonly isRemoved: FieldRef<"IssueMessage", 'Boolean'>
    readonly issueId: FieldRef<"IssueMessage", 'Int'>
    readonly blockId: FieldRef<"IssueMessage", 'Int'>
    readonly celebId: FieldRef<"IssueMessage", 'Int'>
    readonly celebName: FieldRef<"IssueMessage", 'String'>
    readonly celebDescription: FieldRef<"IssueMessage", 'String'>
    readonly celebAvatar: FieldRef<"IssueMessage", 'String'>
    readonly content: FieldRef<"IssueMessage", 'String'>
    readonly link: FieldRef<"IssueMessage", 'String'>
    readonly linkFrom: FieldRef<"IssueMessage", 'String'>
    readonly backgroundColor: FieldRef<"IssueMessage", 'String'>
    readonly bias: FieldRef<"IssueMessage", 'Bias'>
    readonly reportedAt: FieldRef<"IssueMessage", 'DateTime'>
    readonly likeCount: FieldRef<"IssueMessage", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * IssueMessage findUnique
   */
  export type IssueMessageFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * Filter, which IssueMessage to fetch.
     */
    where: IssueMessageWhereUniqueInput
  }


  /**
   * IssueMessage findUniqueOrThrow
   */
  export type IssueMessageFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * Filter, which IssueMessage to fetch.
     */
    where: IssueMessageWhereUniqueInput
  }


  /**
   * IssueMessage findFirst
   */
  export type IssueMessageFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * Filter, which IssueMessage to fetch.
     */
    where?: IssueMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueMessages to fetch.
     */
    orderBy?: IssueMessageOrderByWithRelationInput | IssueMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueMessages.
     */
    cursor?: IssueMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueMessages.
     */
    distinct?: IssueMessageScalarFieldEnum | IssueMessageScalarFieldEnum[]
  }


  /**
   * IssueMessage findFirstOrThrow
   */
  export type IssueMessageFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * Filter, which IssueMessage to fetch.
     */
    where?: IssueMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueMessages to fetch.
     */
    orderBy?: IssueMessageOrderByWithRelationInput | IssueMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueMessages.
     */
    cursor?: IssueMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueMessages.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueMessages.
     */
    distinct?: IssueMessageScalarFieldEnum | IssueMessageScalarFieldEnum[]
  }


  /**
   * IssueMessage findMany
   */
  export type IssueMessageFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * Filter, which IssueMessages to fetch.
     */
    where?: IssueMessageWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueMessages to fetch.
     */
    orderBy?: IssueMessageOrderByWithRelationInput | IssueMessageOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssueMessages.
     */
    cursor?: IssueMessageWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueMessages from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueMessages.
     */
    skip?: number
    distinct?: IssueMessageScalarFieldEnum | IssueMessageScalarFieldEnum[]
  }


  /**
   * IssueMessage create
   */
  export type IssueMessageCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * The data needed to create a IssueMessage.
     */
    data: XOR<IssueMessageCreateInput, IssueMessageUncheckedCreateInput>
  }


  /**
   * IssueMessage createMany
   */
  export type IssueMessageCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssueMessages.
     */
    data: IssueMessageCreateManyInput | IssueMessageCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IssueMessage update
   */
  export type IssueMessageUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * The data needed to update a IssueMessage.
     */
    data: XOR<IssueMessageUpdateInput, IssueMessageUncheckedUpdateInput>
    /**
     * Choose, which IssueMessage to update.
     */
    where: IssueMessageWhereUniqueInput
  }


  /**
   * IssueMessage updateMany
   */
  export type IssueMessageUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssueMessages.
     */
    data: XOR<IssueMessageUpdateManyMutationInput, IssueMessageUncheckedUpdateManyInput>
    /**
     * Filter which IssueMessages to update
     */
    where?: IssueMessageWhereInput
  }


  /**
   * IssueMessage upsert
   */
  export type IssueMessageUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * The filter to search for the IssueMessage to update in case it exists.
     */
    where: IssueMessageWhereUniqueInput
    /**
     * In case the IssueMessage found by the `where` argument doesn't exist, create a new IssueMessage with this data.
     */
    create: XOR<IssueMessageCreateInput, IssueMessageUncheckedCreateInput>
    /**
     * In case the IssueMessage was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueMessageUpdateInput, IssueMessageUncheckedUpdateInput>
  }


  /**
   * IssueMessage delete
   */
  export type IssueMessageDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
    /**
     * Filter which IssueMessage to delete.
     */
    where: IssueMessageWhereUniqueInput
  }


  /**
   * IssueMessage deleteMany
   */
  export type IssueMessageDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueMessages to delete
     */
    where?: IssueMessageWhereInput
  }


  /**
   * IssueMessage.messageLike
   */
  export type IssueMessage$messageLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    where?: MessageLikeWhereInput
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    cursor?: MessageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }


  /**
   * IssueMessage without action
   */
  export type IssueMessageDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueMessage
     */
    select?: IssueMessageSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueMessageInclude<ExtArgs> | null
  }



  /**
   * Model Celeb
   */

  export type AggregateCeleb = {
    _count: CelebCountAggregateOutputType | null
    _avg: CelebAvgAggregateOutputType | null
    _sum: CelebSumAggregateOutputType | null
    _min: CelebMinAggregateOutputType | null
    _max: CelebMaxAggregateOutputType | null
  }

  export type CelebAvgAggregateOutputType = {
    id: number | null
  }

  export type CelebSumAggregateOutputType = {
    id: number | null
  }

  export type CelebMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    avatar: string | null
  }

  export type CelebMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    name: string | null
    description: string | null
    avatar: string | null
  }

  export type CelebCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    name: number
    description: number
    avatar: number
    _all: number
  }


  export type CelebAvgAggregateInputType = {
    id?: true
  }

  export type CelebSumAggregateInputType = {
    id?: true
  }

  export type CelebMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    avatar?: true
  }

  export type CelebMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    avatar?: true
  }

  export type CelebCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    name?: true
    description?: true
    avatar?: true
    _all?: true
  }

  export type CelebAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Celeb to aggregate.
     */
    where?: CelebWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebs to fetch.
     */
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: CelebWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Celebs
    **/
    _count?: true | CelebCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: CelebAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: CelebSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: CelebMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: CelebMaxAggregateInputType
  }

  export type GetCelebAggregateType<T extends CelebAggregateArgs> = {
        [P in keyof T & keyof AggregateCeleb]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateCeleb[P]>
      : GetScalarType<T[P], AggregateCeleb[P]>
  }




  export type CelebGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: CelebWhereInput
    orderBy?: CelebOrderByWithAggregationInput | CelebOrderByWithAggregationInput[]
    by: CelebScalarFieldEnum[] | CelebScalarFieldEnum
    having?: CelebScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: CelebCountAggregateInputType | true
    _avg?: CelebAvgAggregateInputType
    _sum?: CelebSumAggregateInputType
    _min?: CelebMinAggregateInputType
    _max?: CelebMaxAggregateInputType
  }

  export type CelebGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    name: string
    description: string | null
    avatar: string | null
    _count: CelebCountAggregateOutputType | null
    _avg: CelebAvgAggregateOutputType | null
    _sum: CelebSumAggregateOutputType | null
    _min: CelebMinAggregateOutputType | null
    _max: CelebMaxAggregateOutputType | null
  }

  type GetCelebGroupByPayload<T extends CelebGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<CelebGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof CelebGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], CelebGroupByOutputType[P]>
            : GetScalarType<T[P], CelebGroupByOutputType[P]>
        }
      >
    >


  export type CelebSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    avatar?: boolean
    issues?: boolean | Celeb$issuesArgs<ExtArgs>
    _count?: boolean | CelebCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["celeb"]>

  export type CelebSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    name?: boolean
    description?: boolean
    avatar?: boolean
  }

  export type CelebInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    issues?: boolean | Celeb$issuesArgs<ExtArgs>
    _count?: boolean | CelebCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $CelebPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Celeb"
    objects: {
      issues: Prisma.$IssuePayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      name: string
      description: string | null
      avatar: string | null
    }, ExtArgs["result"]["celeb"]>
    composites: {}
  }


  type CelebGetPayload<S extends boolean | null | undefined | CelebDefaultArgs> = $Result.GetResult<Prisma.$CelebPayload, S>

  type CelebCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<CelebFindManyArgs, 'select' | 'include'> & {
      select?: CelebCountAggregateInputType | true
    }

  export interface CelebDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Celeb'], meta: { name: 'Celeb' } }
    /**
     * Find zero or one Celeb that matches the filter.
     * @param {CelebFindUniqueArgs} args - Arguments to find a Celeb
     * @example
     * // Get one Celeb
     * const celeb = await prisma.celeb.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends CelebFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, CelebFindUniqueArgs<ExtArgs>>
    ): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Celeb that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {CelebFindUniqueOrThrowArgs} args - Arguments to find a Celeb
     * @example
     * // Get one Celeb
     * const celeb = await prisma.celeb.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends CelebFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CelebFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Celeb that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebFindFirstArgs} args - Arguments to find a Celeb
     * @example
     * // Get one Celeb
     * const celeb = await prisma.celeb.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends CelebFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, CelebFindFirstArgs<ExtArgs>>
    ): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Celeb that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebFindFirstOrThrowArgs} args - Arguments to find a Celeb
     * @example
     * // Get one Celeb
     * const celeb = await prisma.celeb.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends CelebFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, CelebFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Celebs that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Celebs
     * const celebs = await prisma.celeb.findMany()
     * 
     * // Get first 10 Celebs
     * const celebs = await prisma.celeb.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const celebWithIdOnly = await prisma.celeb.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends CelebFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CelebFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Celeb.
     * @param {CelebCreateArgs} args - Arguments to create a Celeb.
     * @example
     * // Create one Celeb
     * const Celeb = await prisma.celeb.create({
     *   data: {
     *     // ... data to create a Celeb
     *   }
     * })
     * 
    **/
    create<T extends CelebCreateArgs<ExtArgs>>(
      args: SelectSubset<T, CelebCreateArgs<ExtArgs>>
    ): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Celebs.
     *     @param {CelebCreateManyArgs} args - Arguments to create many Celebs.
     *     @example
     *     // Create many Celebs
     *     const celeb = await prisma.celeb.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends CelebCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CelebCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Celeb.
     * @param {CelebDeleteArgs} args - Arguments to delete one Celeb.
     * @example
     * // Delete one Celeb
     * const Celeb = await prisma.celeb.delete({
     *   where: {
     *     // ... filter to delete one Celeb
     *   }
     * })
     * 
    **/
    delete<T extends CelebDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, CelebDeleteArgs<ExtArgs>>
    ): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Celeb.
     * @param {CelebUpdateArgs} args - Arguments to update one Celeb.
     * @example
     * // Update one Celeb
     * const celeb = await prisma.celeb.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends CelebUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, CelebUpdateArgs<ExtArgs>>
    ): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Celebs.
     * @param {CelebDeleteManyArgs} args - Arguments to filter Celebs to delete.
     * @example
     * // Delete a few Celebs
     * const { count } = await prisma.celeb.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends CelebDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, CelebDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Celebs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Celebs
     * const celeb = await prisma.celeb.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends CelebUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, CelebUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Celeb.
     * @param {CelebUpsertArgs} args - Arguments to update or create a Celeb.
     * @example
     * // Update or create a Celeb
     * const celeb = await prisma.celeb.upsert({
     *   create: {
     *     // ... data to create a Celeb
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Celeb we want to update
     *   }
     * })
    **/
    upsert<T extends CelebUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, CelebUpsertArgs<ExtArgs>>
    ): Prisma__CelebClient<$Result.GetResult<Prisma.$CelebPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Celebs.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebCountArgs} args - Arguments to filter Celebs to count.
     * @example
     * // Count the number of Celebs
     * const count = await prisma.celeb.count({
     *   where: {
     *     // ... the filter for the Celebs we want to count
     *   }
     * })
    **/
    count<T extends CelebCountArgs>(
      args?: Subset<T, CelebCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], CelebCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Celeb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends CelebAggregateArgs>(args: Subset<T, CelebAggregateArgs>): Prisma.PrismaPromise<GetCelebAggregateType<T>>

    /**
     * Group by Celeb.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {CelebGroupByArgs} args - Group by arguments.
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
      T extends CelebGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: CelebGroupByArgs['orderBy'] }
        : { orderBy?: CelebGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, CelebGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetCelebGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Celeb model
   */
  readonly fields: CelebFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Celeb.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__CelebClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    issues<T extends Celeb$issuesArgs<ExtArgs> = {}>(args?: Subset<T, Celeb$issuesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Celeb model
   */ 
  interface CelebFieldRefs {
    readonly id: FieldRef<"Celeb", 'Int'>
    readonly createdAt: FieldRef<"Celeb", 'DateTime'>
    readonly updatedAt: FieldRef<"Celeb", 'DateTime'>
    readonly name: FieldRef<"Celeb", 'String'>
    readonly description: FieldRef<"Celeb", 'String'>
    readonly avatar: FieldRef<"Celeb", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Celeb findUnique
   */
  export type CelebFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celeb to fetch.
     */
    where: CelebWhereUniqueInput
  }


  /**
   * Celeb findUniqueOrThrow
   */
  export type CelebFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celeb to fetch.
     */
    where: CelebWhereUniqueInput
  }


  /**
   * Celeb findFirst
   */
  export type CelebFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celeb to fetch.
     */
    where?: CelebWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebs to fetch.
     */
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Celebs.
     */
    cursor?: CelebWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Celebs.
     */
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }


  /**
   * Celeb findFirstOrThrow
   */
  export type CelebFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celeb to fetch.
     */
    where?: CelebWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebs to fetch.
     */
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Celebs.
     */
    cursor?: CelebWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebs.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Celebs.
     */
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }


  /**
   * Celeb findMany
   */
  export type CelebFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter, which Celebs to fetch.
     */
    where?: CelebWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Celebs to fetch.
     */
    orderBy?: CelebOrderByWithRelationInput | CelebOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Celebs.
     */
    cursor?: CelebWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Celebs from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Celebs.
     */
    skip?: number
    distinct?: CelebScalarFieldEnum | CelebScalarFieldEnum[]
  }


  /**
   * Celeb create
   */
  export type CelebCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * The data needed to create a Celeb.
     */
    data: XOR<CelebCreateInput, CelebUncheckedCreateInput>
  }


  /**
   * Celeb createMany
   */
  export type CelebCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Celebs.
     */
    data: CelebCreateManyInput | CelebCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Celeb update
   */
  export type CelebUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * The data needed to update a Celeb.
     */
    data: XOR<CelebUpdateInput, CelebUncheckedUpdateInput>
    /**
     * Choose, which Celeb to update.
     */
    where: CelebWhereUniqueInput
  }


  /**
   * Celeb updateMany
   */
  export type CelebUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Celebs.
     */
    data: XOR<CelebUpdateManyMutationInput, CelebUncheckedUpdateManyInput>
    /**
     * Filter which Celebs to update
     */
    where?: CelebWhereInput
  }


  /**
   * Celeb upsert
   */
  export type CelebUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * The filter to search for the Celeb to update in case it exists.
     */
    where: CelebWhereUniqueInput
    /**
     * In case the Celeb found by the `where` argument doesn't exist, create a new Celeb with this data.
     */
    create: XOR<CelebCreateInput, CelebUncheckedCreateInput>
    /**
     * In case the Celeb was found with the provided `where` argument, update it with this data.
     */
    update: XOR<CelebUpdateInput, CelebUncheckedUpdateInput>
  }


  /**
   * Celeb delete
   */
  export type CelebDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
    /**
     * Filter which Celeb to delete.
     */
    where: CelebWhereUniqueInput
  }


  /**
   * Celeb deleteMany
   */
  export type CelebDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Celebs to delete
     */
    where?: CelebWhereInput
  }


  /**
   * Celeb.issues
   */
  export type Celeb$issuesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Issue
     */
    select?: IssueSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueInclude<ExtArgs> | null
    where?: IssueWhereInput
    orderBy?: IssueOrderByWithRelationInput | IssueOrderByWithRelationInput[]
    cursor?: IssueWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueScalarFieldEnum | IssueScalarFieldEnum[]
  }


  /**
   * Celeb without action
   */
  export type CelebDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Celeb
     */
    select?: CelebSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: CelebInclude<ExtArgs> | null
  }



  /**
   * Model Account
   */

  export type AggregateAccount = {
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  export type AccountAvgAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountSumAggregateOutputType = {
    expires_at: number | null
    refresh_token_expires_in: number | null
  }

  export type AccountMinAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    scope: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    refresh_token_expires_in: number | null
    token_type: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    type: string | null
    scope: string | null
    provider: string | null
    providerAccountId: string | null
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    refresh_token_expires_in: number | null
    token_type: string | null
    id_token: string | null
    session_state: string | null
  }

  export type AccountCountAggregateOutputType = {
    id: number
    userId: number
    type: number
    scope: number
    provider: number
    providerAccountId: number
    refresh_token: number
    access_token: number
    expires_at: number
    refresh_token_expires_in: number
    token_type: number
    id_token: number
    session_state: number
    _all: number
  }


  export type AccountAvgAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountSumAggregateInputType = {
    expires_at?: true
    refresh_token_expires_in?: true
  }

  export type AccountMinAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    scope?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    refresh_token_expires_in?: true
    token_type?: true
    id_token?: true
    session_state?: true
  }

  export type AccountMaxAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    scope?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    refresh_token_expires_in?: true
    token_type?: true
    id_token?: true
    session_state?: true
  }

  export type AccountCountAggregateInputType = {
    id?: true
    userId?: true
    type?: true
    scope?: true
    provider?: true
    providerAccountId?: true
    refresh_token?: true
    access_token?: true
    expires_at?: true
    refresh_token_expires_in?: true
    token_type?: true
    id_token?: true
    session_state?: true
    _all?: true
  }

  export type AccountAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Account to aggregate.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Accounts
    **/
    _count?: true | AccountCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: AccountAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: AccountSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: AccountMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: AccountMaxAggregateInputType
  }

  export type GetAccountAggregateType<T extends AccountAggregateArgs> = {
        [P in keyof T & keyof AggregateAccount]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateAccount[P]>
      : GetScalarType<T[P], AggregateAccount[P]>
  }




  export type AccountGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithAggregationInput | AccountOrderByWithAggregationInput[]
    by: AccountScalarFieldEnum[] | AccountScalarFieldEnum
    having?: AccountScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: AccountCountAggregateInputType | true
    _avg?: AccountAvgAggregateInputType
    _sum?: AccountSumAggregateInputType
    _min?: AccountMinAggregateInputType
    _max?: AccountMaxAggregateInputType
  }

  export type AccountGroupByOutputType = {
    id: string
    userId: string
    type: string
    scope: string
    provider: string
    providerAccountId: string
    refresh_token: string | null
    access_token: string | null
    expires_at: number | null
    refresh_token_expires_in: number | null
    token_type: string | null
    id_token: string | null
    session_state: string | null
    _count: AccountCountAggregateOutputType | null
    _avg: AccountAvgAggregateOutputType | null
    _sum: AccountSumAggregateOutputType | null
    _min: AccountMinAggregateOutputType | null
    _max: AccountMaxAggregateOutputType | null
  }

  type GetAccountGroupByPayload<T extends AccountGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<AccountGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof AccountGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], AccountGroupByOutputType[P]>
            : GetScalarType<T[P], AccountGroupByOutputType[P]>
        }
      >
    >


  export type AccountSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    type?: boolean
    scope?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    refresh_token_expires_in?: boolean
    token_type?: boolean
    id_token?: boolean
    session_state?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["account"]>

  export type AccountSelectScalar = {
    id?: boolean
    userId?: boolean
    type?: boolean
    scope?: boolean
    provider?: boolean
    providerAccountId?: boolean
    refresh_token?: boolean
    access_token?: boolean
    expires_at?: boolean
    refresh_token_expires_in?: boolean
    token_type?: boolean
    id_token?: boolean
    session_state?: boolean
  }

  export type AccountInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $AccountPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Account"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      userId: string
      type: string
      scope: string
      provider: string
      providerAccountId: string
      refresh_token: string | null
      access_token: string | null
      expires_at: number | null
      refresh_token_expires_in: number | null
      token_type: string | null
      id_token: string | null
      session_state: string | null
    }, ExtArgs["result"]["account"]>
    composites: {}
  }


  type AccountGetPayload<S extends boolean | null | undefined | AccountDefaultArgs> = $Result.GetResult<Prisma.$AccountPayload, S>

  type AccountCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<AccountFindManyArgs, 'select' | 'include'> & {
      select?: AccountCountAggregateInputType | true
    }

  export interface AccountDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Account'], meta: { name: 'Account' } }
    /**
     * Find zero or one Account that matches the filter.
     * @param {AccountFindUniqueArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends AccountFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, AccountFindUniqueArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Account that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {AccountFindUniqueOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends AccountFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Account that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends AccountFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Account that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindFirstOrThrowArgs} args - Arguments to find a Account
     * @example
     * // Get one Account
     * const account = await prisma.account.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends AccountFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Accounts that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Accounts
     * const accounts = await prisma.account.findMany()
     * 
     * // Get first 10 Accounts
     * const accounts = await prisma.account.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const accountWithIdOnly = await prisma.account.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends AccountFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Account.
     * @param {AccountCreateArgs} args - Arguments to create a Account.
     * @example
     * // Create one Account
     * const Account = await prisma.account.create({
     *   data: {
     *     // ... data to create a Account
     *   }
     * })
     * 
    **/
    create<T extends AccountCreateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountCreateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Accounts.
     *     @param {AccountCreateManyArgs} args - Arguments to create many Accounts.
     *     @example
     *     // Create many Accounts
     *     const account = await prisma.account.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends AccountCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Account.
     * @param {AccountDeleteArgs} args - Arguments to delete one Account.
     * @example
     * // Delete one Account
     * const Account = await prisma.account.delete({
     *   where: {
     *     // ... filter to delete one Account
     *   }
     * })
     * 
    **/
    delete<T extends AccountDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, AccountDeleteArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Account.
     * @param {AccountUpdateArgs} args - Arguments to update one Account.
     * @example
     * // Update one Account
     * const account = await prisma.account.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends AccountUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Accounts.
     * @param {AccountDeleteManyArgs} args - Arguments to filter Accounts to delete.
     * @example
     * // Delete a few Accounts
     * const { count } = await prisma.account.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends AccountDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, AccountDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Accounts
     * const account = await prisma.account.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends AccountUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Account.
     * @param {AccountUpsertArgs} args - Arguments to update or create a Account.
     * @example
     * // Update or create a Account
     * const account = await prisma.account.upsert({
     *   create: {
     *     // ... data to create a Account
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Account we want to update
     *   }
     * })
    **/
    upsert<T extends AccountUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, AccountUpsertArgs<ExtArgs>>
    ): Prisma__AccountClient<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Accounts.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountCountArgs} args - Arguments to filter Accounts to count.
     * @example
     * // Count the number of Accounts
     * const count = await prisma.account.count({
     *   where: {
     *     // ... the filter for the Accounts we want to count
     *   }
     * })
    **/
    count<T extends AccountCountArgs>(
      args?: Subset<T, AccountCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], AccountCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends AccountAggregateArgs>(args: Subset<T, AccountAggregateArgs>): Prisma.PrismaPromise<GetAccountAggregateType<T>>

    /**
     * Group by Account.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {AccountGroupByArgs} args - Group by arguments.
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
      T extends AccountGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: AccountGroupByArgs['orderBy'] }
        : { orderBy?: AccountGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, AccountGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetAccountGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Account model
   */
  readonly fields: AccountFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Account.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__AccountClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Account model
   */ 
  interface AccountFieldRefs {
    readonly id: FieldRef<"Account", 'String'>
    readonly userId: FieldRef<"Account", 'String'>
    readonly type: FieldRef<"Account", 'String'>
    readonly scope: FieldRef<"Account", 'String'>
    readonly provider: FieldRef<"Account", 'String'>
    readonly providerAccountId: FieldRef<"Account", 'String'>
    readonly refresh_token: FieldRef<"Account", 'String'>
    readonly access_token: FieldRef<"Account", 'String'>
    readonly expires_at: FieldRef<"Account", 'Int'>
    readonly refresh_token_expires_in: FieldRef<"Account", 'Int'>
    readonly token_type: FieldRef<"Account", 'String'>
    readonly id_token: FieldRef<"Account", 'String'>
    readonly session_state: FieldRef<"Account", 'String'>
  }
    

  // Custom InputTypes

  /**
   * Account findUnique
   */
  export type AccountFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findUniqueOrThrow
   */
  export type AccountFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account findFirst
   */
  export type AccountFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findFirstOrThrow
   */
  export type AccountFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Account to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Accounts.
     */
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account findMany
   */
  export type AccountFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter, which Accounts to fetch.
     */
    where?: AccountWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Accounts to fetch.
     */
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Accounts.
     */
    cursor?: AccountWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Accounts from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Accounts.
     */
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * Account create
   */
  export type AccountCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to create a Account.
     */
    data: XOR<AccountCreateInput, AccountUncheckedCreateInput>
  }


  /**
   * Account createMany
   */
  export type AccountCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Accounts.
     */
    data: AccountCreateManyInput | AccountCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Account update
   */
  export type AccountUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The data needed to update a Account.
     */
    data: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
    /**
     * Choose, which Account to update.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account updateMany
   */
  export type AccountUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Accounts.
     */
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyInput>
    /**
     * Filter which Accounts to update
     */
    where?: AccountWhereInput
  }


  /**
   * Account upsert
   */
  export type AccountUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * The filter to search for the Account to update in case it exists.
     */
    where: AccountWhereUniqueInput
    /**
     * In case the Account found by the `where` argument doesn't exist, create a new Account with this data.
     */
    create: XOR<AccountCreateInput, AccountUncheckedCreateInput>
    /**
     * In case the Account was found with the provided `where` argument, update it with this data.
     */
    update: XOR<AccountUpdateInput, AccountUncheckedUpdateInput>
  }


  /**
   * Account delete
   */
  export type AccountDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    /**
     * Filter which Account to delete.
     */
    where: AccountWhereUniqueInput
  }


  /**
   * Account deleteMany
   */
  export type AccountDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Accounts to delete
     */
    where?: AccountWhereInput
  }


  /**
   * Account without action
   */
  export type AccountDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
  }



  /**
   * Model Session
   */

  export type AggregateSession = {
    _count: SessionCountAggregateOutputType | null
    _min: SessionMinAggregateOutputType | null
    _max: SessionMaxAggregateOutputType | null
  }

  export type SessionMinAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionMaxAggregateOutputType = {
    id: string | null
    sessionToken: string | null
    userId: string | null
    expires: Date | null
  }

  export type SessionCountAggregateOutputType = {
    id: number
    sessionToken: number
    userId: number
    expires: number
    _all: number
  }


  export type SessionMinAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionMaxAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
  }

  export type SessionCountAggregateInputType = {
    id?: true
    sessionToken?: true
    userId?: true
    expires?: true
    _all?: true
  }

  export type SessionAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
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




  export type SessionGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: SessionWhereInput
    orderBy?: SessionOrderByWithAggregationInput | SessionOrderByWithAggregationInput[]
    by: SessionScalarFieldEnum[] | SessionScalarFieldEnum
    having?: SessionScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: SessionCountAggregateInputType | true
    _min?: SessionMinAggregateInputType
    _max?: SessionMaxAggregateInputType
  }

  export type SessionGroupByOutputType = {
    id: string
    sessionToken: string
    userId: string
    expires: Date
    _count: SessionCountAggregateOutputType | null
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


  export type SessionSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["session"]>

  export type SessionSelectScalar = {
    id?: boolean
    sessionToken?: boolean
    userId?: boolean
    expires?: boolean
  }

  export type SessionInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $SessionPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Session"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: string
      sessionToken: string
      userId: string
      expires: Date
    }, ExtArgs["result"]["session"]>
    composites: {}
  }


  type SessionGetPayload<S extends boolean | null | undefined | SessionDefaultArgs> = $Result.GetResult<Prisma.$SessionPayload, S>

  type SessionCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<SessionFindManyArgs, 'select' | 'include'> & {
      select?: SessionCountAggregateInputType | true
    }

  export interface SessionDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
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
    **/
    findUnique<T extends SessionFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, SessionFindUniqueArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Session that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {SessionFindUniqueOrThrowArgs} args - Arguments to find a Session
     * @example
     * // Get one Session
     * const session = await prisma.session.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends SessionFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

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
    **/
    findFirst<T extends SessionFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

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
    **/
    findFirstOrThrow<T extends SessionFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Sessions that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {SessionFindManyArgs=} args - Arguments to filter and select certain fields only.
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
    **/
    findMany<T extends SessionFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'>>

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
    **/
    create<T extends SessionCreateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionCreateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Sessions.
     *     @param {SessionCreateManyArgs} args - Arguments to create many Sessions.
     *     @example
     *     // Create many Sessions
     *     const session = await prisma.session.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends SessionCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    delete<T extends SessionDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, SessionDeleteArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

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
    **/
    update<T extends SessionUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

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
    **/
    deleteMany<T extends SessionDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, SessionDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    updateMany<T extends SessionUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

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
    **/
    upsert<T extends SessionUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, SessionUpsertArgs<ExtArgs>>
    ): Prisma__SessionClient<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

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
  export interface Prisma__SessionClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Session model
   */ 
  interface SessionFieldRefs {
    readonly id: FieldRef<"Session", 'String'>
    readonly sessionToken: FieldRef<"Session", 'String'>
    readonly userId: FieldRef<"Session", 'String'>
    readonly expires: FieldRef<"Session", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * Session findUnique
   */
  export type SessionFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Sessions.
     */
    data: SessionCreateManyInput | SessionCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Session update
   */
  export type SessionUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Sessions.
     */
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyInput>
    /**
     * Filter which Sessions to update
     */
    where?: SessionWhereInput
  }


  /**
   * Session upsert
   */
  export type SessionUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
  export type SessionDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Sessions to delete
     */
    where?: SessionWhereInput
  }


  /**
   * Session without action
   */
  export type SessionDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: SessionInclude<ExtArgs> | null
  }



  /**
   * Model User
   */

  export type AggregateUser = {
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  export type UserMinAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    isAdmin: boolean | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    isAdmin: boolean | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    emailVerified: number
    image: number
    isAdmin: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    isAdmin?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    isAdmin?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    emailVerified?: true
    image?: true
    isAdmin?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which User to aggregate.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Users
    **/
    _count?: true | UserCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: UserMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: UserMaxAggregateInputType
  }

  export type GetUserAggregateType<T extends UserAggregateArgs> = {
        [P in keyof T & keyof AggregateUser]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateUser[P]>
      : GetScalarType<T[P], AggregateUser[P]>
  }




  export type UserGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
    orderBy?: UserOrderByWithAggregationInput | UserOrderByWithAggregationInput[]
    by: UserScalarFieldEnum[] | UserScalarFieldEnum
    having?: UserScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: UserCountAggregateInputType | true
    _min?: UserMinAggregateInputType
    _max?: UserMaxAggregateInputType
  }

  export type UserGroupByOutputType = {
    id: string
    name: string | null
    email: string | null
    emailVerified: Date | null
    image: string | null
    isAdmin: boolean
    _count: UserCountAggregateOutputType | null
    _min: UserMinAggregateOutputType | null
    _max: UserMaxAggregateOutputType | null
  }

  type GetUserGroupByPayload<T extends UserGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<UserGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof UserGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], UserGroupByOutputType[P]>
            : GetScalarType<T[P], UserGroupByOutputType[P]>
        }
      >
    >


  export type UserSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    isAdmin?: boolean
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    messageLikes?: boolean | User$messageLikesArgs<ExtArgs>
    replys?: boolean | User$replysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    emailVerified?: boolean
    image?: boolean
    isAdmin?: boolean
  }

  export type UserInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    accounts?: boolean | User$accountsArgs<ExtArgs>
    sessions?: boolean | User$sessionsArgs<ExtArgs>
    ratings?: boolean | User$ratingsArgs<ExtArgs>
    messageLikes?: boolean | User$messageLikesArgs<ExtArgs>
    replys?: boolean | User$replysArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }


  export type $UserPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      accounts: Prisma.$AccountPayload<ExtArgs>[]
      sessions: Prisma.$SessionPayload<ExtArgs>[]
      ratings: Prisma.$RatingPayload<ExtArgs>[]
      messageLikes: Prisma.$MessageLikePayload<ExtArgs>[]
      replys: Prisma.$IssueReplyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetResult<{
      id: string
      name: string | null
      email: string | null
      emailVerified: Date | null
      image: string | null
      isAdmin: boolean
    }, ExtArgs["result"]["user"]>
    composites: {}
  }


  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<UserFindManyArgs, 'select' | 'include'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['User'], meta: { name: 'User' } }
    /**
     * Find zero or one User that matches the filter.
     * @param {UserFindUniqueArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends UserFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one User that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first User that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends UserFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first User that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindFirstOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Users
     * const users = await prisma.user.findMany()
     * 
     * // Get first 10 Users
     * const users = await prisma.user.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const userWithIdOnly = await prisma.user.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends UserFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a User.
     * @param {UserCreateArgs} args - Arguments to create a User.
     * @example
     * // Create one User
     * const User = await prisma.user.create({
     *   data: {
     *     // ... data to create a User
     *   }
     * })
     * 
    **/
    create<T extends UserCreateArgs<ExtArgs>>(
      args: SelectSubset<T, UserCreateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Users.
     *     @param {UserCreateManyArgs} args - Arguments to create many Users.
     *     @example
     *     // Create many Users
     *     const user = await prisma.user.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends UserCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a User.
     * @param {UserDeleteArgs} args - Arguments to delete one User.
     * @example
     * // Delete one User
     * const User = await prisma.user.delete({
     *   where: {
     *     // ... filter to delete one User
     *   }
     * })
     * 
    **/
    delete<T extends UserDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, UserDeleteArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one User.
     * @param {UserUpdateArgs} args - Arguments to update one User.
     * @example
     * // Update one User
     * const user = await prisma.user.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends UserUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Users.
     * @param {UserDeleteManyArgs} args - Arguments to filter Users to delete.
     * @example
     * // Delete a few Users
     * const { count } = await prisma.user.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends UserDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends UserUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one User.
     * @param {UserUpsertArgs} args - Arguments to update or create a User.
     * @example
     * // Update or create a User
     * const user = await prisma.user.upsert({
     *   create: {
     *     // ... data to create a User
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the User we want to update
     *   }
     * })
    **/
    upsert<T extends UserUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, UserUpsertArgs<ExtArgs>>
    ): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Users.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserCountArgs} args - Arguments to filter Users to count.
     * @example
     * // Count the number of Users
     * const count = await prisma.user.count({
     *   where: {
     *     // ... the filter for the Users we want to count
     *   }
     * })
    **/
    count<T extends UserCountArgs>(
      args?: Subset<T, UserCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], UserCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends UserAggregateArgs>(args: Subset<T, UserAggregateArgs>): Prisma.PrismaPromise<GetUserAggregateType<T>>

    /**
     * Group by User.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserGroupByArgs} args - Group by arguments.
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
      T extends UserGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: UserGroupByArgs['orderBy'] }
        : { orderBy?: UserGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, UserGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetUserGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the User model
   */
  readonly fields: UserFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for User.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    accounts<T extends User$accountsArgs<ExtArgs> = {}>(args?: Subset<T, User$accountsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$AccountPayload<ExtArgs>, T, 'findMany'> | Null>;

    sessions<T extends User$sessionsArgs<ExtArgs> = {}>(args?: Subset<T, User$sessionsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$SessionPayload<ExtArgs>, T, 'findMany'> | Null>;

    ratings<T extends User$ratingsArgs<ExtArgs> = {}>(args?: Subset<T, User$ratingsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'findMany'> | Null>;

    messageLikes<T extends User$messageLikesArgs<ExtArgs> = {}>(args?: Subset<T, User$messageLikesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'findMany'> | Null>;

    replys<T extends User$replysArgs<ExtArgs> = {}>(args?: Subset<T, User$replysArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'findMany'> | Null>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the User model
   */ 
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly emailVerified: FieldRef<"User", 'DateTime'>
    readonly image: FieldRef<"User", 'String'>
    readonly isAdmin: FieldRef<"User", 'Boolean'>
  }
    

  // Custom InputTypes

  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findUniqueOrThrow
   */
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User findFirst
   */
  export type UserFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findFirstOrThrow
   */
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which User to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Users.
     */
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User findMany
   */
  export type UserFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter, which Users to fetch.
     */
    where?: UserWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Users to fetch.
     */
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Users.
     */
    cursor?: UserWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Users from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Users.
     */
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }


  /**
   * User create
   */
  export type UserCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data?: XOR<UserCreateInput, UserUncheckedCreateInput>
  }


  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to update a User.
     */
    data: XOR<UserUpdateInput, UserUncheckedUpdateInput>
    /**
     * Choose, which User to update.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User updateMany
   */
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
  }


  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The filter to search for the User to update in case it exists.
     */
    where: UserWhereUniqueInput
    /**
     * In case the User found by the `where` argument doesn't exist, create a new User with this data.
     */
    create: XOR<UserCreateInput, UserUncheckedCreateInput>
    /**
     * In case the User was found with the provided `where` argument, update it with this data.
     */
    update: XOR<UserUpdateInput, UserUncheckedUpdateInput>
  }


  /**
   * User delete
   */
  export type UserDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * Filter which User to delete.
     */
    where: UserWhereUniqueInput
  }


  /**
   * User deleteMany
   */
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
  }


  /**
   * User.accounts
   */
  export type User$accountsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Account
     */
    select?: AccountSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: AccountInclude<ExtArgs> | null
    where?: AccountWhereInput
    orderBy?: AccountOrderByWithRelationInput | AccountOrderByWithRelationInput[]
    cursor?: AccountWhereUniqueInput
    take?: number
    skip?: number
    distinct?: AccountScalarFieldEnum | AccountScalarFieldEnum[]
  }


  /**
   * User.sessions
   */
  export type User$sessionsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Session
     */
    select?: SessionSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
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
   * User.ratings
   */
  export type User$ratingsArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    cursor?: RatingWhereUniqueInput
    take?: number
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }


  /**
   * User.messageLikes
   */
  export type User$messageLikesArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    where?: MessageLikeWhereInput
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    cursor?: MessageLikeWhereUniqueInput
    take?: number
    skip?: number
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }


  /**
   * User.replys
   */
  export type User$replysArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    where?: IssueReplyWhereInput
    orderBy?: IssueReplyOrderByWithRelationInput | IssueReplyOrderByWithRelationInput[]
    cursor?: IssueReplyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: IssueReplyScalarFieldEnum | IssueReplyScalarFieldEnum[]
  }


  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: UserInclude<ExtArgs> | null
  }



  /**
   * Model VerificationToken
   */

  export type AggregateVerificationToken = {
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  export type VerificationTokenMinAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenMaxAggregateOutputType = {
    identifier: string | null
    token: string | null
    expires: Date | null
  }

  export type VerificationTokenCountAggregateOutputType = {
    identifier: number
    token: number
    expires: number
    _all: number
  }


  export type VerificationTokenMinAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenMaxAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
  }

  export type VerificationTokenCountAggregateInputType = {
    identifier?: true
    token?: true
    expires?: true
    _all?: true
  }

  export type VerificationTokenAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationToken to aggregate.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned VerificationTokens
    **/
    _count?: true | VerificationTokenCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: VerificationTokenMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type GetVerificationTokenAggregateType<T extends VerificationTokenAggregateArgs> = {
        [P in keyof T & keyof AggregateVerificationToken]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateVerificationToken[P]>
      : GetScalarType<T[P], AggregateVerificationToken[P]>
  }




  export type VerificationTokenGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: VerificationTokenWhereInput
    orderBy?: VerificationTokenOrderByWithAggregationInput | VerificationTokenOrderByWithAggregationInput[]
    by: VerificationTokenScalarFieldEnum[] | VerificationTokenScalarFieldEnum
    having?: VerificationTokenScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: VerificationTokenCountAggregateInputType | true
    _min?: VerificationTokenMinAggregateInputType
    _max?: VerificationTokenMaxAggregateInputType
  }

  export type VerificationTokenGroupByOutputType = {
    identifier: string
    token: string
    expires: Date
    _count: VerificationTokenCountAggregateOutputType | null
    _min: VerificationTokenMinAggregateOutputType | null
    _max: VerificationTokenMaxAggregateOutputType | null
  }

  type GetVerificationTokenGroupByPayload<T extends VerificationTokenGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<VerificationTokenGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof VerificationTokenGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
            : GetScalarType<T[P], VerificationTokenGroupByOutputType[P]>
        }
      >
    >


  export type VerificationTokenSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }, ExtArgs["result"]["verificationToken"]>

  export type VerificationTokenSelectScalar = {
    identifier?: boolean
    token?: boolean
    expires?: boolean
  }


  export type $VerificationTokenPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "VerificationToken"
    objects: {}
    scalars: $Extensions.GetResult<{
      identifier: string
      token: string
      expires: Date
    }, ExtArgs["result"]["verificationToken"]>
    composites: {}
  }


  type VerificationTokenGetPayload<S extends boolean | null | undefined | VerificationTokenDefaultArgs> = $Result.GetResult<Prisma.$VerificationTokenPayload, S>

  type VerificationTokenCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<VerificationTokenFindManyArgs, 'select' | 'include'> & {
      select?: VerificationTokenCountAggregateInputType | true
    }

  export interface VerificationTokenDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['VerificationToken'], meta: { name: 'VerificationToken' } }
    /**
     * Find zero or one VerificationToken that matches the filter.
     * @param {VerificationTokenFindUniqueArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends VerificationTokenFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenFindUniqueArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one VerificationToken that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {VerificationTokenFindUniqueOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends VerificationTokenFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first VerificationToken that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindFirstOrThrowArgs} args - Arguments to find a VerificationToken
     * @example
     * // Get one VerificationToken
     * const verificationToken = await prisma.verificationToken.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends VerificationTokenFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more VerificationTokens that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany()
     * 
     * // Get first 10 VerificationTokens
     * const verificationTokens = await prisma.verificationToken.findMany({ take: 10 })
     * 
     * // Only select the `identifier`
     * const verificationTokenWithIdentifierOnly = await prisma.verificationToken.findMany({ select: { identifier: true } })
     * 
    **/
    findMany<T extends VerificationTokenFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a VerificationToken.
     * @param {VerificationTokenCreateArgs} args - Arguments to create a VerificationToken.
     * @example
     * // Create one VerificationToken
     * const VerificationToken = await prisma.verificationToken.create({
     *   data: {
     *     // ... data to create a VerificationToken
     *   }
     * })
     * 
    **/
    create<T extends VerificationTokenCreateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenCreateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many VerificationTokens.
     *     @param {VerificationTokenCreateManyArgs} args - Arguments to create many VerificationTokens.
     *     @example
     *     // Create many VerificationTokens
     *     const verificationToken = await prisma.verificationToken.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends VerificationTokenCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a VerificationToken.
     * @param {VerificationTokenDeleteArgs} args - Arguments to delete one VerificationToken.
     * @example
     * // Delete one VerificationToken
     * const VerificationToken = await prisma.verificationToken.delete({
     *   where: {
     *     // ... filter to delete one VerificationToken
     *   }
     * })
     * 
    **/
    delete<T extends VerificationTokenDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenDeleteArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one VerificationToken.
     * @param {VerificationTokenUpdateArgs} args - Arguments to update one VerificationToken.
     * @example
     * // Update one VerificationToken
     * const verificationToken = await prisma.verificationToken.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends VerificationTokenUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more VerificationTokens.
     * @param {VerificationTokenDeleteManyArgs} args - Arguments to filter VerificationTokens to delete.
     * @example
     * // Delete a few VerificationTokens
     * const { count } = await prisma.verificationToken.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends VerificationTokenDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, VerificationTokenDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many VerificationTokens
     * const verificationToken = await prisma.verificationToken.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends VerificationTokenUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one VerificationToken.
     * @param {VerificationTokenUpsertArgs} args - Arguments to update or create a VerificationToken.
     * @example
     * // Update or create a VerificationToken
     * const verificationToken = await prisma.verificationToken.upsert({
     *   create: {
     *     // ... data to create a VerificationToken
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the VerificationToken we want to update
     *   }
     * })
    **/
    upsert<T extends VerificationTokenUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, VerificationTokenUpsertArgs<ExtArgs>>
    ): Prisma__VerificationTokenClient<$Result.GetResult<Prisma.$VerificationTokenPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of VerificationTokens.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenCountArgs} args - Arguments to filter VerificationTokens to count.
     * @example
     * // Count the number of VerificationTokens
     * const count = await prisma.verificationToken.count({
     *   where: {
     *     // ... the filter for the VerificationTokens we want to count
     *   }
     * })
    **/
    count<T extends VerificationTokenCountArgs>(
      args?: Subset<T, VerificationTokenCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], VerificationTokenCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends VerificationTokenAggregateArgs>(args: Subset<T, VerificationTokenAggregateArgs>): Prisma.PrismaPromise<GetVerificationTokenAggregateType<T>>

    /**
     * Group by VerificationToken.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {VerificationTokenGroupByArgs} args - Group by arguments.
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
      T extends VerificationTokenGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: VerificationTokenGroupByArgs['orderBy'] }
        : { orderBy?: VerificationTokenGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, VerificationTokenGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetVerificationTokenGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the VerificationToken model
   */
  readonly fields: VerificationTokenFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for VerificationToken.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__VerificationTokenClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';


    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the VerificationToken model
   */ 
  interface VerificationTokenFieldRefs {
    readonly identifier: FieldRef<"VerificationToken", 'String'>
    readonly token: FieldRef<"VerificationToken", 'String'>
    readonly expires: FieldRef<"VerificationToken", 'DateTime'>
  }
    

  // Custom InputTypes

  /**
   * VerificationToken findUnique
   */
  export type VerificationTokenFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findUniqueOrThrow
   */
  export type VerificationTokenFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken findFirst
   */
  export type VerificationTokenFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findFirstOrThrow
   */
  export type VerificationTokenFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationToken to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of VerificationTokens.
     */
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken findMany
   */
  export type VerificationTokenFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter, which VerificationTokens to fetch.
     */
    where?: VerificationTokenWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of VerificationTokens to fetch.
     */
    orderBy?: VerificationTokenOrderByWithRelationInput | VerificationTokenOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing VerificationTokens.
     */
    cursor?: VerificationTokenWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` VerificationTokens from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` VerificationTokens.
     */
    skip?: number
    distinct?: VerificationTokenScalarFieldEnum | VerificationTokenScalarFieldEnum[]
  }


  /**
   * VerificationToken create
   */
  export type VerificationTokenCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to create a VerificationToken.
     */
    data: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
  }


  /**
   * VerificationToken createMany
   */
  export type VerificationTokenCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many VerificationTokens.
     */
    data: VerificationTokenCreateManyInput | VerificationTokenCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * VerificationToken update
   */
  export type VerificationTokenUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The data needed to update a VerificationToken.
     */
    data: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
    /**
     * Choose, which VerificationToken to update.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken updateMany
   */
  export type VerificationTokenUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update VerificationTokens.
     */
    data: XOR<VerificationTokenUpdateManyMutationInput, VerificationTokenUncheckedUpdateManyInput>
    /**
     * Filter which VerificationTokens to update
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken upsert
   */
  export type VerificationTokenUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * The filter to search for the VerificationToken to update in case it exists.
     */
    where: VerificationTokenWhereUniqueInput
    /**
     * In case the VerificationToken found by the `where` argument doesn't exist, create a new VerificationToken with this data.
     */
    create: XOR<VerificationTokenCreateInput, VerificationTokenUncheckedCreateInput>
    /**
     * In case the VerificationToken was found with the provided `where` argument, update it with this data.
     */
    update: XOR<VerificationTokenUpdateInput, VerificationTokenUncheckedUpdateInput>
  }


  /**
   * VerificationToken delete
   */
  export type VerificationTokenDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
    /**
     * Filter which VerificationToken to delete.
     */
    where: VerificationTokenWhereUniqueInput
  }


  /**
   * VerificationToken deleteMany
   */
  export type VerificationTokenDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which VerificationTokens to delete
     */
    where?: VerificationTokenWhereInput
  }


  /**
   * VerificationToken without action
   */
  export type VerificationTokenDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the VerificationToken
     */
    select?: VerificationTokenSelect<ExtArgs> | null
  }



  /**
   * Model Rating
   */

  export type AggregateRating = {
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  export type RatingAvgAggregateOutputType = {
    id: number | null
    issueId: number | null
    rating: number | null
  }

  export type RatingSumAggregateOutputType = {
    id: number | null
    issueId: number | null
    rating: number | null
  }

  export type RatingMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    issueId: number | null
    userId: string | null
    rating: number | null
  }

  export type RatingMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    issueId: number | null
    userId: string | null
    rating: number | null
  }

  export type RatingCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    issueId: number
    userId: number
    rating: number
    _all: number
  }


  export type RatingAvgAggregateInputType = {
    id?: true
    issueId?: true
    rating?: true
  }

  export type RatingSumAggregateInputType = {
    id?: true
    issueId?: true
    rating?: true
  }

  export type RatingMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    issueId?: true
    userId?: true
    rating?: true
  }

  export type RatingMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    issueId?: true
    userId?: true
    rating?: true
  }

  export type RatingCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    issueId?: true
    userId?: true
    rating?: true
    _all?: true
  }

  export type RatingAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Rating to aggregate.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Ratings
    **/
    _count?: true | RatingCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: RatingAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: RatingSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: RatingMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: RatingMaxAggregateInputType
  }

  export type GetRatingAggregateType<T extends RatingAggregateArgs> = {
        [P in keyof T & keyof AggregateRating]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateRating[P]>
      : GetScalarType<T[P], AggregateRating[P]>
  }




  export type RatingGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: RatingWhereInput
    orderBy?: RatingOrderByWithAggregationInput | RatingOrderByWithAggregationInput[]
    by: RatingScalarFieldEnum[] | RatingScalarFieldEnum
    having?: RatingScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: RatingCountAggregateInputType | true
    _avg?: RatingAvgAggregateInputType
    _sum?: RatingSumAggregateInputType
    _min?: RatingMinAggregateInputType
    _max?: RatingMaxAggregateInputType
  }

  export type RatingGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    issueId: number
    userId: string
    rating: number
    _count: RatingCountAggregateOutputType | null
    _avg: RatingAvgAggregateOutputType | null
    _sum: RatingSumAggregateOutputType | null
    _min: RatingMinAggregateOutputType | null
    _max: RatingMaxAggregateOutputType | null
  }

  type GetRatingGroupByPayload<T extends RatingGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<RatingGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof RatingGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], RatingGroupByOutputType[P]>
            : GetScalarType<T[P], RatingGroupByOutputType[P]>
        }
      >
    >


  export type RatingSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issueId?: boolean
    userId?: boolean
    rating?: boolean
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["rating"]>

  export type RatingSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    issueId?: boolean
    userId?: boolean
    rating?: boolean
  }

  export type RatingInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $RatingPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "Rating"
    objects: {
      issue: Prisma.$IssuePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      issueId: number
      userId: string
      rating: number
    }, ExtArgs["result"]["rating"]>
    composites: {}
  }


  type RatingGetPayload<S extends boolean | null | undefined | RatingDefaultArgs> = $Result.GetResult<Prisma.$RatingPayload, S>

  type RatingCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<RatingFindManyArgs, 'select' | 'include'> & {
      select?: RatingCountAggregateInputType | true
    }

  export interface RatingDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Rating'], meta: { name: 'Rating' } }
    /**
     * Find zero or one Rating that matches the filter.
     * @param {RatingFindUniqueArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends RatingFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, RatingFindUniqueArgs<ExtArgs>>
    ): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one Rating that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {RatingFindUniqueOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends RatingFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RatingFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first Rating that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends RatingFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, RatingFindFirstArgs<ExtArgs>>
    ): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first Rating that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindFirstOrThrowArgs} args - Arguments to find a Rating
     * @example
     * // Get one Rating
     * const rating = await prisma.rating.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends RatingFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, RatingFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more Ratings that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Ratings
     * const ratings = await prisma.rating.findMany()
     * 
     * // Get first 10 Ratings
     * const ratings = await prisma.rating.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const ratingWithIdOnly = await prisma.rating.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends RatingFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RatingFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a Rating.
     * @param {RatingCreateArgs} args - Arguments to create a Rating.
     * @example
     * // Create one Rating
     * const Rating = await prisma.rating.create({
     *   data: {
     *     // ... data to create a Rating
     *   }
     * })
     * 
    **/
    create<T extends RatingCreateArgs<ExtArgs>>(
      args: SelectSubset<T, RatingCreateArgs<ExtArgs>>
    ): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many Ratings.
     *     @param {RatingCreateManyArgs} args - Arguments to create many Ratings.
     *     @example
     *     // Create many Ratings
     *     const rating = await prisma.rating.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends RatingCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RatingCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a Rating.
     * @param {RatingDeleteArgs} args - Arguments to delete one Rating.
     * @example
     * // Delete one Rating
     * const Rating = await prisma.rating.delete({
     *   where: {
     *     // ... filter to delete one Rating
     *   }
     * })
     * 
    **/
    delete<T extends RatingDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, RatingDeleteArgs<ExtArgs>>
    ): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one Rating.
     * @param {RatingUpdateArgs} args - Arguments to update one Rating.
     * @example
     * // Update one Rating
     * const rating = await prisma.rating.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends RatingUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, RatingUpdateArgs<ExtArgs>>
    ): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more Ratings.
     * @param {RatingDeleteManyArgs} args - Arguments to filter Ratings to delete.
     * @example
     * // Delete a few Ratings
     * const { count } = await prisma.rating.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends RatingDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, RatingDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Ratings
     * const rating = await prisma.rating.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends RatingUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, RatingUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one Rating.
     * @param {RatingUpsertArgs} args - Arguments to update or create a Rating.
     * @example
     * // Update or create a Rating
     * const rating = await prisma.rating.upsert({
     *   create: {
     *     // ... data to create a Rating
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Rating we want to update
     *   }
     * })
    **/
    upsert<T extends RatingUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, RatingUpsertArgs<ExtArgs>>
    ): Prisma__RatingClient<$Result.GetResult<Prisma.$RatingPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of Ratings.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingCountArgs} args - Arguments to filter Ratings to count.
     * @example
     * // Count the number of Ratings
     * const count = await prisma.rating.count({
     *   where: {
     *     // ... the filter for the Ratings we want to count
     *   }
     * })
    **/
    count<T extends RatingCountArgs>(
      args?: Subset<T, RatingCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], RatingCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends RatingAggregateArgs>(args: Subset<T, RatingAggregateArgs>): Prisma.PrismaPromise<GetRatingAggregateType<T>>

    /**
     * Group by Rating.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {RatingGroupByArgs} args - Group by arguments.
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
      T extends RatingGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: RatingGroupByArgs['orderBy'] }
        : { orderBy?: RatingGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, RatingGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetRatingGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Rating model
   */
  readonly fields: RatingFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Rating.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__RatingClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the Rating model
   */ 
  interface RatingFieldRefs {
    readonly id: FieldRef<"Rating", 'Int'>
    readonly createdAt: FieldRef<"Rating", 'DateTime'>
    readonly updatedAt: FieldRef<"Rating", 'DateTime'>
    readonly issueId: FieldRef<"Rating", 'Int'>
    readonly userId: FieldRef<"Rating", 'String'>
    readonly rating: FieldRef<"Rating", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * Rating findUnique
   */
  export type RatingFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }


  /**
   * Rating findUniqueOrThrow
   */
  export type RatingFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where: RatingWhereUniqueInput
  }


  /**
   * Rating findFirst
   */
  export type RatingFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }


  /**
   * Rating findFirstOrThrow
   */
  export type RatingFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Rating to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Ratings.
     */
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }


  /**
   * Rating findMany
   */
  export type RatingFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter, which Ratings to fetch.
     */
    where?: RatingWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Ratings to fetch.
     */
    orderBy?: RatingOrderByWithRelationInput | RatingOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Ratings.
     */
    cursor?: RatingWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Ratings from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Ratings.
     */
    skip?: number
    distinct?: RatingScalarFieldEnum | RatingScalarFieldEnum[]
  }


  /**
   * Rating create
   */
  export type RatingCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to create a Rating.
     */
    data: XOR<RatingCreateInput, RatingUncheckedCreateInput>
  }


  /**
   * Rating createMany
   */
  export type RatingCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Ratings.
     */
    data: RatingCreateManyInput | RatingCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * Rating update
   */
  export type RatingUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The data needed to update a Rating.
     */
    data: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
    /**
     * Choose, which Rating to update.
     */
    where: RatingWhereUniqueInput
  }


  /**
   * Rating updateMany
   */
  export type RatingUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Ratings.
     */
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyInput>
    /**
     * Filter which Ratings to update
     */
    where?: RatingWhereInput
  }


  /**
   * Rating upsert
   */
  export type RatingUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * The filter to search for the Rating to update in case it exists.
     */
    where: RatingWhereUniqueInput
    /**
     * In case the Rating found by the `where` argument doesn't exist, create a new Rating with this data.
     */
    create: XOR<RatingCreateInput, RatingUncheckedCreateInput>
    /**
     * In case the Rating was found with the provided `where` argument, update it with this data.
     */
    update: XOR<RatingUpdateInput, RatingUncheckedUpdateInput>
  }


  /**
   * Rating delete
   */
  export type RatingDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
    /**
     * Filter which Rating to delete.
     */
    where: RatingWhereUniqueInput
  }


  /**
   * Rating deleteMany
   */
  export type RatingDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which Ratings to delete
     */
    where?: RatingWhereInput
  }


  /**
   * Rating without action
   */
  export type RatingDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Rating
     */
    select?: RatingSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: RatingInclude<ExtArgs> | null
  }



  /**
   * Model MessageLike
   */

  export type AggregateMessageLike = {
    _count: MessageLikeCountAggregateOutputType | null
    _avg: MessageLikeAvgAggregateOutputType | null
    _sum: MessageLikeSumAggregateOutputType | null
    _min: MessageLikeMinAggregateOutputType | null
    _max: MessageLikeMaxAggregateOutputType | null
  }

  export type MessageLikeAvgAggregateOutputType = {
    id: number | null
    messageId: number | null
    issueId: number | null
    evaluation: number | null
  }

  export type MessageLikeSumAggregateOutputType = {
    id: number | null
    messageId: number | null
    issueId: number | null
    evaluation: number | null
  }

  export type MessageLikeMinAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    messageId: number | null
    issueId: number | null
    userId: string | null
    evaluation: number | null
  }

  export type MessageLikeMaxAggregateOutputType = {
    id: number | null
    createdAt: Date | null
    updatedAt: Date | null
    messageId: number | null
    issueId: number | null
    userId: string | null
    evaluation: number | null
  }

  export type MessageLikeCountAggregateOutputType = {
    id: number
    createdAt: number
    updatedAt: number
    messageId: number
    issueId: number
    userId: number
    evaluation: number
    _all: number
  }


  export type MessageLikeAvgAggregateInputType = {
    id?: true
    messageId?: true
    issueId?: true
    evaluation?: true
  }

  export type MessageLikeSumAggregateInputType = {
    id?: true
    messageId?: true
    issueId?: true
    evaluation?: true
  }

  export type MessageLikeMinAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    messageId?: true
    issueId?: true
    userId?: true
    evaluation?: true
  }

  export type MessageLikeMaxAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    messageId?: true
    issueId?: true
    userId?: true
    evaluation?: true
  }

  export type MessageLikeCountAggregateInputType = {
    id?: true
    createdAt?: true
    updatedAt?: true
    messageId?: true
    issueId?: true
    userId?: true
    evaluation?: true
    _all?: true
  }

  export type MessageLikeAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLike to aggregate.
     */
    where?: MessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLikes to fetch.
     */
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: MessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned MessageLikes
    **/
    _count?: true | MessageLikeCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: MessageLikeAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: MessageLikeSumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: MessageLikeMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: MessageLikeMaxAggregateInputType
  }

  export type GetMessageLikeAggregateType<T extends MessageLikeAggregateArgs> = {
        [P in keyof T & keyof AggregateMessageLike]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateMessageLike[P]>
      : GetScalarType<T[P], AggregateMessageLike[P]>
  }




  export type MessageLikeGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: MessageLikeWhereInput
    orderBy?: MessageLikeOrderByWithAggregationInput | MessageLikeOrderByWithAggregationInput[]
    by: MessageLikeScalarFieldEnum[] | MessageLikeScalarFieldEnum
    having?: MessageLikeScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: MessageLikeCountAggregateInputType | true
    _avg?: MessageLikeAvgAggregateInputType
    _sum?: MessageLikeSumAggregateInputType
    _min?: MessageLikeMinAggregateInputType
    _max?: MessageLikeMaxAggregateInputType
  }

  export type MessageLikeGroupByOutputType = {
    id: number
    createdAt: Date
    updatedAt: Date
    messageId: number
    issueId: number
    userId: string
    evaluation: number
    _count: MessageLikeCountAggregateOutputType | null
    _avg: MessageLikeAvgAggregateOutputType | null
    _sum: MessageLikeSumAggregateOutputType | null
    _min: MessageLikeMinAggregateOutputType | null
    _max: MessageLikeMaxAggregateOutputType | null
  }

  type GetMessageLikeGroupByPayload<T extends MessageLikeGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<MessageLikeGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof MessageLikeGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], MessageLikeGroupByOutputType[P]>
            : GetScalarType<T[P], MessageLikeGroupByOutputType[P]>
        }
      >
    >


  export type MessageLikeSelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messageId?: boolean
    issueId?: boolean
    userId?: boolean
    evaluation?: boolean
    message?: boolean | IssueMessageDefaultArgs<ExtArgs>
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["messageLike"]>

  export type MessageLikeSelectScalar = {
    id?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    messageId?: boolean
    issueId?: boolean
    userId?: boolean
    evaluation?: boolean
  }

  export type MessageLikeInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    message?: boolean | IssueMessageDefaultArgs<ExtArgs>
    issue?: boolean | IssueDefaultArgs<ExtArgs>
    user?: boolean | UserDefaultArgs<ExtArgs>
  }


  export type $MessageLikePayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "MessageLike"
    objects: {
      message: Prisma.$IssueMessagePayload<ExtArgs>
      issue: Prisma.$IssuePayload<ExtArgs>
      user: Prisma.$UserPayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      createdAt: Date
      updatedAt: Date
      messageId: number
      issueId: number
      userId: string
      evaluation: number
    }, ExtArgs["result"]["messageLike"]>
    composites: {}
  }


  type MessageLikeGetPayload<S extends boolean | null | undefined | MessageLikeDefaultArgs> = $Result.GetResult<Prisma.$MessageLikePayload, S>

  type MessageLikeCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<MessageLikeFindManyArgs, 'select' | 'include'> & {
      select?: MessageLikeCountAggregateInputType | true
    }

  export interface MessageLikeDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['MessageLike'], meta: { name: 'MessageLike' } }
    /**
     * Find zero or one MessageLike that matches the filter.
     * @param {MessageLikeFindUniqueArgs} args - Arguments to find a MessageLike
     * @example
     * // Get one MessageLike
     * const messageLike = await prisma.messageLike.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends MessageLikeFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, MessageLikeFindUniqueArgs<ExtArgs>>
    ): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one MessageLike that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {MessageLikeFindUniqueOrThrowArgs} args - Arguments to find a MessageLike
     * @example
     * // Get one MessageLike
     * const messageLike = await prisma.messageLike.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends MessageLikeFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageLikeFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first MessageLike that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeFindFirstArgs} args - Arguments to find a MessageLike
     * @example
     * // Get one MessageLike
     * const messageLike = await prisma.messageLike.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends MessageLikeFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageLikeFindFirstArgs<ExtArgs>>
    ): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first MessageLike that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeFindFirstOrThrowArgs} args - Arguments to find a MessageLike
     * @example
     * // Get one MessageLike
     * const messageLike = await prisma.messageLike.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends MessageLikeFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageLikeFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more MessageLikes that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all MessageLikes
     * const messageLikes = await prisma.messageLike.findMany()
     * 
     * // Get first 10 MessageLikes
     * const messageLikes = await prisma.messageLike.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const messageLikeWithIdOnly = await prisma.messageLike.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends MessageLikeFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageLikeFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a MessageLike.
     * @param {MessageLikeCreateArgs} args - Arguments to create a MessageLike.
     * @example
     * // Create one MessageLike
     * const MessageLike = await prisma.messageLike.create({
     *   data: {
     *     // ... data to create a MessageLike
     *   }
     * })
     * 
    **/
    create<T extends MessageLikeCreateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageLikeCreateArgs<ExtArgs>>
    ): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many MessageLikes.
     *     @param {MessageLikeCreateManyArgs} args - Arguments to create many MessageLikes.
     *     @example
     *     // Create many MessageLikes
     *     const messageLike = await prisma.messageLike.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends MessageLikeCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageLikeCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a MessageLike.
     * @param {MessageLikeDeleteArgs} args - Arguments to delete one MessageLike.
     * @example
     * // Delete one MessageLike
     * const MessageLike = await prisma.messageLike.delete({
     *   where: {
     *     // ... filter to delete one MessageLike
     *   }
     * })
     * 
    **/
    delete<T extends MessageLikeDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, MessageLikeDeleteArgs<ExtArgs>>
    ): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one MessageLike.
     * @param {MessageLikeUpdateArgs} args - Arguments to update one MessageLike.
     * @example
     * // Update one MessageLike
     * const messageLike = await prisma.messageLike.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends MessageLikeUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, MessageLikeUpdateArgs<ExtArgs>>
    ): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more MessageLikes.
     * @param {MessageLikeDeleteManyArgs} args - Arguments to filter MessageLikes to delete.
     * @example
     * // Delete a few MessageLikes
     * const { count } = await prisma.messageLike.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends MessageLikeDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, MessageLikeDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more MessageLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many MessageLikes
     * const messageLike = await prisma.messageLike.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends MessageLikeUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, MessageLikeUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one MessageLike.
     * @param {MessageLikeUpsertArgs} args - Arguments to update or create a MessageLike.
     * @example
     * // Update or create a MessageLike
     * const messageLike = await prisma.messageLike.upsert({
     *   create: {
     *     // ... data to create a MessageLike
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the MessageLike we want to update
     *   }
     * })
    **/
    upsert<T extends MessageLikeUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, MessageLikeUpsertArgs<ExtArgs>>
    ): Prisma__MessageLikeClient<$Result.GetResult<Prisma.$MessageLikePayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of MessageLikes.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeCountArgs} args - Arguments to filter MessageLikes to count.
     * @example
     * // Count the number of MessageLikes
     * const count = await prisma.messageLike.count({
     *   where: {
     *     // ... the filter for the MessageLikes we want to count
     *   }
     * })
    **/
    count<T extends MessageLikeCountArgs>(
      args?: Subset<T, MessageLikeCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], MessageLikeCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a MessageLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends MessageLikeAggregateArgs>(args: Subset<T, MessageLikeAggregateArgs>): Prisma.PrismaPromise<GetMessageLikeAggregateType<T>>

    /**
     * Group by MessageLike.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {MessageLikeGroupByArgs} args - Group by arguments.
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
      T extends MessageLikeGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: MessageLikeGroupByArgs['orderBy'] }
        : { orderBy?: MessageLikeGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, MessageLikeGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetMessageLikeGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the MessageLike model
   */
  readonly fields: MessageLikeFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for MessageLike.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__MessageLikeClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    message<T extends IssueMessageDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueMessageDefaultArgs<ExtArgs>>): Prisma__IssueMessageClient<$Result.GetResult<Prisma.$IssueMessagePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the MessageLike model
   */ 
  interface MessageLikeFieldRefs {
    readonly id: FieldRef<"MessageLike", 'Int'>
    readonly createdAt: FieldRef<"MessageLike", 'DateTime'>
    readonly updatedAt: FieldRef<"MessageLike", 'DateTime'>
    readonly messageId: FieldRef<"MessageLike", 'Int'>
    readonly issueId: FieldRef<"MessageLike", 'Int'>
    readonly userId: FieldRef<"MessageLike", 'String'>
    readonly evaluation: FieldRef<"MessageLike", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * MessageLike findUnique
   */
  export type MessageLikeFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLike to fetch.
     */
    where: MessageLikeWhereUniqueInput
  }


  /**
   * MessageLike findUniqueOrThrow
   */
  export type MessageLikeFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLike to fetch.
     */
    where: MessageLikeWhereUniqueInput
  }


  /**
   * MessageLike findFirst
   */
  export type MessageLikeFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLike to fetch.
     */
    where?: MessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLikes to fetch.
     */
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLikes.
     */
    cursor?: MessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLikes.
     */
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }


  /**
   * MessageLike findFirstOrThrow
   */
  export type MessageLikeFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLike to fetch.
     */
    where?: MessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLikes to fetch.
     */
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for MessageLikes.
     */
    cursor?: MessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLikes.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of MessageLikes.
     */
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }


  /**
   * MessageLike findMany
   */
  export type MessageLikeFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter, which MessageLikes to fetch.
     */
    where?: MessageLikeWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of MessageLikes to fetch.
     */
    orderBy?: MessageLikeOrderByWithRelationInput | MessageLikeOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing MessageLikes.
     */
    cursor?: MessageLikeWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` MessageLikes from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` MessageLikes.
     */
    skip?: number
    distinct?: MessageLikeScalarFieldEnum | MessageLikeScalarFieldEnum[]
  }


  /**
   * MessageLike create
   */
  export type MessageLikeCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * The data needed to create a MessageLike.
     */
    data: XOR<MessageLikeCreateInput, MessageLikeUncheckedCreateInput>
  }


  /**
   * MessageLike createMany
   */
  export type MessageLikeCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many MessageLikes.
     */
    data: MessageLikeCreateManyInput | MessageLikeCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * MessageLike update
   */
  export type MessageLikeUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * The data needed to update a MessageLike.
     */
    data: XOR<MessageLikeUpdateInput, MessageLikeUncheckedUpdateInput>
    /**
     * Choose, which MessageLike to update.
     */
    where: MessageLikeWhereUniqueInput
  }


  /**
   * MessageLike updateMany
   */
  export type MessageLikeUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update MessageLikes.
     */
    data: XOR<MessageLikeUpdateManyMutationInput, MessageLikeUncheckedUpdateManyInput>
    /**
     * Filter which MessageLikes to update
     */
    where?: MessageLikeWhereInput
  }


  /**
   * MessageLike upsert
   */
  export type MessageLikeUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * The filter to search for the MessageLike to update in case it exists.
     */
    where: MessageLikeWhereUniqueInput
    /**
     * In case the MessageLike found by the `where` argument doesn't exist, create a new MessageLike with this data.
     */
    create: XOR<MessageLikeCreateInput, MessageLikeUncheckedCreateInput>
    /**
     * In case the MessageLike was found with the provided `where` argument, update it with this data.
     */
    update: XOR<MessageLikeUpdateInput, MessageLikeUncheckedUpdateInput>
  }


  /**
   * MessageLike delete
   */
  export type MessageLikeDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
    /**
     * Filter which MessageLike to delete.
     */
    where: MessageLikeWhereUniqueInput
  }


  /**
   * MessageLike deleteMany
   */
  export type MessageLikeDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which MessageLikes to delete
     */
    where?: MessageLikeWhereInput
  }


  /**
   * MessageLike without action
   */
  export type MessageLikeDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the MessageLike
     */
    select?: MessageLikeSelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: MessageLikeInclude<ExtArgs> | null
  }



  /**
   * Model IssueReply
   */

  export type AggregateIssueReply = {
    _count: IssueReplyCountAggregateOutputType | null
    _avg: IssueReplyAvgAggregateOutputType | null
    _sum: IssueReplySumAggregateOutputType | null
    _min: IssueReplyMinAggregateOutputType | null
    _max: IssueReplyMaxAggregateOutputType | null
  }

  export type IssueReplyAvgAggregateOutputType = {
    id: number | null
    issueId: number | null
    likeCount: number | null
  }

  export type IssueReplySumAggregateOutputType = {
    id: number | null
    issueId: number | null
    likeCount: number | null
  }

  export type IssueReplyMinAggregateOutputType = {
    id: number | null
    userId: string | null
    issueId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    likeCount: number | null
  }

  export type IssueReplyMaxAggregateOutputType = {
    id: number | null
    userId: string | null
    issueId: number | null
    content: string | null
    createdAt: Date | null
    updatedAt: Date | null
    likeCount: number | null
  }

  export type IssueReplyCountAggregateOutputType = {
    id: number
    userId: number
    issueId: number
    content: number
    createdAt: number
    updatedAt: number
    likeCount: number
    _all: number
  }


  export type IssueReplyAvgAggregateInputType = {
    id?: true
    issueId?: true
    likeCount?: true
  }

  export type IssueReplySumAggregateInputType = {
    id?: true
    issueId?: true
    likeCount?: true
  }

  export type IssueReplyMinAggregateInputType = {
    id?: true
    userId?: true
    issueId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    likeCount?: true
  }

  export type IssueReplyMaxAggregateInputType = {
    id?: true
    userId?: true
    issueId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    likeCount?: true
  }

  export type IssueReplyCountAggregateInputType = {
    id?: true
    userId?: true
    issueId?: true
    content?: true
    createdAt?: true
    updatedAt?: true
    likeCount?: true
    _all?: true
  }

  export type IssueReplyAggregateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueReply to aggregate.
     */
    where?: IssueReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReplies to fetch.
     */
    orderBy?: IssueReplyOrderByWithRelationInput | IssueReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: IssueReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned IssueReplies
    **/
    _count?: true | IssueReplyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: IssueReplyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: IssueReplySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: IssueReplyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: IssueReplyMaxAggregateInputType
  }

  export type GetIssueReplyAggregateType<T extends IssueReplyAggregateArgs> = {
        [P in keyof T & keyof AggregateIssueReply]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateIssueReply[P]>
      : GetScalarType<T[P], AggregateIssueReply[P]>
  }




  export type IssueReplyGroupByArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    where?: IssueReplyWhereInput
    orderBy?: IssueReplyOrderByWithAggregationInput | IssueReplyOrderByWithAggregationInput[]
    by: IssueReplyScalarFieldEnum[] | IssueReplyScalarFieldEnum
    having?: IssueReplyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: IssueReplyCountAggregateInputType | true
    _avg?: IssueReplyAvgAggregateInputType
    _sum?: IssueReplySumAggregateInputType
    _min?: IssueReplyMinAggregateInputType
    _max?: IssueReplyMaxAggregateInputType
  }

  export type IssueReplyGroupByOutputType = {
    id: number
    userId: string
    issueId: number
    content: string
    createdAt: Date
    updatedAt: Date
    likeCount: number
    _count: IssueReplyCountAggregateOutputType | null
    _avg: IssueReplyAvgAggregateOutputType | null
    _sum: IssueReplySumAggregateOutputType | null
    _min: IssueReplyMinAggregateOutputType | null
    _max: IssueReplyMaxAggregateOutputType | null
  }

  type GetIssueReplyGroupByPayload<T extends IssueReplyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<IssueReplyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof IssueReplyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], IssueReplyGroupByOutputType[P]>
            : GetScalarType<T[P], IssueReplyGroupByOutputType[P]>
        }
      >
    >


  export type IssueReplySelect<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    issueId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likeCount?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["issueReply"]>

  export type IssueReplySelectScalar = {
    id?: boolean
    userId?: boolean
    issueId?: boolean
    content?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    likeCount?: boolean
  }

  export type IssueReplyInclude<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    issue?: boolean | IssueDefaultArgs<ExtArgs>
  }


  export type $IssueReplyPayload<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    name: "IssueReply"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      issue: Prisma.$IssuePayload<ExtArgs>
    }
    scalars: $Extensions.GetResult<{
      id: number
      userId: string
      issueId: number
      content: string
      createdAt: Date
      updatedAt: Date
      likeCount: number
    }, ExtArgs["result"]["issueReply"]>
    composites: {}
  }


  type IssueReplyGetPayload<S extends boolean | null | undefined | IssueReplyDefaultArgs> = $Result.GetResult<Prisma.$IssueReplyPayload, S>

  type IssueReplyCountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = 
    Omit<IssueReplyFindManyArgs, 'select' | 'include'> & {
      select?: IssueReplyCountAggregateInputType | true
    }

  export interface IssueReplyDelegate<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['IssueReply'], meta: { name: 'IssueReply' } }
    /**
     * Find zero or one IssueReply that matches the filter.
     * @param {IssueReplyFindUniqueArgs} args - Arguments to find a IssueReply
     * @example
     * // Get one IssueReply
     * const issueReply = await prisma.issueReply.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUnique<T extends IssueReplyFindUniqueArgs<ExtArgs>>(
      args: SelectSubset<T, IssueReplyFindUniqueArgs<ExtArgs>>
    ): Prisma__IssueReplyClient<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'findUnique'> | null, null, ExtArgs>

    /**
     * Find one IssueReply that matches the filter or throw an error  with `error.code='P2025'` 
     *     if no matches were found.
     * @param {IssueReplyFindUniqueOrThrowArgs} args - Arguments to find a IssueReply
     * @example
     * // Get one IssueReply
     * const issueReply = await prisma.issueReply.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findUniqueOrThrow<T extends IssueReplyFindUniqueOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueReplyFindUniqueOrThrowArgs<ExtArgs>>
    ): Prisma__IssueReplyClient<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'findUniqueOrThrow'>, never, ExtArgs>

    /**
     * Find the first IssueReply that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReplyFindFirstArgs} args - Arguments to find a IssueReply
     * @example
     * // Get one IssueReply
     * const issueReply = await prisma.issueReply.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirst<T extends IssueReplyFindFirstArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueReplyFindFirstArgs<ExtArgs>>
    ): Prisma__IssueReplyClient<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'findFirst'> | null, null, ExtArgs>

    /**
     * Find the first IssueReply that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReplyFindFirstOrThrowArgs} args - Arguments to find a IssueReply
     * @example
     * // Get one IssueReply
     * const issueReply = await prisma.issueReply.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
    **/
    findFirstOrThrow<T extends IssueReplyFindFirstOrThrowArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueReplyFindFirstOrThrowArgs<ExtArgs>>
    ): Prisma__IssueReplyClient<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'findFirstOrThrow'>, never, ExtArgs>

    /**
     * Find zero or more IssueReplies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReplyFindManyArgs=} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all IssueReplies
     * const issueReplies = await prisma.issueReply.findMany()
     * 
     * // Get first 10 IssueReplies
     * const issueReplies = await prisma.issueReply.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const issueReplyWithIdOnly = await prisma.issueReply.findMany({ select: { id: true } })
     * 
    **/
    findMany<T extends IssueReplyFindManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueReplyFindManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'findMany'>>

    /**
     * Create a IssueReply.
     * @param {IssueReplyCreateArgs} args - Arguments to create a IssueReply.
     * @example
     * // Create one IssueReply
     * const IssueReply = await prisma.issueReply.create({
     *   data: {
     *     // ... data to create a IssueReply
     *   }
     * })
     * 
    **/
    create<T extends IssueReplyCreateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueReplyCreateArgs<ExtArgs>>
    ): Prisma__IssueReplyClient<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'create'>, never, ExtArgs>

    /**
     * Create many IssueReplies.
     *     @param {IssueReplyCreateManyArgs} args - Arguments to create many IssueReplies.
     *     @example
     *     // Create many IssueReplies
     *     const issueReply = await prisma.issueReply.createMany({
     *       data: {
     *         // ... provide data here
     *       }
     *     })
     *     
    **/
    createMany<T extends IssueReplyCreateManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueReplyCreateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Delete a IssueReply.
     * @param {IssueReplyDeleteArgs} args - Arguments to delete one IssueReply.
     * @example
     * // Delete one IssueReply
     * const IssueReply = await prisma.issueReply.delete({
     *   where: {
     *     // ... filter to delete one IssueReply
     *   }
     * })
     * 
    **/
    delete<T extends IssueReplyDeleteArgs<ExtArgs>>(
      args: SelectSubset<T, IssueReplyDeleteArgs<ExtArgs>>
    ): Prisma__IssueReplyClient<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'delete'>, never, ExtArgs>

    /**
     * Update one IssueReply.
     * @param {IssueReplyUpdateArgs} args - Arguments to update one IssueReply.
     * @example
     * // Update one IssueReply
     * const issueReply = await prisma.issueReply.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    update<T extends IssueReplyUpdateArgs<ExtArgs>>(
      args: SelectSubset<T, IssueReplyUpdateArgs<ExtArgs>>
    ): Prisma__IssueReplyClient<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'update'>, never, ExtArgs>

    /**
     * Delete zero or more IssueReplies.
     * @param {IssueReplyDeleteManyArgs} args - Arguments to filter IssueReplies to delete.
     * @example
     * // Delete a few IssueReplies
     * const { count } = await prisma.issueReply.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
    **/
    deleteMany<T extends IssueReplyDeleteManyArgs<ExtArgs>>(
      args?: SelectSubset<T, IssueReplyDeleteManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more IssueReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReplyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many IssueReplies
     * const issueReply = await prisma.issueReply.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
    **/
    updateMany<T extends IssueReplyUpdateManyArgs<ExtArgs>>(
      args: SelectSubset<T, IssueReplyUpdateManyArgs<ExtArgs>>
    ): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create or update one IssueReply.
     * @param {IssueReplyUpsertArgs} args - Arguments to update or create a IssueReply.
     * @example
     * // Update or create a IssueReply
     * const issueReply = await prisma.issueReply.upsert({
     *   create: {
     *     // ... data to create a IssueReply
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the IssueReply we want to update
     *   }
     * })
    **/
    upsert<T extends IssueReplyUpsertArgs<ExtArgs>>(
      args: SelectSubset<T, IssueReplyUpsertArgs<ExtArgs>>
    ): Prisma__IssueReplyClient<$Result.GetResult<Prisma.$IssueReplyPayload<ExtArgs>, T, 'upsert'>, never, ExtArgs>

    /**
     * Count the number of IssueReplies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReplyCountArgs} args - Arguments to filter IssueReplies to count.
     * @example
     * // Count the number of IssueReplies
     * const count = await prisma.issueReply.count({
     *   where: {
     *     // ... the filter for the IssueReplies we want to count
     *   }
     * })
    **/
    count<T extends IssueReplyCountArgs>(
      args?: Subset<T, IssueReplyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], IssueReplyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a IssueReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReplyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends IssueReplyAggregateArgs>(args: Subset<T, IssueReplyAggregateArgs>): Prisma.PrismaPromise<GetIssueReplyAggregateType<T>>

    /**
     * Group by IssueReply.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {IssueReplyGroupByArgs} args - Group by arguments.
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
      T extends IssueReplyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: IssueReplyGroupByArgs['orderBy'] }
        : { orderBy?: IssueReplyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, IssueReplyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetIssueReplyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the IssueReply model
   */
  readonly fields: IssueReplyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for IssueReply.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__IssueReplyClient<T, Null = never, ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: 'PrismaPromise';

    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    issue<T extends IssueDefaultArgs<ExtArgs> = {}>(args?: Subset<T, IssueDefaultArgs<ExtArgs>>): Prisma__IssueClient<$Result.GetResult<Prisma.$IssuePayload<ExtArgs>, T, 'findUniqueOrThrow'> | Null, Null, ExtArgs>;

    /**
     * Attaches callbacks for the resolution and/or rejection of the Promise.
     * @param onfulfilled The callback to execute when the Promise is resolved.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of which ever callback is executed.
     */
    then<TResult1 = T, TResult2 = never>(onfulfilled?: ((value: T) => TResult1 | PromiseLike<TResult1>) | undefined | null, onrejected?: ((reason: any) => TResult2 | PromiseLike<TResult2>) | undefined | null): $Utils.JsPromise<TResult1 | TResult2>;
    /**
     * Attaches a callback for only the rejection of the Promise.
     * @param onrejected The callback to execute when the Promise is rejected.
     * @returns A Promise for the completion of the callback.
     */
    catch<TResult = never>(onrejected?: ((reason: any) => TResult | PromiseLike<TResult>) | undefined | null): $Utils.JsPromise<T | TResult>;
    /**
     * Attaches a callback that is invoked when the Promise is settled (fulfilled or rejected). The
     * resolved value cannot be modified from the callback.
     * @param onfinally The callback to execute when the Promise is settled (fulfilled or rejected).
     * @returns A Promise for the completion of the callback.
     */
    finally(onfinally?: (() => void) | undefined | null): $Utils.JsPromise<T>;
  }



  /**
   * Fields of the IssueReply model
   */ 
  interface IssueReplyFieldRefs {
    readonly id: FieldRef<"IssueReply", 'Int'>
    readonly userId: FieldRef<"IssueReply", 'String'>
    readonly issueId: FieldRef<"IssueReply", 'Int'>
    readonly content: FieldRef<"IssueReply", 'String'>
    readonly createdAt: FieldRef<"IssueReply", 'DateTime'>
    readonly updatedAt: FieldRef<"IssueReply", 'DateTime'>
    readonly likeCount: FieldRef<"IssueReply", 'Int'>
  }
    

  // Custom InputTypes

  /**
   * IssueReply findUnique
   */
  export type IssueReplyFindUniqueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * Filter, which IssueReply to fetch.
     */
    where: IssueReplyWhereUniqueInput
  }


  /**
   * IssueReply findUniqueOrThrow
   */
  export type IssueReplyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * Filter, which IssueReply to fetch.
     */
    where: IssueReplyWhereUniqueInput
  }


  /**
   * IssueReply findFirst
   */
  export type IssueReplyFindFirstArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * Filter, which IssueReply to fetch.
     */
    where?: IssueReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReplies to fetch.
     */
    orderBy?: IssueReplyOrderByWithRelationInput | IssueReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueReplies.
     */
    cursor?: IssueReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueReplies.
     */
    distinct?: IssueReplyScalarFieldEnum | IssueReplyScalarFieldEnum[]
  }


  /**
   * IssueReply findFirstOrThrow
   */
  export type IssueReplyFindFirstOrThrowArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * Filter, which IssueReply to fetch.
     */
    where?: IssueReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReplies to fetch.
     */
    orderBy?: IssueReplyOrderByWithRelationInput | IssueReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for IssueReplies.
     */
    cursor?: IssueReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReplies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of IssueReplies.
     */
    distinct?: IssueReplyScalarFieldEnum | IssueReplyScalarFieldEnum[]
  }


  /**
   * IssueReply findMany
   */
  export type IssueReplyFindManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * Filter, which IssueReplies to fetch.
     */
    where?: IssueReplyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of IssueReplies to fetch.
     */
    orderBy?: IssueReplyOrderByWithRelationInput | IssueReplyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing IssueReplies.
     */
    cursor?: IssueReplyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` IssueReplies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` IssueReplies.
     */
    skip?: number
    distinct?: IssueReplyScalarFieldEnum | IssueReplyScalarFieldEnum[]
  }


  /**
   * IssueReply create
   */
  export type IssueReplyCreateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * The data needed to create a IssueReply.
     */
    data: XOR<IssueReplyCreateInput, IssueReplyUncheckedCreateInput>
  }


  /**
   * IssueReply createMany
   */
  export type IssueReplyCreateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many IssueReplies.
     */
    data: IssueReplyCreateManyInput | IssueReplyCreateManyInput[]
    skipDuplicates?: boolean
  }


  /**
   * IssueReply update
   */
  export type IssueReplyUpdateArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * The data needed to update a IssueReply.
     */
    data: XOR<IssueReplyUpdateInput, IssueReplyUncheckedUpdateInput>
    /**
     * Choose, which IssueReply to update.
     */
    where: IssueReplyWhereUniqueInput
  }


  /**
   * IssueReply updateMany
   */
  export type IssueReplyUpdateManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * The data used to update IssueReplies.
     */
    data: XOR<IssueReplyUpdateManyMutationInput, IssueReplyUncheckedUpdateManyInput>
    /**
     * Filter which IssueReplies to update
     */
    where?: IssueReplyWhereInput
  }


  /**
   * IssueReply upsert
   */
  export type IssueReplyUpsertArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * The filter to search for the IssueReply to update in case it exists.
     */
    where: IssueReplyWhereUniqueInput
    /**
     * In case the IssueReply found by the `where` argument doesn't exist, create a new IssueReply with this data.
     */
    create: XOR<IssueReplyCreateInput, IssueReplyUncheckedCreateInput>
    /**
     * In case the IssueReply was found with the provided `where` argument, update it with this data.
     */
    update: XOR<IssueReplyUpdateInput, IssueReplyUncheckedUpdateInput>
  }


  /**
   * IssueReply delete
   */
  export type IssueReplyDeleteArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
    /**
     * Filter which IssueReply to delete.
     */
    where: IssueReplyWhereUniqueInput
  }


  /**
   * IssueReply deleteMany
   */
  export type IssueReplyDeleteManyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Filter which IssueReplies to delete
     */
    where?: IssueReplyWhereInput
  }


  /**
   * IssueReply without action
   */
  export type IssueReplyDefaultArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the IssueReply
     */
    select?: IssueReplySelect<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well.
     */
    include?: IssueReplyInclude<ExtArgs> | null
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


  export const IssueScalarFieldEnum: {
    id: 'id',
    slug: 'slug',
    weight: 'weight',
    title: 'title',
    description: 'description',
    coverImage: 'coverImage',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt'
  };

  export type IssueScalarFieldEnum = (typeof IssueScalarFieldEnum)[keyof typeof IssueScalarFieldEnum]


  export const IssueBlockScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    issueId: 'issueId',
    seq: 'seq',
    title: 'title',
    blockType: 'blockType',
    content: 'content',
    isRemoved: 'isRemoved'
  };

  export type IssueBlockScalarFieldEnum = (typeof IssueBlockScalarFieldEnum)[keyof typeof IssueBlockScalarFieldEnum]


  export const IssueMessageScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    isRemoved: 'isRemoved',
    issueId: 'issueId',
    blockId: 'blockId',
    celebId: 'celebId',
    celebName: 'celebName',
    celebDescription: 'celebDescription',
    celebAvatar: 'celebAvatar',
    content: 'content',
    link: 'link',
    linkFrom: 'linkFrom',
    backgroundColor: 'backgroundColor',
    bias: 'bias',
    reportedAt: 'reportedAt',
    likeCount: 'likeCount'
  };

  export type IssueMessageScalarFieldEnum = (typeof IssueMessageScalarFieldEnum)[keyof typeof IssueMessageScalarFieldEnum]


  export const CelebScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    name: 'name',
    description: 'description',
    avatar: 'avatar'
  };

  export type CelebScalarFieldEnum = (typeof CelebScalarFieldEnum)[keyof typeof CelebScalarFieldEnum]


  export const AccountScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    type: 'type',
    scope: 'scope',
    provider: 'provider',
    providerAccountId: 'providerAccountId',
    refresh_token: 'refresh_token',
    access_token: 'access_token',
    expires_at: 'expires_at',
    refresh_token_expires_in: 'refresh_token_expires_in',
    token_type: 'token_type',
    id_token: 'id_token',
    session_state: 'session_state'
  };

  export type AccountScalarFieldEnum = (typeof AccountScalarFieldEnum)[keyof typeof AccountScalarFieldEnum]


  export const SessionScalarFieldEnum: {
    id: 'id',
    sessionToken: 'sessionToken',
    userId: 'userId',
    expires: 'expires'
  };

  export type SessionScalarFieldEnum = (typeof SessionScalarFieldEnum)[keyof typeof SessionScalarFieldEnum]


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    emailVerified: 'emailVerified',
    image: 'image',
    isAdmin: 'isAdmin'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const VerificationTokenScalarFieldEnum: {
    identifier: 'identifier',
    token: 'token',
    expires: 'expires'
  };

  export type VerificationTokenScalarFieldEnum = (typeof VerificationTokenScalarFieldEnum)[keyof typeof VerificationTokenScalarFieldEnum]


  export const RatingScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    issueId: 'issueId',
    userId: 'userId',
    rating: 'rating'
  };

  export type RatingScalarFieldEnum = (typeof RatingScalarFieldEnum)[keyof typeof RatingScalarFieldEnum]


  export const MessageLikeScalarFieldEnum: {
    id: 'id',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    messageId: 'messageId',
    issueId: 'issueId',
    userId: 'userId',
    evaluation: 'evaluation'
  };

  export type MessageLikeScalarFieldEnum = (typeof MessageLikeScalarFieldEnum)[keyof typeof MessageLikeScalarFieldEnum]


  export const IssueReplyScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    issueId: 'issueId',
    content: 'content',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    likeCount: 'likeCount'
  };

  export type IssueReplyScalarFieldEnum = (typeof IssueReplyScalarFieldEnum)[keyof typeof IssueReplyScalarFieldEnum]


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
   * Reference to a field of type 'Int'
   */
  export type IntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int'>
    


  /**
   * Reference to a field of type 'Int[]'
   */
  export type ListIntFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Int[]'>
    


  /**
   * Reference to a field of type 'String'
   */
  export type StringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String'>
    


  /**
   * Reference to a field of type 'String[]'
   */
  export type ListStringFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'String[]'>
    


  /**
   * Reference to a field of type 'IssueStatus'
   */
  export type EnumIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueStatus'>
    


  /**
   * Reference to a field of type 'IssueStatus[]'
   */
  export type ListEnumIssueStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'IssueStatus[]'>
    


  /**
   * Reference to a field of type 'DateTime'
   */
  export type DateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime'>
    


  /**
   * Reference to a field of type 'DateTime[]'
   */
  export type ListDateTimeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'DateTime[]'>
    


  /**
   * Reference to a field of type 'Boolean'
   */
  export type BooleanFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Boolean'>
    


  /**
   * Reference to a field of type 'Bias'
   */
  export type EnumBiasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bias'>
    


  /**
   * Reference to a field of type 'Bias[]'
   */
  export type ListEnumBiasFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Bias[]'>
    


  /**
   * Reference to a field of type 'Float'
   */
  export type FloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float'>
    


  /**
   * Reference to a field of type 'Float[]'
   */
  export type ListFloatFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'Float[]'>
    
  /**
   * Deep Input Types
   */


  export type IssueWhereInput = {
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    id?: IntFilter<"Issue"> | number
    slug?: StringFilter<"Issue"> | string
    weight?: IntFilter<"Issue"> | number
    title?: StringFilter<"Issue"> | string
    description?: StringFilter<"Issue"> | string
    coverImage?: StringFilter<"Issue"> | string
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    issueBlocks?: IssueBlockListRelationFilter
    celebs?: CelebListRelationFilter
    ratings?: RatingListRelationFilter
    issueMessages?: IssueMessageListRelationFilter
    messageLike?: MessageLikeListRelationFilter
    replys?: IssueReplyListRelationFilter
  }

  export type IssueOrderByWithRelationInput = {
    id?: SortOrder
    slug?: SortOrder
    weight?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueBlocks?: IssueBlockOrderByRelationAggregateInput
    celebs?: CelebOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    issueMessages?: IssueMessageOrderByRelationAggregateInput
    messageLike?: MessageLikeOrderByRelationAggregateInput
    replys?: IssueReplyOrderByRelationAggregateInput
  }

  export type IssueWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssueWhereInput | IssueWhereInput[]
    OR?: IssueWhereInput[]
    NOT?: IssueWhereInput | IssueWhereInput[]
    slug?: StringFilter<"Issue"> | string
    weight?: IntFilter<"Issue"> | number
    title?: StringFilter<"Issue"> | string
    description?: StringFilter<"Issue"> | string
    coverImage?: StringFilter<"Issue"> | string
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
    issueBlocks?: IssueBlockListRelationFilter
    celebs?: CelebListRelationFilter
    ratings?: RatingListRelationFilter
    issueMessages?: IssueMessageListRelationFilter
    messageLike?: MessageLikeListRelationFilter
    replys?: IssueReplyListRelationFilter
  }, "id">

  export type IssueOrderByWithAggregationInput = {
    id?: SortOrder
    slug?: SortOrder
    weight?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    _count?: IssueCountOrderByAggregateInput
    _avg?: IssueAvgOrderByAggregateInput
    _max?: IssueMaxOrderByAggregateInput
    _min?: IssueMinOrderByAggregateInput
    _sum?: IssueSumOrderByAggregateInput
  }

  export type IssueScalarWhereWithAggregatesInput = {
    AND?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    OR?: IssueScalarWhereWithAggregatesInput[]
    NOT?: IssueScalarWhereWithAggregatesInput | IssueScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Issue"> | number
    slug?: StringWithAggregatesFilter<"Issue"> | string
    weight?: IntWithAggregatesFilter<"Issue"> | number
    title?: StringWithAggregatesFilter<"Issue"> | string
    description?: StringWithAggregatesFilter<"Issue"> | string
    coverImage?: StringWithAggregatesFilter<"Issue"> | string
    status?: EnumIssueStatusWithAggregatesFilter<"Issue"> | $Enums.IssueStatus
    createdAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Issue"> | Date | string
  }

  export type IssueBlockWhereInput = {
    AND?: IssueBlockWhereInput | IssueBlockWhereInput[]
    OR?: IssueBlockWhereInput[]
    NOT?: IssueBlockWhereInput | IssueBlockWhereInput[]
    id?: IntFilter<"IssueBlock"> | number
    createdAt?: DateTimeFilter<"IssueBlock"> | Date | string
    updatedAt?: DateTimeFilter<"IssueBlock"> | Date | string
    issueId?: IntFilter<"IssueBlock"> | number
    seq?: IntFilter<"IssueBlock"> | number
    title?: StringNullableFilter<"IssueBlock"> | string | null
    blockType?: StringFilter<"IssueBlock"> | string
    content?: StringNullableFilter<"IssueBlock"> | string | null
    isRemoved?: BoolFilter<"IssueBlock"> | boolean
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
    messages?: IssueMessageListRelationFilter
  }

  export type IssueBlockOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    seq?: SortOrder
    title?: SortOrderInput | SortOrder
    blockType?: SortOrder
    content?: SortOrderInput | SortOrder
    isRemoved?: SortOrder
    issue?: IssueOrderByWithRelationInput
    messages?: IssueMessageOrderByRelationAggregateInput
  }

  export type IssueBlockWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssueBlockWhereInput | IssueBlockWhereInput[]
    OR?: IssueBlockWhereInput[]
    NOT?: IssueBlockWhereInput | IssueBlockWhereInput[]
    createdAt?: DateTimeFilter<"IssueBlock"> | Date | string
    updatedAt?: DateTimeFilter<"IssueBlock"> | Date | string
    issueId?: IntFilter<"IssueBlock"> | number
    seq?: IntFilter<"IssueBlock"> | number
    title?: StringNullableFilter<"IssueBlock"> | string | null
    blockType?: StringFilter<"IssueBlock"> | string
    content?: StringNullableFilter<"IssueBlock"> | string | null
    isRemoved?: BoolFilter<"IssueBlock"> | boolean
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
    messages?: IssueMessageListRelationFilter
  }, "id">

  export type IssueBlockOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    seq?: SortOrder
    title?: SortOrderInput | SortOrder
    blockType?: SortOrder
    content?: SortOrderInput | SortOrder
    isRemoved?: SortOrder
    _count?: IssueBlockCountOrderByAggregateInput
    _avg?: IssueBlockAvgOrderByAggregateInput
    _max?: IssueBlockMaxOrderByAggregateInput
    _min?: IssueBlockMinOrderByAggregateInput
    _sum?: IssueBlockSumOrderByAggregateInput
  }

  export type IssueBlockScalarWhereWithAggregatesInput = {
    AND?: IssueBlockScalarWhereWithAggregatesInput | IssueBlockScalarWhereWithAggregatesInput[]
    OR?: IssueBlockScalarWhereWithAggregatesInput[]
    NOT?: IssueBlockScalarWhereWithAggregatesInput | IssueBlockScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IssueBlock"> | number
    createdAt?: DateTimeWithAggregatesFilter<"IssueBlock"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IssueBlock"> | Date | string
    issueId?: IntWithAggregatesFilter<"IssueBlock"> | number
    seq?: IntWithAggregatesFilter<"IssueBlock"> | number
    title?: StringNullableWithAggregatesFilter<"IssueBlock"> | string | null
    blockType?: StringWithAggregatesFilter<"IssueBlock"> | string
    content?: StringNullableWithAggregatesFilter<"IssueBlock"> | string | null
    isRemoved?: BoolWithAggregatesFilter<"IssueBlock"> | boolean
  }

  export type IssueMessageWhereInput = {
    AND?: IssueMessageWhereInput | IssueMessageWhereInput[]
    OR?: IssueMessageWhereInput[]
    NOT?: IssueMessageWhereInput | IssueMessageWhereInput[]
    id?: IntFilter<"IssueMessage"> | number
    createdAt?: DateTimeFilter<"IssueMessage"> | Date | string
    updatedAt?: DateTimeFilter<"IssueMessage"> | Date | string
    isRemoved?: BoolFilter<"IssueMessage"> | boolean
    issueId?: IntFilter<"IssueMessage"> | number
    blockId?: IntFilter<"IssueMessage"> | number
    celebId?: IntFilter<"IssueMessage"> | number
    celebName?: StringFilter<"IssueMessage"> | string
    celebDescription?: StringNullableFilter<"IssueMessage"> | string | null
    celebAvatar?: StringNullableFilter<"IssueMessage"> | string | null
    content?: StringFilter<"IssueMessage"> | string
    link?: StringFilter<"IssueMessage"> | string
    linkFrom?: StringFilter<"IssueMessage"> | string
    backgroundColor?: StringFilter<"IssueMessage"> | string
    bias?: EnumBiasFilter<"IssueMessage"> | $Enums.Bias
    reportedAt?: DateTimeFilter<"IssueMessage"> | Date | string
    likeCount?: IntFilter<"IssueMessage"> | number
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
    block?: XOR<IssueBlockRelationFilter, IssueBlockWhereInput>
    messageLike?: MessageLikeListRelationFilter
  }

  export type IssueMessageOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isRemoved?: SortOrder
    issueId?: SortOrder
    blockId?: SortOrder
    celebId?: SortOrder
    celebName?: SortOrder
    celebDescription?: SortOrderInput | SortOrder
    celebAvatar?: SortOrderInput | SortOrder
    content?: SortOrder
    link?: SortOrder
    linkFrom?: SortOrder
    backgroundColor?: SortOrder
    bias?: SortOrder
    reportedAt?: SortOrder
    likeCount?: SortOrder
    issue?: IssueOrderByWithRelationInput
    block?: IssueBlockOrderByWithRelationInput
    messageLike?: MessageLikeOrderByRelationAggregateInput
  }

  export type IssueMessageWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssueMessageWhereInput | IssueMessageWhereInput[]
    OR?: IssueMessageWhereInput[]
    NOT?: IssueMessageWhereInput | IssueMessageWhereInput[]
    createdAt?: DateTimeFilter<"IssueMessage"> | Date | string
    updatedAt?: DateTimeFilter<"IssueMessage"> | Date | string
    isRemoved?: BoolFilter<"IssueMessage"> | boolean
    issueId?: IntFilter<"IssueMessage"> | number
    blockId?: IntFilter<"IssueMessage"> | number
    celebId?: IntFilter<"IssueMessage"> | number
    celebName?: StringFilter<"IssueMessage"> | string
    celebDescription?: StringNullableFilter<"IssueMessage"> | string | null
    celebAvatar?: StringNullableFilter<"IssueMessage"> | string | null
    content?: StringFilter<"IssueMessage"> | string
    link?: StringFilter<"IssueMessage"> | string
    linkFrom?: StringFilter<"IssueMessage"> | string
    backgroundColor?: StringFilter<"IssueMessage"> | string
    bias?: EnumBiasFilter<"IssueMessage"> | $Enums.Bias
    reportedAt?: DateTimeFilter<"IssueMessage"> | Date | string
    likeCount?: IntFilter<"IssueMessage"> | number
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
    block?: XOR<IssueBlockRelationFilter, IssueBlockWhereInput>
    messageLike?: MessageLikeListRelationFilter
  }, "id">

  export type IssueMessageOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isRemoved?: SortOrder
    issueId?: SortOrder
    blockId?: SortOrder
    celebId?: SortOrder
    celebName?: SortOrder
    celebDescription?: SortOrderInput | SortOrder
    celebAvatar?: SortOrderInput | SortOrder
    content?: SortOrder
    link?: SortOrder
    linkFrom?: SortOrder
    backgroundColor?: SortOrder
    bias?: SortOrder
    reportedAt?: SortOrder
    likeCount?: SortOrder
    _count?: IssueMessageCountOrderByAggregateInput
    _avg?: IssueMessageAvgOrderByAggregateInput
    _max?: IssueMessageMaxOrderByAggregateInput
    _min?: IssueMessageMinOrderByAggregateInput
    _sum?: IssueMessageSumOrderByAggregateInput
  }

  export type IssueMessageScalarWhereWithAggregatesInput = {
    AND?: IssueMessageScalarWhereWithAggregatesInput | IssueMessageScalarWhereWithAggregatesInput[]
    OR?: IssueMessageScalarWhereWithAggregatesInput[]
    NOT?: IssueMessageScalarWhereWithAggregatesInput | IssueMessageScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IssueMessage"> | number
    createdAt?: DateTimeWithAggregatesFilter<"IssueMessage"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IssueMessage"> | Date | string
    isRemoved?: BoolWithAggregatesFilter<"IssueMessage"> | boolean
    issueId?: IntWithAggregatesFilter<"IssueMessage"> | number
    blockId?: IntWithAggregatesFilter<"IssueMessage"> | number
    celebId?: IntWithAggregatesFilter<"IssueMessage"> | number
    celebName?: StringWithAggregatesFilter<"IssueMessage"> | string
    celebDescription?: StringNullableWithAggregatesFilter<"IssueMessage"> | string | null
    celebAvatar?: StringNullableWithAggregatesFilter<"IssueMessage"> | string | null
    content?: StringWithAggregatesFilter<"IssueMessage"> | string
    link?: StringWithAggregatesFilter<"IssueMessage"> | string
    linkFrom?: StringWithAggregatesFilter<"IssueMessage"> | string
    backgroundColor?: StringWithAggregatesFilter<"IssueMessage"> | string
    bias?: EnumBiasWithAggregatesFilter<"IssueMessage"> | $Enums.Bias
    reportedAt?: DateTimeWithAggregatesFilter<"IssueMessage"> | Date | string
    likeCount?: IntWithAggregatesFilter<"IssueMessage"> | number
  }

  export type CelebWhereInput = {
    AND?: CelebWhereInput | CelebWhereInput[]
    OR?: CelebWhereInput[]
    NOT?: CelebWhereInput | CelebWhereInput[]
    id?: IntFilter<"Celeb"> | number
    createdAt?: DateTimeFilter<"Celeb"> | Date | string
    updatedAt?: DateTimeFilter<"Celeb"> | Date | string
    name?: StringFilter<"Celeb"> | string
    description?: StringNullableFilter<"Celeb"> | string | null
    avatar?: StringNullableFilter<"Celeb"> | string | null
    issues?: IssueListRelationFilter
  }

  export type CelebOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    issues?: IssueOrderByRelationAggregateInput
  }

  export type CelebWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: CelebWhereInput | CelebWhereInput[]
    OR?: CelebWhereInput[]
    NOT?: CelebWhereInput | CelebWhereInput[]
    createdAt?: DateTimeFilter<"Celeb"> | Date | string
    updatedAt?: DateTimeFilter<"Celeb"> | Date | string
    name?: StringFilter<"Celeb"> | string
    description?: StringNullableFilter<"Celeb"> | string | null
    avatar?: StringNullableFilter<"Celeb"> | string | null
    issues?: IssueListRelationFilter
  }, "id">

  export type CelebOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrderInput | SortOrder
    avatar?: SortOrderInput | SortOrder
    _count?: CelebCountOrderByAggregateInput
    _avg?: CelebAvgOrderByAggregateInput
    _max?: CelebMaxOrderByAggregateInput
    _min?: CelebMinOrderByAggregateInput
    _sum?: CelebSumOrderByAggregateInput
  }

  export type CelebScalarWhereWithAggregatesInput = {
    AND?: CelebScalarWhereWithAggregatesInput | CelebScalarWhereWithAggregatesInput[]
    OR?: CelebScalarWhereWithAggregatesInput[]
    NOT?: CelebScalarWhereWithAggregatesInput | CelebScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Celeb"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Celeb"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Celeb"> | Date | string
    name?: StringWithAggregatesFilter<"Celeb"> | string
    description?: StringNullableWithAggregatesFilter<"Celeb"> | string | null
    avatar?: StringNullableWithAggregatesFilter<"Celeb"> | string | null
  }

  export type AccountWhereInput = {
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    scope?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type AccountOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type AccountWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    provider_providerAccountId?: AccountProviderProviderAccountIdCompoundUniqueInput
    AND?: AccountWhereInput | AccountWhereInput[]
    OR?: AccountWhereInput[]
    NOT?: AccountWhereInput | AccountWhereInput[]
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    scope?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "provider_providerAccountId">

  export type AccountOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrderInput | SortOrder
    access_token?: SortOrderInput | SortOrder
    expires_at?: SortOrderInput | SortOrder
    refresh_token_expires_in?: SortOrderInput | SortOrder
    token_type?: SortOrderInput | SortOrder
    id_token?: SortOrderInput | SortOrder
    session_state?: SortOrderInput | SortOrder
    _count?: AccountCountOrderByAggregateInput
    _avg?: AccountAvgOrderByAggregateInput
    _max?: AccountMaxOrderByAggregateInput
    _min?: AccountMinOrderByAggregateInput
    _sum?: AccountSumOrderByAggregateInput
  }

  export type AccountScalarWhereWithAggregatesInput = {
    AND?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    OR?: AccountScalarWhereWithAggregatesInput[]
    NOT?: AccountScalarWhereWithAggregatesInput | AccountScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Account"> | string
    userId?: StringWithAggregatesFilter<"Account"> | string
    type?: StringWithAggregatesFilter<"Account"> | string
    scope?: StringWithAggregatesFilter<"Account"> | string
    provider?: StringWithAggregatesFilter<"Account"> | string
    providerAccountId?: StringWithAggregatesFilter<"Account"> | string
    refresh_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    access_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    expires_at?: IntNullableWithAggregatesFilter<"Account"> | number | null
    refresh_token_expires_in?: IntNullableWithAggregatesFilter<"Account"> | number | null
    token_type?: StringNullableWithAggregatesFilter<"Account"> | string | null
    id_token?: StringNullableWithAggregatesFilter<"Account"> | string | null
    session_state?: StringNullableWithAggregatesFilter<"Account"> | string | null
  }

  export type SessionWhereInput = {
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type SessionOrderByWithRelationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    user?: UserOrderByWithRelationInput
  }

  export type SessionWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    sessionToken?: string
    AND?: SessionWhereInput | SessionWhereInput[]
    OR?: SessionWhereInput[]
    NOT?: SessionWhereInput | SessionWhereInput[]
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id" | "sessionToken">

  export type SessionOrderByWithAggregationInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
    _count?: SessionCountOrderByAggregateInput
    _max?: SessionMaxOrderByAggregateInput
    _min?: SessionMinOrderByAggregateInput
  }

  export type SessionScalarWhereWithAggregatesInput = {
    AND?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    OR?: SessionScalarWhereWithAggregatesInput[]
    NOT?: SessionScalarWhereWithAggregatesInput | SessionScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Session"> | string
    sessionToken?: StringWithAggregatesFilter<"Session"> | string
    userId?: StringWithAggregatesFilter<"Session"> | string
    expires?: DateTimeWithAggregatesFilter<"Session"> | Date | string
  }

  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringNullableFilter<"User"> | string | null
    email?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    ratings?: RatingListRelationFilter
    messageLikes?: MessageLikeListRelationFilter
    replys?: IssueReplyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    accounts?: AccountOrderByRelationAggregateInput
    sessions?: SessionOrderByRelationAggregateInput
    ratings?: RatingOrderByRelationAggregateInput
    messageLikes?: MessageLikeOrderByRelationAggregateInput
    replys?: IssueReplyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringNullableFilter<"User"> | string | null
    emailVerified?: DateTimeNullableFilter<"User"> | Date | string | null
    image?: StringNullableFilter<"User"> | string | null
    isAdmin?: BoolFilter<"User"> | boolean
    accounts?: AccountListRelationFilter
    sessions?: SessionListRelationFilter
    ratings?: RatingListRelationFilter
    messageLikes?: MessageLikeListRelationFilter
    replys?: IssueReplyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrderInput | SortOrder
    email?: SortOrderInput | SortOrder
    emailVerified?: SortOrderInput | SortOrder
    image?: SortOrderInput | SortOrder
    isAdmin?: SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringNullableWithAggregatesFilter<"User"> | string | null
    email?: StringNullableWithAggregatesFilter<"User"> | string | null
    emailVerified?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    image?: StringNullableWithAggregatesFilter<"User"> | string | null
    isAdmin?: BoolWithAggregatesFilter<"User"> | boolean
  }

  export type VerificationTokenWhereInput = {
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    token?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }

  export type VerificationTokenOrderByWithRelationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenWhereUniqueInput = Prisma.AtLeast<{
    token?: string
    identifier_token?: VerificationTokenIdentifierTokenCompoundUniqueInput
    AND?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    OR?: VerificationTokenWhereInput[]
    NOT?: VerificationTokenWhereInput | VerificationTokenWhereInput[]
    identifier?: StringFilter<"VerificationToken"> | string
    expires?: DateTimeFilter<"VerificationToken"> | Date | string
  }, "token" | "identifier_token">

  export type VerificationTokenOrderByWithAggregationInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
    _count?: VerificationTokenCountOrderByAggregateInput
    _max?: VerificationTokenMaxOrderByAggregateInput
    _min?: VerificationTokenMinOrderByAggregateInput
  }

  export type VerificationTokenScalarWhereWithAggregatesInput = {
    AND?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    OR?: VerificationTokenScalarWhereWithAggregatesInput[]
    NOT?: VerificationTokenScalarWhereWithAggregatesInput | VerificationTokenScalarWhereWithAggregatesInput[]
    identifier?: StringWithAggregatesFilter<"VerificationToken"> | string
    token?: StringWithAggregatesFilter<"VerificationToken"> | string
    expires?: DateTimeWithAggregatesFilter<"VerificationToken"> | Date | string
  }

  export type RatingWhereInput = {
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    id?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    issueId?: IntFilter<"Rating"> | number
    userId?: StringFilter<"Rating"> | string
    rating?: IntFilter<"Rating"> | number
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type RatingOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    issue?: IssueOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type RatingWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: RatingWhereInput | RatingWhereInput[]
    OR?: RatingWhereInput[]
    NOT?: RatingWhereInput | RatingWhereInput[]
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    issueId?: IntFilter<"Rating"> | number
    userId?: StringFilter<"Rating"> | string
    rating?: IntFilter<"Rating"> | number
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type RatingOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
    _count?: RatingCountOrderByAggregateInput
    _avg?: RatingAvgOrderByAggregateInput
    _max?: RatingMaxOrderByAggregateInput
    _min?: RatingMinOrderByAggregateInput
    _sum?: RatingSumOrderByAggregateInput
  }

  export type RatingScalarWhereWithAggregatesInput = {
    AND?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    OR?: RatingScalarWhereWithAggregatesInput[]
    NOT?: RatingScalarWhereWithAggregatesInput | RatingScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"Rating"> | number
    createdAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Rating"> | Date | string
    issueId?: IntWithAggregatesFilter<"Rating"> | number
    userId?: StringWithAggregatesFilter<"Rating"> | string
    rating?: IntWithAggregatesFilter<"Rating"> | number
  }

  export type MessageLikeWhereInput = {
    AND?: MessageLikeWhereInput | MessageLikeWhereInput[]
    OR?: MessageLikeWhereInput[]
    NOT?: MessageLikeWhereInput | MessageLikeWhereInput[]
    id?: IntFilter<"MessageLike"> | number
    createdAt?: DateTimeFilter<"MessageLike"> | Date | string
    updatedAt?: DateTimeFilter<"MessageLike"> | Date | string
    messageId?: IntFilter<"MessageLike"> | number
    issueId?: IntFilter<"MessageLike"> | number
    userId?: StringFilter<"MessageLike"> | string
    evaluation?: IntFilter<"MessageLike"> | number
    message?: XOR<IssueMessageRelationFilter, IssueMessageWhereInput>
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }

  export type MessageLikeOrderByWithRelationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messageId?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    evaluation?: SortOrder
    message?: IssueMessageOrderByWithRelationInput
    issue?: IssueOrderByWithRelationInput
    user?: UserOrderByWithRelationInput
  }

  export type MessageLikeWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: MessageLikeWhereInput | MessageLikeWhereInput[]
    OR?: MessageLikeWhereInput[]
    NOT?: MessageLikeWhereInput | MessageLikeWhereInput[]
    createdAt?: DateTimeFilter<"MessageLike"> | Date | string
    updatedAt?: DateTimeFilter<"MessageLike"> | Date | string
    messageId?: IntFilter<"MessageLike"> | number
    issueId?: IntFilter<"MessageLike"> | number
    userId?: StringFilter<"MessageLike"> | string
    evaluation?: IntFilter<"MessageLike"> | number
    message?: XOR<IssueMessageRelationFilter, IssueMessageWhereInput>
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
    user?: XOR<UserRelationFilter, UserWhereInput>
  }, "id">

  export type MessageLikeOrderByWithAggregationInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messageId?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    evaluation?: SortOrder
    _count?: MessageLikeCountOrderByAggregateInput
    _avg?: MessageLikeAvgOrderByAggregateInput
    _max?: MessageLikeMaxOrderByAggregateInput
    _min?: MessageLikeMinOrderByAggregateInput
    _sum?: MessageLikeSumOrderByAggregateInput
  }

  export type MessageLikeScalarWhereWithAggregatesInput = {
    AND?: MessageLikeScalarWhereWithAggregatesInput | MessageLikeScalarWhereWithAggregatesInput[]
    OR?: MessageLikeScalarWhereWithAggregatesInput[]
    NOT?: MessageLikeScalarWhereWithAggregatesInput | MessageLikeScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"MessageLike"> | number
    createdAt?: DateTimeWithAggregatesFilter<"MessageLike"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"MessageLike"> | Date | string
    messageId?: IntWithAggregatesFilter<"MessageLike"> | number
    issueId?: IntWithAggregatesFilter<"MessageLike"> | number
    userId?: StringWithAggregatesFilter<"MessageLike"> | string
    evaluation?: IntWithAggregatesFilter<"MessageLike"> | number
  }

  export type IssueReplyWhereInput = {
    AND?: IssueReplyWhereInput | IssueReplyWhereInput[]
    OR?: IssueReplyWhereInput[]
    NOT?: IssueReplyWhereInput | IssueReplyWhereInput[]
    id?: IntFilter<"IssueReply"> | number
    userId?: StringFilter<"IssueReply"> | string
    issueId?: IntFilter<"IssueReply"> | number
    content?: StringFilter<"IssueReply"> | string
    createdAt?: DateTimeFilter<"IssueReply"> | Date | string
    updatedAt?: DateTimeFilter<"IssueReply"> | Date | string
    likeCount?: IntFilter<"IssueReply"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
  }

  export type IssueReplyOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    issueId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likeCount?: SortOrder
    user?: UserOrderByWithRelationInput
    issue?: IssueOrderByWithRelationInput
  }

  export type IssueReplyWhereUniqueInput = Prisma.AtLeast<{
    id?: number
    AND?: IssueReplyWhereInput | IssueReplyWhereInput[]
    OR?: IssueReplyWhereInput[]
    NOT?: IssueReplyWhereInput | IssueReplyWhereInput[]
    userId?: StringFilter<"IssueReply"> | string
    issueId?: IntFilter<"IssueReply"> | number
    content?: StringFilter<"IssueReply"> | string
    createdAt?: DateTimeFilter<"IssueReply"> | Date | string
    updatedAt?: DateTimeFilter<"IssueReply"> | Date | string
    likeCount?: IntFilter<"IssueReply"> | number
    user?: XOR<UserRelationFilter, UserWhereInput>
    issue?: XOR<IssueRelationFilter, IssueWhereInput>
  }, "id">

  export type IssueReplyOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    issueId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likeCount?: SortOrder
    _count?: IssueReplyCountOrderByAggregateInput
    _avg?: IssueReplyAvgOrderByAggregateInput
    _max?: IssueReplyMaxOrderByAggregateInput
    _min?: IssueReplyMinOrderByAggregateInput
    _sum?: IssueReplySumOrderByAggregateInput
  }

  export type IssueReplyScalarWhereWithAggregatesInput = {
    AND?: IssueReplyScalarWhereWithAggregatesInput | IssueReplyScalarWhereWithAggregatesInput[]
    OR?: IssueReplyScalarWhereWithAggregatesInput[]
    NOT?: IssueReplyScalarWhereWithAggregatesInput | IssueReplyScalarWhereWithAggregatesInput[]
    id?: IntWithAggregatesFilter<"IssueReply"> | number
    userId?: StringWithAggregatesFilter<"IssueReply"> | string
    issueId?: IntWithAggregatesFilter<"IssueReply"> | number
    content?: StringWithAggregatesFilter<"IssueReply"> | string
    createdAt?: DateTimeWithAggregatesFilter<"IssueReply"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"IssueReply"> | Date | string
    likeCount?: IntWithAggregatesFilter<"IssueReply"> | number
  }

  export type IssueCreateInput = {
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockCreateNestedManyWithoutIssueInput
    celebs?: CelebCreateNestedManyWithoutIssuesInput
    ratings?: RatingCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeCreateNestedManyWithoutIssueInput
    replys?: IssueReplyCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateInput = {
    id?: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockUncheckedCreateNestedManyWithoutIssueInput
    celebs?: CelebUncheckedCreateNestedManyWithoutIssuesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageUncheckedCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutIssueInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueUpdateInput = {
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUpdateManyWithoutIssueNestedInput
    celebs?: CelebUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUncheckedUpdateManyWithoutIssueNestedInput
    celebs?: CelebUncheckedUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUncheckedUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUncheckedUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueCreateManyInput = {
    id?: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
  }

  export type IssueUpdateManyMutationInput = {
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type IssueBlockCreateInput = {
    createdAt: Date | string
    updatedAt: Date | string
    seq: number
    title?: string | null
    blockType: string
    content?: string | null
    isRemoved: boolean
    issue: IssueCreateNestedOneWithoutIssueBlocksInput
    messages?: IssueMessageCreateNestedManyWithoutBlockInput
  }

  export type IssueBlockUncheckedCreateInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    seq: number
    title?: string | null
    blockType: string
    content?: string | null
    isRemoved: boolean
    messages?: IssueMessageUncheckedCreateNestedManyWithoutBlockInput
  }

  export type IssueBlockUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    issue?: IssueUpdateOneRequiredWithoutIssueBlocksNestedInput
    messages?: IssueMessageUpdateManyWithoutBlockNestedInput
  }

  export type IssueBlockUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    messages?: IssueMessageUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type IssueBlockCreateManyInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    seq: number
    title?: string | null
    blockType: string
    content?: string | null
    isRemoved: boolean
  }

  export type IssueBlockUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IssueBlockUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type IssueMessageCreateInput = {
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
    issue: IssueCreateNestedOneWithoutIssueMessagesInput
    block: IssueBlockCreateNestedOneWithoutMessagesInput
    messageLike?: MessageLikeCreateNestedManyWithoutMessageInput
  }

  export type IssueMessageUncheckedCreateInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    issueId: number
    blockId: number
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutMessageInput
  }

  export type IssueMessageUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    issue?: IssueUpdateOneRequiredWithoutIssueMessagesNestedInput
    block?: IssueBlockUpdateOneRequiredWithoutMessagesNestedInput
    messageLike?: MessageLikeUpdateManyWithoutMessageNestedInput
  }

  export type IssueMessageUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    issueId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    messageLike?: MessageLikeUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type IssueMessageCreateManyInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    issueId: number
    blockId: number
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
  }

  export type IssueMessageUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type IssueMessageUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    issueId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type CelebCreateInput = {
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    description?: string | null
    avatar?: string | null
    issues?: IssueCreateNestedManyWithoutCelebsInput
  }

  export type CelebUncheckedCreateInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    description?: string | null
    avatar?: string | null
    issues?: IssueUncheckedCreateNestedManyWithoutCelebsInput
  }

  export type CelebUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: IssueUpdateManyWithoutCelebsNestedInput
  }

  export type CelebUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
    issues?: IssueUncheckedUpdateManyWithoutCelebsNestedInput
  }

  export type CelebCreateManyInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    description?: string | null
    avatar?: string | null
  }

  export type CelebUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CelebUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateInput = {
    id?: string
    type: string
    scope: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
    user: UserCreateNestedOneWithoutAccountsInput
  }

  export type AccountUncheckedCreateInput = {
    id?: string
    userId: string
    type: string
    scope: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
    user?: UserUpdateOneRequiredWithoutAccountsNestedInput
  }

  export type AccountUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountCreateManyInput = {
    id?: string
    userId: string
    type: string
    scope: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionCreateInput = {
    id?: string
    sessionToken: string
    expires: Date | string
    user: UserCreateNestedOneWithoutSessionsInput
  }

  export type SessionUncheckedCreateInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
    user?: UserUpdateOneRequiredWithoutSessionsNestedInput
  }

  export type SessionUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionCreateManyInput = {
    id?: string
    sessionToken: string
    userId: string
    expires: Date | string
  }

  export type SessionUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type UserCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeCreateNestedManyWithoutUserInput
    replys?: IssueReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
  }

  export type VerificationTokenCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUncheckedCreateInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenCreateManyInput = {
    identifier: string
    token: string
    expires: Date | string
  }

  export type VerificationTokenUpdateManyMutationInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type VerificationTokenUncheckedUpdateManyInput = {
    identifier?: StringFieldUpdateOperationsInput | string
    token?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingCreateInput = {
    createdAt: Date | string
    updatedAt: Date | string
    rating: number
    issue: IssueCreateNestedOneWithoutRatingsInput
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    userId: string
    rating: number
  }

  export type RatingUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    issue?: IssueUpdateOneRequiredWithoutRatingsNestedInput
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RatingCreateManyInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    userId: string
    rating: number
  }

  export type RatingUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeCreateInput = {
    createdAt: Date | string
    updatedAt: Date | string
    evaluation: number
    message: IssueMessageCreateNestedOneWithoutMessageLikeInput
    issue: IssueCreateNestedOneWithoutMessageLikeInput
    user: UserCreateNestedOneWithoutMessageLikesInput
  }

  export type MessageLikeUncheckedCreateInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    messageId: number
    issueId: number
    userId: string
    evaluation: number
  }

  export type MessageLikeUpdateInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: IntFieldUpdateOperationsInput | number
    message?: IssueMessageUpdateOneRequiredWithoutMessageLikeNestedInput
    issue?: IssueUpdateOneRequiredWithoutMessageLikeNestedInput
    user?: UserUpdateOneRequiredWithoutMessageLikesNestedInput
  }

  export type MessageLikeUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeCreateManyInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    messageId: number
    issueId: number
    userId: string
    evaluation: number
  }

  export type MessageLikeUpdateManyMutationInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type IssueReplyCreateInput = {
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
    user: UserCreateNestedOneWithoutReplysInput
    issue: IssueCreateNestedOneWithoutReplysInput
  }

  export type IssueReplyUncheckedCreateInput = {
    id?: number
    userId: string
    issueId: number
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
  }

  export type IssueReplyUpdateInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReplysNestedInput
    issue?: IssueUpdateOneRequiredWithoutReplysNestedInput
  }

  export type IssueReplyUncheckedUpdateInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    issueId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type IssueReplyCreateManyInput = {
    id?: number
    userId: string
    issueId: number
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
  }

  export type IssueReplyUpdateManyMutationInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type IssueReplyUncheckedUpdateManyInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    issueId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
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

  export type EnumIssueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusFilter<$PrismaModel> | $Enums.IssueStatus
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

  export type IssueBlockListRelationFilter = {
    every?: IssueBlockWhereInput
    some?: IssueBlockWhereInput
    none?: IssueBlockWhereInput
  }

  export type CelebListRelationFilter = {
    every?: CelebWhereInput
    some?: CelebWhereInput
    none?: CelebWhereInput
  }

  export type RatingListRelationFilter = {
    every?: RatingWhereInput
    some?: RatingWhereInput
    none?: RatingWhereInput
  }

  export type IssueMessageListRelationFilter = {
    every?: IssueMessageWhereInput
    some?: IssueMessageWhereInput
    none?: IssueMessageWhereInput
  }

  export type MessageLikeListRelationFilter = {
    every?: MessageLikeWhereInput
    some?: MessageLikeWhereInput
    none?: MessageLikeWhereInput
  }

  export type IssueReplyListRelationFilter = {
    every?: IssueReplyWhereInput
    some?: IssueReplyWhereInput
    none?: IssueReplyWhereInput
  }

  export type IssueBlockOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CelebOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type RatingOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssueMessageOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type MessageLikeOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssueReplyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type IssueCountOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    weight?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueAvgOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
  }

  export type IssueMaxOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    weight?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueMinOrderByAggregateInput = {
    id?: SortOrder
    slug?: SortOrder
    weight?: SortOrder
    title?: SortOrder
    description?: SortOrder
    coverImage?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
  }

  export type IssueSumOrderByAggregateInput = {
    id?: SortOrder
    weight?: SortOrder
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

  export type EnumIssueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel> | $Enums.IssueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueStatusFilter<$PrismaModel>
    _max?: NestedEnumIssueStatusFilter<$PrismaModel>
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

  export type IssueRelationFilter = {
    is?: IssueWhereInput
    isNot?: IssueWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type IssueBlockCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    seq?: SortOrder
    title?: SortOrder
    blockType?: SortOrder
    content?: SortOrder
    isRemoved?: SortOrder
  }

  export type IssueBlockAvgOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    seq?: SortOrder
  }

  export type IssueBlockMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    seq?: SortOrder
    title?: SortOrder
    blockType?: SortOrder
    content?: SortOrder
    isRemoved?: SortOrder
  }

  export type IssueBlockMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    seq?: SortOrder
    title?: SortOrder
    blockType?: SortOrder
    content?: SortOrder
    isRemoved?: SortOrder
  }

  export type IssueBlockSumOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    seq?: SortOrder
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

  export type EnumBiasFilter<$PrismaModel = never> = {
    equals?: $Enums.Bias | EnumBiasFieldRefInput<$PrismaModel>
    in?: $Enums.Bias[] | ListEnumBiasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bias[] | ListEnumBiasFieldRefInput<$PrismaModel>
    not?: NestedEnumBiasFilter<$PrismaModel> | $Enums.Bias
  }

  export type IssueBlockRelationFilter = {
    is?: IssueBlockWhereInput
    isNot?: IssueBlockWhereInput
  }

  export type IssueMessageCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isRemoved?: SortOrder
    issueId?: SortOrder
    blockId?: SortOrder
    celebId?: SortOrder
    celebName?: SortOrder
    celebDescription?: SortOrder
    celebAvatar?: SortOrder
    content?: SortOrder
    link?: SortOrder
    linkFrom?: SortOrder
    backgroundColor?: SortOrder
    bias?: SortOrder
    reportedAt?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueMessageAvgOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    blockId?: SortOrder
    celebId?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueMessageMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isRemoved?: SortOrder
    issueId?: SortOrder
    blockId?: SortOrder
    celebId?: SortOrder
    celebName?: SortOrder
    celebDescription?: SortOrder
    celebAvatar?: SortOrder
    content?: SortOrder
    link?: SortOrder
    linkFrom?: SortOrder
    backgroundColor?: SortOrder
    bias?: SortOrder
    reportedAt?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueMessageMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    isRemoved?: SortOrder
    issueId?: SortOrder
    blockId?: SortOrder
    celebId?: SortOrder
    celebName?: SortOrder
    celebDescription?: SortOrder
    celebAvatar?: SortOrder
    content?: SortOrder
    link?: SortOrder
    linkFrom?: SortOrder
    backgroundColor?: SortOrder
    bias?: SortOrder
    reportedAt?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueMessageSumOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    blockId?: SortOrder
    celebId?: SortOrder
    likeCount?: SortOrder
  }

  export type EnumBiasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Bias | EnumBiasFieldRefInput<$PrismaModel>
    in?: $Enums.Bias[] | ListEnumBiasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bias[] | ListEnumBiasFieldRefInput<$PrismaModel>
    not?: NestedEnumBiasWithAggregatesFilter<$PrismaModel> | $Enums.Bias
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBiasFilter<$PrismaModel>
    _max?: NestedEnumBiasFilter<$PrismaModel>
  }

  export type IssueListRelationFilter = {
    every?: IssueWhereInput
    some?: IssueWhereInput
    none?: IssueWhereInput
  }

  export type IssueOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type CelebCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
  }

  export type CelebAvgOrderByAggregateInput = {
    id?: SortOrder
  }

  export type CelebMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
  }

  export type CelebMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    name?: SortOrder
    description?: SortOrder
    avatar?: SortOrder
  }

  export type CelebSumOrderByAggregateInput = {
    id?: SortOrder
  }

  export type IntNullableFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableFilter<$PrismaModel> | number | null
  }

  export type UserRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type AccountProviderProviderAccountIdCompoundUniqueInput = {
    provider: string
    providerAccountId: string
  }

  export type AccountCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
    token_type?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountAvgOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type AccountMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
    token_type?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    type?: SortOrder
    scope?: SortOrder
    provider?: SortOrder
    providerAccountId?: SortOrder
    refresh_token?: SortOrder
    access_token?: SortOrder
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
    token_type?: SortOrder
    id_token?: SortOrder
    session_state?: SortOrder
  }

  export type AccountSumOrderByAggregateInput = {
    expires_at?: SortOrder
    refresh_token_expires_in?: SortOrder
  }

  export type IntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type SessionCountOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMaxOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
  }

  export type SessionMinOrderByAggregateInput = {
    id?: SortOrder
    sessionToken?: SortOrder
    userId?: SortOrder
    expires?: SortOrder
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

  export type AccountListRelationFilter = {
    every?: AccountWhereInput
    some?: AccountWhereInput
    none?: AccountWhereInput
  }

  export type SessionListRelationFilter = {
    every?: SessionWhereInput
    some?: SessionWhereInput
    none?: SessionWhereInput
  }

  export type AccountOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type SessionOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    emailVerified?: SortOrder
    image?: SortOrder
    isAdmin?: SortOrder
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

  export type VerificationTokenIdentifierTokenCompoundUniqueInput = {
    identifier: string
    token: string
  }

  export type VerificationTokenCountOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMaxOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type VerificationTokenMinOrderByAggregateInput = {
    identifier?: SortOrder
    token?: SortOrder
    expires?: SortOrder
  }

  export type RatingCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type RatingAvgOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    rating?: SortOrder
  }

  export type RatingMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type RatingMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    rating?: SortOrder
  }

  export type RatingSumOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    rating?: SortOrder
  }

  export type IssueMessageRelationFilter = {
    is?: IssueMessageWhereInput
    isNot?: IssueMessageWhereInput
  }

  export type MessageLikeCountOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messageId?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    evaluation?: SortOrder
  }

  export type MessageLikeAvgOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    issueId?: SortOrder
    evaluation?: SortOrder
  }

  export type MessageLikeMaxOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messageId?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    evaluation?: SortOrder
  }

  export type MessageLikeMinOrderByAggregateInput = {
    id?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    messageId?: SortOrder
    issueId?: SortOrder
    userId?: SortOrder
    evaluation?: SortOrder
  }

  export type MessageLikeSumOrderByAggregateInput = {
    id?: SortOrder
    messageId?: SortOrder
    issueId?: SortOrder
    evaluation?: SortOrder
  }

  export type IssueReplyCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    issueId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueReplyAvgOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueReplyMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    issueId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueReplyMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    issueId?: SortOrder
    content?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueReplySumOrderByAggregateInput = {
    id?: SortOrder
    issueId?: SortOrder
    likeCount?: SortOrder
  }

  export type IssueBlockCreateNestedManyWithoutIssueInput = {
    create?: XOR<IssueBlockCreateWithoutIssueInput, IssueBlockUncheckedCreateWithoutIssueInput> | IssueBlockCreateWithoutIssueInput[] | IssueBlockUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueBlockCreateOrConnectWithoutIssueInput | IssueBlockCreateOrConnectWithoutIssueInput[]
    createMany?: IssueBlockCreateManyIssueInputEnvelope
    connect?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
  }

  export type CelebCreateNestedManyWithoutIssuesInput = {
    create?: XOR<CelebCreateWithoutIssuesInput, CelebUncheckedCreateWithoutIssuesInput> | CelebCreateWithoutIssuesInput[] | CelebUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutIssuesInput | CelebCreateOrConnectWithoutIssuesInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutIssueInput = {
    create?: XOR<RatingCreateWithoutIssueInput, RatingUncheckedCreateWithoutIssueInput> | RatingCreateWithoutIssueInput[] | RatingUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutIssueInput | RatingCreateOrConnectWithoutIssueInput[]
    createMany?: RatingCreateManyIssueInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type IssueMessageCreateNestedManyWithoutIssueInput = {
    create?: XOR<IssueMessageCreateWithoutIssueInput, IssueMessageUncheckedCreateWithoutIssueInput> | IssueMessageCreateWithoutIssueInput[] | IssueMessageUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueMessageCreateOrConnectWithoutIssueInput | IssueMessageCreateOrConnectWithoutIssueInput[]
    createMany?: IssueMessageCreateManyIssueInputEnvelope
    connect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
  }

  export type MessageLikeCreateNestedManyWithoutIssueInput = {
    create?: XOR<MessageLikeCreateWithoutIssueInput, MessageLikeUncheckedCreateWithoutIssueInput> | MessageLikeCreateWithoutIssueInput[] | MessageLikeUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutIssueInput | MessageLikeCreateOrConnectWithoutIssueInput[]
    createMany?: MessageLikeCreateManyIssueInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type IssueReplyCreateNestedManyWithoutIssueInput = {
    create?: XOR<IssueReplyCreateWithoutIssueInput, IssueReplyUncheckedCreateWithoutIssueInput> | IssueReplyCreateWithoutIssueInput[] | IssueReplyUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueReplyCreateOrConnectWithoutIssueInput | IssueReplyCreateOrConnectWithoutIssueInput[]
    createMany?: IssueReplyCreateManyIssueInputEnvelope
    connect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
  }

  export type IssueBlockUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<IssueBlockCreateWithoutIssueInput, IssueBlockUncheckedCreateWithoutIssueInput> | IssueBlockCreateWithoutIssueInput[] | IssueBlockUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueBlockCreateOrConnectWithoutIssueInput | IssueBlockCreateOrConnectWithoutIssueInput[]
    createMany?: IssueBlockCreateManyIssueInputEnvelope
    connect?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
  }

  export type CelebUncheckedCreateNestedManyWithoutIssuesInput = {
    create?: XOR<CelebCreateWithoutIssuesInput, CelebUncheckedCreateWithoutIssuesInput> | CelebCreateWithoutIssuesInput[] | CelebUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutIssuesInput | CelebCreateOrConnectWithoutIssuesInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<RatingCreateWithoutIssueInput, RatingUncheckedCreateWithoutIssueInput> | RatingCreateWithoutIssueInput[] | RatingUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutIssueInput | RatingCreateOrConnectWithoutIssueInput[]
    createMany?: RatingCreateManyIssueInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type IssueMessageUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<IssueMessageCreateWithoutIssueInput, IssueMessageUncheckedCreateWithoutIssueInput> | IssueMessageCreateWithoutIssueInput[] | IssueMessageUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueMessageCreateOrConnectWithoutIssueInput | IssueMessageCreateOrConnectWithoutIssueInput[]
    createMany?: IssueMessageCreateManyIssueInputEnvelope
    connect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
  }

  export type MessageLikeUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<MessageLikeCreateWithoutIssueInput, MessageLikeUncheckedCreateWithoutIssueInput> | MessageLikeCreateWithoutIssueInput[] | MessageLikeUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutIssueInput | MessageLikeCreateOrConnectWithoutIssueInput[]
    createMany?: MessageLikeCreateManyIssueInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type IssueReplyUncheckedCreateNestedManyWithoutIssueInput = {
    create?: XOR<IssueReplyCreateWithoutIssueInput, IssueReplyUncheckedCreateWithoutIssueInput> | IssueReplyCreateWithoutIssueInput[] | IssueReplyUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueReplyCreateOrConnectWithoutIssueInput | IssueReplyCreateOrConnectWithoutIssueInput[]
    createMany?: IssueReplyCreateManyIssueInputEnvelope
    connect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type EnumIssueStatusFieldUpdateOperationsInput = {
    set?: $Enums.IssueStatus
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type IssueBlockUpdateManyWithoutIssueNestedInput = {
    create?: XOR<IssueBlockCreateWithoutIssueInput, IssueBlockUncheckedCreateWithoutIssueInput> | IssueBlockCreateWithoutIssueInput[] | IssueBlockUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueBlockCreateOrConnectWithoutIssueInput | IssueBlockCreateOrConnectWithoutIssueInput[]
    upsert?: IssueBlockUpsertWithWhereUniqueWithoutIssueInput | IssueBlockUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: IssueBlockCreateManyIssueInputEnvelope
    set?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
    disconnect?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
    delete?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
    connect?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
    update?: IssueBlockUpdateWithWhereUniqueWithoutIssueInput | IssueBlockUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: IssueBlockUpdateManyWithWhereWithoutIssueInput | IssueBlockUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: IssueBlockScalarWhereInput | IssueBlockScalarWhereInput[]
  }

  export type CelebUpdateManyWithoutIssuesNestedInput = {
    create?: XOR<CelebCreateWithoutIssuesInput, CelebUncheckedCreateWithoutIssuesInput> | CelebCreateWithoutIssuesInput[] | CelebUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutIssuesInput | CelebCreateOrConnectWithoutIssuesInput[]
    upsert?: CelebUpsertWithWhereUniqueWithoutIssuesInput | CelebUpsertWithWhereUniqueWithoutIssuesInput[]
    set?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    disconnect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    delete?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    update?: CelebUpdateWithWhereUniqueWithoutIssuesInput | CelebUpdateWithWhereUniqueWithoutIssuesInput[]
    updateMany?: CelebUpdateManyWithWhereWithoutIssuesInput | CelebUpdateManyWithWhereWithoutIssuesInput[]
    deleteMany?: CelebScalarWhereInput | CelebScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutIssueNestedInput = {
    create?: XOR<RatingCreateWithoutIssueInput, RatingUncheckedCreateWithoutIssueInput> | RatingCreateWithoutIssueInput[] | RatingUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutIssueInput | RatingCreateOrConnectWithoutIssueInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutIssueInput | RatingUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: RatingCreateManyIssueInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutIssueInput | RatingUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutIssueInput | RatingUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type IssueMessageUpdateManyWithoutIssueNestedInput = {
    create?: XOR<IssueMessageCreateWithoutIssueInput, IssueMessageUncheckedCreateWithoutIssueInput> | IssueMessageCreateWithoutIssueInput[] | IssueMessageUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueMessageCreateOrConnectWithoutIssueInput | IssueMessageCreateOrConnectWithoutIssueInput[]
    upsert?: IssueMessageUpsertWithWhereUniqueWithoutIssueInput | IssueMessageUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: IssueMessageCreateManyIssueInputEnvelope
    set?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    disconnect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    delete?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    connect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    update?: IssueMessageUpdateWithWhereUniqueWithoutIssueInput | IssueMessageUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: IssueMessageUpdateManyWithWhereWithoutIssueInput | IssueMessageUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: IssueMessageScalarWhereInput | IssueMessageScalarWhereInput[]
  }

  export type MessageLikeUpdateManyWithoutIssueNestedInput = {
    create?: XOR<MessageLikeCreateWithoutIssueInput, MessageLikeUncheckedCreateWithoutIssueInput> | MessageLikeCreateWithoutIssueInput[] | MessageLikeUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutIssueInput | MessageLikeCreateOrConnectWithoutIssueInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutIssueInput | MessageLikeUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: MessageLikeCreateManyIssueInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutIssueInput | MessageLikeUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutIssueInput | MessageLikeUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type IssueReplyUpdateManyWithoutIssueNestedInput = {
    create?: XOR<IssueReplyCreateWithoutIssueInput, IssueReplyUncheckedCreateWithoutIssueInput> | IssueReplyCreateWithoutIssueInput[] | IssueReplyUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueReplyCreateOrConnectWithoutIssueInput | IssueReplyCreateOrConnectWithoutIssueInput[]
    upsert?: IssueReplyUpsertWithWhereUniqueWithoutIssueInput | IssueReplyUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: IssueReplyCreateManyIssueInputEnvelope
    set?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    disconnect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    delete?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    connect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    update?: IssueReplyUpdateWithWhereUniqueWithoutIssueInput | IssueReplyUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: IssueReplyUpdateManyWithWhereWithoutIssueInput | IssueReplyUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: IssueReplyScalarWhereInput | IssueReplyScalarWhereInput[]
  }

  export type IssueBlockUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<IssueBlockCreateWithoutIssueInput, IssueBlockUncheckedCreateWithoutIssueInput> | IssueBlockCreateWithoutIssueInput[] | IssueBlockUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueBlockCreateOrConnectWithoutIssueInput | IssueBlockCreateOrConnectWithoutIssueInput[]
    upsert?: IssueBlockUpsertWithWhereUniqueWithoutIssueInput | IssueBlockUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: IssueBlockCreateManyIssueInputEnvelope
    set?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
    disconnect?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
    delete?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
    connect?: IssueBlockWhereUniqueInput | IssueBlockWhereUniqueInput[]
    update?: IssueBlockUpdateWithWhereUniqueWithoutIssueInput | IssueBlockUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: IssueBlockUpdateManyWithWhereWithoutIssueInput | IssueBlockUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: IssueBlockScalarWhereInput | IssueBlockScalarWhereInput[]
  }

  export type CelebUncheckedUpdateManyWithoutIssuesNestedInput = {
    create?: XOR<CelebCreateWithoutIssuesInput, CelebUncheckedCreateWithoutIssuesInput> | CelebCreateWithoutIssuesInput[] | CelebUncheckedCreateWithoutIssuesInput[]
    connectOrCreate?: CelebCreateOrConnectWithoutIssuesInput | CelebCreateOrConnectWithoutIssuesInput[]
    upsert?: CelebUpsertWithWhereUniqueWithoutIssuesInput | CelebUpsertWithWhereUniqueWithoutIssuesInput[]
    set?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    disconnect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    delete?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    connect?: CelebWhereUniqueInput | CelebWhereUniqueInput[]
    update?: CelebUpdateWithWhereUniqueWithoutIssuesInput | CelebUpdateWithWhereUniqueWithoutIssuesInput[]
    updateMany?: CelebUpdateManyWithWhereWithoutIssuesInput | CelebUpdateManyWithWhereWithoutIssuesInput[]
    deleteMany?: CelebScalarWhereInput | CelebScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<RatingCreateWithoutIssueInput, RatingUncheckedCreateWithoutIssueInput> | RatingCreateWithoutIssueInput[] | RatingUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutIssueInput | RatingCreateOrConnectWithoutIssueInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutIssueInput | RatingUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: RatingCreateManyIssueInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutIssueInput | RatingUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutIssueInput | RatingUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type IssueMessageUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<IssueMessageCreateWithoutIssueInput, IssueMessageUncheckedCreateWithoutIssueInput> | IssueMessageCreateWithoutIssueInput[] | IssueMessageUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueMessageCreateOrConnectWithoutIssueInput | IssueMessageCreateOrConnectWithoutIssueInput[]
    upsert?: IssueMessageUpsertWithWhereUniqueWithoutIssueInput | IssueMessageUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: IssueMessageCreateManyIssueInputEnvelope
    set?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    disconnect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    delete?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    connect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    update?: IssueMessageUpdateWithWhereUniqueWithoutIssueInput | IssueMessageUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: IssueMessageUpdateManyWithWhereWithoutIssueInput | IssueMessageUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: IssueMessageScalarWhereInput | IssueMessageScalarWhereInput[]
  }

  export type MessageLikeUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<MessageLikeCreateWithoutIssueInput, MessageLikeUncheckedCreateWithoutIssueInput> | MessageLikeCreateWithoutIssueInput[] | MessageLikeUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutIssueInput | MessageLikeCreateOrConnectWithoutIssueInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutIssueInput | MessageLikeUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: MessageLikeCreateManyIssueInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutIssueInput | MessageLikeUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutIssueInput | MessageLikeUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type IssueReplyUncheckedUpdateManyWithoutIssueNestedInput = {
    create?: XOR<IssueReplyCreateWithoutIssueInput, IssueReplyUncheckedCreateWithoutIssueInput> | IssueReplyCreateWithoutIssueInput[] | IssueReplyUncheckedCreateWithoutIssueInput[]
    connectOrCreate?: IssueReplyCreateOrConnectWithoutIssueInput | IssueReplyCreateOrConnectWithoutIssueInput[]
    upsert?: IssueReplyUpsertWithWhereUniqueWithoutIssueInput | IssueReplyUpsertWithWhereUniqueWithoutIssueInput[]
    createMany?: IssueReplyCreateManyIssueInputEnvelope
    set?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    disconnect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    delete?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    connect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    update?: IssueReplyUpdateWithWhereUniqueWithoutIssueInput | IssueReplyUpdateWithWhereUniqueWithoutIssueInput[]
    updateMany?: IssueReplyUpdateManyWithWhereWithoutIssueInput | IssueReplyUpdateManyWithWhereWithoutIssueInput[]
    deleteMany?: IssueReplyScalarWhereInput | IssueReplyScalarWhereInput[]
  }

  export type IssueCreateNestedOneWithoutIssueBlocksInput = {
    create?: XOR<IssueCreateWithoutIssueBlocksInput, IssueUncheckedCreateWithoutIssueBlocksInput>
    connectOrCreate?: IssueCreateOrConnectWithoutIssueBlocksInput
    connect?: IssueWhereUniqueInput
  }

  export type IssueMessageCreateNestedManyWithoutBlockInput = {
    create?: XOR<IssueMessageCreateWithoutBlockInput, IssueMessageUncheckedCreateWithoutBlockInput> | IssueMessageCreateWithoutBlockInput[] | IssueMessageUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: IssueMessageCreateOrConnectWithoutBlockInput | IssueMessageCreateOrConnectWithoutBlockInput[]
    createMany?: IssueMessageCreateManyBlockInputEnvelope
    connect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
  }

  export type IssueMessageUncheckedCreateNestedManyWithoutBlockInput = {
    create?: XOR<IssueMessageCreateWithoutBlockInput, IssueMessageUncheckedCreateWithoutBlockInput> | IssueMessageCreateWithoutBlockInput[] | IssueMessageUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: IssueMessageCreateOrConnectWithoutBlockInput | IssueMessageCreateOrConnectWithoutBlockInput[]
    createMany?: IssueMessageCreateManyBlockInputEnvelope
    connect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type IssueUpdateOneRequiredWithoutIssueBlocksNestedInput = {
    create?: XOR<IssueCreateWithoutIssueBlocksInput, IssueUncheckedCreateWithoutIssueBlocksInput>
    connectOrCreate?: IssueCreateOrConnectWithoutIssueBlocksInput
    upsert?: IssueUpsertWithoutIssueBlocksInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutIssueBlocksInput, IssueUpdateWithoutIssueBlocksInput>, IssueUncheckedUpdateWithoutIssueBlocksInput>
  }

  export type IssueMessageUpdateManyWithoutBlockNestedInput = {
    create?: XOR<IssueMessageCreateWithoutBlockInput, IssueMessageUncheckedCreateWithoutBlockInput> | IssueMessageCreateWithoutBlockInput[] | IssueMessageUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: IssueMessageCreateOrConnectWithoutBlockInput | IssueMessageCreateOrConnectWithoutBlockInput[]
    upsert?: IssueMessageUpsertWithWhereUniqueWithoutBlockInput | IssueMessageUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: IssueMessageCreateManyBlockInputEnvelope
    set?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    disconnect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    delete?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    connect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    update?: IssueMessageUpdateWithWhereUniqueWithoutBlockInput | IssueMessageUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: IssueMessageUpdateManyWithWhereWithoutBlockInput | IssueMessageUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: IssueMessageScalarWhereInput | IssueMessageScalarWhereInput[]
  }

  export type IssueMessageUncheckedUpdateManyWithoutBlockNestedInput = {
    create?: XOR<IssueMessageCreateWithoutBlockInput, IssueMessageUncheckedCreateWithoutBlockInput> | IssueMessageCreateWithoutBlockInput[] | IssueMessageUncheckedCreateWithoutBlockInput[]
    connectOrCreate?: IssueMessageCreateOrConnectWithoutBlockInput | IssueMessageCreateOrConnectWithoutBlockInput[]
    upsert?: IssueMessageUpsertWithWhereUniqueWithoutBlockInput | IssueMessageUpsertWithWhereUniqueWithoutBlockInput[]
    createMany?: IssueMessageCreateManyBlockInputEnvelope
    set?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    disconnect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    delete?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    connect?: IssueMessageWhereUniqueInput | IssueMessageWhereUniqueInput[]
    update?: IssueMessageUpdateWithWhereUniqueWithoutBlockInput | IssueMessageUpdateWithWhereUniqueWithoutBlockInput[]
    updateMany?: IssueMessageUpdateManyWithWhereWithoutBlockInput | IssueMessageUpdateManyWithWhereWithoutBlockInput[]
    deleteMany?: IssueMessageScalarWhereInput | IssueMessageScalarWhereInput[]
  }

  export type IssueCreateNestedOneWithoutIssueMessagesInput = {
    create?: XOR<IssueCreateWithoutIssueMessagesInput, IssueUncheckedCreateWithoutIssueMessagesInput>
    connectOrCreate?: IssueCreateOrConnectWithoutIssueMessagesInput
    connect?: IssueWhereUniqueInput
  }

  export type IssueBlockCreateNestedOneWithoutMessagesInput = {
    create?: XOR<IssueBlockCreateWithoutMessagesInput, IssueBlockUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: IssueBlockCreateOrConnectWithoutMessagesInput
    connect?: IssueBlockWhereUniqueInput
  }

  export type MessageLikeCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput> | MessageLikeCreateWithoutMessageInput[] | MessageLikeUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutMessageInput | MessageLikeCreateOrConnectWithoutMessageInput[]
    createMany?: MessageLikeCreateManyMessageInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type MessageLikeUncheckedCreateNestedManyWithoutMessageInput = {
    create?: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput> | MessageLikeCreateWithoutMessageInput[] | MessageLikeUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutMessageInput | MessageLikeCreateOrConnectWithoutMessageInput[]
    createMany?: MessageLikeCreateManyMessageInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type EnumBiasFieldUpdateOperationsInput = {
    set?: $Enums.Bias
  }

  export type IssueUpdateOneRequiredWithoutIssueMessagesNestedInput = {
    create?: XOR<IssueCreateWithoutIssueMessagesInput, IssueUncheckedCreateWithoutIssueMessagesInput>
    connectOrCreate?: IssueCreateOrConnectWithoutIssueMessagesInput
    upsert?: IssueUpsertWithoutIssueMessagesInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutIssueMessagesInput, IssueUpdateWithoutIssueMessagesInput>, IssueUncheckedUpdateWithoutIssueMessagesInput>
  }

  export type IssueBlockUpdateOneRequiredWithoutMessagesNestedInput = {
    create?: XOR<IssueBlockCreateWithoutMessagesInput, IssueBlockUncheckedCreateWithoutMessagesInput>
    connectOrCreate?: IssueBlockCreateOrConnectWithoutMessagesInput
    upsert?: IssueBlockUpsertWithoutMessagesInput
    connect?: IssueBlockWhereUniqueInput
    update?: XOR<XOR<IssueBlockUpdateToOneWithWhereWithoutMessagesInput, IssueBlockUpdateWithoutMessagesInput>, IssueBlockUncheckedUpdateWithoutMessagesInput>
  }

  export type MessageLikeUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput> | MessageLikeCreateWithoutMessageInput[] | MessageLikeUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutMessageInput | MessageLikeCreateOrConnectWithoutMessageInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutMessageInput | MessageLikeUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageLikeCreateManyMessageInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutMessageInput | MessageLikeUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutMessageInput | MessageLikeUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type MessageLikeUncheckedUpdateManyWithoutMessageNestedInput = {
    create?: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput> | MessageLikeCreateWithoutMessageInput[] | MessageLikeUncheckedCreateWithoutMessageInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutMessageInput | MessageLikeCreateOrConnectWithoutMessageInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutMessageInput | MessageLikeUpsertWithWhereUniqueWithoutMessageInput[]
    createMany?: MessageLikeCreateManyMessageInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutMessageInput | MessageLikeUpdateWithWhereUniqueWithoutMessageInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutMessageInput | MessageLikeUpdateManyWithWhereWithoutMessageInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type IssueCreateNestedManyWithoutCelebsInput = {
    create?: XOR<IssueCreateWithoutCelebsInput, IssueUncheckedCreateWithoutCelebsInput> | IssueCreateWithoutCelebsInput[] | IssueUncheckedCreateWithoutCelebsInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutCelebsInput | IssueCreateOrConnectWithoutCelebsInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type IssueUncheckedCreateNestedManyWithoutCelebsInput = {
    create?: XOR<IssueCreateWithoutCelebsInput, IssueUncheckedCreateWithoutCelebsInput> | IssueCreateWithoutCelebsInput[] | IssueUncheckedCreateWithoutCelebsInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutCelebsInput | IssueCreateOrConnectWithoutCelebsInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
  }

  export type IssueUpdateManyWithoutCelebsNestedInput = {
    create?: XOR<IssueCreateWithoutCelebsInput, IssueUncheckedCreateWithoutCelebsInput> | IssueCreateWithoutCelebsInput[] | IssueUncheckedCreateWithoutCelebsInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutCelebsInput | IssueCreateOrConnectWithoutCelebsInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutCelebsInput | IssueUpsertWithWhereUniqueWithoutCelebsInput[]
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutCelebsInput | IssueUpdateWithWhereUniqueWithoutCelebsInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutCelebsInput | IssueUpdateManyWithWhereWithoutCelebsInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type IssueUncheckedUpdateManyWithoutCelebsNestedInput = {
    create?: XOR<IssueCreateWithoutCelebsInput, IssueUncheckedCreateWithoutCelebsInput> | IssueCreateWithoutCelebsInput[] | IssueUncheckedCreateWithoutCelebsInput[]
    connectOrCreate?: IssueCreateOrConnectWithoutCelebsInput | IssueCreateOrConnectWithoutCelebsInput[]
    upsert?: IssueUpsertWithWhereUniqueWithoutCelebsInput | IssueUpsertWithWhereUniqueWithoutCelebsInput[]
    set?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    disconnect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    delete?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    connect?: IssueWhereUniqueInput | IssueWhereUniqueInput[]
    update?: IssueUpdateWithWhereUniqueWithoutCelebsInput | IssueUpdateWithWhereUniqueWithoutCelebsInput[]
    updateMany?: IssueUpdateManyWithWhereWithoutCelebsInput | IssueUpdateManyWithWhereWithoutCelebsInput[]
    deleteMany?: IssueScalarWhereInput | IssueScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutAccountsInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    connect?: UserWhereUniqueInput
  }

  export type NullableIntFieldUpdateOperationsInput = {
    set?: number | null
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneRequiredWithoutAccountsNestedInput = {
    create?: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    connectOrCreate?: UserCreateOrConnectWithoutAccountsInput
    upsert?: UserUpsertWithoutAccountsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutAccountsInput, UserUpdateWithoutAccountsInput>, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserCreateNestedOneWithoutSessionsInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutSessionsNestedInput = {
    create?: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    connectOrCreate?: UserCreateOrConnectWithoutSessionsInput
    upsert?: UserUpsertWithoutSessionsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutSessionsInput, UserUpdateWithoutSessionsInput>, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type AccountCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type RatingCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type MessageLikeCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput> | MessageLikeCreateWithoutUserInput[] | MessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutUserInput | MessageLikeCreateOrConnectWithoutUserInput[]
    createMany?: MessageLikeCreateManyUserInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type IssueReplyCreateNestedManyWithoutUserInput = {
    create?: XOR<IssueReplyCreateWithoutUserInput, IssueReplyUncheckedCreateWithoutUserInput> | IssueReplyCreateWithoutUserInput[] | IssueReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssueReplyCreateOrConnectWithoutUserInput | IssueReplyCreateOrConnectWithoutUserInput[]
    createMany?: IssueReplyCreateManyUserInputEnvelope
    connect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
  }

  export type AccountUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
  }

  export type SessionUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
  }

  export type RatingUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
  }

  export type MessageLikeUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput> | MessageLikeCreateWithoutUserInput[] | MessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutUserInput | MessageLikeCreateOrConnectWithoutUserInput[]
    createMany?: MessageLikeCreateManyUserInputEnvelope
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
  }

  export type IssueReplyUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<IssueReplyCreateWithoutUserInput, IssueReplyUncheckedCreateWithoutUserInput> | IssueReplyCreateWithoutUserInput[] | IssueReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssueReplyCreateOrConnectWithoutUserInput | IssueReplyCreateOrConnectWithoutUserInput[]
    createMany?: IssueReplyCreateManyUserInputEnvelope
    connect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type AccountUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RatingUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type MessageLikeUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput> | MessageLikeCreateWithoutUserInput[] | MessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutUserInput | MessageLikeCreateOrConnectWithoutUserInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutUserInput | MessageLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageLikeCreateManyUserInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutUserInput | MessageLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutUserInput | MessageLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type IssueReplyUpdateManyWithoutUserNestedInput = {
    create?: XOR<IssueReplyCreateWithoutUserInput, IssueReplyUncheckedCreateWithoutUserInput> | IssueReplyCreateWithoutUserInput[] | IssueReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssueReplyCreateOrConnectWithoutUserInput | IssueReplyCreateOrConnectWithoutUserInput[]
    upsert?: IssueReplyUpsertWithWhereUniqueWithoutUserInput | IssueReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IssueReplyCreateManyUserInputEnvelope
    set?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    disconnect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    delete?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    connect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    update?: IssueReplyUpdateWithWhereUniqueWithoutUserInput | IssueReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IssueReplyUpdateManyWithWhereWithoutUserInput | IssueReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IssueReplyScalarWhereInput | IssueReplyScalarWhereInput[]
  }

  export type AccountUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput> | AccountCreateWithoutUserInput[] | AccountUncheckedCreateWithoutUserInput[]
    connectOrCreate?: AccountCreateOrConnectWithoutUserInput | AccountCreateOrConnectWithoutUserInput[]
    upsert?: AccountUpsertWithWhereUniqueWithoutUserInput | AccountUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: AccountCreateManyUserInputEnvelope
    set?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    disconnect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    delete?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    connect?: AccountWhereUniqueInput | AccountWhereUniqueInput[]
    update?: AccountUpdateWithWhereUniqueWithoutUserInput | AccountUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: AccountUpdateManyWithWhereWithoutUserInput | AccountUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: AccountScalarWhereInput | AccountScalarWhereInput[]
  }

  export type SessionUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput> | SessionCreateWithoutUserInput[] | SessionUncheckedCreateWithoutUserInput[]
    connectOrCreate?: SessionCreateOrConnectWithoutUserInput | SessionCreateOrConnectWithoutUserInput[]
    upsert?: SessionUpsertWithWhereUniqueWithoutUserInput | SessionUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: SessionCreateManyUserInputEnvelope
    set?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    disconnect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    delete?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    connect?: SessionWhereUniqueInput | SessionWhereUniqueInput[]
    update?: SessionUpdateWithWhereUniqueWithoutUserInput | SessionUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: SessionUpdateManyWithWhereWithoutUserInput | SessionUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: SessionScalarWhereInput | SessionScalarWhereInput[]
  }

  export type RatingUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput> | RatingCreateWithoutUserInput[] | RatingUncheckedCreateWithoutUserInput[]
    connectOrCreate?: RatingCreateOrConnectWithoutUserInput | RatingCreateOrConnectWithoutUserInput[]
    upsert?: RatingUpsertWithWhereUniqueWithoutUserInput | RatingUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: RatingCreateManyUserInputEnvelope
    set?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    disconnect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    delete?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    connect?: RatingWhereUniqueInput | RatingWhereUniqueInput[]
    update?: RatingUpdateWithWhereUniqueWithoutUserInput | RatingUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: RatingUpdateManyWithWhereWithoutUserInput | RatingUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: RatingScalarWhereInput | RatingScalarWhereInput[]
  }

  export type MessageLikeUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput> | MessageLikeCreateWithoutUserInput[] | MessageLikeUncheckedCreateWithoutUserInput[]
    connectOrCreate?: MessageLikeCreateOrConnectWithoutUserInput | MessageLikeCreateOrConnectWithoutUserInput[]
    upsert?: MessageLikeUpsertWithWhereUniqueWithoutUserInput | MessageLikeUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: MessageLikeCreateManyUserInputEnvelope
    set?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    disconnect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    delete?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    connect?: MessageLikeWhereUniqueInput | MessageLikeWhereUniqueInput[]
    update?: MessageLikeUpdateWithWhereUniqueWithoutUserInput | MessageLikeUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: MessageLikeUpdateManyWithWhereWithoutUserInput | MessageLikeUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
  }

  export type IssueReplyUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<IssueReplyCreateWithoutUserInput, IssueReplyUncheckedCreateWithoutUserInput> | IssueReplyCreateWithoutUserInput[] | IssueReplyUncheckedCreateWithoutUserInput[]
    connectOrCreate?: IssueReplyCreateOrConnectWithoutUserInput | IssueReplyCreateOrConnectWithoutUserInput[]
    upsert?: IssueReplyUpsertWithWhereUniqueWithoutUserInput | IssueReplyUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: IssueReplyCreateManyUserInputEnvelope
    set?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    disconnect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    delete?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    connect?: IssueReplyWhereUniqueInput | IssueReplyWhereUniqueInput[]
    update?: IssueReplyUpdateWithWhereUniqueWithoutUserInput | IssueReplyUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: IssueReplyUpdateManyWithWhereWithoutUserInput | IssueReplyUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: IssueReplyScalarWhereInput | IssueReplyScalarWhereInput[]
  }

  export type IssueCreateNestedOneWithoutRatingsInput = {
    create?: XOR<IssueCreateWithoutRatingsInput, IssueUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: IssueCreateOrConnectWithoutRatingsInput
    connect?: IssueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRatingsInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    connect?: UserWhereUniqueInput
  }

  export type IssueUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<IssueCreateWithoutRatingsInput, IssueUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: IssueCreateOrConnectWithoutRatingsInput
    upsert?: IssueUpsertWithoutRatingsInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutRatingsInput, IssueUpdateWithoutRatingsInput>, IssueUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateOneRequiredWithoutRatingsNestedInput = {
    create?: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    connectOrCreate?: UserCreateOrConnectWithoutRatingsInput
    upsert?: UserUpsertWithoutRatingsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRatingsInput, UserUpdateWithoutRatingsInput>, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type IssueMessageCreateNestedOneWithoutMessageLikeInput = {
    create?: XOR<IssueMessageCreateWithoutMessageLikeInput, IssueMessageUncheckedCreateWithoutMessageLikeInput>
    connectOrCreate?: IssueMessageCreateOrConnectWithoutMessageLikeInput
    connect?: IssueMessageWhereUniqueInput
  }

  export type IssueCreateNestedOneWithoutMessageLikeInput = {
    create?: XOR<IssueCreateWithoutMessageLikeInput, IssueUncheckedCreateWithoutMessageLikeInput>
    connectOrCreate?: IssueCreateOrConnectWithoutMessageLikeInput
    connect?: IssueWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutMessageLikesInput = {
    create?: XOR<UserCreateWithoutMessageLikesInput, UserUncheckedCreateWithoutMessageLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageLikesInput
    connect?: UserWhereUniqueInput
  }

  export type IssueMessageUpdateOneRequiredWithoutMessageLikeNestedInput = {
    create?: XOR<IssueMessageCreateWithoutMessageLikeInput, IssueMessageUncheckedCreateWithoutMessageLikeInput>
    connectOrCreate?: IssueMessageCreateOrConnectWithoutMessageLikeInput
    upsert?: IssueMessageUpsertWithoutMessageLikeInput
    connect?: IssueMessageWhereUniqueInput
    update?: XOR<XOR<IssueMessageUpdateToOneWithWhereWithoutMessageLikeInput, IssueMessageUpdateWithoutMessageLikeInput>, IssueMessageUncheckedUpdateWithoutMessageLikeInput>
  }

  export type IssueUpdateOneRequiredWithoutMessageLikeNestedInput = {
    create?: XOR<IssueCreateWithoutMessageLikeInput, IssueUncheckedCreateWithoutMessageLikeInput>
    connectOrCreate?: IssueCreateOrConnectWithoutMessageLikeInput
    upsert?: IssueUpsertWithoutMessageLikeInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutMessageLikeInput, IssueUpdateWithoutMessageLikeInput>, IssueUncheckedUpdateWithoutMessageLikeInput>
  }

  export type UserUpdateOneRequiredWithoutMessageLikesNestedInput = {
    create?: XOR<UserCreateWithoutMessageLikesInput, UserUncheckedCreateWithoutMessageLikesInput>
    connectOrCreate?: UserCreateOrConnectWithoutMessageLikesInput
    upsert?: UserUpsertWithoutMessageLikesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutMessageLikesInput, UserUpdateWithoutMessageLikesInput>, UserUncheckedUpdateWithoutMessageLikesInput>
  }

  export type UserCreateNestedOneWithoutReplysInput = {
    create?: XOR<UserCreateWithoutReplysInput, UserUncheckedCreateWithoutReplysInput>
    connectOrCreate?: UserCreateOrConnectWithoutReplysInput
    connect?: UserWhereUniqueInput
  }

  export type IssueCreateNestedOneWithoutReplysInput = {
    create?: XOR<IssueCreateWithoutReplysInput, IssueUncheckedCreateWithoutReplysInput>
    connectOrCreate?: IssueCreateOrConnectWithoutReplysInput
    connect?: IssueWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutReplysNestedInput = {
    create?: XOR<UserCreateWithoutReplysInput, UserUncheckedCreateWithoutReplysInput>
    connectOrCreate?: UserCreateOrConnectWithoutReplysInput
    upsert?: UserUpsertWithoutReplysInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutReplysInput, UserUpdateWithoutReplysInput>, UserUncheckedUpdateWithoutReplysInput>
  }

  export type IssueUpdateOneRequiredWithoutReplysNestedInput = {
    create?: XOR<IssueCreateWithoutReplysInput, IssueUncheckedCreateWithoutReplysInput>
    connectOrCreate?: IssueCreateOrConnectWithoutReplysInput
    upsert?: IssueUpsertWithoutReplysInput
    connect?: IssueWhereUniqueInput
    update?: XOR<XOR<IssueUpdateToOneWithWhereWithoutReplysInput, IssueUpdateWithoutReplysInput>, IssueUncheckedUpdateWithoutReplysInput>
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

  export type NestedEnumIssueStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusFilter<$PrismaModel> | $Enums.IssueStatus
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

  export type NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.IssueStatus | EnumIssueStatusFieldRefInput<$PrismaModel>
    in?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.IssueStatus[] | ListEnumIssueStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumIssueStatusWithAggregatesFilter<$PrismaModel> | $Enums.IssueStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumIssueStatusFilter<$PrismaModel>
    _max?: NestedEnumIssueStatusFilter<$PrismaModel>
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

  export type NestedEnumBiasFilter<$PrismaModel = never> = {
    equals?: $Enums.Bias | EnumBiasFieldRefInput<$PrismaModel>
    in?: $Enums.Bias[] | ListEnumBiasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bias[] | ListEnumBiasFieldRefInput<$PrismaModel>
    not?: NestedEnumBiasFilter<$PrismaModel> | $Enums.Bias
  }

  export type NestedEnumBiasWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.Bias | EnumBiasFieldRefInput<$PrismaModel>
    in?: $Enums.Bias[] | ListEnumBiasFieldRefInput<$PrismaModel>
    notIn?: $Enums.Bias[] | ListEnumBiasFieldRefInput<$PrismaModel>
    not?: NestedEnumBiasWithAggregatesFilter<$PrismaModel> | $Enums.Bias
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumBiasFilter<$PrismaModel>
    _max?: NestedEnumBiasFilter<$PrismaModel>
  }

  export type NestedIntNullableWithAggregatesFilter<$PrismaModel = never> = {
    equals?: number | IntFieldRefInput<$PrismaModel> | null
    in?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListIntFieldRefInput<$PrismaModel> | null
    lt?: number | IntFieldRefInput<$PrismaModel>
    lte?: number | IntFieldRefInput<$PrismaModel>
    gt?: number | IntFieldRefInput<$PrismaModel>
    gte?: number | IntFieldRefInput<$PrismaModel>
    not?: NestedIntNullableWithAggregatesFilter<$PrismaModel> | number | null
    _count?: NestedIntNullableFilter<$PrismaModel>
    _avg?: NestedFloatNullableFilter<$PrismaModel>
    _sum?: NestedIntNullableFilter<$PrismaModel>
    _min?: NestedIntNullableFilter<$PrismaModel>
    _max?: NestedIntNullableFilter<$PrismaModel>
  }

  export type NestedFloatNullableFilter<$PrismaModel = never> = {
    equals?: number | FloatFieldRefInput<$PrismaModel> | null
    in?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    notIn?: number[] | ListFloatFieldRefInput<$PrismaModel> | null
    lt?: number | FloatFieldRefInput<$PrismaModel>
    lte?: number | FloatFieldRefInput<$PrismaModel>
    gt?: number | FloatFieldRefInput<$PrismaModel>
    gte?: number | FloatFieldRefInput<$PrismaModel>
    not?: NestedFloatNullableFilter<$PrismaModel> | number | null
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

  export type IssueBlockCreateWithoutIssueInput = {
    createdAt: Date | string
    updatedAt: Date | string
    seq: number
    title?: string | null
    blockType: string
    content?: string | null
    isRemoved: boolean
    messages?: IssueMessageCreateNestedManyWithoutBlockInput
  }

  export type IssueBlockUncheckedCreateWithoutIssueInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    seq: number
    title?: string | null
    blockType: string
    content?: string | null
    isRemoved: boolean
    messages?: IssueMessageUncheckedCreateNestedManyWithoutBlockInput
  }

  export type IssueBlockCreateOrConnectWithoutIssueInput = {
    where: IssueBlockWhereUniqueInput
    create: XOR<IssueBlockCreateWithoutIssueInput, IssueBlockUncheckedCreateWithoutIssueInput>
  }

  export type IssueBlockCreateManyIssueInputEnvelope = {
    data: IssueBlockCreateManyIssueInput | IssueBlockCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type CelebCreateWithoutIssuesInput = {
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    description?: string | null
    avatar?: string | null
  }

  export type CelebUncheckedCreateWithoutIssuesInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    name: string
    description?: string | null
    avatar?: string | null
  }

  export type CelebCreateOrConnectWithoutIssuesInput = {
    where: CelebWhereUniqueInput
    create: XOR<CelebCreateWithoutIssuesInput, CelebUncheckedCreateWithoutIssuesInput>
  }

  export type RatingCreateWithoutIssueInput = {
    createdAt: Date | string
    updatedAt: Date | string
    rating: number
    user: UserCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutIssueInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    userId: string
    rating: number
  }

  export type RatingCreateOrConnectWithoutIssueInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutIssueInput, RatingUncheckedCreateWithoutIssueInput>
  }

  export type RatingCreateManyIssueInputEnvelope = {
    data: RatingCreateManyIssueInput | RatingCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type IssueMessageCreateWithoutIssueInput = {
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
    block: IssueBlockCreateNestedOneWithoutMessagesInput
    messageLike?: MessageLikeCreateNestedManyWithoutMessageInput
  }

  export type IssueMessageUncheckedCreateWithoutIssueInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    blockId: number
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutMessageInput
  }

  export type IssueMessageCreateOrConnectWithoutIssueInput = {
    where: IssueMessageWhereUniqueInput
    create: XOR<IssueMessageCreateWithoutIssueInput, IssueMessageUncheckedCreateWithoutIssueInput>
  }

  export type IssueMessageCreateManyIssueInputEnvelope = {
    data: IssueMessageCreateManyIssueInput | IssueMessageCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type MessageLikeCreateWithoutIssueInput = {
    createdAt: Date | string
    updatedAt: Date | string
    evaluation: number
    message: IssueMessageCreateNestedOneWithoutMessageLikeInput
    user: UserCreateNestedOneWithoutMessageLikesInput
  }

  export type MessageLikeUncheckedCreateWithoutIssueInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    messageId: number
    userId: string
    evaluation: number
  }

  export type MessageLikeCreateOrConnectWithoutIssueInput = {
    where: MessageLikeWhereUniqueInput
    create: XOR<MessageLikeCreateWithoutIssueInput, MessageLikeUncheckedCreateWithoutIssueInput>
  }

  export type MessageLikeCreateManyIssueInputEnvelope = {
    data: MessageLikeCreateManyIssueInput | MessageLikeCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type IssueReplyCreateWithoutIssueInput = {
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
    user: UserCreateNestedOneWithoutReplysInput
  }

  export type IssueReplyUncheckedCreateWithoutIssueInput = {
    id?: number
    userId: string
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
  }

  export type IssueReplyCreateOrConnectWithoutIssueInput = {
    where: IssueReplyWhereUniqueInput
    create: XOR<IssueReplyCreateWithoutIssueInput, IssueReplyUncheckedCreateWithoutIssueInput>
  }

  export type IssueReplyCreateManyIssueInputEnvelope = {
    data: IssueReplyCreateManyIssueInput | IssueReplyCreateManyIssueInput[]
    skipDuplicates?: boolean
  }

  export type IssueBlockUpsertWithWhereUniqueWithoutIssueInput = {
    where: IssueBlockWhereUniqueInput
    update: XOR<IssueBlockUpdateWithoutIssueInput, IssueBlockUncheckedUpdateWithoutIssueInput>
    create: XOR<IssueBlockCreateWithoutIssueInput, IssueBlockUncheckedCreateWithoutIssueInput>
  }

  export type IssueBlockUpdateWithWhereUniqueWithoutIssueInput = {
    where: IssueBlockWhereUniqueInput
    data: XOR<IssueBlockUpdateWithoutIssueInput, IssueBlockUncheckedUpdateWithoutIssueInput>
  }

  export type IssueBlockUpdateManyWithWhereWithoutIssueInput = {
    where: IssueBlockScalarWhereInput
    data: XOR<IssueBlockUpdateManyMutationInput, IssueBlockUncheckedUpdateManyWithoutIssueInput>
  }

  export type IssueBlockScalarWhereInput = {
    AND?: IssueBlockScalarWhereInput | IssueBlockScalarWhereInput[]
    OR?: IssueBlockScalarWhereInput[]
    NOT?: IssueBlockScalarWhereInput | IssueBlockScalarWhereInput[]
    id?: IntFilter<"IssueBlock"> | number
    createdAt?: DateTimeFilter<"IssueBlock"> | Date | string
    updatedAt?: DateTimeFilter<"IssueBlock"> | Date | string
    issueId?: IntFilter<"IssueBlock"> | number
    seq?: IntFilter<"IssueBlock"> | number
    title?: StringNullableFilter<"IssueBlock"> | string | null
    blockType?: StringFilter<"IssueBlock"> | string
    content?: StringNullableFilter<"IssueBlock"> | string | null
    isRemoved?: BoolFilter<"IssueBlock"> | boolean
  }

  export type CelebUpsertWithWhereUniqueWithoutIssuesInput = {
    where: CelebWhereUniqueInput
    update: XOR<CelebUpdateWithoutIssuesInput, CelebUncheckedUpdateWithoutIssuesInput>
    create: XOR<CelebCreateWithoutIssuesInput, CelebUncheckedCreateWithoutIssuesInput>
  }

  export type CelebUpdateWithWhereUniqueWithoutIssuesInput = {
    where: CelebWhereUniqueInput
    data: XOR<CelebUpdateWithoutIssuesInput, CelebUncheckedUpdateWithoutIssuesInput>
  }

  export type CelebUpdateManyWithWhereWithoutIssuesInput = {
    where: CelebScalarWhereInput
    data: XOR<CelebUpdateManyMutationInput, CelebUncheckedUpdateManyWithoutIssuesInput>
  }

  export type CelebScalarWhereInput = {
    AND?: CelebScalarWhereInput | CelebScalarWhereInput[]
    OR?: CelebScalarWhereInput[]
    NOT?: CelebScalarWhereInput | CelebScalarWhereInput[]
    id?: IntFilter<"Celeb"> | number
    createdAt?: DateTimeFilter<"Celeb"> | Date | string
    updatedAt?: DateTimeFilter<"Celeb"> | Date | string
    name?: StringFilter<"Celeb"> | string
    description?: StringNullableFilter<"Celeb"> | string | null
    avatar?: StringNullableFilter<"Celeb"> | string | null
  }

  export type RatingUpsertWithWhereUniqueWithoutIssueInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutIssueInput, RatingUncheckedUpdateWithoutIssueInput>
    create: XOR<RatingCreateWithoutIssueInput, RatingUncheckedCreateWithoutIssueInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutIssueInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutIssueInput, RatingUncheckedUpdateWithoutIssueInput>
  }

  export type RatingUpdateManyWithWhereWithoutIssueInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutIssueInput>
  }

  export type RatingScalarWhereInput = {
    AND?: RatingScalarWhereInput | RatingScalarWhereInput[]
    OR?: RatingScalarWhereInput[]
    NOT?: RatingScalarWhereInput | RatingScalarWhereInput[]
    id?: IntFilter<"Rating"> | number
    createdAt?: DateTimeFilter<"Rating"> | Date | string
    updatedAt?: DateTimeFilter<"Rating"> | Date | string
    issueId?: IntFilter<"Rating"> | number
    userId?: StringFilter<"Rating"> | string
    rating?: IntFilter<"Rating"> | number
  }

  export type IssueMessageUpsertWithWhereUniqueWithoutIssueInput = {
    where: IssueMessageWhereUniqueInput
    update: XOR<IssueMessageUpdateWithoutIssueInput, IssueMessageUncheckedUpdateWithoutIssueInput>
    create: XOR<IssueMessageCreateWithoutIssueInput, IssueMessageUncheckedCreateWithoutIssueInput>
  }

  export type IssueMessageUpdateWithWhereUniqueWithoutIssueInput = {
    where: IssueMessageWhereUniqueInput
    data: XOR<IssueMessageUpdateWithoutIssueInput, IssueMessageUncheckedUpdateWithoutIssueInput>
  }

  export type IssueMessageUpdateManyWithWhereWithoutIssueInput = {
    where: IssueMessageScalarWhereInput
    data: XOR<IssueMessageUpdateManyMutationInput, IssueMessageUncheckedUpdateManyWithoutIssueInput>
  }

  export type IssueMessageScalarWhereInput = {
    AND?: IssueMessageScalarWhereInput | IssueMessageScalarWhereInput[]
    OR?: IssueMessageScalarWhereInput[]
    NOT?: IssueMessageScalarWhereInput | IssueMessageScalarWhereInput[]
    id?: IntFilter<"IssueMessage"> | number
    createdAt?: DateTimeFilter<"IssueMessage"> | Date | string
    updatedAt?: DateTimeFilter<"IssueMessage"> | Date | string
    isRemoved?: BoolFilter<"IssueMessage"> | boolean
    issueId?: IntFilter<"IssueMessage"> | number
    blockId?: IntFilter<"IssueMessage"> | number
    celebId?: IntFilter<"IssueMessage"> | number
    celebName?: StringFilter<"IssueMessage"> | string
    celebDescription?: StringNullableFilter<"IssueMessage"> | string | null
    celebAvatar?: StringNullableFilter<"IssueMessage"> | string | null
    content?: StringFilter<"IssueMessage"> | string
    link?: StringFilter<"IssueMessage"> | string
    linkFrom?: StringFilter<"IssueMessage"> | string
    backgroundColor?: StringFilter<"IssueMessage"> | string
    bias?: EnumBiasFilter<"IssueMessage"> | $Enums.Bias
    reportedAt?: DateTimeFilter<"IssueMessage"> | Date | string
    likeCount?: IntFilter<"IssueMessage"> | number
  }

  export type MessageLikeUpsertWithWhereUniqueWithoutIssueInput = {
    where: MessageLikeWhereUniqueInput
    update: XOR<MessageLikeUpdateWithoutIssueInput, MessageLikeUncheckedUpdateWithoutIssueInput>
    create: XOR<MessageLikeCreateWithoutIssueInput, MessageLikeUncheckedCreateWithoutIssueInput>
  }

  export type MessageLikeUpdateWithWhereUniqueWithoutIssueInput = {
    where: MessageLikeWhereUniqueInput
    data: XOR<MessageLikeUpdateWithoutIssueInput, MessageLikeUncheckedUpdateWithoutIssueInput>
  }

  export type MessageLikeUpdateManyWithWhereWithoutIssueInput = {
    where: MessageLikeScalarWhereInput
    data: XOR<MessageLikeUpdateManyMutationInput, MessageLikeUncheckedUpdateManyWithoutIssueInput>
  }

  export type MessageLikeScalarWhereInput = {
    AND?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
    OR?: MessageLikeScalarWhereInput[]
    NOT?: MessageLikeScalarWhereInput | MessageLikeScalarWhereInput[]
    id?: IntFilter<"MessageLike"> | number
    createdAt?: DateTimeFilter<"MessageLike"> | Date | string
    updatedAt?: DateTimeFilter<"MessageLike"> | Date | string
    messageId?: IntFilter<"MessageLike"> | number
    issueId?: IntFilter<"MessageLike"> | number
    userId?: StringFilter<"MessageLike"> | string
    evaluation?: IntFilter<"MessageLike"> | number
  }

  export type IssueReplyUpsertWithWhereUniqueWithoutIssueInput = {
    where: IssueReplyWhereUniqueInput
    update: XOR<IssueReplyUpdateWithoutIssueInput, IssueReplyUncheckedUpdateWithoutIssueInput>
    create: XOR<IssueReplyCreateWithoutIssueInput, IssueReplyUncheckedCreateWithoutIssueInput>
  }

  export type IssueReplyUpdateWithWhereUniqueWithoutIssueInput = {
    where: IssueReplyWhereUniqueInput
    data: XOR<IssueReplyUpdateWithoutIssueInput, IssueReplyUncheckedUpdateWithoutIssueInput>
  }

  export type IssueReplyUpdateManyWithWhereWithoutIssueInput = {
    where: IssueReplyScalarWhereInput
    data: XOR<IssueReplyUpdateManyMutationInput, IssueReplyUncheckedUpdateManyWithoutIssueInput>
  }

  export type IssueReplyScalarWhereInput = {
    AND?: IssueReplyScalarWhereInput | IssueReplyScalarWhereInput[]
    OR?: IssueReplyScalarWhereInput[]
    NOT?: IssueReplyScalarWhereInput | IssueReplyScalarWhereInput[]
    id?: IntFilter<"IssueReply"> | number
    userId?: StringFilter<"IssueReply"> | string
    issueId?: IntFilter<"IssueReply"> | number
    content?: StringFilter<"IssueReply"> | string
    createdAt?: DateTimeFilter<"IssueReply"> | Date | string
    updatedAt?: DateTimeFilter<"IssueReply"> | Date | string
    likeCount?: IntFilter<"IssueReply"> | number
  }

  export type IssueCreateWithoutIssueBlocksInput = {
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    celebs?: CelebCreateNestedManyWithoutIssuesInput
    ratings?: RatingCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeCreateNestedManyWithoutIssueInput
    replys?: IssueReplyCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutIssueBlocksInput = {
    id?: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    celebs?: CelebUncheckedCreateNestedManyWithoutIssuesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageUncheckedCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutIssueInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutIssueBlocksInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutIssueBlocksInput, IssueUncheckedCreateWithoutIssueBlocksInput>
  }

  export type IssueMessageCreateWithoutBlockInput = {
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
    issue: IssueCreateNestedOneWithoutIssueMessagesInput
    messageLike?: MessageLikeCreateNestedManyWithoutMessageInput
  }

  export type IssueMessageUncheckedCreateWithoutBlockInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    issueId: number
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutMessageInput
  }

  export type IssueMessageCreateOrConnectWithoutBlockInput = {
    where: IssueMessageWhereUniqueInput
    create: XOR<IssueMessageCreateWithoutBlockInput, IssueMessageUncheckedCreateWithoutBlockInput>
  }

  export type IssueMessageCreateManyBlockInputEnvelope = {
    data: IssueMessageCreateManyBlockInput | IssueMessageCreateManyBlockInput[]
    skipDuplicates?: boolean
  }

  export type IssueUpsertWithoutIssueBlocksInput = {
    update: XOR<IssueUpdateWithoutIssueBlocksInput, IssueUncheckedUpdateWithoutIssueBlocksInput>
    create: XOR<IssueCreateWithoutIssueBlocksInput, IssueUncheckedCreateWithoutIssueBlocksInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutIssueBlocksInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutIssueBlocksInput, IssueUncheckedUpdateWithoutIssueBlocksInput>
  }

  export type IssueUpdateWithoutIssueBlocksInput = {
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    celebs?: CelebUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutIssueBlocksInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    celebs?: CelebUncheckedUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUncheckedUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUncheckedUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueMessageUpsertWithWhereUniqueWithoutBlockInput = {
    where: IssueMessageWhereUniqueInput
    update: XOR<IssueMessageUpdateWithoutBlockInput, IssueMessageUncheckedUpdateWithoutBlockInput>
    create: XOR<IssueMessageCreateWithoutBlockInput, IssueMessageUncheckedCreateWithoutBlockInput>
  }

  export type IssueMessageUpdateWithWhereUniqueWithoutBlockInput = {
    where: IssueMessageWhereUniqueInput
    data: XOR<IssueMessageUpdateWithoutBlockInput, IssueMessageUncheckedUpdateWithoutBlockInput>
  }

  export type IssueMessageUpdateManyWithWhereWithoutBlockInput = {
    where: IssueMessageScalarWhereInput
    data: XOR<IssueMessageUpdateManyMutationInput, IssueMessageUncheckedUpdateManyWithoutBlockInput>
  }

  export type IssueCreateWithoutIssueMessagesInput = {
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockCreateNestedManyWithoutIssueInput
    celebs?: CelebCreateNestedManyWithoutIssuesInput
    ratings?: RatingCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeCreateNestedManyWithoutIssueInput
    replys?: IssueReplyCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutIssueMessagesInput = {
    id?: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockUncheckedCreateNestedManyWithoutIssueInput
    celebs?: CelebUncheckedCreateNestedManyWithoutIssuesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutIssueInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutIssueMessagesInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutIssueMessagesInput, IssueUncheckedCreateWithoutIssueMessagesInput>
  }

  export type IssueBlockCreateWithoutMessagesInput = {
    createdAt: Date | string
    updatedAt: Date | string
    seq: number
    title?: string | null
    blockType: string
    content?: string | null
    isRemoved: boolean
    issue: IssueCreateNestedOneWithoutIssueBlocksInput
  }

  export type IssueBlockUncheckedCreateWithoutMessagesInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    seq: number
    title?: string | null
    blockType: string
    content?: string | null
    isRemoved: boolean
  }

  export type IssueBlockCreateOrConnectWithoutMessagesInput = {
    where: IssueBlockWhereUniqueInput
    create: XOR<IssueBlockCreateWithoutMessagesInput, IssueBlockUncheckedCreateWithoutMessagesInput>
  }

  export type MessageLikeCreateWithoutMessageInput = {
    createdAt: Date | string
    updatedAt: Date | string
    evaluation: number
    issue: IssueCreateNestedOneWithoutMessageLikeInput
    user: UserCreateNestedOneWithoutMessageLikesInput
  }

  export type MessageLikeUncheckedCreateWithoutMessageInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    userId: string
    evaluation: number
  }

  export type MessageLikeCreateOrConnectWithoutMessageInput = {
    where: MessageLikeWhereUniqueInput
    create: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput>
  }

  export type MessageLikeCreateManyMessageInputEnvelope = {
    data: MessageLikeCreateManyMessageInput | MessageLikeCreateManyMessageInput[]
    skipDuplicates?: boolean
  }

  export type IssueUpsertWithoutIssueMessagesInput = {
    update: XOR<IssueUpdateWithoutIssueMessagesInput, IssueUncheckedUpdateWithoutIssueMessagesInput>
    create: XOR<IssueCreateWithoutIssueMessagesInput, IssueUncheckedCreateWithoutIssueMessagesInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutIssueMessagesInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutIssueMessagesInput, IssueUncheckedUpdateWithoutIssueMessagesInput>
  }

  export type IssueUpdateWithoutIssueMessagesInput = {
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUpdateManyWithoutIssueNestedInput
    celebs?: CelebUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutIssueMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUncheckedUpdateManyWithoutIssueNestedInput
    celebs?: CelebUncheckedUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUncheckedUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueBlockUpsertWithoutMessagesInput = {
    update: XOR<IssueBlockUpdateWithoutMessagesInput, IssueBlockUncheckedUpdateWithoutMessagesInput>
    create: XOR<IssueBlockCreateWithoutMessagesInput, IssueBlockUncheckedCreateWithoutMessagesInput>
    where?: IssueBlockWhereInput
  }

  export type IssueBlockUpdateToOneWithWhereWithoutMessagesInput = {
    where?: IssueBlockWhereInput
    data: XOR<IssueBlockUpdateWithoutMessagesInput, IssueBlockUncheckedUpdateWithoutMessagesInput>
  }

  export type IssueBlockUpdateWithoutMessagesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    issue?: IssueUpdateOneRequiredWithoutIssueBlocksNestedInput
  }

  export type IssueBlockUncheckedUpdateWithoutMessagesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type MessageLikeUpsertWithWhereUniqueWithoutMessageInput = {
    where: MessageLikeWhereUniqueInput
    update: XOR<MessageLikeUpdateWithoutMessageInput, MessageLikeUncheckedUpdateWithoutMessageInput>
    create: XOR<MessageLikeCreateWithoutMessageInput, MessageLikeUncheckedCreateWithoutMessageInput>
  }

  export type MessageLikeUpdateWithWhereUniqueWithoutMessageInput = {
    where: MessageLikeWhereUniqueInput
    data: XOR<MessageLikeUpdateWithoutMessageInput, MessageLikeUncheckedUpdateWithoutMessageInput>
  }

  export type MessageLikeUpdateManyWithWhereWithoutMessageInput = {
    where: MessageLikeScalarWhereInput
    data: XOR<MessageLikeUpdateManyMutationInput, MessageLikeUncheckedUpdateManyWithoutMessageInput>
  }

  export type IssueCreateWithoutCelebsInput = {
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockCreateNestedManyWithoutIssueInput
    ratings?: RatingCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeCreateNestedManyWithoutIssueInput
    replys?: IssueReplyCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutCelebsInput = {
    id?: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockUncheckedCreateNestedManyWithoutIssueInput
    ratings?: RatingUncheckedCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageUncheckedCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutIssueInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutCelebsInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutCelebsInput, IssueUncheckedCreateWithoutCelebsInput>
  }

  export type IssueUpsertWithWhereUniqueWithoutCelebsInput = {
    where: IssueWhereUniqueInput
    update: XOR<IssueUpdateWithoutCelebsInput, IssueUncheckedUpdateWithoutCelebsInput>
    create: XOR<IssueCreateWithoutCelebsInput, IssueUncheckedCreateWithoutCelebsInput>
  }

  export type IssueUpdateWithWhereUniqueWithoutCelebsInput = {
    where: IssueWhereUniqueInput
    data: XOR<IssueUpdateWithoutCelebsInput, IssueUncheckedUpdateWithoutCelebsInput>
  }

  export type IssueUpdateManyWithWhereWithoutCelebsInput = {
    where: IssueScalarWhereInput
    data: XOR<IssueUpdateManyMutationInput, IssueUncheckedUpdateManyWithoutCelebsInput>
  }

  export type IssueScalarWhereInput = {
    AND?: IssueScalarWhereInput | IssueScalarWhereInput[]
    OR?: IssueScalarWhereInput[]
    NOT?: IssueScalarWhereInput | IssueScalarWhereInput[]
    id?: IntFilter<"Issue"> | number
    slug?: StringFilter<"Issue"> | string
    weight?: IntFilter<"Issue"> | number
    title?: StringFilter<"Issue"> | string
    description?: StringFilter<"Issue"> | string
    coverImage?: StringFilter<"Issue"> | string
    status?: EnumIssueStatusFilter<"Issue"> | $Enums.IssueStatus
    createdAt?: DateTimeFilter<"Issue"> | Date | string
    updatedAt?: DateTimeFilter<"Issue"> | Date | string
  }

  export type UserCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    sessions?: SessionCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeCreateNestedManyWithoutUserInput
    replys?: IssueReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutAccountsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutAccountsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
  }

  export type UserUpsertWithoutAccountsInput = {
    update: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
    create: XOR<UserCreateWithoutAccountsInput, UserUncheckedCreateWithoutAccountsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutAccountsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutAccountsInput, UserUncheckedUpdateWithoutAccountsInput>
  }

  export type UserUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutAccountsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeCreateNestedManyWithoutUserInput
    replys?: IssueReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutSessionsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutSessionsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
  }

  export type UserUpsertWithoutSessionsInput = {
    update: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
    create: XOR<UserCreateWithoutSessionsInput, UserUncheckedCreateWithoutSessionsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutSessionsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutSessionsInput, UserUncheckedUpdateWithoutSessionsInput>
  }

  export type UserUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutSessionsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type AccountCreateWithoutUserInput = {
    id?: string
    type: string
    scope: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountUncheckedCreateWithoutUserInput = {
    id?: string
    type: string
    scope: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type AccountCreateOrConnectWithoutUserInput = {
    where: AccountWhereUniqueInput
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountCreateManyUserInputEnvelope = {
    data: AccountCreateManyUserInput | AccountCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type SessionCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionUncheckedCreateWithoutUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type SessionCreateOrConnectWithoutUserInput = {
    where: SessionWhereUniqueInput
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionCreateManyUserInputEnvelope = {
    data: SessionCreateManyUserInput | SessionCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type RatingCreateWithoutUserInput = {
    createdAt: Date | string
    updatedAt: Date | string
    rating: number
    issue: IssueCreateNestedOneWithoutRatingsInput
  }

  export type RatingUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    rating: number
  }

  export type RatingCreateOrConnectWithoutUserInput = {
    where: RatingWhereUniqueInput
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingCreateManyUserInputEnvelope = {
    data: RatingCreateManyUserInput | RatingCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type MessageLikeCreateWithoutUserInput = {
    createdAt: Date | string
    updatedAt: Date | string
    evaluation: number
    message: IssueMessageCreateNestedOneWithoutMessageLikeInput
    issue: IssueCreateNestedOneWithoutMessageLikeInput
  }

  export type MessageLikeUncheckedCreateWithoutUserInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    messageId: number
    issueId: number
    evaluation: number
  }

  export type MessageLikeCreateOrConnectWithoutUserInput = {
    where: MessageLikeWhereUniqueInput
    create: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput>
  }

  export type MessageLikeCreateManyUserInputEnvelope = {
    data: MessageLikeCreateManyUserInput | MessageLikeCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type IssueReplyCreateWithoutUserInput = {
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
    issue: IssueCreateNestedOneWithoutReplysInput
  }

  export type IssueReplyUncheckedCreateWithoutUserInput = {
    id?: number
    issueId: number
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
  }

  export type IssueReplyCreateOrConnectWithoutUserInput = {
    where: IssueReplyWhereUniqueInput
    create: XOR<IssueReplyCreateWithoutUserInput, IssueReplyUncheckedCreateWithoutUserInput>
  }

  export type IssueReplyCreateManyUserInputEnvelope = {
    data: IssueReplyCreateManyUserInput | IssueReplyCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type AccountUpsertWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    update: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
    create: XOR<AccountCreateWithoutUserInput, AccountUncheckedCreateWithoutUserInput>
  }

  export type AccountUpdateWithWhereUniqueWithoutUserInput = {
    where: AccountWhereUniqueInput
    data: XOR<AccountUpdateWithoutUserInput, AccountUncheckedUpdateWithoutUserInput>
  }

  export type AccountUpdateManyWithWhereWithoutUserInput = {
    where: AccountScalarWhereInput
    data: XOR<AccountUpdateManyMutationInput, AccountUncheckedUpdateManyWithoutUserInput>
  }

  export type AccountScalarWhereInput = {
    AND?: AccountScalarWhereInput | AccountScalarWhereInput[]
    OR?: AccountScalarWhereInput[]
    NOT?: AccountScalarWhereInput | AccountScalarWhereInput[]
    id?: StringFilter<"Account"> | string
    userId?: StringFilter<"Account"> | string
    type?: StringFilter<"Account"> | string
    scope?: StringFilter<"Account"> | string
    provider?: StringFilter<"Account"> | string
    providerAccountId?: StringFilter<"Account"> | string
    refresh_token?: StringNullableFilter<"Account"> | string | null
    access_token?: StringNullableFilter<"Account"> | string | null
    expires_at?: IntNullableFilter<"Account"> | number | null
    refresh_token_expires_in?: IntNullableFilter<"Account"> | number | null
    token_type?: StringNullableFilter<"Account"> | string | null
    id_token?: StringNullableFilter<"Account"> | string | null
    session_state?: StringNullableFilter<"Account"> | string | null
  }

  export type SessionUpsertWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    update: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
    create: XOR<SessionCreateWithoutUserInput, SessionUncheckedCreateWithoutUserInput>
  }

  export type SessionUpdateWithWhereUniqueWithoutUserInput = {
    where: SessionWhereUniqueInput
    data: XOR<SessionUpdateWithoutUserInput, SessionUncheckedUpdateWithoutUserInput>
  }

  export type SessionUpdateManyWithWhereWithoutUserInput = {
    where: SessionScalarWhereInput
    data: XOR<SessionUpdateManyMutationInput, SessionUncheckedUpdateManyWithoutUserInput>
  }

  export type SessionScalarWhereInput = {
    AND?: SessionScalarWhereInput | SessionScalarWhereInput[]
    OR?: SessionScalarWhereInput[]
    NOT?: SessionScalarWhereInput | SessionScalarWhereInput[]
    id?: StringFilter<"Session"> | string
    sessionToken?: StringFilter<"Session"> | string
    userId?: StringFilter<"Session"> | string
    expires?: DateTimeFilter<"Session"> | Date | string
  }

  export type RatingUpsertWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    update: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
    create: XOR<RatingCreateWithoutUserInput, RatingUncheckedCreateWithoutUserInput>
  }

  export type RatingUpdateWithWhereUniqueWithoutUserInput = {
    where: RatingWhereUniqueInput
    data: XOR<RatingUpdateWithoutUserInput, RatingUncheckedUpdateWithoutUserInput>
  }

  export type RatingUpdateManyWithWhereWithoutUserInput = {
    where: RatingScalarWhereInput
    data: XOR<RatingUpdateManyMutationInput, RatingUncheckedUpdateManyWithoutUserInput>
  }

  export type MessageLikeUpsertWithWhereUniqueWithoutUserInput = {
    where: MessageLikeWhereUniqueInput
    update: XOR<MessageLikeUpdateWithoutUserInput, MessageLikeUncheckedUpdateWithoutUserInput>
    create: XOR<MessageLikeCreateWithoutUserInput, MessageLikeUncheckedCreateWithoutUserInput>
  }

  export type MessageLikeUpdateWithWhereUniqueWithoutUserInput = {
    where: MessageLikeWhereUniqueInput
    data: XOR<MessageLikeUpdateWithoutUserInput, MessageLikeUncheckedUpdateWithoutUserInput>
  }

  export type MessageLikeUpdateManyWithWhereWithoutUserInput = {
    where: MessageLikeScalarWhereInput
    data: XOR<MessageLikeUpdateManyMutationInput, MessageLikeUncheckedUpdateManyWithoutUserInput>
  }

  export type IssueReplyUpsertWithWhereUniqueWithoutUserInput = {
    where: IssueReplyWhereUniqueInput
    update: XOR<IssueReplyUpdateWithoutUserInput, IssueReplyUncheckedUpdateWithoutUserInput>
    create: XOR<IssueReplyCreateWithoutUserInput, IssueReplyUncheckedCreateWithoutUserInput>
  }

  export type IssueReplyUpdateWithWhereUniqueWithoutUserInput = {
    where: IssueReplyWhereUniqueInput
    data: XOR<IssueReplyUpdateWithoutUserInput, IssueReplyUncheckedUpdateWithoutUserInput>
  }

  export type IssueReplyUpdateManyWithWhereWithoutUserInput = {
    where: IssueReplyScalarWhereInput
    data: XOR<IssueReplyUpdateManyMutationInput, IssueReplyUncheckedUpdateManyWithoutUserInput>
  }

  export type IssueCreateWithoutRatingsInput = {
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockCreateNestedManyWithoutIssueInput
    celebs?: CelebCreateNestedManyWithoutIssuesInput
    issueMessages?: IssueMessageCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeCreateNestedManyWithoutIssueInput
    replys?: IssueReplyCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutRatingsInput = {
    id?: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockUncheckedCreateNestedManyWithoutIssueInput
    celebs?: CelebUncheckedCreateNestedManyWithoutIssuesInput
    issueMessages?: IssueMessageUncheckedCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutIssueInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutRatingsInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutRatingsInput, IssueUncheckedCreateWithoutRatingsInput>
  }

  export type UserCreateWithoutRatingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeCreateNestedManyWithoutUserInput
    replys?: IssueReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutRatingsInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutRatingsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
  }

  export type IssueUpsertWithoutRatingsInput = {
    update: XOR<IssueUpdateWithoutRatingsInput, IssueUncheckedUpdateWithoutRatingsInput>
    create: XOR<IssueCreateWithoutRatingsInput, IssueUncheckedCreateWithoutRatingsInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutRatingsInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutRatingsInput, IssueUncheckedUpdateWithoutRatingsInput>
  }

  export type IssueUpdateWithoutRatingsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUpdateManyWithoutIssueNestedInput
    celebs?: CelebUpdateManyWithoutIssuesNestedInput
    issueMessages?: IssueMessageUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutRatingsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUncheckedUpdateManyWithoutIssueNestedInput
    celebs?: CelebUncheckedUpdateManyWithoutIssuesNestedInput
    issueMessages?: IssueMessageUncheckedUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUncheckedUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type UserUpsertWithoutRatingsInput = {
    update: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
    create: XOR<UserCreateWithoutRatingsInput, UserUncheckedCreateWithoutRatingsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRatingsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRatingsInput, UserUncheckedUpdateWithoutRatingsInput>
  }

  export type UserUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutRatingsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IssueMessageCreateWithoutMessageLikeInput = {
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
    issue: IssueCreateNestedOneWithoutIssueMessagesInput
    block: IssueBlockCreateNestedOneWithoutMessagesInput
  }

  export type IssueMessageUncheckedCreateWithoutMessageLikeInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    issueId: number
    blockId: number
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
  }

  export type IssueMessageCreateOrConnectWithoutMessageLikeInput = {
    where: IssueMessageWhereUniqueInput
    create: XOR<IssueMessageCreateWithoutMessageLikeInput, IssueMessageUncheckedCreateWithoutMessageLikeInput>
  }

  export type IssueCreateWithoutMessageLikeInput = {
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockCreateNestedManyWithoutIssueInput
    celebs?: CelebCreateNestedManyWithoutIssuesInput
    ratings?: RatingCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageCreateNestedManyWithoutIssueInput
    replys?: IssueReplyCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutMessageLikeInput = {
    id?: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockUncheckedCreateNestedManyWithoutIssueInput
    celebs?: CelebUncheckedCreateNestedManyWithoutIssuesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageUncheckedCreateNestedManyWithoutIssueInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutMessageLikeInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutMessageLikeInput, IssueUncheckedCreateWithoutMessageLikeInput>
  }

  export type UserCreateWithoutMessageLikesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    replys?: IssueReplyCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutMessageLikesInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    replys?: IssueReplyUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutMessageLikesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutMessageLikesInput, UserUncheckedCreateWithoutMessageLikesInput>
  }

  export type IssueMessageUpsertWithoutMessageLikeInput = {
    update: XOR<IssueMessageUpdateWithoutMessageLikeInput, IssueMessageUncheckedUpdateWithoutMessageLikeInput>
    create: XOR<IssueMessageCreateWithoutMessageLikeInput, IssueMessageUncheckedCreateWithoutMessageLikeInput>
    where?: IssueMessageWhereInput
  }

  export type IssueMessageUpdateToOneWithWhereWithoutMessageLikeInput = {
    where?: IssueMessageWhereInput
    data: XOR<IssueMessageUpdateWithoutMessageLikeInput, IssueMessageUncheckedUpdateWithoutMessageLikeInput>
  }

  export type IssueMessageUpdateWithoutMessageLikeInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    issue?: IssueUpdateOneRequiredWithoutIssueMessagesNestedInput
    block?: IssueBlockUpdateOneRequiredWithoutMessagesNestedInput
  }

  export type IssueMessageUncheckedUpdateWithoutMessageLikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    issueId?: IntFieldUpdateOperationsInput | number
    blockId?: IntFieldUpdateOperationsInput | number
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type IssueUpsertWithoutMessageLikeInput = {
    update: XOR<IssueUpdateWithoutMessageLikeInput, IssueUncheckedUpdateWithoutMessageLikeInput>
    create: XOR<IssueCreateWithoutMessageLikeInput, IssueUncheckedCreateWithoutMessageLikeInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutMessageLikeInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutMessageLikeInput, IssueUncheckedUpdateWithoutMessageLikeInput>
  }

  export type IssueUpdateWithoutMessageLikeInput = {
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUpdateManyWithoutIssueNestedInput
    celebs?: CelebUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutMessageLikeInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUncheckedUpdateManyWithoutIssueNestedInput
    celebs?: CelebUncheckedUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUncheckedUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type UserUpsertWithoutMessageLikesInput = {
    update: XOR<UserUpdateWithoutMessageLikesInput, UserUncheckedUpdateWithoutMessageLikesInput>
    create: XOR<UserCreateWithoutMessageLikesInput, UserUncheckedCreateWithoutMessageLikesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutMessageLikesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutMessageLikesInput, UserUncheckedUpdateWithoutMessageLikesInput>
  }

  export type UserUpdateWithoutMessageLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutMessageLikesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutUserNestedInput
  }

  export type UserCreateWithoutReplysInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountCreateNestedManyWithoutUserInput
    sessions?: SessionCreateNestedManyWithoutUserInput
    ratings?: RatingCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeCreateNestedManyWithoutUserInput
  }

  export type UserUncheckedCreateWithoutReplysInput = {
    id?: string
    name?: string | null
    email?: string | null
    emailVerified?: Date | string | null
    image?: string | null
    isAdmin?: boolean
    accounts?: AccountUncheckedCreateNestedManyWithoutUserInput
    sessions?: SessionUncheckedCreateNestedManyWithoutUserInput
    ratings?: RatingUncheckedCreateNestedManyWithoutUserInput
    messageLikes?: MessageLikeUncheckedCreateNestedManyWithoutUserInput
  }

  export type UserCreateOrConnectWithoutReplysInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutReplysInput, UserUncheckedCreateWithoutReplysInput>
  }

  export type IssueCreateWithoutReplysInput = {
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockCreateNestedManyWithoutIssueInput
    celebs?: CelebCreateNestedManyWithoutIssuesInput
    ratings?: RatingCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeCreateNestedManyWithoutIssueInput
  }

  export type IssueUncheckedCreateWithoutReplysInput = {
    id?: number
    slug: string
    weight: number
    title: string
    description: string
    coverImage: string
    status: $Enums.IssueStatus
    createdAt: Date | string
    updatedAt: Date | string
    issueBlocks?: IssueBlockUncheckedCreateNestedManyWithoutIssueInput
    celebs?: CelebUncheckedCreateNestedManyWithoutIssuesInput
    ratings?: RatingUncheckedCreateNestedManyWithoutIssueInput
    issueMessages?: IssueMessageUncheckedCreateNestedManyWithoutIssueInput
    messageLike?: MessageLikeUncheckedCreateNestedManyWithoutIssueInput
  }

  export type IssueCreateOrConnectWithoutReplysInput = {
    where: IssueWhereUniqueInput
    create: XOR<IssueCreateWithoutReplysInput, IssueUncheckedCreateWithoutReplysInput>
  }

  export type UserUpsertWithoutReplysInput = {
    update: XOR<UserUpdateWithoutReplysInput, UserUncheckedUpdateWithoutReplysInput>
    create: XOR<UserCreateWithoutReplysInput, UserUncheckedCreateWithoutReplysInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutReplysInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutReplysInput, UserUncheckedUpdateWithoutReplysInput>
  }

  export type UserUpdateWithoutReplysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUpdateManyWithoutUserNestedInput
    sessions?: SessionUpdateManyWithoutUserNestedInput
    ratings?: RatingUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUpdateManyWithoutUserNestedInput
  }

  export type UserUncheckedUpdateWithoutReplysInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: NullableStringFieldUpdateOperationsInput | string | null
    email?: NullableStringFieldUpdateOperationsInput | string | null
    emailVerified?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    image?: NullableStringFieldUpdateOperationsInput | string | null
    isAdmin?: BoolFieldUpdateOperationsInput | boolean
    accounts?: AccountUncheckedUpdateManyWithoutUserNestedInput
    sessions?: SessionUncheckedUpdateManyWithoutUserNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutUserNestedInput
    messageLikes?: MessageLikeUncheckedUpdateManyWithoutUserNestedInput
  }

  export type IssueUpsertWithoutReplysInput = {
    update: XOR<IssueUpdateWithoutReplysInput, IssueUncheckedUpdateWithoutReplysInput>
    create: XOR<IssueCreateWithoutReplysInput, IssueUncheckedCreateWithoutReplysInput>
    where?: IssueWhereInput
  }

  export type IssueUpdateToOneWithWhereWithoutReplysInput = {
    where?: IssueWhereInput
    data: XOR<IssueUpdateWithoutReplysInput, IssueUncheckedUpdateWithoutReplysInput>
  }

  export type IssueUpdateWithoutReplysInput = {
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUpdateManyWithoutIssueNestedInput
    celebs?: CelebUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutReplysInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUncheckedUpdateManyWithoutIssueNestedInput
    celebs?: CelebUncheckedUpdateManyWithoutIssuesNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUncheckedUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueBlockCreateManyIssueInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    seq: number
    title?: string | null
    blockType: string
    content?: string | null
    isRemoved: boolean
  }

  export type RatingCreateManyIssueInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    userId: string
    rating: number
  }

  export type IssueMessageCreateManyIssueInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    blockId: number
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
  }

  export type MessageLikeCreateManyIssueInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    messageId: number
    userId: string
    evaluation: number
  }

  export type IssueReplyCreateManyIssueInput = {
    id?: number
    userId: string
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
  }

  export type IssueBlockUpdateWithoutIssueInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    messages?: IssueMessageUpdateManyWithoutBlockNestedInput
  }

  export type IssueBlockUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    messages?: IssueMessageUncheckedUpdateManyWithoutBlockNestedInput
  }

  export type IssueBlockUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    seq?: IntFieldUpdateOperationsInput | number
    title?: NullableStringFieldUpdateOperationsInput | string | null
    blockType?: StringFieldUpdateOperationsInput | string
    content?: NullableStringFieldUpdateOperationsInput | string | null
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
  }

  export type CelebUpdateWithoutIssuesInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CelebUncheckedUpdateWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type CelebUncheckedUpdateManyWithoutIssuesInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    name?: StringFieldUpdateOperationsInput | string
    description?: NullableStringFieldUpdateOperationsInput | string | null
    avatar?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type RatingUpdateWithoutIssueInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    userId?: StringFieldUpdateOperationsInput | string
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type IssueMessageUpdateWithoutIssueInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    block?: IssueBlockUpdateOneRequiredWithoutMessagesNestedInput
    messageLike?: MessageLikeUpdateManyWithoutMessageNestedInput
  }

  export type IssueMessageUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    blockId?: IntFieldUpdateOperationsInput | number
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    messageLike?: MessageLikeUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type IssueMessageUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    blockId?: IntFieldUpdateOperationsInput | number
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUpdateWithoutIssueInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: IntFieldUpdateOperationsInput | number
    message?: IssueMessageUpdateOneRequiredWithoutMessageLikeNestedInput
    user?: UserUpdateOneRequiredWithoutMessageLikesNestedInput
  }

  export type MessageLikeUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type IssueReplyUpdateWithoutIssueInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    user?: UserUpdateOneRequiredWithoutReplysNestedInput
  }

  export type IssueReplyUncheckedUpdateWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type IssueReplyUncheckedUpdateManyWithoutIssueInput = {
    id?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type IssueMessageCreateManyBlockInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    isRemoved: boolean
    issueId: number
    celebId: number
    celebName: string
    celebDescription?: string | null
    celebAvatar?: string | null
    content: string
    link: string
    linkFrom: string
    backgroundColor: string
    bias: $Enums.Bias
    reportedAt: Date | string
    likeCount?: number
  }

  export type IssueMessageUpdateWithoutBlockInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    issue?: IssueUpdateOneRequiredWithoutIssueMessagesNestedInput
    messageLike?: MessageLikeUpdateManyWithoutMessageNestedInput
  }

  export type IssueMessageUncheckedUpdateWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    issueId?: IntFieldUpdateOperationsInput | number
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    messageLike?: MessageLikeUncheckedUpdateManyWithoutMessageNestedInput
  }

  export type IssueMessageUncheckedUpdateManyWithoutBlockInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    isRemoved?: BoolFieldUpdateOperationsInput | boolean
    issueId?: IntFieldUpdateOperationsInput | number
    celebId?: IntFieldUpdateOperationsInput | number
    celebName?: StringFieldUpdateOperationsInput | string
    celebDescription?: NullableStringFieldUpdateOperationsInput | string | null
    celebAvatar?: NullableStringFieldUpdateOperationsInput | string | null
    content?: StringFieldUpdateOperationsInput | string
    link?: StringFieldUpdateOperationsInput | string
    linkFrom?: StringFieldUpdateOperationsInput | string
    backgroundColor?: StringFieldUpdateOperationsInput | string
    bias?: EnumBiasFieldUpdateOperationsInput | $Enums.Bias
    reportedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeCreateManyMessageInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    userId: string
    evaluation: number
  }

  export type MessageLikeUpdateWithoutMessageInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: IntFieldUpdateOperationsInput | number
    issue?: IssueUpdateOneRequiredWithoutMessageLikeNestedInput
    user?: UserUpdateOneRequiredWithoutMessageLikesNestedInput
  }

  export type MessageLikeUncheckedUpdateWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUncheckedUpdateManyWithoutMessageInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    userId?: StringFieldUpdateOperationsInput | string
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type IssueUpdateWithoutCelebsInput = {
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUpdateManyWithoutIssueNestedInput
    ratings?: RatingUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateWithoutCelebsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueBlocks?: IssueBlockUncheckedUpdateManyWithoutIssueNestedInput
    ratings?: RatingUncheckedUpdateManyWithoutIssueNestedInput
    issueMessages?: IssueMessageUncheckedUpdateManyWithoutIssueNestedInput
    messageLike?: MessageLikeUncheckedUpdateManyWithoutIssueNestedInput
    replys?: IssueReplyUncheckedUpdateManyWithoutIssueNestedInput
  }

  export type IssueUncheckedUpdateManyWithoutCelebsInput = {
    id?: IntFieldUpdateOperationsInput | number
    slug?: StringFieldUpdateOperationsInput | string
    weight?: IntFieldUpdateOperationsInput | number
    title?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    coverImage?: StringFieldUpdateOperationsInput | string
    status?: EnumIssueStatusFieldUpdateOperationsInput | $Enums.IssueStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type AccountCreateManyUserInput = {
    id?: string
    type: string
    scope: string
    provider: string
    providerAccountId: string
    refresh_token?: string | null
    access_token?: string | null
    expires_at?: number | null
    refresh_token_expires_in?: number | null
    token_type?: string | null
    id_token?: string | null
    session_state?: string | null
  }

  export type SessionCreateManyUserInput = {
    id?: string
    sessionToken: string
    expires: Date | string
  }

  export type RatingCreateManyUserInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    issueId: number
    rating: number
  }

  export type MessageLikeCreateManyUserInput = {
    id?: number
    createdAt: Date | string
    updatedAt: Date | string
    messageId: number
    issueId: number
    evaluation: number
  }

  export type IssueReplyCreateManyUserInput = {
    id?: number
    issueId: number
    content: string
    createdAt: Date | string
    updatedAt: Date | string
    likeCount?: number
  }

  export type AccountUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type AccountUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    type?: StringFieldUpdateOperationsInput | string
    scope?: StringFieldUpdateOperationsInput | string
    provider?: StringFieldUpdateOperationsInput | string
    providerAccountId?: StringFieldUpdateOperationsInput | string
    refresh_token?: NullableStringFieldUpdateOperationsInput | string | null
    access_token?: NullableStringFieldUpdateOperationsInput | string | null
    expires_at?: NullableIntFieldUpdateOperationsInput | number | null
    refresh_token_expires_in?: NullableIntFieldUpdateOperationsInput | number | null
    token_type?: NullableStringFieldUpdateOperationsInput | string | null
    id_token?: NullableStringFieldUpdateOperationsInput | string | null
    session_state?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type SessionUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type SessionUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    sessionToken?: StringFieldUpdateOperationsInput | string
    expires?: DateTimeFieldUpdateOperationsInput | Date | string
  }

  export type RatingUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    rating?: IntFieldUpdateOperationsInput | number
    issue?: IssueUpdateOneRequiredWithoutRatingsNestedInput
  }

  export type RatingUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type RatingUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    issueId?: IntFieldUpdateOperationsInput | number
    rating?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUpdateWithoutUserInput = {
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    evaluation?: IntFieldUpdateOperationsInput | number
    message?: IssueMessageUpdateOneRequiredWithoutMessageLikeNestedInput
    issue?: IssueUpdateOneRequiredWithoutMessageLikeNestedInput
  }

  export type MessageLikeUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type MessageLikeUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    messageId?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    evaluation?: IntFieldUpdateOperationsInput | number
  }

  export type IssueReplyUpdateWithoutUserInput = {
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
    issue?: IssueUpdateOneRequiredWithoutReplysNestedInput
  }

  export type IssueReplyUncheckedUpdateWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }

  export type IssueReplyUncheckedUpdateManyWithoutUserInput = {
    id?: IntFieldUpdateOperationsInput | number
    issueId?: IntFieldUpdateOperationsInput | number
    content?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    likeCount?: IntFieldUpdateOperationsInput | number
  }



  /**
   * Aliases for legacy arg types
   */
    /**
     * @deprecated Use IssueDefaultArgs instead
     */
    export type IssueArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = IssueDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IssueBlockDefaultArgs instead
     */
    export type IssueBlockArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = IssueBlockDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IssueMessageDefaultArgs instead
     */
    export type IssueMessageArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = IssueMessageDefaultArgs<ExtArgs>
    /**
     * @deprecated Use CelebDefaultArgs instead
     */
    export type CelebArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = CelebDefaultArgs<ExtArgs>
    /**
     * @deprecated Use AccountDefaultArgs instead
     */
    export type AccountArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = AccountDefaultArgs<ExtArgs>
    /**
     * @deprecated Use SessionDefaultArgs instead
     */
    export type SessionArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = SessionDefaultArgs<ExtArgs>
    /**
     * @deprecated Use UserDefaultArgs instead
     */
    export type UserArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = UserDefaultArgs<ExtArgs>
    /**
     * @deprecated Use VerificationTokenDefaultArgs instead
     */
    export type VerificationTokenArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = VerificationTokenDefaultArgs<ExtArgs>
    /**
     * @deprecated Use RatingDefaultArgs instead
     */
    export type RatingArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = RatingDefaultArgs<ExtArgs>
    /**
     * @deprecated Use MessageLikeDefaultArgs instead
     */
    export type MessageLikeArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = MessageLikeDefaultArgs<ExtArgs>
    /**
     * @deprecated Use IssueReplyDefaultArgs instead
     */
    export type IssueReplyArgs<ExtArgs extends $Extensions.Args = $Extensions.DefaultArgs> = IssueReplyDefaultArgs<ExtArgs>

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