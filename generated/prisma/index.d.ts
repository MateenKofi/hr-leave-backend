
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
 * Model User
 * 
 */
export type User = $Result.DefaultSelection<Prisma.$UserPayload>
/**
 * Model Department
 * 
 */
export type Department = $Result.DefaultSelection<Prisma.$DepartmentPayload>
/**
 * Model Leave
 * 
 */
export type Leave = $Result.DefaultSelection<Prisma.$LeavePayload>
/**
 * Model LeaveHistory
 * 
 */
export type LeaveHistory = $Result.DefaultSelection<Prisma.$LeaveHistoryPayload>
/**
 * Model LeavePolicy
 * 
 */
export type LeavePolicy = $Result.DefaultSelection<Prisma.$LeavePolicyPayload>
/**
 * Model Notification
 * 
 */
export type Notification = $Result.DefaultSelection<Prisma.$NotificationPayload>

/**
 * Enums
 */
export namespace $Enums {
  export const UserRole: {
  ADMIN: 'ADMIN',
  HR: 'HR',
  EMPLOYEE: 'EMPLOYEE',
  SUPER_ADMIN: 'SUPER_ADMIN'
};

export type UserRole = (typeof UserRole)[keyof typeof UserRole]


export const LeaveStatus: {
  PENDING: 'PENDING',
  APPROVED: 'APPROVED',
  REJECTED: 'REJECTED'
};

export type LeaveStatus = (typeof LeaveStatus)[keyof typeof LeaveStatus]


export const LeaveType: {
  MATERNITY: 'MATERNITY',
  PATERNITY: 'PATERNITY',
  SICK: 'SICK',
  EMERGENCY: 'EMERGENCY',
  ANNUAL: 'ANNUAL'
};

export type LeaveType = (typeof LeaveType)[keyof typeof LeaveType]

}

export type UserRole = $Enums.UserRole

export const UserRole: typeof $Enums.UserRole

export type LeaveStatus = $Enums.LeaveStatus

export const LeaveStatus: typeof $Enums.LeaveStatus

export type LeaveType = $Enums.LeaveType

export const LeaveType: typeof $Enums.LeaveType

/**
 * ##  Prisma Client ʲˢ
 *
 * Type-safe database client for TypeScript & Node.js
 * @example
 * ```
 * const prisma = new PrismaClient()
 * // Fetch zero or more Users
 * const users = await prisma.user.findMany()
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
   * // Fetch zero or more Users
   * const users = await prisma.user.findMany()
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
   * `prisma.user`: Exposes CRUD operations for the **User** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Users
    * const users = await prisma.user.findMany()
    * ```
    */
  get user(): Prisma.UserDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.department`: Exposes CRUD operations for the **Department** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Departments
    * const departments = await prisma.department.findMany()
    * ```
    */
  get department(): Prisma.DepartmentDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leave`: Exposes CRUD operations for the **Leave** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Leaves
    * const leaves = await prisma.leave.findMany()
    * ```
    */
  get leave(): Prisma.LeaveDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leaveHistory`: Exposes CRUD operations for the **LeaveHistory** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeaveHistories
    * const leaveHistories = await prisma.leaveHistory.findMany()
    * ```
    */
  get leaveHistory(): Prisma.LeaveHistoryDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.leavePolicy`: Exposes CRUD operations for the **LeavePolicy** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more LeavePolicies
    * const leavePolicies = await prisma.leavePolicy.findMany()
    * ```
    */
  get leavePolicy(): Prisma.LeavePolicyDelegate<ExtArgs, ClientOptions>;

  /**
   * `prisma.notification`: Exposes CRUD operations for the **Notification** model.
    * Example usage:
    * ```ts
    * // Fetch zero or more Notifications
    * const notifications = await prisma.notification.findMany()
    * ```
    */
  get notification(): Prisma.NotificationDelegate<ExtArgs, ClientOptions>;
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
   * Prisma Client JS version: 6.8.2
   * Query Engine version: 2060c79ba17c6bb9f5823312b6f6b7f4a845738e
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
    User: 'User',
    Department: 'Department',
    Leave: 'Leave',
    LeaveHistory: 'LeaveHistory',
    LeavePolicy: 'LeavePolicy',
    Notification: 'Notification'
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
      modelProps: "user" | "department" | "leave" | "leaveHistory" | "leavePolicy" | "notification"
      txIsolationLevel: Prisma.TransactionIsolationLevel
    }
    model: {
      User: {
        payload: Prisma.$UserPayload<ExtArgs>
        fields: Prisma.UserFieldRefs
        operations: {
          findUnique: {
            args: Prisma.UserFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.UserFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findFirst: {
            args: Prisma.UserFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.UserFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          findMany: {
            args: Prisma.UserFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          create: {
            args: Prisma.UserCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          createMany: {
            args: Prisma.UserCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.UserCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          delete: {
            args: Prisma.UserDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          update: {
            args: Prisma.UserUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          deleteMany: {
            args: Prisma.UserDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.UserUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.UserUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>[]
          }
          upsert: {
            args: Prisma.UserUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$UserPayload>
          }
          aggregate: {
            args: Prisma.UserAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateUser>
          }
          groupBy: {
            args: Prisma.UserGroupByArgs<ExtArgs>
            result: $Utils.Optional<UserGroupByOutputType>[]
          }
          count: {
            args: Prisma.UserCountArgs<ExtArgs>
            result: $Utils.Optional<UserCountAggregateOutputType> | number
          }
        }
      }
      Department: {
        payload: Prisma.$DepartmentPayload<ExtArgs>
        fields: Prisma.DepartmentFieldRefs
        operations: {
          findUnique: {
            args: Prisma.DepartmentFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.DepartmentFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findFirst: {
            args: Prisma.DepartmentFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.DepartmentFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          findMany: {
            args: Prisma.DepartmentFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          create: {
            args: Prisma.DepartmentCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          createMany: {
            args: Prisma.DepartmentCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.DepartmentCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          delete: {
            args: Prisma.DepartmentDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          update: {
            args: Prisma.DepartmentUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          deleteMany: {
            args: Prisma.DepartmentDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.DepartmentUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.DepartmentUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>[]
          }
          upsert: {
            args: Prisma.DepartmentUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$DepartmentPayload>
          }
          aggregate: {
            args: Prisma.DepartmentAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateDepartment>
          }
          groupBy: {
            args: Prisma.DepartmentGroupByArgs<ExtArgs>
            result: $Utils.Optional<DepartmentGroupByOutputType>[]
          }
          count: {
            args: Prisma.DepartmentCountArgs<ExtArgs>
            result: $Utils.Optional<DepartmentCountAggregateOutputType> | number
          }
        }
      }
      Leave: {
        payload: Prisma.$LeavePayload<ExtArgs>
        fields: Prisma.LeaveFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findFirst: {
            args: Prisma.LeaveFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          findMany: {
            args: Prisma.LeaveFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          create: {
            args: Prisma.LeaveCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          createMany: {
            args: Prisma.LeaveCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          delete: {
            args: Prisma.LeaveDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          update: {
            args: Prisma.LeaveUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          deleteMany: {
            args: Prisma.LeaveDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>[]
          }
          upsert: {
            args: Prisma.LeaveUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePayload>
          }
          aggregate: {
            args: Prisma.LeaveAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeave>
          }
          groupBy: {
            args: Prisma.LeaveGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveCountAggregateOutputType> | number
          }
        }
      }
      LeaveHistory: {
        payload: Prisma.$LeaveHistoryPayload<ExtArgs>
        fields: Prisma.LeaveHistoryFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeaveHistoryFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeaveHistoryFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          findFirst: {
            args: Prisma.LeaveHistoryFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeaveHistoryFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          findMany: {
            args: Prisma.LeaveHistoryFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>[]
          }
          create: {
            args: Prisma.LeaveHistoryCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          createMany: {
            args: Prisma.LeaveHistoryCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeaveHistoryCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>[]
          }
          delete: {
            args: Prisma.LeaveHistoryDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          update: {
            args: Prisma.LeaveHistoryUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          deleteMany: {
            args: Prisma.LeaveHistoryDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeaveHistoryUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeaveHistoryUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>[]
          }
          upsert: {
            args: Prisma.LeaveHistoryUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeaveHistoryPayload>
          }
          aggregate: {
            args: Prisma.LeaveHistoryAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeaveHistory>
          }
          groupBy: {
            args: Prisma.LeaveHistoryGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeaveHistoryGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeaveHistoryCountArgs<ExtArgs>
            result: $Utils.Optional<LeaveHistoryCountAggregateOutputType> | number
          }
        }
      }
      LeavePolicy: {
        payload: Prisma.$LeavePolicyPayload<ExtArgs>
        fields: Prisma.LeavePolicyFieldRefs
        operations: {
          findUnique: {
            args: Prisma.LeavePolicyFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.LeavePolicyFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          findFirst: {
            args: Prisma.LeavePolicyFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.LeavePolicyFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          findMany: {
            args: Prisma.LeavePolicyFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>[]
          }
          create: {
            args: Prisma.LeavePolicyCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          createMany: {
            args: Prisma.LeavePolicyCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.LeavePolicyCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>[]
          }
          delete: {
            args: Prisma.LeavePolicyDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          update: {
            args: Prisma.LeavePolicyUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          deleteMany: {
            args: Prisma.LeavePolicyDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.LeavePolicyUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.LeavePolicyUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>[]
          }
          upsert: {
            args: Prisma.LeavePolicyUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$LeavePolicyPayload>
          }
          aggregate: {
            args: Prisma.LeavePolicyAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateLeavePolicy>
          }
          groupBy: {
            args: Prisma.LeavePolicyGroupByArgs<ExtArgs>
            result: $Utils.Optional<LeavePolicyGroupByOutputType>[]
          }
          count: {
            args: Prisma.LeavePolicyCountArgs<ExtArgs>
            result: $Utils.Optional<LeavePolicyCountAggregateOutputType> | number
          }
        }
      }
      Notification: {
        payload: Prisma.$NotificationPayload<ExtArgs>
        fields: Prisma.NotificationFieldRefs
        operations: {
          findUnique: {
            args: Prisma.NotificationFindUniqueArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findUniqueOrThrow: {
            args: Prisma.NotificationFindUniqueOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findFirst: {
            args: Prisma.NotificationFindFirstArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload> | null
          }
          findFirstOrThrow: {
            args: Prisma.NotificationFindFirstOrThrowArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          findMany: {
            args: Prisma.NotificationFindManyArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          create: {
            args: Prisma.NotificationCreateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          createMany: {
            args: Prisma.NotificationCreateManyArgs<ExtArgs>
            result: BatchPayload
          }
          createManyAndReturn: {
            args: Prisma.NotificationCreateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          delete: {
            args: Prisma.NotificationDeleteArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          update: {
            args: Prisma.NotificationUpdateArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          deleteMany: {
            args: Prisma.NotificationDeleteManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateMany: {
            args: Prisma.NotificationUpdateManyArgs<ExtArgs>
            result: BatchPayload
          }
          updateManyAndReturn: {
            args: Prisma.NotificationUpdateManyAndReturnArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>[]
          }
          upsert: {
            args: Prisma.NotificationUpsertArgs<ExtArgs>
            result: $Utils.PayloadToResult<Prisma.$NotificationPayload>
          }
          aggregate: {
            args: Prisma.NotificationAggregateArgs<ExtArgs>
            result: $Utils.Optional<AggregateNotification>
          }
          groupBy: {
            args: Prisma.NotificationGroupByArgs<ExtArgs>
            result: $Utils.Optional<NotificationGroupByOutputType>[]
          }
          count: {
            args: Prisma.NotificationCountArgs<ExtArgs>
            result: $Utils.Optional<NotificationCountAggregateOutputType> | number
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
    user?: UserOmit
    department?: DepartmentOmit
    leave?: LeaveOmit
    leaveHistory?: LeaveHistoryOmit
    leavePolicy?: LeavePolicyOmit
    notification?: NotificationOmit
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
   * Count Type UserCountOutputType
   */

  export type UserCountOutputType = {
    leaves: number
    leaveHistories: number
    notifications: number
    createdUsers: number
    updatedUsers: number
    deletedUsers: number
    createdDepartments: number
    updatedDepartments: number
    deletedDepartments: number
    createdLeaves: number
    updatedLeaves: number
    deletedLeaves: number
    approvedLeaves: number
    rejectedLeaves: number
    changedLeaveHistories: number
    createdLeavePolicies: number
    updatedLeavePolicies: number
    deletedLeavePolicies: number
  }

  export type UserCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    leaves?: boolean | UserCountOutputTypeCountLeavesArgs
    leaveHistories?: boolean | UserCountOutputTypeCountLeaveHistoriesArgs
    notifications?: boolean | UserCountOutputTypeCountNotificationsArgs
    createdUsers?: boolean | UserCountOutputTypeCountCreatedUsersArgs
    updatedUsers?: boolean | UserCountOutputTypeCountUpdatedUsersArgs
    deletedUsers?: boolean | UserCountOutputTypeCountDeletedUsersArgs
    createdDepartments?: boolean | UserCountOutputTypeCountCreatedDepartmentsArgs
    updatedDepartments?: boolean | UserCountOutputTypeCountUpdatedDepartmentsArgs
    deletedDepartments?: boolean | UserCountOutputTypeCountDeletedDepartmentsArgs
    createdLeaves?: boolean | UserCountOutputTypeCountCreatedLeavesArgs
    updatedLeaves?: boolean | UserCountOutputTypeCountUpdatedLeavesArgs
    deletedLeaves?: boolean | UserCountOutputTypeCountDeletedLeavesArgs
    approvedLeaves?: boolean | UserCountOutputTypeCountApprovedLeavesArgs
    rejectedLeaves?: boolean | UserCountOutputTypeCountRejectedLeavesArgs
    changedLeaveHistories?: boolean | UserCountOutputTypeCountChangedLeaveHistoriesArgs
    createdLeavePolicies?: boolean | UserCountOutputTypeCountCreatedLeavePoliciesArgs
    updatedLeavePolicies?: boolean | UserCountOutputTypeCountUpdatedLeavePoliciesArgs
    deletedLeavePolicies?: boolean | UserCountOutputTypeCountDeletedLeavePoliciesArgs
  }

  // Custom InputTypes
  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the UserCountOutputType
     */
    select?: UserCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountLeaveHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountApprovedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountRejectedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountChangedLeaveHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveHistoryWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountCreatedLeavePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeavePolicyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountUpdatedLeavePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeavePolicyWhereInput
  }

  /**
   * UserCountOutputType without action
   */
  export type UserCountOutputTypeCountDeletedLeavePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeavePolicyWhereInput
  }


  /**
   * Count Type DepartmentCountOutputType
   */

  export type DepartmentCountOutputType = {
    users: number
  }

  export type DepartmentCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    users?: boolean | DepartmentCountOutputTypeCountUsersArgs
  }

  // Custom InputTypes
  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the DepartmentCountOutputType
     */
    select?: DepartmentCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * DepartmentCountOutputType without action
   */
  export type DepartmentCountOutputTypeCountUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: UserWhereInput
  }


  /**
   * Count Type LeaveCountOutputType
   */

  export type LeaveCountOutputType = {
    histories: number
    notifications: number
  }

  export type LeaveCountOutputTypeSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    histories?: boolean | LeaveCountOutputTypeCountHistoriesArgs
    notifications?: boolean | LeaveCountOutputTypeCountNotificationsArgs
  }

  // Custom InputTypes
  /**
   * LeaveCountOutputType without action
   */
  export type LeaveCountOutputTypeDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveCountOutputType
     */
    select?: LeaveCountOutputTypeSelect<ExtArgs> | null
  }

  /**
   * LeaveCountOutputType without action
   */
  export type LeaveCountOutputTypeCountHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveHistoryWhereInput
  }

  /**
   * LeaveCountOutputType without action
   */
  export type LeaveCountOutputTypeCountNotificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
  }


  /**
   * Models
   */

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
    password: string | null
    phoneNumber: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    imageKey: string | null
    delFlag: boolean | null
    changedPassword: boolean | null
    dob: Date | null
    address: string | null
    city: string | null
    departmentId: string | null
    lastLogin: Date | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
  }

  export type UserMaxAggregateOutputType = {
    id: string | null
    name: string | null
    email: string | null
    password: string | null
    phoneNumber: string | null
    role: $Enums.UserRole | null
    createdAt: Date | null
    updatedAt: Date | null
    imageUrl: string | null
    imageKey: string | null
    delFlag: boolean | null
    changedPassword: boolean | null
    dob: Date | null
    address: string | null
    city: string | null
    departmentId: string | null
    lastLogin: Date | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
  }

  export type UserCountAggregateOutputType = {
    id: number
    name: number
    email: number
    password: number
    phoneNumber: number
    role: number
    createdAt: number
    updatedAt: number
    imageUrl: number
    imageKey: number
    delFlag: number
    changedPassword: number
    dob: number
    address: number
    city: number
    departmentId: number
    lastLogin: number
    createdById: number
    updatedById: number
    deletedById: number
    _all: number
  }


  export type UserMinAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    imageKey?: true
    delFlag?: true
    changedPassword?: true
    dob?: true
    address?: true
    city?: true
    departmentId?: true
    lastLogin?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
  }

  export type UserMaxAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    imageKey?: true
    delFlag?: true
    changedPassword?: true
    dob?: true
    address?: true
    city?: true
    departmentId?: true
    lastLogin?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
  }

  export type UserCountAggregateInputType = {
    id?: true
    name?: true
    email?: true
    password?: true
    phoneNumber?: true
    role?: true
    createdAt?: true
    updatedAt?: true
    imageUrl?: true
    imageKey?: true
    delFlag?: true
    changedPassword?: true
    dob?: true
    address?: true
    city?: true
    departmentId?: true
    lastLogin?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
    _all?: true
  }

  export type UserAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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




  export type UserGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
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
    name: string
    email: string
    password: string
    phoneNumber: string | null
    role: $Enums.UserRole
    createdAt: Date
    updatedAt: Date
    imageUrl: string
    imageKey: string
    delFlag: boolean
    changedPassword: boolean
    dob: Date
    address: string | null
    city: string | null
    departmentId: string | null
    lastLogin: Date | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
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


  export type UserSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    delFlag?: boolean
    changedPassword?: boolean
    dob?: boolean
    address?: boolean
    city?: boolean
    departmentId?: boolean
    lastLogin?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    updatedBy?: boolean | User$updatedByArgs<ExtArgs>
    deletedBy?: boolean | User$deletedByArgs<ExtArgs>
    leaves?: boolean | User$leavesArgs<ExtArgs>
    leaveHistories?: boolean | User$leaveHistoriesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    updatedUsers?: boolean | User$updatedUsersArgs<ExtArgs>
    deletedUsers?: boolean | User$deletedUsersArgs<ExtArgs>
    createdDepartments?: boolean | User$createdDepartmentsArgs<ExtArgs>
    updatedDepartments?: boolean | User$updatedDepartmentsArgs<ExtArgs>
    deletedDepartments?: boolean | User$deletedDepartmentsArgs<ExtArgs>
    createdLeaves?: boolean | User$createdLeavesArgs<ExtArgs>
    updatedLeaves?: boolean | User$updatedLeavesArgs<ExtArgs>
    deletedLeaves?: boolean | User$deletedLeavesArgs<ExtArgs>
    approvedLeaves?: boolean | User$approvedLeavesArgs<ExtArgs>
    rejectedLeaves?: boolean | User$rejectedLeavesArgs<ExtArgs>
    changedLeaveHistories?: boolean | User$changedLeaveHistoriesArgs<ExtArgs>
    createdLeavePolicies?: boolean | User$createdLeavePoliciesArgs<ExtArgs>
    updatedLeavePolicies?: boolean | User$updatedLeavePoliciesArgs<ExtArgs>
    deletedLeavePolicies?: boolean | User$deletedLeavePoliciesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    delFlag?: boolean
    changedPassword?: boolean
    dob?: boolean
    address?: boolean
    city?: boolean
    departmentId?: boolean
    lastLogin?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    updatedBy?: boolean | User$updatedByArgs<ExtArgs>
    deletedBy?: boolean | User$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    delFlag?: boolean
    changedPassword?: boolean
    dob?: boolean
    address?: boolean
    city?: boolean
    departmentId?: boolean
    lastLogin?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    department?: boolean | User$departmentArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    updatedBy?: boolean | User$updatedByArgs<ExtArgs>
    deletedBy?: boolean | User$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["user"]>

  export type UserSelectScalar = {
    id?: boolean
    name?: boolean
    email?: boolean
    password?: boolean
    phoneNumber?: boolean
    role?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    imageUrl?: boolean
    imageKey?: boolean
    delFlag?: boolean
    changedPassword?: boolean
    dob?: boolean
    address?: boolean
    city?: boolean
    departmentId?: boolean
    lastLogin?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
  }

  export type UserOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "email" | "password" | "phoneNumber" | "role" | "createdAt" | "updatedAt" | "imageUrl" | "imageKey" | "delFlag" | "changedPassword" | "dob" | "address" | "city" | "departmentId" | "lastLogin" | "createdById" | "updatedById" | "deletedById", ExtArgs["result"]["user"]>
  export type UserInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    updatedBy?: boolean | User$updatedByArgs<ExtArgs>
    deletedBy?: boolean | User$deletedByArgs<ExtArgs>
    leaves?: boolean | User$leavesArgs<ExtArgs>
    leaveHistories?: boolean | User$leaveHistoriesArgs<ExtArgs>
    notifications?: boolean | User$notificationsArgs<ExtArgs>
    createdUsers?: boolean | User$createdUsersArgs<ExtArgs>
    updatedUsers?: boolean | User$updatedUsersArgs<ExtArgs>
    deletedUsers?: boolean | User$deletedUsersArgs<ExtArgs>
    createdDepartments?: boolean | User$createdDepartmentsArgs<ExtArgs>
    updatedDepartments?: boolean | User$updatedDepartmentsArgs<ExtArgs>
    deletedDepartments?: boolean | User$deletedDepartmentsArgs<ExtArgs>
    createdLeaves?: boolean | User$createdLeavesArgs<ExtArgs>
    updatedLeaves?: boolean | User$updatedLeavesArgs<ExtArgs>
    deletedLeaves?: boolean | User$deletedLeavesArgs<ExtArgs>
    approvedLeaves?: boolean | User$approvedLeavesArgs<ExtArgs>
    rejectedLeaves?: boolean | User$rejectedLeavesArgs<ExtArgs>
    changedLeaveHistories?: boolean | User$changedLeaveHistoriesArgs<ExtArgs>
    createdLeavePolicies?: boolean | User$createdLeavePoliciesArgs<ExtArgs>
    updatedLeavePolicies?: boolean | User$updatedLeavePoliciesArgs<ExtArgs>
    deletedLeavePolicies?: boolean | User$deletedLeavePoliciesArgs<ExtArgs>
    _count?: boolean | UserCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type UserIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    updatedBy?: boolean | User$updatedByArgs<ExtArgs>
    deletedBy?: boolean | User$deletedByArgs<ExtArgs>
  }
  export type UserIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    department?: boolean | User$departmentArgs<ExtArgs>
    createdBy?: boolean | User$createdByArgs<ExtArgs>
    updatedBy?: boolean | User$updatedByArgs<ExtArgs>
    deletedBy?: boolean | User$deletedByArgs<ExtArgs>
  }

  export type $UserPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "User"
    objects: {
      department: Prisma.$DepartmentPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
      deletedBy: Prisma.$UserPayload<ExtArgs> | null
      leaves: Prisma.$LeavePayload<ExtArgs>[]
      leaveHistories: Prisma.$LeaveHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      createdUsers: Prisma.$UserPayload<ExtArgs>[]
      updatedUsers: Prisma.$UserPayload<ExtArgs>[]
      deletedUsers: Prisma.$UserPayload<ExtArgs>[]
      createdDepartments: Prisma.$DepartmentPayload<ExtArgs>[]
      updatedDepartments: Prisma.$DepartmentPayload<ExtArgs>[]
      deletedDepartments: Prisma.$DepartmentPayload<ExtArgs>[]
      createdLeaves: Prisma.$LeavePayload<ExtArgs>[]
      updatedLeaves: Prisma.$LeavePayload<ExtArgs>[]
      deletedLeaves: Prisma.$LeavePayload<ExtArgs>[]
      approvedLeaves: Prisma.$LeavePayload<ExtArgs>[]
      rejectedLeaves: Prisma.$LeavePayload<ExtArgs>[]
      changedLeaveHistories: Prisma.$LeaveHistoryPayload<ExtArgs>[]
      createdLeavePolicies: Prisma.$LeavePolicyPayload<ExtArgs>[]
      updatedLeavePolicies: Prisma.$LeavePolicyPayload<ExtArgs>[]
      deletedLeavePolicies: Prisma.$LeavePolicyPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      email: string
      password: string
      phoneNumber: string | null
      role: $Enums.UserRole
      createdAt: Date
      updatedAt: Date
      imageUrl: string
      imageKey: string
      delFlag: boolean
      changedPassword: boolean
      dob: Date
      address: string | null
      city: string | null
      departmentId: string | null
      lastLogin: Date | null
      createdById: string | null
      updatedById: string | null
      deletedById: string | null
    }, ExtArgs["result"]["user"]>
    composites: {}
  }

  type UserGetPayload<S extends boolean | null | undefined | UserDefaultArgs> = $Result.GetResult<Prisma.$UserPayload, S>

  type UserCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<UserFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: UserCountAggregateInputType | true
    }

  export interface UserDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
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
     */
    findUnique<T extends UserFindUniqueArgs>(args: SelectSubset<T, UserFindUniqueArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one User that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {UserFindUniqueOrThrowArgs} args - Arguments to find a User
     * @example
     * // Get one User
     * const user = await prisma.user.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends UserFindUniqueOrThrowArgs>(args: SelectSubset<T, UserFindUniqueOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    findFirst<T extends UserFindFirstArgs>(args?: SelectSubset<T, UserFindFirstArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

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
     */
    findFirstOrThrow<T extends UserFindFirstOrThrowArgs>(args?: SelectSubset<T, UserFindFirstOrThrowArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Users that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {UserFindManyArgs} args - Arguments to filter and select certain fields only.
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
     */
    findMany<T extends UserFindManyArgs>(args?: SelectSubset<T, UserFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

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
     */
    create<T extends UserCreateArgs>(args: SelectSubset<T, UserCreateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Users.
     * @param {UserCreateManyArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends UserCreateManyArgs>(args?: SelectSubset<T, UserCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Users and returns the data saved in the database.
     * @param {UserCreateManyAndReturnArgs} args - Arguments to create many Users.
     * @example
     * // Create many Users
     * const user = await prisma.user.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Users and only return the `id`
     * const userWithIdOnly = await prisma.user.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends UserCreateManyAndReturnArgs>(args?: SelectSubset<T, UserCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

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
     */
    delete<T extends UserDeleteArgs>(args: SelectSubset<T, UserDeleteArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    update<T extends UserUpdateArgs>(args: SelectSubset<T, UserUpdateArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

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
     */
    deleteMany<T extends UserDeleteManyArgs>(args?: SelectSubset<T, UserDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

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
     */
    updateMany<T extends UserUpdateManyArgs>(args: SelectSubset<T, UserUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Users and returns the data updated in the database.
     * @param {UserUpdateManyAndReturnArgs} args - Arguments to update many Users.
     * @example
     * // Update many Users
     * const user = await prisma.user.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Users and only return the `id`
     * const userWithIdOnly = await prisma.user.updateManyAndReturn({
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
    updateManyAndReturn<T extends UserUpdateManyAndReturnArgs>(args: SelectSubset<T, UserUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

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
     */
    upsert<T extends UserUpsertArgs>(args: SelectSubset<T, UserUpsertArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


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
  export interface Prisma__UserClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    department<T extends User$departmentArgs<ExtArgs> = {}>(args?: Subset<T, User$departmentArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends User$createdByArgs<ExtArgs> = {}>(args?: Subset<T, User$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends User$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedBy<T extends User$deletedByArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    leaves<T extends User$leavesArgs<ExtArgs> = {}>(args?: Subset<T, User$leavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    leaveHistories<T extends User$leaveHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$leaveHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends User$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, User$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdUsers<T extends User$createdUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$createdUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedUsers<T extends User$updatedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedUsers<T extends User$deletedUsersArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedUsersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdDepartments<T extends User$createdDepartmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$createdDepartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedDepartments<T extends User$updatedDepartmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedDepartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedDepartments<T extends User$deletedDepartmentsArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedDepartmentsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdLeaves<T extends User$createdLeavesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdLeavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedLeaves<T extends User$updatedLeavesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedLeavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedLeaves<T extends User$deletedLeavesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedLeavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approvedLeaves<T extends User$approvedLeavesArgs<ExtArgs> = {}>(args?: Subset<T, User$approvedLeavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    rejectedLeaves<T extends User$rejectedLeavesArgs<ExtArgs> = {}>(args?: Subset<T, User$rejectedLeavesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    changedLeaveHistories<T extends User$changedLeaveHistoriesArgs<ExtArgs> = {}>(args?: Subset<T, User$changedLeaveHistoriesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    createdLeavePolicies<T extends User$createdLeavePoliciesArgs<ExtArgs> = {}>(args?: Subset<T, User$createdLeavePoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    updatedLeavePolicies<T extends User$updatedLeavePoliciesArgs<ExtArgs> = {}>(args?: Subset<T, User$updatedLeavePoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    deletedLeavePolicies<T extends User$deletedLeavePoliciesArgs<ExtArgs> = {}>(args?: Subset<T, User$deletedLeavePoliciesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the User model
   */
  interface UserFieldRefs {
    readonly id: FieldRef<"User", 'String'>
    readonly name: FieldRef<"User", 'String'>
    readonly email: FieldRef<"User", 'String'>
    readonly password: FieldRef<"User", 'String'>
    readonly phoneNumber: FieldRef<"User", 'String'>
    readonly role: FieldRef<"User", 'UserRole'>
    readonly createdAt: FieldRef<"User", 'DateTime'>
    readonly updatedAt: FieldRef<"User", 'DateTime'>
    readonly imageUrl: FieldRef<"User", 'String'>
    readonly imageKey: FieldRef<"User", 'String'>
    readonly delFlag: FieldRef<"User", 'Boolean'>
    readonly changedPassword: FieldRef<"User", 'Boolean'>
    readonly dob: FieldRef<"User", 'DateTime'>
    readonly address: FieldRef<"User", 'String'>
    readonly city: FieldRef<"User", 'String'>
    readonly departmentId: FieldRef<"User", 'String'>
    readonly lastLogin: FieldRef<"User", 'DateTime'>
    readonly createdById: FieldRef<"User", 'String'>
    readonly updatedById: FieldRef<"User", 'String'>
    readonly deletedById: FieldRef<"User", 'String'>
  }
    

  // Custom InputTypes
  /**
   * User findUnique
   */
  export type UserFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    /**
     * The data needed to create a User.
     */
    data: XOR<UserCreateInput, UserUncheckedCreateInput>
  }

  /**
   * User createMany
   */
  export type UserCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * User createManyAndReturn
   */
  export type UserCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to create many Users.
     */
    data: UserCreateManyInput | UserCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * User update
   */
  export type UserUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
  }

  /**
   * User updateManyAndReturn
   */
  export type UserUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * The data used to update Users.
     */
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyInput>
    /**
     * Filter which Users to update
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * User upsert
   */
  export type UserUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
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
  export type UserDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Users to delete
     */
    where?: UserWhereInput
    /**
     * Limit how many Users to delete.
     */
    limit?: number
  }

  /**
   * User.department
   */
  export type User$departmentArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
  }

  /**
   * User.createdBy
   */
  export type User$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.updatedBy
   */
  export type User$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.deletedBy
   */
  export type User$deletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * User.leaves
   */
  export type User$leavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.leaveHistories
   */
  export type User$leaveHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    where?: LeaveHistoryWhereInput
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    cursor?: LeaveHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * User.notifications
   */
  export type User$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * User.createdUsers
   */
  export type User$createdUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.updatedUsers
   */
  export type User$updatedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.deletedUsers
   */
  export type User$deletedUsersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * User.createdDepartments
   */
  export type User$createdDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * User.updatedDepartments
   */
  export type User$updatedDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * User.deletedDepartments
   */
  export type User$deletedDepartmentsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    cursor?: DepartmentWhereUniqueInput
    take?: number
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * User.createdLeaves
   */
  export type User$createdLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.updatedLeaves
   */
  export type User$updatedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.deletedLeaves
   */
  export type User$deletedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.approvedLeaves
   */
  export type User$approvedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.rejectedLeaves
   */
  export type User$rejectedLeavesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    cursor?: LeaveWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * User.changedLeaveHistories
   */
  export type User$changedLeaveHistoriesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    where?: LeaveHistoryWhereInput
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    cursor?: LeaveHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * User.createdLeavePolicies
   */
  export type User$createdLeavePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    where?: LeavePolicyWhereInput
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    cursor?: LeavePolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * User.updatedLeavePolicies
   */
  export type User$updatedLeavePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    where?: LeavePolicyWhereInput
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    cursor?: LeavePolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * User.deletedLeavePolicies
   */
  export type User$deletedLeavePoliciesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    where?: LeavePolicyWhereInput
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    cursor?: LeavePolicyWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * User without action
   */
  export type UserDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
  }


  /**
   * Model Department
   */

  export type AggregateDepartment = {
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  export type DepartmentMinAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
  }

  export type DepartmentMaxAggregateOutputType = {
    id: string | null
    name: string | null
    description: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
  }

  export type DepartmentCountAggregateOutputType = {
    id: number
    name: number
    description: number
    createdAt: number
    updatedAt: number
    delFlag: number
    createdById: number
    updatedById: number
    deletedById: number
    _all: number
  }


  export type DepartmentMinAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
  }

  export type DepartmentMaxAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
  }

  export type DepartmentCountAggregateInputType = {
    id?: true
    name?: true
    description?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
    _all?: true
  }

  export type DepartmentAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Department to aggregate.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Departments
    **/
    _count?: true | DepartmentCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: DepartmentMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: DepartmentMaxAggregateInputType
  }

  export type GetDepartmentAggregateType<T extends DepartmentAggregateArgs> = {
        [P in keyof T & keyof AggregateDepartment]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateDepartment[P]>
      : GetScalarType<T[P], AggregateDepartment[P]>
  }




  export type DepartmentGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: DepartmentWhereInput
    orderBy?: DepartmentOrderByWithAggregationInput | DepartmentOrderByWithAggregationInput[]
    by: DepartmentScalarFieldEnum[] | DepartmentScalarFieldEnum
    having?: DepartmentScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: DepartmentCountAggregateInputType | true
    _min?: DepartmentMinAggregateInputType
    _max?: DepartmentMaxAggregateInputType
  }

  export type DepartmentGroupByOutputType = {
    id: string
    name: string
    description: string
    createdAt: Date
    updatedAt: Date
    delFlag: boolean
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
    _count: DepartmentCountAggregateOutputType | null
    _min: DepartmentMinAggregateOutputType | null
    _max: DepartmentMaxAggregateOutputType | null
  }

  type GetDepartmentGroupByPayload<T extends DepartmentGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<DepartmentGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof DepartmentGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
            : GetScalarType<T[P], DepartmentGroupByOutputType[P]>
        }
      >
    >


  export type DepartmentSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    createdBy?: boolean | Department$createdByArgs<ExtArgs>
    updatedBy?: boolean | Department$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Department$deletedByArgs<ExtArgs>
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    createdBy?: boolean | Department$createdByArgs<ExtArgs>
    updatedBy?: boolean | Department$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Department$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    createdBy?: boolean | Department$createdByArgs<ExtArgs>
    updatedBy?: boolean | Department$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Department$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["department"]>

  export type DepartmentSelectScalar = {
    id?: boolean
    name?: boolean
    description?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
  }

  export type DepartmentOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "name" | "description" | "createdAt" | "updatedAt" | "delFlag" | "createdById" | "updatedById" | "deletedById", ExtArgs["result"]["department"]>
  export type DepartmentInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Department$createdByArgs<ExtArgs>
    updatedBy?: boolean | Department$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Department$deletedByArgs<ExtArgs>
    users?: boolean | Department$usersArgs<ExtArgs>
    _count?: boolean | DepartmentCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type DepartmentIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Department$createdByArgs<ExtArgs>
    updatedBy?: boolean | Department$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Department$deletedByArgs<ExtArgs>
  }
  export type DepartmentIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | Department$createdByArgs<ExtArgs>
    updatedBy?: boolean | Department$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Department$deletedByArgs<ExtArgs>
  }

  export type $DepartmentPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Department"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
      deletedBy: Prisma.$UserPayload<ExtArgs> | null
      users: Prisma.$UserPayload<ExtArgs>[]
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      name: string
      description: string
      createdAt: Date
      updatedAt: Date
      delFlag: boolean
      createdById: string | null
      updatedById: string | null
      deletedById: string | null
    }, ExtArgs["result"]["department"]>
    composites: {}
  }

  type DepartmentGetPayload<S extends boolean | null | undefined | DepartmentDefaultArgs> = $Result.GetResult<Prisma.$DepartmentPayload, S>

  type DepartmentCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<DepartmentFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: DepartmentCountAggregateInputType | true
    }

  export interface DepartmentDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Department'], meta: { name: 'Department' } }
    /**
     * Find zero or one Department that matches the filter.
     * @param {DepartmentFindUniqueArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends DepartmentFindUniqueArgs>(args: SelectSubset<T, DepartmentFindUniqueArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Department that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {DepartmentFindUniqueOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends DepartmentFindUniqueOrThrowArgs>(args: SelectSubset<T, DepartmentFindUniqueOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends DepartmentFindFirstArgs>(args?: SelectSubset<T, DepartmentFindFirstArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Department that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindFirstOrThrowArgs} args - Arguments to find a Department
     * @example
     * // Get one Department
     * const department = await prisma.department.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends DepartmentFindFirstOrThrowArgs>(args?: SelectSubset<T, DepartmentFindFirstOrThrowArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Departments that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Departments
     * const departments = await prisma.department.findMany()
     * 
     * // Get first 10 Departments
     * const departments = await prisma.department.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const departmentWithIdOnly = await prisma.department.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends DepartmentFindManyArgs>(args?: SelectSubset<T, DepartmentFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Department.
     * @param {DepartmentCreateArgs} args - Arguments to create a Department.
     * @example
     * // Create one Department
     * const Department = await prisma.department.create({
     *   data: {
     *     // ... data to create a Department
     *   }
     * })
     * 
     */
    create<T extends DepartmentCreateArgs>(args: SelectSubset<T, DepartmentCreateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Departments.
     * @param {DepartmentCreateManyArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends DepartmentCreateManyArgs>(args?: SelectSubset<T, DepartmentCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Departments and returns the data saved in the database.
     * @param {DepartmentCreateManyAndReturnArgs} args - Arguments to create many Departments.
     * @example
     * // Create many Departments
     * const department = await prisma.department.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends DepartmentCreateManyAndReturnArgs>(args?: SelectSubset<T, DepartmentCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Department.
     * @param {DepartmentDeleteArgs} args - Arguments to delete one Department.
     * @example
     * // Delete one Department
     * const Department = await prisma.department.delete({
     *   where: {
     *     // ... filter to delete one Department
     *   }
     * })
     * 
     */
    delete<T extends DepartmentDeleteArgs>(args: SelectSubset<T, DepartmentDeleteArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Department.
     * @param {DepartmentUpdateArgs} args - Arguments to update one Department.
     * @example
     * // Update one Department
     * const department = await prisma.department.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends DepartmentUpdateArgs>(args: SelectSubset<T, DepartmentUpdateArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Departments.
     * @param {DepartmentDeleteManyArgs} args - Arguments to filter Departments to delete.
     * @example
     * // Delete a few Departments
     * const { count } = await prisma.department.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends DepartmentDeleteManyArgs>(args?: SelectSubset<T, DepartmentDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends DepartmentUpdateManyArgs>(args: SelectSubset<T, DepartmentUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Departments and returns the data updated in the database.
     * @param {DepartmentUpdateManyAndReturnArgs} args - Arguments to update many Departments.
     * @example
     * // Update many Departments
     * const department = await prisma.department.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Departments and only return the `id`
     * const departmentWithIdOnly = await prisma.department.updateManyAndReturn({
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
    updateManyAndReturn<T extends DepartmentUpdateManyAndReturnArgs>(args: SelectSubset<T, DepartmentUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Department.
     * @param {DepartmentUpsertArgs} args - Arguments to update or create a Department.
     * @example
     * // Update or create a Department
     * const department = await prisma.department.upsert({
     *   create: {
     *     // ... data to create a Department
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Department we want to update
     *   }
     * })
     */
    upsert<T extends DepartmentUpsertArgs>(args: SelectSubset<T, DepartmentUpsertArgs<ExtArgs>>): Prisma__DepartmentClient<$Result.GetResult<Prisma.$DepartmentPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Departments.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentCountArgs} args - Arguments to filter Departments to count.
     * @example
     * // Count the number of Departments
     * const count = await prisma.department.count({
     *   where: {
     *     // ... the filter for the Departments we want to count
     *   }
     * })
    **/
    count<T extends DepartmentCountArgs>(
      args?: Subset<T, DepartmentCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], DepartmentCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends DepartmentAggregateArgs>(args: Subset<T, DepartmentAggregateArgs>): Prisma.PrismaPromise<GetDepartmentAggregateType<T>>

    /**
     * Group by Department.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {DepartmentGroupByArgs} args - Group by arguments.
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
      T extends DepartmentGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: DepartmentGroupByArgs['orderBy'] }
        : { orderBy?: DepartmentGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, DepartmentGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetDepartmentGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Department model
   */
  readonly fields: DepartmentFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Department.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__DepartmentClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends Department$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Department$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends Department$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Department$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedBy<T extends Department$deletedByArgs<ExtArgs> = {}>(args?: Subset<T, Department$deletedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    users<T extends Department$usersArgs<ExtArgs> = {}>(args?: Subset<T, Department$usersArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
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
   * Fields of the Department model
   */
  interface DepartmentFieldRefs {
    readonly id: FieldRef<"Department", 'String'>
    readonly name: FieldRef<"Department", 'String'>
    readonly description: FieldRef<"Department", 'String'>
    readonly createdAt: FieldRef<"Department", 'DateTime'>
    readonly updatedAt: FieldRef<"Department", 'DateTime'>
    readonly delFlag: FieldRef<"Department", 'Boolean'>
    readonly createdById: FieldRef<"Department", 'String'>
    readonly updatedById: FieldRef<"Department", 'String'>
    readonly deletedById: FieldRef<"Department", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Department findUnique
   */
  export type DepartmentFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findUniqueOrThrow
   */
  export type DepartmentFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department findFirst
   */
  export type DepartmentFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findFirstOrThrow
   */
  export type DepartmentFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Department to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Departments.
     */
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department findMany
   */
  export type DepartmentFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter, which Departments to fetch.
     */
    where?: DepartmentWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Departments to fetch.
     */
    orderBy?: DepartmentOrderByWithRelationInput | DepartmentOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Departments.
     */
    cursor?: DepartmentWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Departments from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Departments.
     */
    skip?: number
    distinct?: DepartmentScalarFieldEnum | DepartmentScalarFieldEnum[]
  }

  /**
   * Department create
   */
  export type DepartmentCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to create a Department.
     */
    data: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
  }

  /**
   * Department createMany
   */
  export type DepartmentCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Department createManyAndReturn
   */
  export type DepartmentCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to create many Departments.
     */
    data: DepartmentCreateManyInput | DepartmentCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department update
   */
  export type DepartmentUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The data needed to update a Department.
     */
    data: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
    /**
     * Choose, which Department to update.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department updateMany
   */
  export type DepartmentUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
  }

  /**
   * Department updateManyAndReturn
   */
  export type DepartmentUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * The data used to update Departments.
     */
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyInput>
    /**
     * Filter which Departments to update
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Department upsert
   */
  export type DepartmentUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * The filter to search for the Department to update in case it exists.
     */
    where: DepartmentWhereUniqueInput
    /**
     * In case the Department found by the `where` argument doesn't exist, create a new Department with this data.
     */
    create: XOR<DepartmentCreateInput, DepartmentUncheckedCreateInput>
    /**
     * In case the Department was found with the provided `where` argument, update it with this data.
     */
    update: XOR<DepartmentUpdateInput, DepartmentUncheckedUpdateInput>
  }

  /**
   * Department delete
   */
  export type DepartmentDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
    /**
     * Filter which Department to delete.
     */
    where: DepartmentWhereUniqueInput
  }

  /**
   * Department deleteMany
   */
  export type DepartmentDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Departments to delete
     */
    where?: DepartmentWhereInput
    /**
     * Limit how many Departments to delete.
     */
    limit?: number
  }

  /**
   * Department.createdBy
   */
  export type Department$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Department.updatedBy
   */
  export type Department$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Department.deletedBy
   */
  export type Department$deletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Department.users
   */
  export type Department$usersArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
    orderBy?: UserOrderByWithRelationInput | UserOrderByWithRelationInput[]
    cursor?: UserWhereUniqueInput
    take?: number
    skip?: number
    distinct?: UserScalarFieldEnum | UserScalarFieldEnum[]
  }

  /**
   * Department without action
   */
  export type DepartmentDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Department
     */
    select?: DepartmentSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Department
     */
    omit?: DepartmentOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: DepartmentInclude<ExtArgs> | null
  }


  /**
   * Model Leave
   */

  export type AggregateLeave = {
    _count: LeaveCountAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  export type LeaveMinAggregateOutputType = {
    id: string | null
    userId: string | null
    leaveType: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    approvedById: string | null
    rejectedById: string | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
  }

  export type LeaveMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    leaveType: $Enums.LeaveType | null
    startDate: Date | null
    endDate: Date | null
    reason: string | null
    status: $Enums.LeaveStatus | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    approvedById: string | null
    rejectedById: string | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
  }

  export type LeaveCountAggregateOutputType = {
    id: number
    userId: number
    leaveType: number
    startDate: number
    endDate: number
    reason: number
    status: number
    createdAt: number
    updatedAt: number
    delFlag: number
    approvedById: number
    rejectedById: number
    createdById: number
    updatedById: number
    deletedById: number
    _all: number
  }


  export type LeaveMinAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    approvedById?: true
    rejectedById?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
  }

  export type LeaveMaxAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    approvedById?: true
    rejectedById?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
  }

  export type LeaveCountAggregateInputType = {
    id?: true
    userId?: true
    leaveType?: true
    startDate?: true
    endDate?: true
    reason?: true
    status?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    approvedById?: true
    rejectedById?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
    _all?: true
  }

  export type LeaveAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leave to aggregate.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Leaves
    **/
    _count?: true | LeaveCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveMaxAggregateInputType
  }

  export type GetLeaveAggregateType<T extends LeaveAggregateArgs> = {
        [P in keyof T & keyof AggregateLeave]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeave[P]>
      : GetScalarType<T[P], AggregateLeave[P]>
  }




  export type LeaveGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveWhereInput
    orderBy?: LeaveOrderByWithAggregationInput | LeaveOrderByWithAggregationInput[]
    by: LeaveScalarFieldEnum[] | LeaveScalarFieldEnum
    having?: LeaveScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveCountAggregateInputType | true
    _min?: LeaveMinAggregateInputType
    _max?: LeaveMaxAggregateInputType
  }

  export type LeaveGroupByOutputType = {
    id: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date
    endDate: Date
    reason: string
    status: $Enums.LeaveStatus
    createdAt: Date
    updatedAt: Date
    delFlag: boolean
    approvedById: string | null
    rejectedById: string | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
    _count: LeaveCountAggregateOutputType | null
    _min: LeaveMinAggregateOutputType | null
    _max: LeaveMaxAggregateOutputType | null
  }

  type GetLeaveGroupByPayload<T extends LeaveGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveGroupByOutputType[P]>
        }
      >
    >


  export type LeaveSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    approvedById?: boolean
    rejectedById?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    histories?: boolean | Leave$historiesArgs<ExtArgs>
    notifications?: boolean | Leave$notificationsArgs<ExtArgs>
    approver?: boolean | Leave$approverArgs<ExtArgs>
    rejecter?: boolean | Leave$rejecterArgs<ExtArgs>
    createdBy?: boolean | Leave$createdByArgs<ExtArgs>
    updatedBy?: boolean | Leave$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Leave$deletedByArgs<ExtArgs>
    _count?: boolean | LeaveCountOutputTypeDefaultArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    approvedById?: boolean
    rejectedById?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | Leave$approverArgs<ExtArgs>
    rejecter?: boolean | Leave$rejecterArgs<ExtArgs>
    createdBy?: boolean | Leave$createdByArgs<ExtArgs>
    updatedBy?: boolean | Leave$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Leave$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    approvedById?: boolean
    rejectedById?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | Leave$approverArgs<ExtArgs>
    rejecter?: boolean | Leave$rejecterArgs<ExtArgs>
    createdBy?: boolean | Leave$createdByArgs<ExtArgs>
    updatedBy?: boolean | Leave$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Leave$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["leave"]>

  export type LeaveSelectScalar = {
    id?: boolean
    userId?: boolean
    leaveType?: boolean
    startDate?: boolean
    endDate?: boolean
    reason?: boolean
    status?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    approvedById?: boolean
    rejectedById?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
  }

  export type LeaveOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "leaveType" | "startDate" | "endDate" | "reason" | "status" | "createdAt" | "updatedAt" | "delFlag" | "approvedById" | "rejectedById" | "createdById" | "updatedById" | "deletedById", ExtArgs["result"]["leave"]>
  export type LeaveInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    histories?: boolean | Leave$historiesArgs<ExtArgs>
    notifications?: boolean | Leave$notificationsArgs<ExtArgs>
    approver?: boolean | Leave$approverArgs<ExtArgs>
    rejecter?: boolean | Leave$rejecterArgs<ExtArgs>
    createdBy?: boolean | Leave$createdByArgs<ExtArgs>
    updatedBy?: boolean | Leave$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Leave$deletedByArgs<ExtArgs>
    _count?: boolean | LeaveCountOutputTypeDefaultArgs<ExtArgs>
  }
  export type LeaveIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | Leave$approverArgs<ExtArgs>
    rejecter?: boolean | Leave$rejecterArgs<ExtArgs>
    createdBy?: boolean | Leave$createdByArgs<ExtArgs>
    updatedBy?: boolean | Leave$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Leave$deletedByArgs<ExtArgs>
  }
  export type LeaveIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    approver?: boolean | Leave$approverArgs<ExtArgs>
    rejecter?: boolean | Leave$rejecterArgs<ExtArgs>
    createdBy?: boolean | Leave$createdByArgs<ExtArgs>
    updatedBy?: boolean | Leave$updatedByArgs<ExtArgs>
    deletedBy?: boolean | Leave$deletedByArgs<ExtArgs>
  }

  export type $LeavePayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Leave"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      histories: Prisma.$LeaveHistoryPayload<ExtArgs>[]
      notifications: Prisma.$NotificationPayload<ExtArgs>[]
      approver: Prisma.$UserPayload<ExtArgs> | null
      rejecter: Prisma.$UserPayload<ExtArgs> | null
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
      deletedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      leaveType: $Enums.LeaveType
      startDate: Date
      endDate: Date
      reason: string
      status: $Enums.LeaveStatus
      createdAt: Date
      updatedAt: Date
      delFlag: boolean
      approvedById: string | null
      rejectedById: string | null
      createdById: string | null
      updatedById: string | null
      deletedById: string | null
    }, ExtArgs["result"]["leave"]>
    composites: {}
  }

  type LeaveGetPayload<S extends boolean | null | undefined | LeaveDefaultArgs> = $Result.GetResult<Prisma.$LeavePayload, S>

  type LeaveCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveCountAggregateInputType | true
    }

  export interface LeaveDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Leave'], meta: { name: 'Leave' } }
    /**
     * Find zero or one Leave that matches the filter.
     * @param {LeaveFindUniqueArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveFindUniqueArgs>(args: SelectSubset<T, LeaveFindUniqueArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Leave that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveFindUniqueOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveFindFirstArgs>(args?: SelectSubset<T, LeaveFindFirstArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Leave that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindFirstOrThrowArgs} args - Arguments to find a Leave
     * @example
     * // Get one Leave
     * const leave = await prisma.leave.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Leaves that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Leaves
     * const leaves = await prisma.leave.findMany()
     * 
     * // Get first 10 Leaves
     * const leaves = await prisma.leave.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveWithIdOnly = await prisma.leave.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveFindManyArgs>(args?: SelectSubset<T, LeaveFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Leave.
     * @param {LeaveCreateArgs} args - Arguments to create a Leave.
     * @example
     * // Create one Leave
     * const Leave = await prisma.leave.create({
     *   data: {
     *     // ... data to create a Leave
     *   }
     * })
     * 
     */
    create<T extends LeaveCreateArgs>(args: SelectSubset<T, LeaveCreateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Leaves.
     * @param {LeaveCreateManyArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveCreateManyArgs>(args?: SelectSubset<T, LeaveCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Leaves and returns the data saved in the database.
     * @param {LeaveCreateManyAndReturnArgs} args - Arguments to create many Leaves.
     * @example
     * // Create many Leaves
     * const leave = await prisma.leave.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Leaves and only return the `id`
     * const leaveWithIdOnly = await prisma.leave.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Leave.
     * @param {LeaveDeleteArgs} args - Arguments to delete one Leave.
     * @example
     * // Delete one Leave
     * const Leave = await prisma.leave.delete({
     *   where: {
     *     // ... filter to delete one Leave
     *   }
     * })
     * 
     */
    delete<T extends LeaveDeleteArgs>(args: SelectSubset<T, LeaveDeleteArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Leave.
     * @param {LeaveUpdateArgs} args - Arguments to update one Leave.
     * @example
     * // Update one Leave
     * const leave = await prisma.leave.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveUpdateArgs>(args: SelectSubset<T, LeaveUpdateArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Leaves.
     * @param {LeaveDeleteManyArgs} args - Arguments to filter Leaves to delete.
     * @example
     * // Delete a few Leaves
     * const { count } = await prisma.leave.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveDeleteManyArgs>(args?: SelectSubset<T, LeaveDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveUpdateManyArgs>(args: SelectSubset<T, LeaveUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Leaves and returns the data updated in the database.
     * @param {LeaveUpdateManyAndReturnArgs} args - Arguments to update many Leaves.
     * @example
     * // Update many Leaves
     * const leave = await prisma.leave.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Leaves and only return the `id`
     * const leaveWithIdOnly = await prisma.leave.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Leave.
     * @param {LeaveUpsertArgs} args - Arguments to update or create a Leave.
     * @example
     * // Update or create a Leave
     * const leave = await prisma.leave.upsert({
     *   create: {
     *     // ... data to create a Leave
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Leave we want to update
     *   }
     * })
     */
    upsert<T extends LeaveUpsertArgs>(args: SelectSubset<T, LeaveUpsertArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Leaves.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveCountArgs} args - Arguments to filter Leaves to count.
     * @example
     * // Count the number of Leaves
     * const count = await prisma.leave.count({
     *   where: {
     *     // ... the filter for the Leaves we want to count
     *   }
     * })
    **/
    count<T extends LeaveCountArgs>(
      args?: Subset<T, LeaveCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveAggregateArgs>(args: Subset<T, LeaveAggregateArgs>): Prisma.PrismaPromise<GetLeaveAggregateType<T>>

    /**
     * Group by Leave.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveGroupByArgs} args - Group by arguments.
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
      T extends LeaveGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveGroupByArgs['orderBy'] }
        : { orderBy?: LeaveGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Leave model
   */
  readonly fields: LeaveFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Leave.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    histories<T extends Leave$historiesArgs<ExtArgs> = {}>(args?: Subset<T, Leave$historiesArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    notifications<T extends Leave$notificationsArgs<ExtArgs> = {}>(args?: Subset<T, Leave$notificationsArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions> | Null>
    approver<T extends Leave$approverArgs<ExtArgs> = {}>(args?: Subset<T, Leave$approverArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    rejecter<T extends Leave$rejecterArgs<ExtArgs> = {}>(args?: Subset<T, Leave$rejecterArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    createdBy<T extends Leave$createdByArgs<ExtArgs> = {}>(args?: Subset<T, Leave$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends Leave$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, Leave$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedBy<T extends Leave$deletedByArgs<ExtArgs> = {}>(args?: Subset<T, Leave$deletedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Leave model
   */
  interface LeaveFieldRefs {
    readonly id: FieldRef<"Leave", 'String'>
    readonly userId: FieldRef<"Leave", 'String'>
    readonly leaveType: FieldRef<"Leave", 'LeaveType'>
    readonly startDate: FieldRef<"Leave", 'DateTime'>
    readonly endDate: FieldRef<"Leave", 'DateTime'>
    readonly reason: FieldRef<"Leave", 'String'>
    readonly status: FieldRef<"Leave", 'LeaveStatus'>
    readonly createdAt: FieldRef<"Leave", 'DateTime'>
    readonly updatedAt: FieldRef<"Leave", 'DateTime'>
    readonly delFlag: FieldRef<"Leave", 'Boolean'>
    readonly approvedById: FieldRef<"Leave", 'String'>
    readonly rejectedById: FieldRef<"Leave", 'String'>
    readonly createdById: FieldRef<"Leave", 'String'>
    readonly updatedById: FieldRef<"Leave", 'String'>
    readonly deletedById: FieldRef<"Leave", 'String'>
  }
    

  // Custom InputTypes
  /**
   * Leave findUnique
   */
  export type LeaveFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findUniqueOrThrow
   */
  export type LeaveFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave findFirst
   */
  export type LeaveFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findFirstOrThrow
   */
  export type LeaveFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leave to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Leaves.
     */
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave findMany
   */
  export type LeaveFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter, which Leaves to fetch.
     */
    where?: LeaveWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Leaves to fetch.
     */
    orderBy?: LeaveOrderByWithRelationInput | LeaveOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Leaves.
     */
    cursor?: LeaveWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Leaves from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Leaves.
     */
    skip?: number
    distinct?: LeaveScalarFieldEnum | LeaveScalarFieldEnum[]
  }

  /**
   * Leave create
   */
  export type LeaveCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to create a Leave.
     */
    data: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
  }

  /**
   * Leave createMany
   */
  export type LeaveCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Leave createManyAndReturn
   */
  export type LeaveCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * The data used to create many Leaves.
     */
    data: LeaveCreateManyInput | LeaveCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leave update
   */
  export type LeaveUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The data needed to update a Leave.
     */
    data: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
    /**
     * Choose, which Leave to update.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave updateMany
   */
  export type LeaveUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
  }

  /**
   * Leave updateManyAndReturn
   */
  export type LeaveUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * The data used to update Leaves.
     */
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyInput>
    /**
     * Filter which Leaves to update
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Leave upsert
   */
  export type LeaveUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * The filter to search for the Leave to update in case it exists.
     */
    where: LeaveWhereUniqueInput
    /**
     * In case the Leave found by the `where` argument doesn't exist, create a new Leave with this data.
     */
    create: XOR<LeaveCreateInput, LeaveUncheckedCreateInput>
    /**
     * In case the Leave was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveUpdateInput, LeaveUncheckedUpdateInput>
  }

  /**
   * Leave delete
   */
  export type LeaveDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    /**
     * Filter which Leave to delete.
     */
    where: LeaveWhereUniqueInput
  }

  /**
   * Leave deleteMany
   */
  export type LeaveDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Leaves to delete
     */
    where?: LeaveWhereInput
    /**
     * Limit how many Leaves to delete.
     */
    limit?: number
  }

  /**
   * Leave.histories
   */
  export type Leave$historiesArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    where?: LeaveHistoryWhereInput
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    cursor?: LeaveHistoryWhereUniqueInput
    take?: number
    skip?: number
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * Leave.notifications
   */
  export type Leave$notificationsArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    cursor?: NotificationWhereUniqueInput
    take?: number
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Leave.approver
   */
  export type Leave$approverArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Leave.rejecter
   */
  export type Leave$rejecterArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Leave.createdBy
   */
  export type Leave$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Leave.updatedBy
   */
  export type Leave$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Leave.deletedBy
   */
  export type Leave$deletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * Leave without action
   */
  export type LeaveDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
  }


  /**
   * Model LeaveHistory
   */

  export type AggregateLeaveHistory = {
    _count: LeaveHistoryCountAggregateOutputType | null
    _min: LeaveHistoryMinAggregateOutputType | null
    _max: LeaveHistoryMaxAggregateOutputType | null
  }

  export type LeaveHistoryMinAggregateOutputType = {
    id: string | null
    leaveId: string | null
    oldStatus: $Enums.LeaveStatus | null
    newStatus: $Enums.LeaveStatus | null
    statusChange: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    userId: string | null
    changedById: string | null
  }

  export type LeaveHistoryMaxAggregateOutputType = {
    id: string | null
    leaveId: string | null
    oldStatus: $Enums.LeaveStatus | null
    newStatus: $Enums.LeaveStatus | null
    statusChange: Date | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    userId: string | null
    changedById: string | null
  }

  export type LeaveHistoryCountAggregateOutputType = {
    id: number
    leaveId: number
    oldStatus: number
    newStatus: number
    statusChange: number
    createdAt: number
    updatedAt: number
    delFlag: number
    userId: number
    changedById: number
    _all: number
  }


  export type LeaveHistoryMinAggregateInputType = {
    id?: true
    leaveId?: true
    oldStatus?: true
    newStatus?: true
    statusChange?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    userId?: true
    changedById?: true
  }

  export type LeaveHistoryMaxAggregateInputType = {
    id?: true
    leaveId?: true
    oldStatus?: true
    newStatus?: true
    statusChange?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    userId?: true
    changedById?: true
  }

  export type LeaveHistoryCountAggregateInputType = {
    id?: true
    leaveId?: true
    oldStatus?: true
    newStatus?: true
    statusChange?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    userId?: true
    changedById?: true
    _all?: true
  }

  export type LeaveHistoryAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveHistory to aggregate.
     */
    where?: LeaveHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveHistories to fetch.
     */
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeaveHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeaveHistories
    **/
    _count?: true | LeaveHistoryCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeaveHistoryMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeaveHistoryMaxAggregateInputType
  }

  export type GetLeaveHistoryAggregateType<T extends LeaveHistoryAggregateArgs> = {
        [P in keyof T & keyof AggregateLeaveHistory]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeaveHistory[P]>
      : GetScalarType<T[P], AggregateLeaveHistory[P]>
  }




  export type LeaveHistoryGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeaveHistoryWhereInput
    orderBy?: LeaveHistoryOrderByWithAggregationInput | LeaveHistoryOrderByWithAggregationInput[]
    by: LeaveHistoryScalarFieldEnum[] | LeaveHistoryScalarFieldEnum
    having?: LeaveHistoryScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeaveHistoryCountAggregateInputType | true
    _min?: LeaveHistoryMinAggregateInputType
    _max?: LeaveHistoryMaxAggregateInputType
  }

  export type LeaveHistoryGroupByOutputType = {
    id: string
    leaveId: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange: Date
    createdAt: Date
    updatedAt: Date
    delFlag: boolean
    userId: string
    changedById: string | null
    _count: LeaveHistoryCountAggregateOutputType | null
    _min: LeaveHistoryMinAggregateOutputType | null
    _max: LeaveHistoryMaxAggregateOutputType | null
  }

  type GetLeaveHistoryGroupByPayload<T extends LeaveHistoryGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeaveHistoryGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeaveHistoryGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeaveHistoryGroupByOutputType[P]>
            : GetScalarType<T[P], LeaveHistoryGroupByOutputType[P]>
        }
      >
    >


  export type LeaveHistorySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    statusChange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    userId?: boolean
    changedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    changer?: boolean | LeaveHistory$changerArgs<ExtArgs>
  }, ExtArgs["result"]["leaveHistory"]>

  export type LeaveHistorySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    statusChange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    userId?: boolean
    changedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    changer?: boolean | LeaveHistory$changerArgs<ExtArgs>
  }, ExtArgs["result"]["leaveHistory"]>

  export type LeaveHistorySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    statusChange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    userId?: boolean
    changedById?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    changer?: boolean | LeaveHistory$changerArgs<ExtArgs>
  }, ExtArgs["result"]["leaveHistory"]>

  export type LeaveHistorySelectScalar = {
    id?: boolean
    leaveId?: boolean
    oldStatus?: boolean
    newStatus?: boolean
    statusChange?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    userId?: boolean
    changedById?: boolean
  }

  export type LeaveHistoryOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaveId" | "oldStatus" | "newStatus" | "statusChange" | "createdAt" | "updatedAt" | "delFlag" | "userId" | "changedById", ExtArgs["result"]["leaveHistory"]>
  export type LeaveHistoryInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    changer?: boolean | LeaveHistory$changerArgs<ExtArgs>
  }
  export type LeaveHistoryIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    changer?: boolean | LeaveHistory$changerArgs<ExtArgs>
  }
  export type LeaveHistoryIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | LeaveDefaultArgs<ExtArgs>
    changer?: boolean | LeaveHistory$changerArgs<ExtArgs>
  }

  export type $LeaveHistoryPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeaveHistory"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      leave: Prisma.$LeavePayload<ExtArgs>
      changer: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaveId: string
      oldStatus: $Enums.LeaveStatus
      newStatus: $Enums.LeaveStatus
      statusChange: Date
      createdAt: Date
      updatedAt: Date
      delFlag: boolean
      userId: string
      changedById: string | null
    }, ExtArgs["result"]["leaveHistory"]>
    composites: {}
  }

  type LeaveHistoryGetPayload<S extends boolean | null | undefined | LeaveHistoryDefaultArgs> = $Result.GetResult<Prisma.$LeaveHistoryPayload, S>

  type LeaveHistoryCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeaveHistoryFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeaveHistoryCountAggregateInputType | true
    }

  export interface LeaveHistoryDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeaveHistory'], meta: { name: 'LeaveHistory' } }
    /**
     * Find zero or one LeaveHistory that matches the filter.
     * @param {LeaveHistoryFindUniqueArgs} args - Arguments to find a LeaveHistory
     * @example
     * // Get one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeaveHistoryFindUniqueArgs>(args: SelectSubset<T, LeaveHistoryFindUniqueArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeaveHistory that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeaveHistoryFindUniqueOrThrowArgs} args - Arguments to find a LeaveHistory
     * @example
     * // Get one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeaveHistoryFindUniqueOrThrowArgs>(args: SelectSubset<T, LeaveHistoryFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveHistory that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryFindFirstArgs} args - Arguments to find a LeaveHistory
     * @example
     * // Get one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeaveHistoryFindFirstArgs>(args?: SelectSubset<T, LeaveHistoryFindFirstArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeaveHistory that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryFindFirstOrThrowArgs} args - Arguments to find a LeaveHistory
     * @example
     * // Get one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeaveHistoryFindFirstOrThrowArgs>(args?: SelectSubset<T, LeaveHistoryFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeaveHistories that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeaveHistories
     * const leaveHistories = await prisma.leaveHistory.findMany()
     * 
     * // Get first 10 LeaveHistories
     * const leaveHistories = await prisma.leaveHistory.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leaveHistoryWithIdOnly = await prisma.leaveHistory.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeaveHistoryFindManyArgs>(args?: SelectSubset<T, LeaveHistoryFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeaveHistory.
     * @param {LeaveHistoryCreateArgs} args - Arguments to create a LeaveHistory.
     * @example
     * // Create one LeaveHistory
     * const LeaveHistory = await prisma.leaveHistory.create({
     *   data: {
     *     // ... data to create a LeaveHistory
     *   }
     * })
     * 
     */
    create<T extends LeaveHistoryCreateArgs>(args: SelectSubset<T, LeaveHistoryCreateArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeaveHistories.
     * @param {LeaveHistoryCreateManyArgs} args - Arguments to create many LeaveHistories.
     * @example
     * // Create many LeaveHistories
     * const leaveHistory = await prisma.leaveHistory.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeaveHistoryCreateManyArgs>(args?: SelectSubset<T, LeaveHistoryCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeaveHistories and returns the data saved in the database.
     * @param {LeaveHistoryCreateManyAndReturnArgs} args - Arguments to create many LeaveHistories.
     * @example
     * // Create many LeaveHistories
     * const leaveHistory = await prisma.leaveHistory.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeaveHistories and only return the `id`
     * const leaveHistoryWithIdOnly = await prisma.leaveHistory.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeaveHistoryCreateManyAndReturnArgs>(args?: SelectSubset<T, LeaveHistoryCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeaveHistory.
     * @param {LeaveHistoryDeleteArgs} args - Arguments to delete one LeaveHistory.
     * @example
     * // Delete one LeaveHistory
     * const LeaveHistory = await prisma.leaveHistory.delete({
     *   where: {
     *     // ... filter to delete one LeaveHistory
     *   }
     * })
     * 
     */
    delete<T extends LeaveHistoryDeleteArgs>(args: SelectSubset<T, LeaveHistoryDeleteArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeaveHistory.
     * @param {LeaveHistoryUpdateArgs} args - Arguments to update one LeaveHistory.
     * @example
     * // Update one LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeaveHistoryUpdateArgs>(args: SelectSubset<T, LeaveHistoryUpdateArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeaveHistories.
     * @param {LeaveHistoryDeleteManyArgs} args - Arguments to filter LeaveHistories to delete.
     * @example
     * // Delete a few LeaveHistories
     * const { count } = await prisma.leaveHistory.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeaveHistoryDeleteManyArgs>(args?: SelectSubset<T, LeaveHistoryDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeaveHistories
     * const leaveHistory = await prisma.leaveHistory.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeaveHistoryUpdateManyArgs>(args: SelectSubset<T, LeaveHistoryUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeaveHistories and returns the data updated in the database.
     * @param {LeaveHistoryUpdateManyAndReturnArgs} args - Arguments to update many LeaveHistories.
     * @example
     * // Update many LeaveHistories
     * const leaveHistory = await prisma.leaveHistory.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeaveHistories and only return the `id`
     * const leaveHistoryWithIdOnly = await prisma.leaveHistory.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeaveHistoryUpdateManyAndReturnArgs>(args: SelectSubset<T, LeaveHistoryUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeaveHistory.
     * @param {LeaveHistoryUpsertArgs} args - Arguments to update or create a LeaveHistory.
     * @example
     * // Update or create a LeaveHistory
     * const leaveHistory = await prisma.leaveHistory.upsert({
     *   create: {
     *     // ... data to create a LeaveHistory
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeaveHistory we want to update
     *   }
     * })
     */
    upsert<T extends LeaveHistoryUpsertArgs>(args: SelectSubset<T, LeaveHistoryUpsertArgs<ExtArgs>>): Prisma__LeaveHistoryClient<$Result.GetResult<Prisma.$LeaveHistoryPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeaveHistories.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryCountArgs} args - Arguments to filter LeaveHistories to count.
     * @example
     * // Count the number of LeaveHistories
     * const count = await prisma.leaveHistory.count({
     *   where: {
     *     // ... the filter for the LeaveHistories we want to count
     *   }
     * })
    **/
    count<T extends LeaveHistoryCountArgs>(
      args?: Subset<T, LeaveHistoryCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeaveHistoryCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeaveHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeaveHistoryAggregateArgs>(args: Subset<T, LeaveHistoryAggregateArgs>): Prisma.PrismaPromise<GetLeaveHistoryAggregateType<T>>

    /**
     * Group by LeaveHistory.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeaveHistoryGroupByArgs} args - Group by arguments.
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
      T extends LeaveHistoryGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeaveHistoryGroupByArgs['orderBy'] }
        : { orderBy?: LeaveHistoryGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeaveHistoryGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeaveHistoryGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeaveHistory model
   */
  readonly fields: LeaveHistoryFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeaveHistory.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeaveHistoryClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leave<T extends LeaveDefaultArgs<ExtArgs> = {}>(args?: Subset<T, LeaveDefaultArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    changer<T extends LeaveHistory$changerArgs<ExtArgs> = {}>(args?: Subset<T, LeaveHistory$changerArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeaveHistory model
   */
  interface LeaveHistoryFieldRefs {
    readonly id: FieldRef<"LeaveHistory", 'String'>
    readonly leaveId: FieldRef<"LeaveHistory", 'String'>
    readonly oldStatus: FieldRef<"LeaveHistory", 'LeaveStatus'>
    readonly newStatus: FieldRef<"LeaveHistory", 'LeaveStatus'>
    readonly statusChange: FieldRef<"LeaveHistory", 'DateTime'>
    readonly createdAt: FieldRef<"LeaveHistory", 'DateTime'>
    readonly updatedAt: FieldRef<"LeaveHistory", 'DateTime'>
    readonly delFlag: FieldRef<"LeaveHistory", 'Boolean'>
    readonly userId: FieldRef<"LeaveHistory", 'String'>
    readonly changedById: FieldRef<"LeaveHistory", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeaveHistory findUnique
   */
  export type LeaveHistoryFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistory to fetch.
     */
    where: LeaveHistoryWhereUniqueInput
  }

  /**
   * LeaveHistory findUniqueOrThrow
   */
  export type LeaveHistoryFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistory to fetch.
     */
    where: LeaveHistoryWhereUniqueInput
  }

  /**
   * LeaveHistory findFirst
   */
  export type LeaveHistoryFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistory to fetch.
     */
    where?: LeaveHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveHistories to fetch.
     */
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveHistories.
     */
    cursor?: LeaveHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveHistories.
     */
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * LeaveHistory findFirstOrThrow
   */
  export type LeaveHistoryFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistory to fetch.
     */
    where?: LeaveHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveHistories to fetch.
     */
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeaveHistories.
     */
    cursor?: LeaveHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveHistories.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeaveHistories.
     */
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * LeaveHistory findMany
   */
  export type LeaveHistoryFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter, which LeaveHistories to fetch.
     */
    where?: LeaveHistoryWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeaveHistories to fetch.
     */
    orderBy?: LeaveHistoryOrderByWithRelationInput | LeaveHistoryOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeaveHistories.
     */
    cursor?: LeaveHistoryWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeaveHistories from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeaveHistories.
     */
    skip?: number
    distinct?: LeaveHistoryScalarFieldEnum | LeaveHistoryScalarFieldEnum[]
  }

  /**
   * LeaveHistory create
   */
  export type LeaveHistoryCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * The data needed to create a LeaveHistory.
     */
    data: XOR<LeaveHistoryCreateInput, LeaveHistoryUncheckedCreateInput>
  }

  /**
   * LeaveHistory createMany
   */
  export type LeaveHistoryCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeaveHistories.
     */
    data: LeaveHistoryCreateManyInput | LeaveHistoryCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeaveHistory createManyAndReturn
   */
  export type LeaveHistoryCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * The data used to create many LeaveHistories.
     */
    data: LeaveHistoryCreateManyInput | LeaveHistoryCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveHistory update
   */
  export type LeaveHistoryUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * The data needed to update a LeaveHistory.
     */
    data: XOR<LeaveHistoryUpdateInput, LeaveHistoryUncheckedUpdateInput>
    /**
     * Choose, which LeaveHistory to update.
     */
    where: LeaveHistoryWhereUniqueInput
  }

  /**
   * LeaveHistory updateMany
   */
  export type LeaveHistoryUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeaveHistories.
     */
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LeaveHistories to update
     */
    where?: LeaveHistoryWhereInput
    /**
     * Limit how many LeaveHistories to update.
     */
    limit?: number
  }

  /**
   * LeaveHistory updateManyAndReturn
   */
  export type LeaveHistoryUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * The data used to update LeaveHistories.
     */
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyInput>
    /**
     * Filter which LeaveHistories to update
     */
    where?: LeaveHistoryWhereInput
    /**
     * Limit how many LeaveHistories to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeaveHistory upsert
   */
  export type LeaveHistoryUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * The filter to search for the LeaveHistory to update in case it exists.
     */
    where: LeaveHistoryWhereUniqueInput
    /**
     * In case the LeaveHistory found by the `where` argument doesn't exist, create a new LeaveHistory with this data.
     */
    create: XOR<LeaveHistoryCreateInput, LeaveHistoryUncheckedCreateInput>
    /**
     * In case the LeaveHistory was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeaveHistoryUpdateInput, LeaveHistoryUncheckedUpdateInput>
  }

  /**
   * LeaveHistory delete
   */
  export type LeaveHistoryDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
    /**
     * Filter which LeaveHistory to delete.
     */
    where: LeaveHistoryWhereUniqueInput
  }

  /**
   * LeaveHistory deleteMany
   */
  export type LeaveHistoryDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeaveHistories to delete
     */
    where?: LeaveHistoryWhereInput
    /**
     * Limit how many LeaveHistories to delete.
     */
    limit?: number
  }

  /**
   * LeaveHistory.changer
   */
  export type LeaveHistory$changerArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LeaveHistory without action
   */
  export type LeaveHistoryDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeaveHistory
     */
    select?: LeaveHistorySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeaveHistory
     */
    omit?: LeaveHistoryOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveHistoryInclude<ExtArgs> | null
  }


  /**
   * Model LeavePolicy
   */

  export type AggregateLeavePolicy = {
    _count: LeavePolicyCountAggregateOutputType | null
    _avg: LeavePolicyAvgAggregateOutputType | null
    _sum: LeavePolicySumAggregateOutputType | null
    _min: LeavePolicyMinAggregateOutputType | null
    _max: LeavePolicyMaxAggregateOutputType | null
  }

  export type LeavePolicyAvgAggregateOutputType = {
    maxDays: number | null
  }

  export type LeavePolicySumAggregateOutputType = {
    maxDays: number | null
  }

  export type LeavePolicyMinAggregateOutputType = {
    id: string | null
    leaveType: $Enums.LeaveType | null
    maxDays: number | null
    eligibility: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
  }

  export type LeavePolicyMaxAggregateOutputType = {
    id: string | null
    leaveType: $Enums.LeaveType | null
    maxDays: number | null
    eligibility: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
  }

  export type LeavePolicyCountAggregateOutputType = {
    id: number
    leaveType: number
    maxDays: number
    eligibility: number
    createdAt: number
    updatedAt: number
    delFlag: number
    createdById: number
    updatedById: number
    deletedById: number
    _all: number
  }


  export type LeavePolicyAvgAggregateInputType = {
    maxDays?: true
  }

  export type LeavePolicySumAggregateInputType = {
    maxDays?: true
  }

  export type LeavePolicyMinAggregateInputType = {
    id?: true
    leaveType?: true
    maxDays?: true
    eligibility?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
  }

  export type LeavePolicyMaxAggregateInputType = {
    id?: true
    leaveType?: true
    maxDays?: true
    eligibility?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
  }

  export type LeavePolicyCountAggregateInputType = {
    id?: true
    leaveType?: true
    maxDays?: true
    eligibility?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    createdById?: true
    updatedById?: true
    deletedById?: true
    _all?: true
  }

  export type LeavePolicyAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeavePolicy to aggregate.
     */
    where?: LeavePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeavePolicies to fetch.
     */
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: LeavePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeavePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeavePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned LeavePolicies
    **/
    _count?: true | LeavePolicyCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to average
    **/
    _avg?: LeavePolicyAvgAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to sum
    **/
    _sum?: LeavePolicySumAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: LeavePolicyMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: LeavePolicyMaxAggregateInputType
  }

  export type GetLeavePolicyAggregateType<T extends LeavePolicyAggregateArgs> = {
        [P in keyof T & keyof AggregateLeavePolicy]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateLeavePolicy[P]>
      : GetScalarType<T[P], AggregateLeavePolicy[P]>
  }




  export type LeavePolicyGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: LeavePolicyWhereInput
    orderBy?: LeavePolicyOrderByWithAggregationInput | LeavePolicyOrderByWithAggregationInput[]
    by: LeavePolicyScalarFieldEnum[] | LeavePolicyScalarFieldEnum
    having?: LeavePolicyScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: LeavePolicyCountAggregateInputType | true
    _avg?: LeavePolicyAvgAggregateInputType
    _sum?: LeavePolicySumAggregateInputType
    _min?: LeavePolicyMinAggregateInputType
    _max?: LeavePolicyMaxAggregateInputType
  }

  export type LeavePolicyGroupByOutputType = {
    id: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt: Date
    updatedAt: Date
    delFlag: boolean
    createdById: string | null
    updatedById: string | null
    deletedById: string | null
    _count: LeavePolicyCountAggregateOutputType | null
    _avg: LeavePolicyAvgAggregateOutputType | null
    _sum: LeavePolicySumAggregateOutputType | null
    _min: LeavePolicyMinAggregateOutputType | null
    _max: LeavePolicyMaxAggregateOutputType | null
  }

  type GetLeavePolicyGroupByPayload<T extends LeavePolicyGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<LeavePolicyGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof LeavePolicyGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], LeavePolicyGroupByOutputType[P]>
            : GetScalarType<T[P], LeavePolicyGroupByOutputType[P]>
        }
      >
    >


  export type LeavePolicySelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveType?: boolean
    maxDays?: boolean
    eligibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    createdBy?: boolean | LeavePolicy$createdByArgs<ExtArgs>
    updatedBy?: boolean | LeavePolicy$updatedByArgs<ExtArgs>
    deletedBy?: boolean | LeavePolicy$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["leavePolicy"]>

  export type LeavePolicySelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveType?: boolean
    maxDays?: boolean
    eligibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    createdBy?: boolean | LeavePolicy$createdByArgs<ExtArgs>
    updatedBy?: boolean | LeavePolicy$updatedByArgs<ExtArgs>
    deletedBy?: boolean | LeavePolicy$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["leavePolicy"]>

  export type LeavePolicySelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    leaveType?: boolean
    maxDays?: boolean
    eligibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
    createdBy?: boolean | LeavePolicy$createdByArgs<ExtArgs>
    updatedBy?: boolean | LeavePolicy$updatedByArgs<ExtArgs>
    deletedBy?: boolean | LeavePolicy$deletedByArgs<ExtArgs>
  }, ExtArgs["result"]["leavePolicy"]>

  export type LeavePolicySelectScalar = {
    id?: boolean
    leaveType?: boolean
    maxDays?: boolean
    eligibility?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    createdById?: boolean
    updatedById?: boolean
    deletedById?: boolean
  }

  export type LeavePolicyOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "leaveType" | "maxDays" | "eligibility" | "createdAt" | "updatedAt" | "delFlag" | "createdById" | "updatedById" | "deletedById", ExtArgs["result"]["leavePolicy"]>
  export type LeavePolicyInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | LeavePolicy$createdByArgs<ExtArgs>
    updatedBy?: boolean | LeavePolicy$updatedByArgs<ExtArgs>
    deletedBy?: boolean | LeavePolicy$deletedByArgs<ExtArgs>
  }
  export type LeavePolicyIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | LeavePolicy$createdByArgs<ExtArgs>
    updatedBy?: boolean | LeavePolicy$updatedByArgs<ExtArgs>
    deletedBy?: boolean | LeavePolicy$deletedByArgs<ExtArgs>
  }
  export type LeavePolicyIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    createdBy?: boolean | LeavePolicy$createdByArgs<ExtArgs>
    updatedBy?: boolean | LeavePolicy$updatedByArgs<ExtArgs>
    deletedBy?: boolean | LeavePolicy$deletedByArgs<ExtArgs>
  }

  export type $LeavePolicyPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "LeavePolicy"
    objects: {
      createdBy: Prisma.$UserPayload<ExtArgs> | null
      updatedBy: Prisma.$UserPayload<ExtArgs> | null
      deletedBy: Prisma.$UserPayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      leaveType: $Enums.LeaveType
      maxDays: number
      eligibility: string
      createdAt: Date
      updatedAt: Date
      delFlag: boolean
      createdById: string | null
      updatedById: string | null
      deletedById: string | null
    }, ExtArgs["result"]["leavePolicy"]>
    composites: {}
  }

  type LeavePolicyGetPayload<S extends boolean | null | undefined | LeavePolicyDefaultArgs> = $Result.GetResult<Prisma.$LeavePolicyPayload, S>

  type LeavePolicyCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<LeavePolicyFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: LeavePolicyCountAggregateInputType | true
    }

  export interface LeavePolicyDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['LeavePolicy'], meta: { name: 'LeavePolicy' } }
    /**
     * Find zero or one LeavePolicy that matches the filter.
     * @param {LeavePolicyFindUniqueArgs} args - Arguments to find a LeavePolicy
     * @example
     * // Get one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends LeavePolicyFindUniqueArgs>(args: SelectSubset<T, LeavePolicyFindUniqueArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one LeavePolicy that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {LeavePolicyFindUniqueOrThrowArgs} args - Arguments to find a LeavePolicy
     * @example
     * // Get one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends LeavePolicyFindUniqueOrThrowArgs>(args: SelectSubset<T, LeavePolicyFindUniqueOrThrowArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeavePolicy that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyFindFirstArgs} args - Arguments to find a LeavePolicy
     * @example
     * // Get one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends LeavePolicyFindFirstArgs>(args?: SelectSubset<T, LeavePolicyFindFirstArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first LeavePolicy that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyFindFirstOrThrowArgs} args - Arguments to find a LeavePolicy
     * @example
     * // Get one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends LeavePolicyFindFirstOrThrowArgs>(args?: SelectSubset<T, LeavePolicyFindFirstOrThrowArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more LeavePolicies that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all LeavePolicies
     * const leavePolicies = await prisma.leavePolicy.findMany()
     * 
     * // Get first 10 LeavePolicies
     * const leavePolicies = await prisma.leavePolicy.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const leavePolicyWithIdOnly = await prisma.leavePolicy.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends LeavePolicyFindManyArgs>(args?: SelectSubset<T, LeavePolicyFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a LeavePolicy.
     * @param {LeavePolicyCreateArgs} args - Arguments to create a LeavePolicy.
     * @example
     * // Create one LeavePolicy
     * const LeavePolicy = await prisma.leavePolicy.create({
     *   data: {
     *     // ... data to create a LeavePolicy
     *   }
     * })
     * 
     */
    create<T extends LeavePolicyCreateArgs>(args: SelectSubset<T, LeavePolicyCreateArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many LeavePolicies.
     * @param {LeavePolicyCreateManyArgs} args - Arguments to create many LeavePolicies.
     * @example
     * // Create many LeavePolicies
     * const leavePolicy = await prisma.leavePolicy.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends LeavePolicyCreateManyArgs>(args?: SelectSubset<T, LeavePolicyCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many LeavePolicies and returns the data saved in the database.
     * @param {LeavePolicyCreateManyAndReturnArgs} args - Arguments to create many LeavePolicies.
     * @example
     * // Create many LeavePolicies
     * const leavePolicy = await prisma.leavePolicy.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many LeavePolicies and only return the `id`
     * const leavePolicyWithIdOnly = await prisma.leavePolicy.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends LeavePolicyCreateManyAndReturnArgs>(args?: SelectSubset<T, LeavePolicyCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a LeavePolicy.
     * @param {LeavePolicyDeleteArgs} args - Arguments to delete one LeavePolicy.
     * @example
     * // Delete one LeavePolicy
     * const LeavePolicy = await prisma.leavePolicy.delete({
     *   where: {
     *     // ... filter to delete one LeavePolicy
     *   }
     * })
     * 
     */
    delete<T extends LeavePolicyDeleteArgs>(args: SelectSubset<T, LeavePolicyDeleteArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one LeavePolicy.
     * @param {LeavePolicyUpdateArgs} args - Arguments to update one LeavePolicy.
     * @example
     * // Update one LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends LeavePolicyUpdateArgs>(args: SelectSubset<T, LeavePolicyUpdateArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more LeavePolicies.
     * @param {LeavePolicyDeleteManyArgs} args - Arguments to filter LeavePolicies to delete.
     * @example
     * // Delete a few LeavePolicies
     * const { count } = await prisma.leavePolicy.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends LeavePolicyDeleteManyArgs>(args?: SelectSubset<T, LeavePolicyDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeavePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many LeavePolicies
     * const leavePolicy = await prisma.leavePolicy.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends LeavePolicyUpdateManyArgs>(args: SelectSubset<T, LeavePolicyUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more LeavePolicies and returns the data updated in the database.
     * @param {LeavePolicyUpdateManyAndReturnArgs} args - Arguments to update many LeavePolicies.
     * @example
     * // Update many LeavePolicies
     * const leavePolicy = await prisma.leavePolicy.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more LeavePolicies and only return the `id`
     * const leavePolicyWithIdOnly = await prisma.leavePolicy.updateManyAndReturn({
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
    updateManyAndReturn<T extends LeavePolicyUpdateManyAndReturnArgs>(args: SelectSubset<T, LeavePolicyUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one LeavePolicy.
     * @param {LeavePolicyUpsertArgs} args - Arguments to update or create a LeavePolicy.
     * @example
     * // Update or create a LeavePolicy
     * const leavePolicy = await prisma.leavePolicy.upsert({
     *   create: {
     *     // ... data to create a LeavePolicy
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the LeavePolicy we want to update
     *   }
     * })
     */
    upsert<T extends LeavePolicyUpsertArgs>(args: SelectSubset<T, LeavePolicyUpsertArgs<ExtArgs>>): Prisma__LeavePolicyClient<$Result.GetResult<Prisma.$LeavePolicyPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of LeavePolicies.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyCountArgs} args - Arguments to filter LeavePolicies to count.
     * @example
     * // Count the number of LeavePolicies
     * const count = await prisma.leavePolicy.count({
     *   where: {
     *     // ... the filter for the LeavePolicies we want to count
     *   }
     * })
    **/
    count<T extends LeavePolicyCountArgs>(
      args?: Subset<T, LeavePolicyCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], LeavePolicyCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a LeavePolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends LeavePolicyAggregateArgs>(args: Subset<T, LeavePolicyAggregateArgs>): Prisma.PrismaPromise<GetLeavePolicyAggregateType<T>>

    /**
     * Group by LeavePolicy.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {LeavePolicyGroupByArgs} args - Group by arguments.
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
      T extends LeavePolicyGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: LeavePolicyGroupByArgs['orderBy'] }
        : { orderBy?: LeavePolicyGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, LeavePolicyGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetLeavePolicyGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the LeavePolicy model
   */
  readonly fields: LeavePolicyFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for LeavePolicy.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__LeavePolicyClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    createdBy<T extends LeavePolicy$createdByArgs<ExtArgs> = {}>(args?: Subset<T, LeavePolicy$createdByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    updatedBy<T extends LeavePolicy$updatedByArgs<ExtArgs> = {}>(args?: Subset<T, LeavePolicy$updatedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
    deletedBy<T extends LeavePolicy$deletedByArgs<ExtArgs> = {}>(args?: Subset<T, LeavePolicy$deletedByArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the LeavePolicy model
   */
  interface LeavePolicyFieldRefs {
    readonly id: FieldRef<"LeavePolicy", 'String'>
    readonly leaveType: FieldRef<"LeavePolicy", 'LeaveType'>
    readonly maxDays: FieldRef<"LeavePolicy", 'Int'>
    readonly eligibility: FieldRef<"LeavePolicy", 'String'>
    readonly createdAt: FieldRef<"LeavePolicy", 'DateTime'>
    readonly updatedAt: FieldRef<"LeavePolicy", 'DateTime'>
    readonly delFlag: FieldRef<"LeavePolicy", 'Boolean'>
    readonly createdById: FieldRef<"LeavePolicy", 'String'>
    readonly updatedById: FieldRef<"LeavePolicy", 'String'>
    readonly deletedById: FieldRef<"LeavePolicy", 'String'>
  }
    

  // Custom InputTypes
  /**
   * LeavePolicy findUnique
   */
  export type LeavePolicyFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicy to fetch.
     */
    where: LeavePolicyWhereUniqueInput
  }

  /**
   * LeavePolicy findUniqueOrThrow
   */
  export type LeavePolicyFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicy to fetch.
     */
    where: LeavePolicyWhereUniqueInput
  }

  /**
   * LeavePolicy findFirst
   */
  export type LeavePolicyFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicy to fetch.
     */
    where?: LeavePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeavePolicies to fetch.
     */
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeavePolicies.
     */
    cursor?: LeavePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeavePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeavePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeavePolicies.
     */
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * LeavePolicy findFirstOrThrow
   */
  export type LeavePolicyFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicy to fetch.
     */
    where?: LeavePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeavePolicies to fetch.
     */
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for LeavePolicies.
     */
    cursor?: LeavePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeavePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeavePolicies.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of LeavePolicies.
     */
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * LeavePolicy findMany
   */
  export type LeavePolicyFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter, which LeavePolicies to fetch.
     */
    where?: LeavePolicyWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of LeavePolicies to fetch.
     */
    orderBy?: LeavePolicyOrderByWithRelationInput | LeavePolicyOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing LeavePolicies.
     */
    cursor?: LeavePolicyWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` LeavePolicies from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` LeavePolicies.
     */
    skip?: number
    distinct?: LeavePolicyScalarFieldEnum | LeavePolicyScalarFieldEnum[]
  }

  /**
   * LeavePolicy create
   */
  export type LeavePolicyCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * The data needed to create a LeavePolicy.
     */
    data: XOR<LeavePolicyCreateInput, LeavePolicyUncheckedCreateInput>
  }

  /**
   * LeavePolicy createMany
   */
  export type LeavePolicyCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many LeavePolicies.
     */
    data: LeavePolicyCreateManyInput | LeavePolicyCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * LeavePolicy createManyAndReturn
   */
  export type LeavePolicyCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * The data used to create many LeavePolicies.
     */
    data: LeavePolicyCreateManyInput | LeavePolicyCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeavePolicy update
   */
  export type LeavePolicyUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * The data needed to update a LeavePolicy.
     */
    data: XOR<LeavePolicyUpdateInput, LeavePolicyUncheckedUpdateInput>
    /**
     * Choose, which LeavePolicy to update.
     */
    where: LeavePolicyWhereUniqueInput
  }

  /**
   * LeavePolicy updateMany
   */
  export type LeavePolicyUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update LeavePolicies.
     */
    data: XOR<LeavePolicyUpdateManyMutationInput, LeavePolicyUncheckedUpdateManyInput>
    /**
     * Filter which LeavePolicies to update
     */
    where?: LeavePolicyWhereInput
    /**
     * Limit how many LeavePolicies to update.
     */
    limit?: number
  }

  /**
   * LeavePolicy updateManyAndReturn
   */
  export type LeavePolicyUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * The data used to update LeavePolicies.
     */
    data: XOR<LeavePolicyUpdateManyMutationInput, LeavePolicyUncheckedUpdateManyInput>
    /**
     * Filter which LeavePolicies to update
     */
    where?: LeavePolicyWhereInput
    /**
     * Limit how many LeavePolicies to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * LeavePolicy upsert
   */
  export type LeavePolicyUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * The filter to search for the LeavePolicy to update in case it exists.
     */
    where: LeavePolicyWhereUniqueInput
    /**
     * In case the LeavePolicy found by the `where` argument doesn't exist, create a new LeavePolicy with this data.
     */
    create: XOR<LeavePolicyCreateInput, LeavePolicyUncheckedCreateInput>
    /**
     * In case the LeavePolicy was found with the provided `where` argument, update it with this data.
     */
    update: XOR<LeavePolicyUpdateInput, LeavePolicyUncheckedUpdateInput>
  }

  /**
   * LeavePolicy delete
   */
  export type LeavePolicyDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
    /**
     * Filter which LeavePolicy to delete.
     */
    where: LeavePolicyWhereUniqueInput
  }

  /**
   * LeavePolicy deleteMany
   */
  export type LeavePolicyDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which LeavePolicies to delete
     */
    where?: LeavePolicyWhereInput
    /**
     * Limit how many LeavePolicies to delete.
     */
    limit?: number
  }

  /**
   * LeavePolicy.createdBy
   */
  export type LeavePolicy$createdByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LeavePolicy.updatedBy
   */
  export type LeavePolicy$updatedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LeavePolicy.deletedBy
   */
  export type LeavePolicy$deletedByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the User
     */
    select?: UserSelect<ExtArgs> | null
    /**
     * Omit specific fields from the User
     */
    omit?: UserOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: UserInclude<ExtArgs> | null
    where?: UserWhereInput
  }

  /**
   * LeavePolicy without action
   */
  export type LeavePolicyDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the LeavePolicy
     */
    select?: LeavePolicySelect<ExtArgs> | null
    /**
     * Omit specific fields from the LeavePolicy
     */
    omit?: LeavePolicyOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeavePolicyInclude<ExtArgs> | null
  }


  /**
   * Model Notification
   */

  export type AggregateNotification = {
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  export type NotificationMinAggregateOutputType = {
    id: string | null
    userId: string | null
    leaveId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    isRead: boolean | null
  }

  export type NotificationMaxAggregateOutputType = {
    id: string | null
    userId: string | null
    leaveId: string | null
    message: string | null
    createdAt: Date | null
    updatedAt: Date | null
    delFlag: boolean | null
    isRead: boolean | null
  }

  export type NotificationCountAggregateOutputType = {
    id: number
    userId: number
    leaveId: number
    message: number
    createdAt: number
    updatedAt: number
    delFlag: number
    isRead: number
    _all: number
  }


  export type NotificationMinAggregateInputType = {
    id?: true
    userId?: true
    leaveId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    isRead?: true
  }

  export type NotificationMaxAggregateInputType = {
    id?: true
    userId?: true
    leaveId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    isRead?: true
  }

  export type NotificationCountAggregateInputType = {
    id?: true
    userId?: true
    leaveId?: true
    message?: true
    createdAt?: true
    updatedAt?: true
    delFlag?: true
    isRead?: true
    _all?: true
  }

  export type NotificationAggregateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notification to aggregate.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the start position
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Count returned Notifications
    **/
    _count?: true | NotificationCountAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the minimum value
    **/
    _min?: NotificationMinAggregateInputType
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/aggregations Aggregation Docs}
     * 
     * Select which fields to find the maximum value
    **/
    _max?: NotificationMaxAggregateInputType
  }

  export type GetNotificationAggregateType<T extends NotificationAggregateArgs> = {
        [P in keyof T & keyof AggregateNotification]: P extends '_count' | 'count'
      ? T[P] extends true
        ? number
        : GetScalarType<T[P], AggregateNotification[P]>
      : GetScalarType<T[P], AggregateNotification[P]>
  }




  export type NotificationGroupByArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    where?: NotificationWhereInput
    orderBy?: NotificationOrderByWithAggregationInput | NotificationOrderByWithAggregationInput[]
    by: NotificationScalarFieldEnum[] | NotificationScalarFieldEnum
    having?: NotificationScalarWhereWithAggregatesInput
    take?: number
    skip?: number
    _count?: NotificationCountAggregateInputType | true
    _min?: NotificationMinAggregateInputType
    _max?: NotificationMaxAggregateInputType
  }

  export type NotificationGroupByOutputType = {
    id: string
    userId: string
    leaveId: string | null
    message: string
    createdAt: Date
    updatedAt: Date
    delFlag: boolean
    isRead: boolean
    _count: NotificationCountAggregateOutputType | null
    _min: NotificationMinAggregateOutputType | null
    _max: NotificationMaxAggregateOutputType | null
  }

  type GetNotificationGroupByPayload<T extends NotificationGroupByArgs> = Prisma.PrismaPromise<
    Array<
      PickEnumerable<NotificationGroupByOutputType, T['by']> &
        {
          [P in ((keyof T) & (keyof NotificationGroupByOutputType))]: P extends '_count'
            ? T[P] extends boolean
              ? number
              : GetScalarType<T[P], NotificationGroupByOutputType[P]>
            : GetScalarType<T[P], NotificationGroupByOutputType[P]>
        }
      >
    >


  export type NotificationSelect<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | Notification$leaveArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | Notification$leaveArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetSelect<{
    id?: boolean
    userId?: boolean
    leaveId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    isRead?: boolean
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | Notification$leaveArgs<ExtArgs>
  }, ExtArgs["result"]["notification"]>

  export type NotificationSelectScalar = {
    id?: boolean
    userId?: boolean
    leaveId?: boolean
    message?: boolean
    createdAt?: boolean
    updatedAt?: boolean
    delFlag?: boolean
    isRead?: boolean
  }

  export type NotificationOmit<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = $Extensions.GetOmit<"id" | "userId" | "leaveId" | "message" | "createdAt" | "updatedAt" | "delFlag" | "isRead", ExtArgs["result"]["notification"]>
  export type NotificationInclude<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | Notification$leaveArgs<ExtArgs>
  }
  export type NotificationIncludeCreateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | Notification$leaveArgs<ExtArgs>
  }
  export type NotificationIncludeUpdateManyAndReturn<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    user?: boolean | UserDefaultArgs<ExtArgs>
    leave?: boolean | Notification$leaveArgs<ExtArgs>
  }

  export type $NotificationPayload<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    name: "Notification"
    objects: {
      user: Prisma.$UserPayload<ExtArgs>
      leave: Prisma.$LeavePayload<ExtArgs> | null
    }
    scalars: $Extensions.GetPayloadResult<{
      id: string
      userId: string
      leaveId: string | null
      message: string
      createdAt: Date
      updatedAt: Date
      delFlag: boolean
      isRead: boolean
    }, ExtArgs["result"]["notification"]>
    composites: {}
  }

  type NotificationGetPayload<S extends boolean | null | undefined | NotificationDefaultArgs> = $Result.GetResult<Prisma.$NotificationPayload, S>

  type NotificationCountArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> =
    Omit<NotificationFindManyArgs, 'select' | 'include' | 'distinct' | 'omit'> & {
      select?: NotificationCountAggregateInputType | true
    }

  export interface NotificationDelegate<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> {
    [K: symbol]: { types: Prisma.TypeMap<ExtArgs>['model']['Notification'], meta: { name: 'Notification' } }
    /**
     * Find zero or one Notification that matches the filter.
     * @param {NotificationFindUniqueArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUnique({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUnique<T extends NotificationFindUniqueArgs>(args: SelectSubset<T, NotificationFindUniqueArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUnique", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find one Notification that matches the filter or throw an error with `error.code='P2025'`
     * if no matches were found.
     * @param {NotificationFindUniqueOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findUniqueOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findUniqueOrThrow<T extends NotificationFindUniqueOrThrowArgs>(args: SelectSubset<T, NotificationFindUniqueOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirst({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirst<T extends NotificationFindFirstArgs>(args?: SelectSubset<T, NotificationFindFirstArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirst", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>

    /**
     * Find the first Notification that matches the filter or
     * throw `PrismaKnownClientError` with `P2025` code if no matches were found.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindFirstOrThrowArgs} args - Arguments to find a Notification
     * @example
     * // Get one Notification
     * const notification = await prisma.notification.findFirstOrThrow({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     */
    findFirstOrThrow<T extends NotificationFindFirstOrThrowArgs>(args?: SelectSubset<T, NotificationFindFirstOrThrowArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findFirstOrThrow", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Find zero or more Notifications that matches the filter.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationFindManyArgs} args - Arguments to filter and select certain fields only.
     * @example
     * // Get all Notifications
     * const notifications = await prisma.notification.findMany()
     * 
     * // Get first 10 Notifications
     * const notifications = await prisma.notification.findMany({ take: 10 })
     * 
     * // Only select the `id`
     * const notificationWithIdOnly = await prisma.notification.findMany({ select: { id: true } })
     * 
     */
    findMany<T extends NotificationFindManyArgs>(args?: SelectSubset<T, NotificationFindManyArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "findMany", GlobalOmitOptions>>

    /**
     * Create a Notification.
     * @param {NotificationCreateArgs} args - Arguments to create a Notification.
     * @example
     * // Create one Notification
     * const Notification = await prisma.notification.create({
     *   data: {
     *     // ... data to create a Notification
     *   }
     * })
     * 
     */
    create<T extends NotificationCreateArgs>(args: SelectSubset<T, NotificationCreateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "create", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Create many Notifications.
     * @param {NotificationCreateManyArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createMany({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     *     
     */
    createMany<T extends NotificationCreateManyArgs>(args?: SelectSubset<T, NotificationCreateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Create many Notifications and returns the data saved in the database.
     * @param {NotificationCreateManyAndReturnArgs} args - Arguments to create many Notifications.
     * @example
     * // Create many Notifications
     * const notification = await prisma.notification.createManyAndReturn({
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Create many Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.createManyAndReturn({
     *   select: { id: true },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * 
     */
    createManyAndReturn<T extends NotificationCreateManyAndReturnArgs>(args?: SelectSubset<T, NotificationCreateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "createManyAndReturn", GlobalOmitOptions>>

    /**
     * Delete a Notification.
     * @param {NotificationDeleteArgs} args - Arguments to delete one Notification.
     * @example
     * // Delete one Notification
     * const Notification = await prisma.notification.delete({
     *   where: {
     *     // ... filter to delete one Notification
     *   }
     * })
     * 
     */
    delete<T extends NotificationDeleteArgs>(args: SelectSubset<T, NotificationDeleteArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "delete", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Update one Notification.
     * @param {NotificationUpdateArgs} args - Arguments to update one Notification.
     * @example
     * // Update one Notification
     * const notification = await prisma.notification.update({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    update<T extends NotificationUpdateArgs>(args: SelectSubset<T, NotificationUpdateArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "update", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>

    /**
     * Delete zero or more Notifications.
     * @param {NotificationDeleteManyArgs} args - Arguments to filter Notifications to delete.
     * @example
     * // Delete a few Notifications
     * const { count } = await prisma.notification.deleteMany({
     *   where: {
     *     // ... provide filter here
     *   }
     * })
     * 
     */
    deleteMany<T extends NotificationDeleteManyArgs>(args?: SelectSubset<T, NotificationDeleteManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationUpdateManyArgs} args - Arguments to update one or more rows.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateMany({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: {
     *     // ... provide data here
     *   }
     * })
     * 
     */
    updateMany<T extends NotificationUpdateManyArgs>(args: SelectSubset<T, NotificationUpdateManyArgs<ExtArgs>>): Prisma.PrismaPromise<BatchPayload>

    /**
     * Update zero or more Notifications and returns the data updated in the database.
     * @param {NotificationUpdateManyAndReturnArgs} args - Arguments to update many Notifications.
     * @example
     * // Update many Notifications
     * const notification = await prisma.notification.updateManyAndReturn({
     *   where: {
     *     // ... provide filter here
     *   },
     *   data: [
     *     // ... provide data here
     *   ]
     * })
     * 
     * // Update zero or more Notifications and only return the `id`
     * const notificationWithIdOnly = await prisma.notification.updateManyAndReturn({
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
    updateManyAndReturn<T extends NotificationUpdateManyAndReturnArgs>(args: SelectSubset<T, NotificationUpdateManyAndReturnArgs<ExtArgs>>): Prisma.PrismaPromise<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "updateManyAndReturn", GlobalOmitOptions>>

    /**
     * Create or update one Notification.
     * @param {NotificationUpsertArgs} args - Arguments to update or create a Notification.
     * @example
     * // Update or create a Notification
     * const notification = await prisma.notification.upsert({
     *   create: {
     *     // ... data to create a Notification
     *   },
     *   update: {
     *     // ... in case it already exists, update
     *   },
     *   where: {
     *     // ... the filter for the Notification we want to update
     *   }
     * })
     */
    upsert<T extends NotificationUpsertArgs>(args: SelectSubset<T, NotificationUpsertArgs<ExtArgs>>): Prisma__NotificationClient<$Result.GetResult<Prisma.$NotificationPayload<ExtArgs>, T, "upsert", GlobalOmitOptions>, never, ExtArgs, GlobalOmitOptions>


    /**
     * Count the number of Notifications.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationCountArgs} args - Arguments to filter Notifications to count.
     * @example
     * // Count the number of Notifications
     * const count = await prisma.notification.count({
     *   where: {
     *     // ... the filter for the Notifications we want to count
     *   }
     * })
    **/
    count<T extends NotificationCountArgs>(
      args?: Subset<T, NotificationCountArgs>,
    ): Prisma.PrismaPromise<
      T extends $Utils.Record<'select', any>
        ? T['select'] extends true
          ? number
          : GetScalarType<T['select'], NotificationCountAggregateOutputType>
        : number
    >

    /**
     * Allows you to perform aggregations operations on a Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationAggregateArgs} args - Select which aggregations you would like to apply and on what fields.
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
    aggregate<T extends NotificationAggregateArgs>(args: Subset<T, NotificationAggregateArgs>): Prisma.PrismaPromise<GetNotificationAggregateType<T>>

    /**
     * Group by Notification.
     * Note, that providing `undefined` is treated as the value not being there.
     * Read more here: https://pris.ly/d/null-undefined
     * @param {NotificationGroupByArgs} args - Group by arguments.
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
      T extends NotificationGroupByArgs,
      HasSelectOrTake extends Or<
        Extends<'skip', Keys<T>>,
        Extends<'take', Keys<T>>
      >,
      OrderByArg extends True extends HasSelectOrTake
        ? { orderBy: NotificationGroupByArgs['orderBy'] }
        : { orderBy?: NotificationGroupByArgs['orderBy'] },
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
    >(args: SubsetIntersection<T, NotificationGroupByArgs, OrderByArg> & InputErrors): {} extends InputErrors ? GetNotificationGroupByPayload<T> : Prisma.PrismaPromise<InputErrors>
  /**
   * Fields of the Notification model
   */
  readonly fields: NotificationFieldRefs;
  }

  /**
   * The delegate class that acts as a "Promise-like" for Notification.
   * Why is this prefixed with `Prisma__`?
   * Because we want to prevent naming conflicts as mentioned in
   * https://github.com/prisma/prisma-client-js/issues/707
   */
  export interface Prisma__NotificationClient<T, Null = never, ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs, GlobalOmitOptions = {}> extends Prisma.PrismaPromise<T> {
    readonly [Symbol.toStringTag]: "PrismaPromise"
    user<T extends UserDefaultArgs<ExtArgs> = {}>(args?: Subset<T, UserDefaultArgs<ExtArgs>>): Prisma__UserClient<$Result.GetResult<Prisma.$UserPayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | Null, Null, ExtArgs, GlobalOmitOptions>
    leave<T extends Notification$leaveArgs<ExtArgs> = {}>(args?: Subset<T, Notification$leaveArgs<ExtArgs>>): Prisma__LeaveClient<$Result.GetResult<Prisma.$LeavePayload<ExtArgs>, T, "findUniqueOrThrow", GlobalOmitOptions> | null, null, ExtArgs, GlobalOmitOptions>
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
   * Fields of the Notification model
   */
  interface NotificationFieldRefs {
    readonly id: FieldRef<"Notification", 'String'>
    readonly userId: FieldRef<"Notification", 'String'>
    readonly leaveId: FieldRef<"Notification", 'String'>
    readonly message: FieldRef<"Notification", 'String'>
    readonly createdAt: FieldRef<"Notification", 'DateTime'>
    readonly updatedAt: FieldRef<"Notification", 'DateTime'>
    readonly delFlag: FieldRef<"Notification", 'Boolean'>
    readonly isRead: FieldRef<"Notification", 'Boolean'>
  }
    

  // Custom InputTypes
  /**
   * Notification findUnique
   */
  export type NotificationFindUniqueArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findUniqueOrThrow
   */
  export type NotificationFindUniqueOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification findFirst
   */
  export type NotificationFindFirstArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findFirstOrThrow
   */
  export type NotificationFindFirstOrThrowArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notification to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for searching for Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/distinct Distinct Docs}
     * 
     * Filter by unique combinations of Notifications.
     */
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification findMany
   */
  export type NotificationFindManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter, which Notifications to fetch.
     */
    where?: NotificationWhereInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/sorting Sorting Docs}
     * 
     * Determine the order of Notifications to fetch.
     */
    orderBy?: NotificationOrderByWithRelationInput | NotificationOrderByWithRelationInput[]
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination#cursor-based-pagination Cursor Docs}
     * 
     * Sets the position for listing Notifications.
     */
    cursor?: NotificationWhereUniqueInput
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Take `±n` Notifications from the position of the cursor.
     */
    take?: number
    /**
     * {@link https://www.prisma.io/docs/concepts/components/prisma-client/pagination Pagination Docs}
     * 
     * Skip the first `n` Notifications.
     */
    skip?: number
    distinct?: NotificationScalarFieldEnum | NotificationScalarFieldEnum[]
  }

  /**
   * Notification create
   */
  export type NotificationCreateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to create a Notification.
     */
    data: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
  }

  /**
   * Notification createMany
   */
  export type NotificationCreateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
  }

  /**
   * Notification createManyAndReturn
   */
  export type NotificationCreateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectCreateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to create many Notifications.
     */
    data: NotificationCreateManyInput | NotificationCreateManyInput[]
    skipDuplicates?: boolean
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeCreateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification update
   */
  export type NotificationUpdateArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The data needed to update a Notification.
     */
    data: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
    /**
     * Choose, which Notification to update.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification updateMany
   */
  export type NotificationUpdateManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
  }

  /**
   * Notification updateManyAndReturn
   */
  export type NotificationUpdateManyAndReturnArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelectUpdateManyAndReturn<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * The data used to update Notifications.
     */
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyInput>
    /**
     * Filter which Notifications to update
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to update.
     */
    limit?: number
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationIncludeUpdateManyAndReturn<ExtArgs> | null
  }

  /**
   * Notification upsert
   */
  export type NotificationUpsertArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * The filter to search for the Notification to update in case it exists.
     */
    where: NotificationWhereUniqueInput
    /**
     * In case the Notification found by the `where` argument doesn't exist, create a new Notification with this data.
     */
    create: XOR<NotificationCreateInput, NotificationUncheckedCreateInput>
    /**
     * In case the Notification was found with the provided `where` argument, update it with this data.
     */
    update: XOR<NotificationUpdateInput, NotificationUncheckedUpdateInput>
  }

  /**
   * Notification delete
   */
  export type NotificationDeleteArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
    /**
     * Filter which Notification to delete.
     */
    where: NotificationWhereUniqueInput
  }

  /**
   * Notification deleteMany
   */
  export type NotificationDeleteManyArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Filter which Notifications to delete
     */
    where?: NotificationWhereInput
    /**
     * Limit how many Notifications to delete.
     */
    limit?: number
  }

  /**
   * Notification.leave
   */
  export type Notification$leaveArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Leave
     */
    select?: LeaveSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Leave
     */
    omit?: LeaveOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: LeaveInclude<ExtArgs> | null
    where?: LeaveWhereInput
  }

  /**
   * Notification without action
   */
  export type NotificationDefaultArgs<ExtArgs extends $Extensions.InternalArgs = $Extensions.DefaultArgs> = {
    /**
     * Select specific fields to fetch from the Notification
     */
    select?: NotificationSelect<ExtArgs> | null
    /**
     * Omit specific fields from the Notification
     */
    omit?: NotificationOmit<ExtArgs> | null
    /**
     * Choose, which related nodes to fetch as well
     */
    include?: NotificationInclude<ExtArgs> | null
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


  export const UserScalarFieldEnum: {
    id: 'id',
    name: 'name',
    email: 'email',
    password: 'password',
    phoneNumber: 'phoneNumber',
    role: 'role',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    imageUrl: 'imageUrl',
    imageKey: 'imageKey',
    delFlag: 'delFlag',
    changedPassword: 'changedPassword',
    dob: 'dob',
    address: 'address',
    city: 'city',
    departmentId: 'departmentId',
    lastLogin: 'lastLogin',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById'
  };

  export type UserScalarFieldEnum = (typeof UserScalarFieldEnum)[keyof typeof UserScalarFieldEnum]


  export const DepartmentScalarFieldEnum: {
    id: 'id',
    name: 'name',
    description: 'description',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    delFlag: 'delFlag',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById'
  };

  export type DepartmentScalarFieldEnum = (typeof DepartmentScalarFieldEnum)[keyof typeof DepartmentScalarFieldEnum]


  export const LeaveScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    leaveType: 'leaveType',
    startDate: 'startDate',
    endDate: 'endDate',
    reason: 'reason',
    status: 'status',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    delFlag: 'delFlag',
    approvedById: 'approvedById',
    rejectedById: 'rejectedById',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById'
  };

  export type LeaveScalarFieldEnum = (typeof LeaveScalarFieldEnum)[keyof typeof LeaveScalarFieldEnum]


  export const LeaveHistoryScalarFieldEnum: {
    id: 'id',
    leaveId: 'leaveId',
    oldStatus: 'oldStatus',
    newStatus: 'newStatus',
    statusChange: 'statusChange',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    delFlag: 'delFlag',
    userId: 'userId',
    changedById: 'changedById'
  };

  export type LeaveHistoryScalarFieldEnum = (typeof LeaveHistoryScalarFieldEnum)[keyof typeof LeaveHistoryScalarFieldEnum]


  export const LeavePolicyScalarFieldEnum: {
    id: 'id',
    leaveType: 'leaveType',
    maxDays: 'maxDays',
    eligibility: 'eligibility',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    delFlag: 'delFlag',
    createdById: 'createdById',
    updatedById: 'updatedById',
    deletedById: 'deletedById'
  };

  export type LeavePolicyScalarFieldEnum = (typeof LeavePolicyScalarFieldEnum)[keyof typeof LeavePolicyScalarFieldEnum]


  export const NotificationScalarFieldEnum: {
    id: 'id',
    userId: 'userId',
    leaveId: 'leaveId',
    message: 'message',
    createdAt: 'createdAt',
    updatedAt: 'updatedAt',
    delFlag: 'delFlag',
    isRead: 'isRead'
  };

  export type NotificationScalarFieldEnum = (typeof NotificationScalarFieldEnum)[keyof typeof NotificationScalarFieldEnum]


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
   * Reference to a field of type 'UserRole'
   */
  export type EnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole'>
    


  /**
   * Reference to a field of type 'UserRole[]'
   */
  export type ListEnumUserRoleFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'UserRole[]'>
    


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
   * Reference to a field of type 'LeaveType'
   */
  export type EnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType'>
    


  /**
   * Reference to a field of type 'LeaveType[]'
   */
  export type ListEnumLeaveTypeFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveType[]'>
    


  /**
   * Reference to a field of type 'LeaveStatus'
   */
  export type EnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus'>
    


  /**
   * Reference to a field of type 'LeaveStatus[]'
   */
  export type ListEnumLeaveStatusFieldRefInput<$PrismaModel> = FieldRefInputType<$PrismaModel, 'LeaveStatus[]'>
    


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
   * Deep Input Types
   */


  export type UserWhereInput = {
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    imageUrl?: StringFilter<"User"> | string
    imageKey?: StringFilter<"User"> | string
    delFlag?: BoolFilter<"User"> | boolean
    changedPassword?: BoolFilter<"User"> | boolean
    dob?: DateTimeFilter<"User"> | Date | string
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    departmentId?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdById?: StringNullableFilter<"User"> | string | null
    updatedById?: StringNullableFilter<"User"> | string | null
    deletedById?: StringNullableFilter<"User"> | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    leaves?: LeaveListRelationFilter
    leaveHistories?: LeaveHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
    createdUsers?: UserListRelationFilter
    updatedUsers?: UserListRelationFilter
    deletedUsers?: UserListRelationFilter
    createdDepartments?: DepartmentListRelationFilter
    updatedDepartments?: DepartmentListRelationFilter
    deletedDepartments?: DepartmentListRelationFilter
    createdLeaves?: LeaveListRelationFilter
    updatedLeaves?: LeaveListRelationFilter
    deletedLeaves?: LeaveListRelationFilter
    approvedLeaves?: LeaveListRelationFilter
    rejectedLeaves?: LeaveListRelationFilter
    changedLeaveHistories?: LeaveHistoryListRelationFilter
    createdLeavePolicies?: LeavePolicyListRelationFilter
    updatedLeavePolicies?: LeavePolicyListRelationFilter
    deletedLeavePolicies?: LeavePolicyListRelationFilter
  }

  export type UserOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    delFlag?: SortOrder
    changedPassword?: SortOrder
    dob?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    department?: DepartmentOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    deletedBy?: UserOrderByWithRelationInput
    leaves?: LeaveOrderByRelationAggregateInput
    leaveHistories?: LeaveHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    createdUsers?: UserOrderByRelationAggregateInput
    updatedUsers?: UserOrderByRelationAggregateInput
    deletedUsers?: UserOrderByRelationAggregateInput
    createdDepartments?: DepartmentOrderByRelationAggregateInput
    updatedDepartments?: DepartmentOrderByRelationAggregateInput
    deletedDepartments?: DepartmentOrderByRelationAggregateInput
    createdLeaves?: LeaveOrderByRelationAggregateInput
    updatedLeaves?: LeaveOrderByRelationAggregateInput
    deletedLeaves?: LeaveOrderByRelationAggregateInput
    approvedLeaves?: LeaveOrderByRelationAggregateInput
    rejectedLeaves?: LeaveOrderByRelationAggregateInput
    changedLeaveHistories?: LeaveHistoryOrderByRelationAggregateInput
    createdLeavePolicies?: LeavePolicyOrderByRelationAggregateInput
    updatedLeavePolicies?: LeavePolicyOrderByRelationAggregateInput
    deletedLeavePolicies?: LeavePolicyOrderByRelationAggregateInput
  }

  export type UserWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    email?: string
    AND?: UserWhereInput | UserWhereInput[]
    OR?: UserWhereInput[]
    NOT?: UserWhereInput | UserWhereInput[]
    name?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    imageUrl?: StringFilter<"User"> | string
    imageKey?: StringFilter<"User"> | string
    delFlag?: BoolFilter<"User"> | boolean
    changedPassword?: BoolFilter<"User"> | boolean
    dob?: DateTimeFilter<"User"> | Date | string
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    departmentId?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdById?: StringNullableFilter<"User"> | string | null
    updatedById?: StringNullableFilter<"User"> | string | null
    deletedById?: StringNullableFilter<"User"> | string | null
    department?: XOR<DepartmentNullableScalarRelationFilter, DepartmentWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    leaves?: LeaveListRelationFilter
    leaveHistories?: LeaveHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
    createdUsers?: UserListRelationFilter
    updatedUsers?: UserListRelationFilter
    deletedUsers?: UserListRelationFilter
    createdDepartments?: DepartmentListRelationFilter
    updatedDepartments?: DepartmentListRelationFilter
    deletedDepartments?: DepartmentListRelationFilter
    createdLeaves?: LeaveListRelationFilter
    updatedLeaves?: LeaveListRelationFilter
    deletedLeaves?: LeaveListRelationFilter
    approvedLeaves?: LeaveListRelationFilter
    rejectedLeaves?: LeaveListRelationFilter
    changedLeaveHistories?: LeaveHistoryListRelationFilter
    createdLeavePolicies?: LeavePolicyListRelationFilter
    updatedLeavePolicies?: LeavePolicyListRelationFilter
    deletedLeavePolicies?: LeavePolicyListRelationFilter
  }, "id" | "email">

  export type UserOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrderInput | SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    delFlag?: SortOrder
    changedPassword?: SortOrder
    dob?: SortOrder
    address?: SortOrderInput | SortOrder
    city?: SortOrderInput | SortOrder
    departmentId?: SortOrderInput | SortOrder
    lastLogin?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    _count?: UserCountOrderByAggregateInput
    _max?: UserMaxOrderByAggregateInput
    _min?: UserMinOrderByAggregateInput
  }

  export type UserScalarWhereWithAggregatesInput = {
    AND?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    OR?: UserScalarWhereWithAggregatesInput[]
    NOT?: UserScalarWhereWithAggregatesInput | UserScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"User"> | string
    name?: StringWithAggregatesFilter<"User"> | string
    email?: StringWithAggregatesFilter<"User"> | string
    password?: StringWithAggregatesFilter<"User"> | string
    phoneNumber?: StringNullableWithAggregatesFilter<"User"> | string | null
    role?: EnumUserRoleWithAggregatesFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"User"> | Date | string
    imageUrl?: StringWithAggregatesFilter<"User"> | string
    imageKey?: StringWithAggregatesFilter<"User"> | string
    delFlag?: BoolWithAggregatesFilter<"User"> | boolean
    changedPassword?: BoolWithAggregatesFilter<"User"> | boolean
    dob?: DateTimeWithAggregatesFilter<"User"> | Date | string
    address?: StringNullableWithAggregatesFilter<"User"> | string | null
    city?: StringNullableWithAggregatesFilter<"User"> | string | null
    departmentId?: StringNullableWithAggregatesFilter<"User"> | string | null
    lastLogin?: DateTimeNullableWithAggregatesFilter<"User"> | Date | string | null
    createdById?: StringNullableWithAggregatesFilter<"User"> | string | null
    updatedById?: StringNullableWithAggregatesFilter<"User"> | string | null
    deletedById?: StringNullableWithAggregatesFilter<"User"> | string | null
  }

  export type DepartmentWhereInput = {
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    description?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    delFlag?: BoolFilter<"Department"> | boolean
    createdById?: StringNullableFilter<"Department"> | string | null
    updatedById?: StringNullableFilter<"Department"> | string | null
    deletedById?: StringNullableFilter<"Department"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
  }

  export type DepartmentOrderByWithRelationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    deletedBy?: UserOrderByWithRelationInput
    users?: UserOrderByRelationAggregateInput
  }

  export type DepartmentWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    name?: string
    AND?: DepartmentWhereInput | DepartmentWhereInput[]
    OR?: DepartmentWhereInput[]
    NOT?: DepartmentWhereInput | DepartmentWhereInput[]
    description?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    delFlag?: BoolFilter<"Department"> | boolean
    createdById?: StringNullableFilter<"Department"> | string | null
    updatedById?: StringNullableFilter<"Department"> | string | null
    deletedById?: StringNullableFilter<"Department"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    users?: UserListRelationFilter
  }, "id" | "name">

  export type DepartmentOrderByWithAggregationInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    _count?: DepartmentCountOrderByAggregateInput
    _max?: DepartmentMaxOrderByAggregateInput
    _min?: DepartmentMinOrderByAggregateInput
  }

  export type DepartmentScalarWhereWithAggregatesInput = {
    AND?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    OR?: DepartmentScalarWhereWithAggregatesInput[]
    NOT?: DepartmentScalarWhereWithAggregatesInput | DepartmentScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Department"> | string
    name?: StringWithAggregatesFilter<"Department"> | string
    description?: StringWithAggregatesFilter<"Department"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Department"> | Date | string
    delFlag?: BoolWithAggregatesFilter<"Department"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"Department"> | string | null
    updatedById?: StringNullableWithAggregatesFilter<"Department"> | string | null
    deletedById?: StringNullableWithAggregatesFilter<"Department"> | string | null
  }

  export type LeaveWhereInput = {
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    id?: StringFilter<"Leave"> | string
    userId?: StringFilter<"Leave"> | string
    leaveType?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    reason?: StringFilter<"Leave"> | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
    delFlag?: BoolFilter<"Leave"> | boolean
    approvedById?: StringNullableFilter<"Leave"> | string | null
    rejectedById?: StringNullableFilter<"Leave"> | string | null
    createdById?: StringNullableFilter<"Leave"> | string | null
    updatedById?: StringNullableFilter<"Leave"> | string | null
    deletedById?: StringNullableFilter<"Leave"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    histories?: LeaveHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
    approver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    rejecter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LeaveOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    rejectedById?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    histories?: LeaveHistoryOrderByRelationAggregateInput
    notifications?: NotificationOrderByRelationAggregateInput
    approver?: UserOrderByWithRelationInput
    rejecter?: UserOrderByWithRelationInput
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    deletedBy?: UserOrderByWithRelationInput
  }

  export type LeaveWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveWhereInput | LeaveWhereInput[]
    OR?: LeaveWhereInput[]
    NOT?: LeaveWhereInput | LeaveWhereInput[]
    userId?: StringFilter<"Leave"> | string
    leaveType?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    reason?: StringFilter<"Leave"> | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
    delFlag?: BoolFilter<"Leave"> | boolean
    approvedById?: StringNullableFilter<"Leave"> | string | null
    rejectedById?: StringNullableFilter<"Leave"> | string | null
    createdById?: StringNullableFilter<"Leave"> | string | null
    updatedById?: StringNullableFilter<"Leave"> | string | null
    deletedById?: StringNullableFilter<"Leave"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    histories?: LeaveHistoryListRelationFilter
    notifications?: NotificationListRelationFilter
    approver?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    rejecter?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LeaveOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    approvedById?: SortOrderInput | SortOrder
    rejectedById?: SortOrderInput | SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    _count?: LeaveCountOrderByAggregateInput
    _max?: LeaveMaxOrderByAggregateInput
    _min?: LeaveMinOrderByAggregateInput
  }

  export type LeaveScalarWhereWithAggregatesInput = {
    AND?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    OR?: LeaveScalarWhereWithAggregatesInput[]
    NOT?: LeaveScalarWhereWithAggregatesInput | LeaveScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Leave"> | string
    userId?: StringWithAggregatesFilter<"Leave"> | string
    leaveType?: EnumLeaveTypeWithAggregatesFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    endDate?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    reason?: StringWithAggregatesFilter<"Leave"> | string
    status?: EnumLeaveStatusWithAggregatesFilter<"Leave"> | $Enums.LeaveStatus
    createdAt?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Leave"> | Date | string
    delFlag?: BoolWithAggregatesFilter<"Leave"> | boolean
    approvedById?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    rejectedById?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    createdById?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    updatedById?: StringNullableWithAggregatesFilter<"Leave"> | string | null
    deletedById?: StringNullableWithAggregatesFilter<"Leave"> | string | null
  }

  export type LeaveHistoryWhereInput = {
    AND?: LeaveHistoryWhereInput | LeaveHistoryWhereInput[]
    OR?: LeaveHistoryWhereInput[]
    NOT?: LeaveHistoryWhereInput | LeaveHistoryWhereInput[]
    id?: StringFilter<"LeaveHistory"> | string
    leaveId?: StringFilter<"LeaveHistory"> | string
    oldStatus?: EnumLeaveStatusFilter<"LeaveHistory"> | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFilter<"LeaveHistory"> | $Enums.LeaveStatus
    statusChange?: DateTimeFilter<"LeaveHistory"> | Date | string
    createdAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    delFlag?: BoolFilter<"LeaveHistory"> | boolean
    userId?: StringFilter<"LeaveHistory"> | string
    changedById?: StringNullableFilter<"LeaveHistory"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    leave?: XOR<LeaveScalarRelationFilter, LeaveWhereInput>
    changer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LeaveHistoryOrderByWithRelationInput = {
    id?: SortOrder
    leaveId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    statusChange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    userId?: SortOrder
    changedById?: SortOrderInput | SortOrder
    user?: UserOrderByWithRelationInput
    leave?: LeaveOrderByWithRelationInput
    changer?: UserOrderByWithRelationInput
  }

  export type LeaveHistoryWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeaveHistoryWhereInput | LeaveHistoryWhereInput[]
    OR?: LeaveHistoryWhereInput[]
    NOT?: LeaveHistoryWhereInput | LeaveHistoryWhereInput[]
    leaveId?: StringFilter<"LeaveHistory"> | string
    oldStatus?: EnumLeaveStatusFilter<"LeaveHistory"> | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFilter<"LeaveHistory"> | $Enums.LeaveStatus
    statusChange?: DateTimeFilter<"LeaveHistory"> | Date | string
    createdAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    delFlag?: BoolFilter<"LeaveHistory"> | boolean
    userId?: StringFilter<"LeaveHistory"> | string
    changedById?: StringNullableFilter<"LeaveHistory"> | string | null
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    leave?: XOR<LeaveScalarRelationFilter, LeaveWhereInput>
    changer?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LeaveHistoryOrderByWithAggregationInput = {
    id?: SortOrder
    leaveId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    statusChange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    userId?: SortOrder
    changedById?: SortOrderInput | SortOrder
    _count?: LeaveHistoryCountOrderByAggregateInput
    _max?: LeaveHistoryMaxOrderByAggregateInput
    _min?: LeaveHistoryMinOrderByAggregateInput
  }

  export type LeaveHistoryScalarWhereWithAggregatesInput = {
    AND?: LeaveHistoryScalarWhereWithAggregatesInput | LeaveHistoryScalarWhereWithAggregatesInput[]
    OR?: LeaveHistoryScalarWhereWithAggregatesInput[]
    NOT?: LeaveHistoryScalarWhereWithAggregatesInput | LeaveHistoryScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeaveHistory"> | string
    leaveId?: StringWithAggregatesFilter<"LeaveHistory"> | string
    oldStatus?: EnumLeaveStatusWithAggregatesFilter<"LeaveHistory"> | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusWithAggregatesFilter<"LeaveHistory"> | $Enums.LeaveStatus
    statusChange?: DateTimeWithAggregatesFilter<"LeaveHistory"> | Date | string
    createdAt?: DateTimeWithAggregatesFilter<"LeaveHistory"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeaveHistory"> | Date | string
    delFlag?: BoolWithAggregatesFilter<"LeaveHistory"> | boolean
    userId?: StringWithAggregatesFilter<"LeaveHistory"> | string
    changedById?: StringNullableWithAggregatesFilter<"LeaveHistory"> | string | null
  }

  export type LeavePolicyWhereInput = {
    AND?: LeavePolicyWhereInput | LeavePolicyWhereInput[]
    OR?: LeavePolicyWhereInput[]
    NOT?: LeavePolicyWhereInput | LeavePolicyWhereInput[]
    id?: StringFilter<"LeavePolicy"> | string
    leaveType?: EnumLeaveTypeFilter<"LeavePolicy"> | $Enums.LeaveType
    maxDays?: IntFilter<"LeavePolicy"> | number
    eligibility?: StringFilter<"LeavePolicy"> | string
    createdAt?: DateTimeFilter<"LeavePolicy"> | Date | string
    updatedAt?: DateTimeFilter<"LeavePolicy"> | Date | string
    delFlag?: BoolFilter<"LeavePolicy"> | boolean
    createdById?: StringNullableFilter<"LeavePolicy"> | string | null
    updatedById?: StringNullableFilter<"LeavePolicy"> | string | null
    deletedById?: StringNullableFilter<"LeavePolicy"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }

  export type LeavePolicyOrderByWithRelationInput = {
    id?: SortOrder
    leaveType?: SortOrder
    maxDays?: SortOrder
    eligibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    createdBy?: UserOrderByWithRelationInput
    updatedBy?: UserOrderByWithRelationInput
    deletedBy?: UserOrderByWithRelationInput
  }

  export type LeavePolicyWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: LeavePolicyWhereInput | LeavePolicyWhereInput[]
    OR?: LeavePolicyWhereInput[]
    NOT?: LeavePolicyWhereInput | LeavePolicyWhereInput[]
    leaveType?: EnumLeaveTypeFilter<"LeavePolicy"> | $Enums.LeaveType
    maxDays?: IntFilter<"LeavePolicy"> | number
    eligibility?: StringFilter<"LeavePolicy"> | string
    createdAt?: DateTimeFilter<"LeavePolicy"> | Date | string
    updatedAt?: DateTimeFilter<"LeavePolicy"> | Date | string
    delFlag?: BoolFilter<"LeavePolicy"> | boolean
    createdById?: StringNullableFilter<"LeavePolicy"> | string | null
    updatedById?: StringNullableFilter<"LeavePolicy"> | string | null
    deletedById?: StringNullableFilter<"LeavePolicy"> | string | null
    createdBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    updatedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
    deletedBy?: XOR<UserNullableScalarRelationFilter, UserWhereInput> | null
  }, "id">

  export type LeavePolicyOrderByWithAggregationInput = {
    id?: SortOrder
    leaveType?: SortOrder
    maxDays?: SortOrder
    eligibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrderInput | SortOrder
    updatedById?: SortOrderInput | SortOrder
    deletedById?: SortOrderInput | SortOrder
    _count?: LeavePolicyCountOrderByAggregateInput
    _avg?: LeavePolicyAvgOrderByAggregateInput
    _max?: LeavePolicyMaxOrderByAggregateInput
    _min?: LeavePolicyMinOrderByAggregateInput
    _sum?: LeavePolicySumOrderByAggregateInput
  }

  export type LeavePolicyScalarWhereWithAggregatesInput = {
    AND?: LeavePolicyScalarWhereWithAggregatesInput | LeavePolicyScalarWhereWithAggregatesInput[]
    OR?: LeavePolicyScalarWhereWithAggregatesInput[]
    NOT?: LeavePolicyScalarWhereWithAggregatesInput | LeavePolicyScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"LeavePolicy"> | string
    leaveType?: EnumLeaveTypeWithAggregatesFilter<"LeavePolicy"> | $Enums.LeaveType
    maxDays?: IntWithAggregatesFilter<"LeavePolicy"> | number
    eligibility?: StringWithAggregatesFilter<"LeavePolicy"> | string
    createdAt?: DateTimeWithAggregatesFilter<"LeavePolicy"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"LeavePolicy"> | Date | string
    delFlag?: BoolWithAggregatesFilter<"LeavePolicy"> | boolean
    createdById?: StringNullableWithAggregatesFilter<"LeavePolicy"> | string | null
    updatedById?: StringNullableWithAggregatesFilter<"LeavePolicy"> | string | null
    deletedById?: StringNullableWithAggregatesFilter<"LeavePolicy"> | string | null
  }

  export type NotificationWhereInput = {
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    leaveId?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    delFlag?: BoolFilter<"Notification"> | boolean
    isRead?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    leave?: XOR<LeaveNullableScalarRelationFilter, LeaveWhereInput> | null
  }

  export type NotificationOrderByWithRelationInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveId?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    isRead?: SortOrder
    user?: UserOrderByWithRelationInput
    leave?: LeaveOrderByWithRelationInput
  }

  export type NotificationWhereUniqueInput = Prisma.AtLeast<{
    id?: string
    AND?: NotificationWhereInput | NotificationWhereInput[]
    OR?: NotificationWhereInput[]
    NOT?: NotificationWhereInput | NotificationWhereInput[]
    userId?: StringFilter<"Notification"> | string
    leaveId?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    delFlag?: BoolFilter<"Notification"> | boolean
    isRead?: BoolFilter<"Notification"> | boolean
    user?: XOR<UserScalarRelationFilter, UserWhereInput>
    leave?: XOR<LeaveNullableScalarRelationFilter, LeaveWhereInput> | null
  }, "id">

  export type NotificationOrderByWithAggregationInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveId?: SortOrderInput | SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    isRead?: SortOrder
    _count?: NotificationCountOrderByAggregateInput
    _max?: NotificationMaxOrderByAggregateInput
    _min?: NotificationMinOrderByAggregateInput
  }

  export type NotificationScalarWhereWithAggregatesInput = {
    AND?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    OR?: NotificationScalarWhereWithAggregatesInput[]
    NOT?: NotificationScalarWhereWithAggregatesInput | NotificationScalarWhereWithAggregatesInput[]
    id?: StringWithAggregatesFilter<"Notification"> | string
    userId?: StringWithAggregatesFilter<"Notification"> | string
    leaveId?: StringNullableWithAggregatesFilter<"Notification"> | string | null
    message?: StringWithAggregatesFilter<"Notification"> | string
    createdAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    updatedAt?: DateTimeWithAggregatesFilter<"Notification"> | Date | string
    delFlag?: BoolWithAggregatesFilter<"Notification"> | boolean
    isRead?: BoolWithAggregatesFilter<"Notification"> | boolean
  }

  export type UserCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserCreateManyInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type UserUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
  }

  export type UserUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdBy?: UserCreateNestedOneWithoutCreatedDepartmentsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDepartmentsInput
    deletedBy?: UserCreateNestedOneWithoutDeletedDepartmentsInput
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutCreatedDepartmentsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDepartmentsNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedDepartmentsNestedInput
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentCreateManyInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type DepartmentUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
  }

  export type DepartmentUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveCreateInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeavesInput
    histories?: LeaveHistoryCreateNestedManyWithoutLeaveInput
    notifications?: NotificationCreateNestedManyWithoutLeaveInput
    approver?: UserCreateNestedOneWithoutApprovedLeavesInput
    rejecter?: UserCreateNestedOneWithoutRejectedLeavesInput
    createdBy?: UserCreateNestedOneWithoutCreatedLeavesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavesInput
  }

  export type LeaveUncheckedCreateInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    histories?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    histories?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUpdateManyWithoutLeaveNestedInput
    approver?: UserUpdateOneWithoutApprovedLeavesNestedInput
    rejecter?: UserUpdateOneWithoutRejectedLeavesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedLeavesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    histories?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveCreateManyInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeaveUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeaveUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryCreateInput = {
    id?: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeaveHistoriesInput
    leave: LeaveCreateNestedOneWithoutHistoriesInput
    changer?: UserCreateNestedOneWithoutChangedLeaveHistoriesInput
  }

  export type LeaveHistoryUncheckedCreateInput = {
    id?: string
    leaveId: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    userId: string
    changedById?: string | null
  }

  export type LeaveHistoryUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeaveHistoriesNestedInput
    leave?: LeaveUpdateOneRequiredWithoutHistoriesNestedInput
    changer?: UserUpdateOneWithoutChangedLeaveHistoriesNestedInput
  }

  export type LeaveHistoryUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryCreateManyInput = {
    id?: string
    leaveId: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    userId: string
    changedById?: string | null
  }

  export type LeaveHistoryUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeaveHistoryUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeavePolicyCreateInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdBy?: UserCreateNestedOneWithoutCreatedLeavePoliciesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavePoliciesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavePoliciesInput
  }

  export type LeavePolicyUncheckedCreateInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeavePolicyUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutCreatedLeavePoliciesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavePoliciesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavePoliciesNestedInput
  }

  export type LeavePolicyUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeavePolicyCreateManyInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeavePolicyUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
  }

  export type LeavePolicyUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationCreateInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
    leave?: LeaveCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateInput = {
    id?: string
    userId: string
    leaveId?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
  }

  export type NotificationUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
    leave?: LeaveUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationCreateManyInput = {
    id?: string
    userId: string
    leaveId?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
  }

  export type NotificationUpdateManyMutationInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
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

  export type EnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type BoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type DepartmentNullableScalarRelationFilter = {
    is?: DepartmentWhereInput | null
    isNot?: DepartmentWhereInput | null
  }

  export type UserNullableScalarRelationFilter = {
    is?: UserWhereInput | null
    isNot?: UserWhereInput | null
  }

  export type LeaveListRelationFilter = {
    every?: LeaveWhereInput
    some?: LeaveWhereInput
    none?: LeaveWhereInput
  }

  export type LeaveHistoryListRelationFilter = {
    every?: LeaveHistoryWhereInput
    some?: LeaveHistoryWhereInput
    none?: LeaveHistoryWhereInput
  }

  export type NotificationListRelationFilter = {
    every?: NotificationWhereInput
    some?: NotificationWhereInput
    none?: NotificationWhereInput
  }

  export type UserListRelationFilter = {
    every?: UserWhereInput
    some?: UserWhereInput
    none?: UserWhereInput
  }

  export type DepartmentListRelationFilter = {
    every?: DepartmentWhereInput
    some?: DepartmentWhereInput
    none?: DepartmentWhereInput
  }

  export type LeavePolicyListRelationFilter = {
    every?: LeavePolicyWhereInput
    some?: LeavePolicyWhereInput
    none?: LeavePolicyWhereInput
  }

  export type SortOrderInput = {
    sort: SortOrder
    nulls?: NullsOrder
  }

  export type LeaveOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeaveHistoryOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type NotificationOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type DepartmentOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type LeavePolicyOrderByRelationAggregateInput = {
    _count?: SortOrder
  }

  export type UserCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    delFlag?: SortOrder
    changedPassword?: SortOrder
    dob?: SortOrder
    address?: SortOrder
    city?: SortOrder
    departmentId?: SortOrder
    lastLogin?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type UserMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    delFlag?: SortOrder
    changedPassword?: SortOrder
    dob?: SortOrder
    address?: SortOrder
    city?: SortOrder
    departmentId?: SortOrder
    lastLogin?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type UserMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    email?: SortOrder
    password?: SortOrder
    phoneNumber?: SortOrder
    role?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    imageUrl?: SortOrder
    imageKey?: SortOrder
    delFlag?: SortOrder
    changedPassword?: SortOrder
    dob?: SortOrder
    address?: SortOrder
    city?: SortOrder
    departmentId?: SortOrder
    lastLogin?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
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

  export type EnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type BoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type DepartmentCountOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type DepartmentMaxOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type DepartmentMinOrderByAggregateInput = {
    id?: SortOrder
    name?: SortOrder
    description?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type EnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type EnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type UserScalarRelationFilter = {
    is?: UserWhereInput
    isNot?: UserWhereInput
  }

  export type LeaveCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    approvedById?: SortOrder
    rejectedById?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type LeaveMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    approvedById?: SortOrder
    rejectedById?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type LeaveMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveType?: SortOrder
    startDate?: SortOrder
    endDate?: SortOrder
    reason?: SortOrder
    status?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    approvedById?: SortOrder
    rejectedById?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type EnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type EnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
  }

  export type LeaveScalarRelationFilter = {
    is?: LeaveWhereInput
    isNot?: LeaveWhereInput
  }

  export type LeaveHistoryCountOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    statusChange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    userId?: SortOrder
    changedById?: SortOrder
  }

  export type LeaveHistoryMaxOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    statusChange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    userId?: SortOrder
    changedById?: SortOrder
  }

  export type LeaveHistoryMinOrderByAggregateInput = {
    id?: SortOrder
    leaveId?: SortOrder
    oldStatus?: SortOrder
    newStatus?: SortOrder
    statusChange?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    userId?: SortOrder
    changedById?: SortOrder
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

  export type LeavePolicyCountOrderByAggregateInput = {
    id?: SortOrder
    leaveType?: SortOrder
    maxDays?: SortOrder
    eligibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type LeavePolicyAvgOrderByAggregateInput = {
    maxDays?: SortOrder
  }

  export type LeavePolicyMaxOrderByAggregateInput = {
    id?: SortOrder
    leaveType?: SortOrder
    maxDays?: SortOrder
    eligibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type LeavePolicyMinOrderByAggregateInput = {
    id?: SortOrder
    leaveType?: SortOrder
    maxDays?: SortOrder
    eligibility?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    createdById?: SortOrder
    updatedById?: SortOrder
    deletedById?: SortOrder
  }

  export type LeavePolicySumOrderByAggregateInput = {
    maxDays?: SortOrder
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

  export type LeaveNullableScalarRelationFilter = {
    is?: LeaveWhereInput | null
    isNot?: LeaveWhereInput | null
  }

  export type NotificationCountOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationMaxOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    isRead?: SortOrder
  }

  export type NotificationMinOrderByAggregateInput = {
    id?: SortOrder
    userId?: SortOrder
    leaveId?: SortOrder
    message?: SortOrder
    createdAt?: SortOrder
    updatedAt?: SortOrder
    delFlag?: SortOrder
    isRead?: SortOrder
  }

  export type DepartmentCreateNestedOneWithoutUsersInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    connect?: DepartmentWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedUsersInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedUsersInput = {
    create?: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedUsersInput = {
    create?: XOR<UserCreateWithoutDeletedUsersInput, UserUncheckedCreateWithoutDeletedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedUsersInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveHistoryCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveHistoryCreateWithoutUserInput, LeaveHistoryUncheckedCreateWithoutUserInput> | LeaveHistoryCreateWithoutUserInput[] | LeaveHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutUserInput | LeaveHistoryCreateOrConnectWithoutUserInput[]
    createMany?: LeaveHistoryCreateManyUserInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<UserCreateWithoutUpdatedByInput, UserUncheckedCreateWithoutUpdatedByInput> | UserCreateWithoutUpdatedByInput[] | UserUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedByInput | UserCreateOrConnectWithoutUpdatedByInput[]
    createMany?: UserCreateManyUpdatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<UserCreateWithoutDeletedByInput, UserUncheckedCreateWithoutDeletedByInput> | UserCreateWithoutDeletedByInput[] | UserUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeletedByInput | UserCreateOrConnectWithoutDeletedByInput[]
    createMany?: UserCreateManyDeletedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput> | DepartmentCreateWithoutCreatedByInput[] | DepartmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedByInput | DepartmentCreateOrConnectWithoutCreatedByInput[]
    createMany?: DepartmentCreateManyCreatedByInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<DepartmentCreateWithoutUpdatedByInput, DepartmentUncheckedCreateWithoutUpdatedByInput> | DepartmentCreateWithoutUpdatedByInput[] | DepartmentUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutUpdatedByInput | DepartmentCreateOrConnectWithoutUpdatedByInput[]
    createMany?: DepartmentCreateManyUpdatedByInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type DepartmentCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<DepartmentCreateWithoutDeletedByInput, DepartmentUncheckedCreateWithoutDeletedByInput> | DepartmentCreateWithoutDeletedByInput[] | DepartmentUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutDeletedByInput | DepartmentCreateOrConnectWithoutDeletedByInput[]
    createMany?: DepartmentCreateManyDeletedByInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LeaveCreateWithoutCreatedByInput, LeaveUncheckedCreateWithoutCreatedByInput> | LeaveCreateWithoutCreatedByInput[] | LeaveUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutCreatedByInput | LeaveCreateOrConnectWithoutCreatedByInput[]
    createMany?: LeaveCreateManyCreatedByInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<LeaveCreateWithoutUpdatedByInput, LeaveUncheckedCreateWithoutUpdatedByInput> | LeaveCreateWithoutUpdatedByInput[] | LeaveUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUpdatedByInput | LeaveCreateOrConnectWithoutUpdatedByInput[]
    createMany?: LeaveCreateManyUpdatedByInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<LeaveCreateWithoutDeletedByInput, LeaveUncheckedCreateWithoutDeletedByInput> | LeaveCreateWithoutDeletedByInput[] | LeaveUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutDeletedByInput | LeaveCreateOrConnectWithoutDeletedByInput[]
    createMany?: LeaveCreateManyDeletedByInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutApproverInput = {
    create?: XOR<LeaveCreateWithoutApproverInput, LeaveUncheckedCreateWithoutApproverInput> | LeaveCreateWithoutApproverInput[] | LeaveUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutApproverInput | LeaveCreateOrConnectWithoutApproverInput[]
    createMany?: LeaveCreateManyApproverInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveCreateNestedManyWithoutRejecterInput = {
    create?: XOR<LeaveCreateWithoutRejecterInput, LeaveUncheckedCreateWithoutRejecterInput> | LeaveCreateWithoutRejecterInput[] | LeaveUncheckedCreateWithoutRejecterInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutRejecterInput | LeaveCreateOrConnectWithoutRejecterInput[]
    createMany?: LeaveCreateManyRejecterInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveHistoryCreateNestedManyWithoutChangerInput = {
    create?: XOR<LeaveHistoryCreateWithoutChangerInput, LeaveHistoryUncheckedCreateWithoutChangerInput> | LeaveHistoryCreateWithoutChangerInput[] | LeaveHistoryUncheckedCreateWithoutChangerInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutChangerInput | LeaveHistoryCreateOrConnectWithoutChangerInput[]
    createMany?: LeaveHistoryCreateManyChangerInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type LeavePolicyCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LeavePolicyCreateWithoutCreatedByInput, LeavePolicyUncheckedCreateWithoutCreatedByInput> | LeavePolicyCreateWithoutCreatedByInput[] | LeavePolicyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutCreatedByInput | LeavePolicyCreateOrConnectWithoutCreatedByInput[]
    createMany?: LeavePolicyCreateManyCreatedByInputEnvelope
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
  }

  export type LeavePolicyCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<LeavePolicyCreateWithoutUpdatedByInput, LeavePolicyUncheckedCreateWithoutUpdatedByInput> | LeavePolicyCreateWithoutUpdatedByInput[] | LeavePolicyUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutUpdatedByInput | LeavePolicyCreateOrConnectWithoutUpdatedByInput[]
    createMany?: LeavePolicyCreateManyUpdatedByInputEnvelope
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
  }

  export type LeavePolicyCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<LeavePolicyCreateWithoutDeletedByInput, LeavePolicyUncheckedCreateWithoutDeletedByInput> | LeavePolicyCreateWithoutDeletedByInput[] | LeavePolicyUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutDeletedByInput | LeavePolicyCreateOrConnectWithoutDeletedByInput[]
    createMany?: LeavePolicyCreateManyDeletedByInputEnvelope
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveHistoryUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<LeaveHistoryCreateWithoutUserInput, LeaveHistoryUncheckedCreateWithoutUserInput> | LeaveHistoryCreateWithoutUserInput[] | LeaveHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutUserInput | LeaveHistoryCreateOrConnectWithoutUserInput[]
    createMany?: LeaveHistoryCreateManyUserInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutUserInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<UserCreateWithoutUpdatedByInput, UserUncheckedCreateWithoutUpdatedByInput> | UserCreateWithoutUpdatedByInput[] | UserUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedByInput | UserCreateOrConnectWithoutUpdatedByInput[]
    createMany?: UserCreateManyUpdatedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<UserCreateWithoutDeletedByInput, UserUncheckedCreateWithoutDeletedByInput> | UserCreateWithoutDeletedByInput[] | UserUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeletedByInput | UserCreateOrConnectWithoutDeletedByInput[]
    createMany?: UserCreateManyDeletedByInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput> | DepartmentCreateWithoutCreatedByInput[] | DepartmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedByInput | DepartmentCreateOrConnectWithoutCreatedByInput[]
    createMany?: DepartmentCreateManyCreatedByInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<DepartmentCreateWithoutUpdatedByInput, DepartmentUncheckedCreateWithoutUpdatedByInput> | DepartmentCreateWithoutUpdatedByInput[] | DepartmentUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutUpdatedByInput | DepartmentCreateOrConnectWithoutUpdatedByInput[]
    createMany?: DepartmentCreateManyUpdatedByInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type DepartmentUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<DepartmentCreateWithoutDeletedByInput, DepartmentUncheckedCreateWithoutDeletedByInput> | DepartmentCreateWithoutDeletedByInput[] | DepartmentUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutDeletedByInput | DepartmentCreateOrConnectWithoutDeletedByInput[]
    createMany?: DepartmentCreateManyDeletedByInputEnvelope
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LeaveCreateWithoutCreatedByInput, LeaveUncheckedCreateWithoutCreatedByInput> | LeaveCreateWithoutCreatedByInput[] | LeaveUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutCreatedByInput | LeaveCreateOrConnectWithoutCreatedByInput[]
    createMany?: LeaveCreateManyCreatedByInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<LeaveCreateWithoutUpdatedByInput, LeaveUncheckedCreateWithoutUpdatedByInput> | LeaveCreateWithoutUpdatedByInput[] | LeaveUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUpdatedByInput | LeaveCreateOrConnectWithoutUpdatedByInput[]
    createMany?: LeaveCreateManyUpdatedByInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<LeaveCreateWithoutDeletedByInput, LeaveUncheckedCreateWithoutDeletedByInput> | LeaveCreateWithoutDeletedByInput[] | LeaveUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutDeletedByInput | LeaveCreateOrConnectWithoutDeletedByInput[]
    createMany?: LeaveCreateManyDeletedByInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutApproverInput = {
    create?: XOR<LeaveCreateWithoutApproverInput, LeaveUncheckedCreateWithoutApproverInput> | LeaveCreateWithoutApproverInput[] | LeaveUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutApproverInput | LeaveCreateOrConnectWithoutApproverInput[]
    createMany?: LeaveCreateManyApproverInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveUncheckedCreateNestedManyWithoutRejecterInput = {
    create?: XOR<LeaveCreateWithoutRejecterInput, LeaveUncheckedCreateWithoutRejecterInput> | LeaveCreateWithoutRejecterInput[] | LeaveUncheckedCreateWithoutRejecterInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutRejecterInput | LeaveCreateOrConnectWithoutRejecterInput[]
    createMany?: LeaveCreateManyRejecterInputEnvelope
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
  }

  export type LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput = {
    create?: XOR<LeaveHistoryCreateWithoutChangerInput, LeaveHistoryUncheckedCreateWithoutChangerInput> | LeaveHistoryCreateWithoutChangerInput[] | LeaveHistoryUncheckedCreateWithoutChangerInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutChangerInput | LeaveHistoryCreateOrConnectWithoutChangerInput[]
    createMany?: LeaveHistoryCreateManyChangerInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput = {
    create?: XOR<LeavePolicyCreateWithoutCreatedByInput, LeavePolicyUncheckedCreateWithoutCreatedByInput> | LeavePolicyCreateWithoutCreatedByInput[] | LeavePolicyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutCreatedByInput | LeavePolicyCreateOrConnectWithoutCreatedByInput[]
    createMany?: LeavePolicyCreateManyCreatedByInputEnvelope
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
  }

  export type LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput = {
    create?: XOR<LeavePolicyCreateWithoutUpdatedByInput, LeavePolicyUncheckedCreateWithoutUpdatedByInput> | LeavePolicyCreateWithoutUpdatedByInput[] | LeavePolicyUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutUpdatedByInput | LeavePolicyCreateOrConnectWithoutUpdatedByInput[]
    createMany?: LeavePolicyCreateManyUpdatedByInputEnvelope
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
  }

  export type LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput = {
    create?: XOR<LeavePolicyCreateWithoutDeletedByInput, LeavePolicyUncheckedCreateWithoutDeletedByInput> | LeavePolicyCreateWithoutDeletedByInput[] | LeavePolicyUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutDeletedByInput | LeavePolicyCreateOrConnectWithoutDeletedByInput[]
    createMany?: LeavePolicyCreateManyDeletedByInputEnvelope
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
  }

  export type StringFieldUpdateOperationsInput = {
    set?: string
  }

  export type NullableStringFieldUpdateOperationsInput = {
    set?: string | null
  }

  export type EnumUserRoleFieldUpdateOperationsInput = {
    set?: $Enums.UserRole
  }

  export type DateTimeFieldUpdateOperationsInput = {
    set?: Date | string
  }

  export type BoolFieldUpdateOperationsInput = {
    set?: boolean
  }

  export type NullableDateTimeFieldUpdateOperationsInput = {
    set?: Date | string | null
  }

  export type DepartmentUpdateOneWithoutUsersNestedInput = {
    create?: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    connectOrCreate?: DepartmentCreateOrConnectWithoutUsersInput
    upsert?: DepartmentUpsertWithoutUsersInput
    disconnect?: DepartmentWhereInput | boolean
    delete?: DepartmentWhereInput | boolean
    connect?: DepartmentWhereUniqueInput
    update?: XOR<XOR<DepartmentUpdateToOneWithWhereWithoutUsersInput, DepartmentUpdateWithoutUsersInput>, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type UserUpdateOneWithoutCreatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedUsersInput
    upsert?: UserUpsertWithoutCreatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedUsersInput, UserUpdateWithoutCreatedUsersInput>, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateOneWithoutUpdatedUsersNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedUsersInput
    upsert?: UserUpsertWithoutUpdatedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedUsersInput, UserUpdateWithoutUpdatedUsersInput>, UserUncheckedUpdateWithoutUpdatedUsersInput>
  }

  export type UserUpdateOneWithoutDeletedUsersNestedInput = {
    create?: XOR<UserCreateWithoutDeletedUsersInput, UserUncheckedCreateWithoutDeletedUsersInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedUsersInput
    upsert?: UserUpsertWithoutDeletedUsersInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedUsersInput, UserUpdateWithoutDeletedUsersInput>, UserUncheckedUpdateWithoutDeletedUsersInput>
  }

  export type LeaveUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutUserInput | LeaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutUserInput | LeaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutUserInput | LeaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveHistoryUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutUserInput, LeaveHistoryUncheckedCreateWithoutUserInput> | LeaveHistoryCreateWithoutUserInput[] | LeaveHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutUserInput | LeaveHistoryCreateOrConnectWithoutUserInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutUserInput | LeaveHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveHistoryCreateManyUserInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutUserInput | LeaveHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutUserInput | LeaveHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedByInput, UserUncheckedCreateWithoutUpdatedByInput> | UserCreateWithoutUpdatedByInput[] | UserUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedByInput | UserCreateOrConnectWithoutUpdatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUpdatedByInput | UserUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: UserCreateManyUpdatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUpdatedByInput | UserUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUpdatedByInput | UserUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<UserCreateWithoutDeletedByInput, UserUncheckedCreateWithoutDeletedByInput> | UserCreateWithoutDeletedByInput[] | UserUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeletedByInput | UserCreateOrConnectWithoutDeletedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDeletedByInput | UserUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: UserCreateManyDeletedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDeletedByInput | UserUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDeletedByInput | UserUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput> | DepartmentCreateWithoutCreatedByInput[] | DepartmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedByInput | DepartmentCreateOrConnectWithoutCreatedByInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutCreatedByInput | DepartmentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DepartmentCreateManyCreatedByInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutCreatedByInput | DepartmentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutCreatedByInput | DepartmentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<DepartmentCreateWithoutUpdatedByInput, DepartmentUncheckedCreateWithoutUpdatedByInput> | DepartmentCreateWithoutUpdatedByInput[] | DepartmentUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutUpdatedByInput | DepartmentCreateOrConnectWithoutUpdatedByInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput | DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: DepartmentCreateManyUpdatedByInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput | DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutUpdatedByInput | DepartmentUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type DepartmentUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<DepartmentCreateWithoutDeletedByInput, DepartmentUncheckedCreateWithoutDeletedByInput> | DepartmentCreateWithoutDeletedByInput[] | DepartmentUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutDeletedByInput | DepartmentCreateOrConnectWithoutDeletedByInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutDeletedByInput | DepartmentUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: DepartmentCreateManyDeletedByInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutDeletedByInput | DepartmentUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutDeletedByInput | DepartmentUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LeaveCreateWithoutCreatedByInput, LeaveUncheckedCreateWithoutCreatedByInput> | LeaveCreateWithoutCreatedByInput[] | LeaveUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutCreatedByInput | LeaveCreateOrConnectWithoutCreatedByInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutCreatedByInput | LeaveUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LeaveCreateManyCreatedByInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutCreatedByInput | LeaveUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutCreatedByInput | LeaveUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<LeaveCreateWithoutUpdatedByInput, LeaveUncheckedCreateWithoutUpdatedByInput> | LeaveCreateWithoutUpdatedByInput[] | LeaveUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUpdatedByInput | LeaveCreateOrConnectWithoutUpdatedByInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutUpdatedByInput | LeaveUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: LeaveCreateManyUpdatedByInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutUpdatedByInput | LeaveUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutUpdatedByInput | LeaveUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<LeaveCreateWithoutDeletedByInput, LeaveUncheckedCreateWithoutDeletedByInput> | LeaveCreateWithoutDeletedByInput[] | LeaveUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutDeletedByInput | LeaveCreateOrConnectWithoutDeletedByInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutDeletedByInput | LeaveUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: LeaveCreateManyDeletedByInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutDeletedByInput | LeaveUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutDeletedByInput | LeaveUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutApproverNestedInput = {
    create?: XOR<LeaveCreateWithoutApproverInput, LeaveUncheckedCreateWithoutApproverInput> | LeaveCreateWithoutApproverInput[] | LeaveUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutApproverInput | LeaveCreateOrConnectWithoutApproverInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutApproverInput | LeaveUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: LeaveCreateManyApproverInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutApproverInput | LeaveUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutApproverInput | LeaveUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveUpdateManyWithoutRejecterNestedInput = {
    create?: XOR<LeaveCreateWithoutRejecterInput, LeaveUncheckedCreateWithoutRejecterInput> | LeaveCreateWithoutRejecterInput[] | LeaveUncheckedCreateWithoutRejecterInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutRejecterInput | LeaveCreateOrConnectWithoutRejecterInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutRejecterInput | LeaveUpsertWithWhereUniqueWithoutRejecterInput[]
    createMany?: LeaveCreateManyRejecterInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutRejecterInput | LeaveUpdateWithWhereUniqueWithoutRejecterInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutRejecterInput | LeaveUpdateManyWithWhereWithoutRejecterInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveHistoryUpdateManyWithoutChangerNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutChangerInput, LeaveHistoryUncheckedCreateWithoutChangerInput> | LeaveHistoryCreateWithoutChangerInput[] | LeaveHistoryUncheckedCreateWithoutChangerInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutChangerInput | LeaveHistoryCreateOrConnectWithoutChangerInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutChangerInput | LeaveHistoryUpsertWithWhereUniqueWithoutChangerInput[]
    createMany?: LeaveHistoryCreateManyChangerInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutChangerInput | LeaveHistoryUpdateWithWhereUniqueWithoutChangerInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutChangerInput | LeaveHistoryUpdateManyWithWhereWithoutChangerInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type LeavePolicyUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LeavePolicyCreateWithoutCreatedByInput, LeavePolicyUncheckedCreateWithoutCreatedByInput> | LeavePolicyCreateWithoutCreatedByInput[] | LeavePolicyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutCreatedByInput | LeavePolicyCreateOrConnectWithoutCreatedByInput[]
    upsert?: LeavePolicyUpsertWithWhereUniqueWithoutCreatedByInput | LeavePolicyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LeavePolicyCreateManyCreatedByInputEnvelope
    set?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    disconnect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    delete?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    update?: LeavePolicyUpdateWithWhereUniqueWithoutCreatedByInput | LeavePolicyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LeavePolicyUpdateManyWithWhereWithoutCreatedByInput | LeavePolicyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LeavePolicyScalarWhereInput | LeavePolicyScalarWhereInput[]
  }

  export type LeavePolicyUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<LeavePolicyCreateWithoutUpdatedByInput, LeavePolicyUncheckedCreateWithoutUpdatedByInput> | LeavePolicyCreateWithoutUpdatedByInput[] | LeavePolicyUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutUpdatedByInput | LeavePolicyCreateOrConnectWithoutUpdatedByInput[]
    upsert?: LeavePolicyUpsertWithWhereUniqueWithoutUpdatedByInput | LeavePolicyUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: LeavePolicyCreateManyUpdatedByInputEnvelope
    set?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    disconnect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    delete?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    update?: LeavePolicyUpdateWithWhereUniqueWithoutUpdatedByInput | LeavePolicyUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: LeavePolicyUpdateManyWithWhereWithoutUpdatedByInput | LeavePolicyUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: LeavePolicyScalarWhereInput | LeavePolicyScalarWhereInput[]
  }

  export type LeavePolicyUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<LeavePolicyCreateWithoutDeletedByInput, LeavePolicyUncheckedCreateWithoutDeletedByInput> | LeavePolicyCreateWithoutDeletedByInput[] | LeavePolicyUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutDeletedByInput | LeavePolicyCreateOrConnectWithoutDeletedByInput[]
    upsert?: LeavePolicyUpsertWithWhereUniqueWithoutDeletedByInput | LeavePolicyUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: LeavePolicyCreateManyDeletedByInputEnvelope
    set?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    disconnect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    delete?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    update?: LeavePolicyUpdateWithWhereUniqueWithoutDeletedByInput | LeavePolicyUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: LeavePolicyUpdateManyWithWhereWithoutDeletedByInput | LeavePolicyUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: LeavePolicyScalarWhereInput | LeavePolicyScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput> | LeaveCreateWithoutUserInput[] | LeaveUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUserInput | LeaveCreateOrConnectWithoutUserInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutUserInput | LeaveUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveCreateManyUserInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutUserInput | LeaveUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutUserInput | LeaveUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutUserInput, LeaveHistoryUncheckedCreateWithoutUserInput> | LeaveHistoryCreateWithoutUserInput[] | LeaveHistoryUncheckedCreateWithoutUserInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutUserInput | LeaveHistoryCreateOrConnectWithoutUserInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutUserInput | LeaveHistoryUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: LeaveHistoryCreateManyUserInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutUserInput | LeaveHistoryUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutUserInput | LeaveHistoryUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutUserNestedInput = {
    create?: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput> | NotificationCreateWithoutUserInput[] | NotificationUncheckedCreateWithoutUserInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutUserInput | NotificationCreateOrConnectWithoutUserInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutUserInput | NotificationUpsertWithWhereUniqueWithoutUserInput[]
    createMany?: NotificationCreateManyUserInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutUserInput | NotificationUpdateWithWhereUniqueWithoutUserInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutUserInput | NotificationUpdateManyWithWhereWithoutUserInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput> | UserCreateWithoutCreatedByInput[] | UserUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutCreatedByInput | UserCreateOrConnectWithoutCreatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutCreatedByInput | UserUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: UserCreateManyCreatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutCreatedByInput | UserUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutCreatedByInput | UserUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedByInput, UserUncheckedCreateWithoutUpdatedByInput> | UserCreateWithoutUpdatedByInput[] | UserUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedByInput | UserCreateOrConnectWithoutUpdatedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutUpdatedByInput | UserUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: UserCreateManyUpdatedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutUpdatedByInput | UserUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutUpdatedByInput | UserUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<UserCreateWithoutDeletedByInput, UserUncheckedCreateWithoutDeletedByInput> | UserCreateWithoutDeletedByInput[] | UserUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDeletedByInput | UserCreateOrConnectWithoutDeletedByInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDeletedByInput | UserUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: UserCreateManyDeletedByInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDeletedByInput | UserUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDeletedByInput | UserUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput> | DepartmentCreateWithoutCreatedByInput[] | DepartmentUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutCreatedByInput | DepartmentCreateOrConnectWithoutCreatedByInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutCreatedByInput | DepartmentUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: DepartmentCreateManyCreatedByInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutCreatedByInput | DepartmentUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutCreatedByInput | DepartmentUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<DepartmentCreateWithoutUpdatedByInput, DepartmentUncheckedCreateWithoutUpdatedByInput> | DepartmentCreateWithoutUpdatedByInput[] | DepartmentUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutUpdatedByInput | DepartmentCreateOrConnectWithoutUpdatedByInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput | DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: DepartmentCreateManyUpdatedByInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput | DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutUpdatedByInput | DepartmentUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<DepartmentCreateWithoutDeletedByInput, DepartmentUncheckedCreateWithoutDeletedByInput> | DepartmentCreateWithoutDeletedByInput[] | DepartmentUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: DepartmentCreateOrConnectWithoutDeletedByInput | DepartmentCreateOrConnectWithoutDeletedByInput[]
    upsert?: DepartmentUpsertWithWhereUniqueWithoutDeletedByInput | DepartmentUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: DepartmentCreateManyDeletedByInputEnvelope
    set?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    disconnect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    delete?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    connect?: DepartmentWhereUniqueInput | DepartmentWhereUniqueInput[]
    update?: DepartmentUpdateWithWhereUniqueWithoutDeletedByInput | DepartmentUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: DepartmentUpdateManyWithWhereWithoutDeletedByInput | DepartmentUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LeaveCreateWithoutCreatedByInput, LeaveUncheckedCreateWithoutCreatedByInput> | LeaveCreateWithoutCreatedByInput[] | LeaveUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutCreatedByInput | LeaveCreateOrConnectWithoutCreatedByInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutCreatedByInput | LeaveUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LeaveCreateManyCreatedByInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutCreatedByInput | LeaveUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutCreatedByInput | LeaveUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<LeaveCreateWithoutUpdatedByInput, LeaveUncheckedCreateWithoutUpdatedByInput> | LeaveCreateWithoutUpdatedByInput[] | LeaveUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutUpdatedByInput | LeaveCreateOrConnectWithoutUpdatedByInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutUpdatedByInput | LeaveUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: LeaveCreateManyUpdatedByInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutUpdatedByInput | LeaveUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutUpdatedByInput | LeaveUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<LeaveCreateWithoutDeletedByInput, LeaveUncheckedCreateWithoutDeletedByInput> | LeaveCreateWithoutDeletedByInput[] | LeaveUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutDeletedByInput | LeaveCreateOrConnectWithoutDeletedByInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutDeletedByInput | LeaveUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: LeaveCreateManyDeletedByInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutDeletedByInput | LeaveUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutDeletedByInput | LeaveUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutApproverNestedInput = {
    create?: XOR<LeaveCreateWithoutApproverInput, LeaveUncheckedCreateWithoutApproverInput> | LeaveCreateWithoutApproverInput[] | LeaveUncheckedCreateWithoutApproverInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutApproverInput | LeaveCreateOrConnectWithoutApproverInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutApproverInput | LeaveUpsertWithWhereUniqueWithoutApproverInput[]
    createMany?: LeaveCreateManyApproverInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutApproverInput | LeaveUpdateWithWhereUniqueWithoutApproverInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutApproverInput | LeaveUpdateManyWithWhereWithoutApproverInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveUncheckedUpdateManyWithoutRejecterNestedInput = {
    create?: XOR<LeaveCreateWithoutRejecterInput, LeaveUncheckedCreateWithoutRejecterInput> | LeaveCreateWithoutRejecterInput[] | LeaveUncheckedCreateWithoutRejecterInput[]
    connectOrCreate?: LeaveCreateOrConnectWithoutRejecterInput | LeaveCreateOrConnectWithoutRejecterInput[]
    upsert?: LeaveUpsertWithWhereUniqueWithoutRejecterInput | LeaveUpsertWithWhereUniqueWithoutRejecterInput[]
    createMany?: LeaveCreateManyRejecterInputEnvelope
    set?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    disconnect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    delete?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    connect?: LeaveWhereUniqueInput | LeaveWhereUniqueInput[]
    update?: LeaveUpdateWithWhereUniqueWithoutRejecterInput | LeaveUpdateWithWhereUniqueWithoutRejecterInput[]
    updateMany?: LeaveUpdateManyWithWhereWithoutRejecterInput | LeaveUpdateManyWithWhereWithoutRejecterInput[]
    deleteMany?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutChangerInput, LeaveHistoryUncheckedCreateWithoutChangerInput> | LeaveHistoryCreateWithoutChangerInput[] | LeaveHistoryUncheckedCreateWithoutChangerInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutChangerInput | LeaveHistoryCreateOrConnectWithoutChangerInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutChangerInput | LeaveHistoryUpsertWithWhereUniqueWithoutChangerInput[]
    createMany?: LeaveHistoryCreateManyChangerInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutChangerInput | LeaveHistoryUpdateWithWhereUniqueWithoutChangerInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutChangerInput | LeaveHistoryUpdateManyWithWhereWithoutChangerInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput = {
    create?: XOR<LeavePolicyCreateWithoutCreatedByInput, LeavePolicyUncheckedCreateWithoutCreatedByInput> | LeavePolicyCreateWithoutCreatedByInput[] | LeavePolicyUncheckedCreateWithoutCreatedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutCreatedByInput | LeavePolicyCreateOrConnectWithoutCreatedByInput[]
    upsert?: LeavePolicyUpsertWithWhereUniqueWithoutCreatedByInput | LeavePolicyUpsertWithWhereUniqueWithoutCreatedByInput[]
    createMany?: LeavePolicyCreateManyCreatedByInputEnvelope
    set?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    disconnect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    delete?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    update?: LeavePolicyUpdateWithWhereUniqueWithoutCreatedByInput | LeavePolicyUpdateWithWhereUniqueWithoutCreatedByInput[]
    updateMany?: LeavePolicyUpdateManyWithWhereWithoutCreatedByInput | LeavePolicyUpdateManyWithWhereWithoutCreatedByInput[]
    deleteMany?: LeavePolicyScalarWhereInput | LeavePolicyScalarWhereInput[]
  }

  export type LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput = {
    create?: XOR<LeavePolicyCreateWithoutUpdatedByInput, LeavePolicyUncheckedCreateWithoutUpdatedByInput> | LeavePolicyCreateWithoutUpdatedByInput[] | LeavePolicyUncheckedCreateWithoutUpdatedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutUpdatedByInput | LeavePolicyCreateOrConnectWithoutUpdatedByInput[]
    upsert?: LeavePolicyUpsertWithWhereUniqueWithoutUpdatedByInput | LeavePolicyUpsertWithWhereUniqueWithoutUpdatedByInput[]
    createMany?: LeavePolicyCreateManyUpdatedByInputEnvelope
    set?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    disconnect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    delete?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    update?: LeavePolicyUpdateWithWhereUniqueWithoutUpdatedByInput | LeavePolicyUpdateWithWhereUniqueWithoutUpdatedByInput[]
    updateMany?: LeavePolicyUpdateManyWithWhereWithoutUpdatedByInput | LeavePolicyUpdateManyWithWhereWithoutUpdatedByInput[]
    deleteMany?: LeavePolicyScalarWhereInput | LeavePolicyScalarWhereInput[]
  }

  export type LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput = {
    create?: XOR<LeavePolicyCreateWithoutDeletedByInput, LeavePolicyUncheckedCreateWithoutDeletedByInput> | LeavePolicyCreateWithoutDeletedByInput[] | LeavePolicyUncheckedCreateWithoutDeletedByInput[]
    connectOrCreate?: LeavePolicyCreateOrConnectWithoutDeletedByInput | LeavePolicyCreateOrConnectWithoutDeletedByInput[]
    upsert?: LeavePolicyUpsertWithWhereUniqueWithoutDeletedByInput | LeavePolicyUpsertWithWhereUniqueWithoutDeletedByInput[]
    createMany?: LeavePolicyCreateManyDeletedByInputEnvelope
    set?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    disconnect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    delete?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    connect?: LeavePolicyWhereUniqueInput | LeavePolicyWhereUniqueInput[]
    update?: LeavePolicyUpdateWithWhereUniqueWithoutDeletedByInput | LeavePolicyUpdateWithWhereUniqueWithoutDeletedByInput[]
    updateMany?: LeavePolicyUpdateManyWithWhereWithoutDeletedByInput | LeavePolicyUpdateManyWithWhereWithoutDeletedByInput[]
    deleteMany?: LeavePolicyScalarWhereInput | LeavePolicyScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutCreatedDepartmentsInput = {
    create?: XOR<UserCreateWithoutCreatedDepartmentsInput, UserUncheckedCreateWithoutCreatedDepartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDepartmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedDepartmentsInput = {
    create?: XOR<UserCreateWithoutUpdatedDepartmentsInput, UserUncheckedCreateWithoutUpdatedDepartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedDepartmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedDepartmentsInput = {
    create?: XOR<UserCreateWithoutDeletedDepartmentsInput, UserUncheckedCreateWithoutDeletedDepartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedDepartmentsInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUncheckedCreateNestedManyWithoutDepartmentInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
  }

  export type UserUpdateOneWithoutCreatedDepartmentsNestedInput = {
    create?: XOR<UserCreateWithoutCreatedDepartmentsInput, UserUncheckedCreateWithoutCreatedDepartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedDepartmentsInput
    upsert?: UserUpsertWithoutCreatedDepartmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedDepartmentsInput, UserUpdateWithoutCreatedDepartmentsInput>, UserUncheckedUpdateWithoutCreatedDepartmentsInput>
  }

  export type UserUpdateOneWithoutUpdatedDepartmentsNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedDepartmentsInput, UserUncheckedCreateWithoutUpdatedDepartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedDepartmentsInput
    upsert?: UserUpsertWithoutUpdatedDepartmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedDepartmentsInput, UserUpdateWithoutUpdatedDepartmentsInput>, UserUncheckedUpdateWithoutUpdatedDepartmentsInput>
  }

  export type UserUpdateOneWithoutDeletedDepartmentsNestedInput = {
    create?: XOR<UserCreateWithoutDeletedDepartmentsInput, UserUncheckedCreateWithoutDeletedDepartmentsInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedDepartmentsInput
    upsert?: UserUpsertWithoutDeletedDepartmentsInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedDepartmentsInput, UserUpdateWithoutDeletedDepartmentsInput>, UserUncheckedUpdateWithoutDeletedDepartmentsInput>
  }

  export type UserUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserUncheckedUpdateManyWithoutDepartmentNestedInput = {
    create?: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput> | UserCreateWithoutDepartmentInput[] | UserUncheckedCreateWithoutDepartmentInput[]
    connectOrCreate?: UserCreateOrConnectWithoutDepartmentInput | UserCreateOrConnectWithoutDepartmentInput[]
    upsert?: UserUpsertWithWhereUniqueWithoutDepartmentInput | UserUpsertWithWhereUniqueWithoutDepartmentInput[]
    createMany?: UserCreateManyDepartmentInputEnvelope
    set?: UserWhereUniqueInput | UserWhereUniqueInput[]
    disconnect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    delete?: UserWhereUniqueInput | UserWhereUniqueInput[]
    connect?: UserWhereUniqueInput | UserWhereUniqueInput[]
    update?: UserUpdateWithWhereUniqueWithoutDepartmentInput | UserUpdateWithWhereUniqueWithoutDepartmentInput[]
    updateMany?: UserUpdateManyWithWhereWithoutDepartmentInput | UserUpdateManyWithWhereWithoutDepartmentInput[]
    deleteMany?: UserScalarWhereInput | UserScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLeavesInput = {
    create?: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveHistoryCreateNestedManyWithoutLeaveInput = {
    create?: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput> | LeaveHistoryCreateWithoutLeaveInput[] | LeaveHistoryUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutLeaveInput | LeaveHistoryCreateOrConnectWithoutLeaveInput[]
    createMany?: LeaveHistoryCreateManyLeaveInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type NotificationCreateNestedManyWithoutLeaveInput = {
    create?: XOR<NotificationCreateWithoutLeaveInput, NotificationUncheckedCreateWithoutLeaveInput> | NotificationCreateWithoutLeaveInput[] | NotificationUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutLeaveInput | NotificationCreateOrConnectWithoutLeaveInput[]
    createMany?: NotificationCreateManyLeaveInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type UserCreateNestedOneWithoutApprovedLeavesInput = {
    create?: XOR<UserCreateWithoutApprovedLeavesInput, UserUncheckedCreateWithoutApprovedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutRejectedLeavesInput = {
    create?: XOR<UserCreateWithoutRejectedLeavesInput, UserUncheckedCreateWithoutRejectedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRejectedLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutCreatedLeavesInput = {
    create?: XOR<UserCreateWithoutCreatedLeavesInput, UserUncheckedCreateWithoutCreatedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedLeavesInput = {
    create?: XOR<UserCreateWithoutUpdatedLeavesInput, UserUncheckedCreateWithoutUpdatedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedLeavesInput = {
    create?: XOR<UserCreateWithoutDeletedLeavesInput, UserUncheckedCreateWithoutDeletedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedLeavesInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput = {
    create?: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput> | LeaveHistoryCreateWithoutLeaveInput[] | LeaveHistoryUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutLeaveInput | LeaveHistoryCreateOrConnectWithoutLeaveInput[]
    createMany?: LeaveHistoryCreateManyLeaveInputEnvelope
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
  }

  export type NotificationUncheckedCreateNestedManyWithoutLeaveInput = {
    create?: XOR<NotificationCreateWithoutLeaveInput, NotificationUncheckedCreateWithoutLeaveInput> | NotificationCreateWithoutLeaveInput[] | NotificationUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutLeaveInput | NotificationCreateOrConnectWithoutLeaveInput[]
    createMany?: NotificationCreateManyLeaveInputEnvelope
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
  }

  export type EnumLeaveTypeFieldUpdateOperationsInput = {
    set?: $Enums.LeaveType
  }

  export type EnumLeaveStatusFieldUpdateOperationsInput = {
    set?: $Enums.LeaveStatus
  }

  export type UserUpdateOneRequiredWithoutLeavesNestedInput = {
    create?: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeavesInput
    upsert?: UserUpsertWithoutLeavesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeavesInput, UserUpdateWithoutLeavesInput>, UserUncheckedUpdateWithoutLeavesInput>
  }

  export type LeaveHistoryUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput> | LeaveHistoryCreateWithoutLeaveInput[] | LeaveHistoryUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutLeaveInput | LeaveHistoryCreateOrConnectWithoutLeaveInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput | LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: LeaveHistoryCreateManyLeaveInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput | LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutLeaveInput | LeaveHistoryUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type NotificationUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<NotificationCreateWithoutLeaveInput, NotificationUncheckedCreateWithoutLeaveInput> | NotificationCreateWithoutLeaveInput[] | NotificationUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutLeaveInput | NotificationCreateOrConnectWithoutLeaveInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutLeaveInput | NotificationUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: NotificationCreateManyLeaveInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutLeaveInput | NotificationUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutLeaveInput | NotificationUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserUpdateOneWithoutApprovedLeavesNestedInput = {
    create?: XOR<UserCreateWithoutApprovedLeavesInput, UserUncheckedCreateWithoutApprovedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutApprovedLeavesInput
    upsert?: UserUpsertWithoutApprovedLeavesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutApprovedLeavesInput, UserUpdateWithoutApprovedLeavesInput>, UserUncheckedUpdateWithoutApprovedLeavesInput>
  }

  export type UserUpdateOneWithoutRejectedLeavesNestedInput = {
    create?: XOR<UserCreateWithoutRejectedLeavesInput, UserUncheckedCreateWithoutRejectedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutRejectedLeavesInput
    upsert?: UserUpsertWithoutRejectedLeavesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutRejectedLeavesInput, UserUpdateWithoutRejectedLeavesInput>, UserUncheckedUpdateWithoutRejectedLeavesInput>
  }

  export type UserUpdateOneWithoutCreatedLeavesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedLeavesInput, UserUncheckedCreateWithoutCreatedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLeavesInput
    upsert?: UserUpsertWithoutCreatedLeavesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedLeavesInput, UserUpdateWithoutCreatedLeavesInput>, UserUncheckedUpdateWithoutCreatedLeavesInput>
  }

  export type UserUpdateOneWithoutUpdatedLeavesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedLeavesInput, UserUncheckedCreateWithoutUpdatedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedLeavesInput
    upsert?: UserUpsertWithoutUpdatedLeavesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedLeavesInput, UserUpdateWithoutUpdatedLeavesInput>, UserUncheckedUpdateWithoutUpdatedLeavesInput>
  }

  export type UserUpdateOneWithoutDeletedLeavesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedLeavesInput, UserUncheckedCreateWithoutDeletedLeavesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedLeavesInput
    upsert?: UserUpsertWithoutDeletedLeavesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedLeavesInput, UserUpdateWithoutDeletedLeavesInput>, UserUncheckedUpdateWithoutDeletedLeavesInput>
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput> | LeaveHistoryCreateWithoutLeaveInput[] | LeaveHistoryUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: LeaveHistoryCreateOrConnectWithoutLeaveInput | LeaveHistoryCreateOrConnectWithoutLeaveInput[]
    upsert?: LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput | LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: LeaveHistoryCreateManyLeaveInputEnvelope
    set?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    disconnect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    delete?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    connect?: LeaveHistoryWhereUniqueInput | LeaveHistoryWhereUniqueInput[]
    update?: LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput | LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: LeaveHistoryUpdateManyWithWhereWithoutLeaveInput | LeaveHistoryUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
  }

  export type NotificationUncheckedUpdateManyWithoutLeaveNestedInput = {
    create?: XOR<NotificationCreateWithoutLeaveInput, NotificationUncheckedCreateWithoutLeaveInput> | NotificationCreateWithoutLeaveInput[] | NotificationUncheckedCreateWithoutLeaveInput[]
    connectOrCreate?: NotificationCreateOrConnectWithoutLeaveInput | NotificationCreateOrConnectWithoutLeaveInput[]
    upsert?: NotificationUpsertWithWhereUniqueWithoutLeaveInput | NotificationUpsertWithWhereUniqueWithoutLeaveInput[]
    createMany?: NotificationCreateManyLeaveInputEnvelope
    set?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    disconnect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    delete?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    connect?: NotificationWhereUniqueInput | NotificationWhereUniqueInput[]
    update?: NotificationUpdateWithWhereUniqueWithoutLeaveInput | NotificationUpdateWithWhereUniqueWithoutLeaveInput[]
    updateMany?: NotificationUpdateManyWithWhereWithoutLeaveInput | NotificationUpdateManyWithWhereWithoutLeaveInput[]
    deleteMany?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
  }

  export type UserCreateNestedOneWithoutLeaveHistoriesInput = {
    create?: XOR<UserCreateWithoutLeaveHistoriesInput, UserUncheckedCreateWithoutLeaveHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveCreateNestedOneWithoutHistoriesInput = {
    create?: XOR<LeaveCreateWithoutHistoriesInput, LeaveUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: LeaveCreateOrConnectWithoutHistoriesInput
    connect?: LeaveWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutChangedLeaveHistoriesInput = {
    create?: XOR<UserCreateWithoutChangedLeaveHistoriesInput, UserUncheckedCreateWithoutChangedLeaveHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChangedLeaveHistoriesInput
    connect?: UserWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutLeaveHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutLeaveHistoriesInput, UserUncheckedCreateWithoutLeaveHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutLeaveHistoriesInput
    upsert?: UserUpsertWithoutLeaveHistoriesInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutLeaveHistoriesInput, UserUpdateWithoutLeaveHistoriesInput>, UserUncheckedUpdateWithoutLeaveHistoriesInput>
  }

  export type LeaveUpdateOneRequiredWithoutHistoriesNestedInput = {
    create?: XOR<LeaveCreateWithoutHistoriesInput, LeaveUncheckedCreateWithoutHistoriesInput>
    connectOrCreate?: LeaveCreateOrConnectWithoutHistoriesInput
    upsert?: LeaveUpsertWithoutHistoriesInput
    connect?: LeaveWhereUniqueInput
    update?: XOR<XOR<LeaveUpdateToOneWithWhereWithoutHistoriesInput, LeaveUpdateWithoutHistoriesInput>, LeaveUncheckedUpdateWithoutHistoriesInput>
  }

  export type UserUpdateOneWithoutChangedLeaveHistoriesNestedInput = {
    create?: XOR<UserCreateWithoutChangedLeaveHistoriesInput, UserUncheckedCreateWithoutChangedLeaveHistoriesInput>
    connectOrCreate?: UserCreateOrConnectWithoutChangedLeaveHistoriesInput
    upsert?: UserUpsertWithoutChangedLeaveHistoriesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutChangedLeaveHistoriesInput, UserUpdateWithoutChangedLeaveHistoriesInput>, UserUncheckedUpdateWithoutChangedLeaveHistoriesInput>
  }

  export type UserCreateNestedOneWithoutCreatedLeavePoliciesInput = {
    create?: XOR<UserCreateWithoutCreatedLeavePoliciesInput, UserUncheckedCreateWithoutCreatedLeavePoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLeavePoliciesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutUpdatedLeavePoliciesInput = {
    create?: XOR<UserCreateWithoutUpdatedLeavePoliciesInput, UserUncheckedCreateWithoutUpdatedLeavePoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedLeavePoliciesInput
    connect?: UserWhereUniqueInput
  }

  export type UserCreateNestedOneWithoutDeletedLeavePoliciesInput = {
    create?: XOR<UserCreateWithoutDeletedLeavePoliciesInput, UserUncheckedCreateWithoutDeletedLeavePoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedLeavePoliciesInput
    connect?: UserWhereUniqueInput
  }

  export type IntFieldUpdateOperationsInput = {
    set?: number
    increment?: number
    decrement?: number
    multiply?: number
    divide?: number
  }

  export type UserUpdateOneWithoutCreatedLeavePoliciesNestedInput = {
    create?: XOR<UserCreateWithoutCreatedLeavePoliciesInput, UserUncheckedCreateWithoutCreatedLeavePoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutCreatedLeavePoliciesInput
    upsert?: UserUpsertWithoutCreatedLeavePoliciesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutCreatedLeavePoliciesInput, UserUpdateWithoutCreatedLeavePoliciesInput>, UserUncheckedUpdateWithoutCreatedLeavePoliciesInput>
  }

  export type UserUpdateOneWithoutUpdatedLeavePoliciesNestedInput = {
    create?: XOR<UserCreateWithoutUpdatedLeavePoliciesInput, UserUncheckedCreateWithoutUpdatedLeavePoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutUpdatedLeavePoliciesInput
    upsert?: UserUpsertWithoutUpdatedLeavePoliciesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutUpdatedLeavePoliciesInput, UserUpdateWithoutUpdatedLeavePoliciesInput>, UserUncheckedUpdateWithoutUpdatedLeavePoliciesInput>
  }

  export type UserUpdateOneWithoutDeletedLeavePoliciesNestedInput = {
    create?: XOR<UserCreateWithoutDeletedLeavePoliciesInput, UserUncheckedCreateWithoutDeletedLeavePoliciesInput>
    connectOrCreate?: UserCreateOrConnectWithoutDeletedLeavePoliciesInput
    upsert?: UserUpsertWithoutDeletedLeavePoliciesInput
    disconnect?: UserWhereInput | boolean
    delete?: UserWhereInput | boolean
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutDeletedLeavePoliciesInput, UserUpdateWithoutDeletedLeavePoliciesInput>, UserUncheckedUpdateWithoutDeletedLeavePoliciesInput>
  }

  export type UserCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    connect?: UserWhereUniqueInput
  }

  export type LeaveCreateNestedOneWithoutNotificationsInput = {
    create?: XOR<LeaveCreateWithoutNotificationsInput, LeaveUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: LeaveCreateOrConnectWithoutNotificationsInput
    connect?: LeaveWhereUniqueInput
  }

  export type UserUpdateOneRequiredWithoutNotificationsNestedInput = {
    create?: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: UserCreateOrConnectWithoutNotificationsInput
    upsert?: UserUpsertWithoutNotificationsInput
    connect?: UserWhereUniqueInput
    update?: XOR<XOR<UserUpdateToOneWithWhereWithoutNotificationsInput, UserUpdateWithoutNotificationsInput>, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type LeaveUpdateOneWithoutNotificationsNestedInput = {
    create?: XOR<LeaveCreateWithoutNotificationsInput, LeaveUncheckedCreateWithoutNotificationsInput>
    connectOrCreate?: LeaveCreateOrConnectWithoutNotificationsInput
    upsert?: LeaveUpsertWithoutNotificationsInput
    disconnect?: LeaveWhereInput | boolean
    delete?: LeaveWhereInput | boolean
    connect?: LeaveWhereUniqueInput
    update?: XOR<XOR<LeaveUpdateToOneWithWhereWithoutNotificationsInput, LeaveUpdateWithoutNotificationsInput>, LeaveUncheckedUpdateWithoutNotificationsInput>
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

  export type NestedEnumUserRoleFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleFilter<$PrismaModel> | $Enums.UserRole
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

  export type NestedBoolFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolFilter<$PrismaModel> | boolean
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

  export type NestedEnumUserRoleWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.UserRole | EnumUserRoleFieldRefInput<$PrismaModel>
    in?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    notIn?: $Enums.UserRole[] | ListEnumUserRoleFieldRefInput<$PrismaModel>
    not?: NestedEnumUserRoleWithAggregatesFilter<$PrismaModel> | $Enums.UserRole
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumUserRoleFilter<$PrismaModel>
    _max?: NestedEnumUserRoleFilter<$PrismaModel>
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

  export type NestedBoolWithAggregatesFilter<$PrismaModel = never> = {
    equals?: boolean | BooleanFieldRefInput<$PrismaModel>
    not?: NestedBoolWithAggregatesFilter<$PrismaModel> | boolean
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedBoolFilter<$PrismaModel>
    _max?: NestedBoolFilter<$PrismaModel>
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

  export type NestedEnumLeaveTypeFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeFilter<$PrismaModel> | $Enums.LeaveType
  }

  export type NestedEnumLeaveStatusFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusFilter<$PrismaModel> | $Enums.LeaveStatus
  }

  export type NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveType | EnumLeaveTypeFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveType[] | ListEnumLeaveTypeFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveTypeWithAggregatesFilter<$PrismaModel> | $Enums.LeaveType
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveTypeFilter<$PrismaModel>
    _max?: NestedEnumLeaveTypeFilter<$PrismaModel>
  }

  export type NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel = never> = {
    equals?: $Enums.LeaveStatus | EnumLeaveStatusFieldRefInput<$PrismaModel>
    in?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    notIn?: $Enums.LeaveStatus[] | ListEnumLeaveStatusFieldRefInput<$PrismaModel>
    not?: NestedEnumLeaveStatusWithAggregatesFilter<$PrismaModel> | $Enums.LeaveStatus
    _count?: NestedIntFilter<$PrismaModel>
    _min?: NestedEnumLeaveStatusFilter<$PrismaModel>
    _max?: NestedEnumLeaveStatusFilter<$PrismaModel>
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

  export type DepartmentCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdBy?: UserCreateNestedOneWithoutCreatedDepartmentsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDepartmentsInput
    deletedBy?: UserCreateNestedOneWithoutDeletedDepartmentsInput
  }

  export type DepartmentUncheckedCreateWithoutUsersInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type DepartmentCreateOrConnectWithoutUsersInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
  }

  export type UserCreateWithoutCreatedUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutCreatedUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutCreatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
  }

  export type UserCreateWithoutUpdatedUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
  }

  export type UserCreateWithoutDeletedUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutDeletedUsersInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutDeletedUsersInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedUsersInput, UserUncheckedCreateWithoutDeletedUsersInput>
  }

  export type LeaveCreateWithoutUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    histories?: LeaveHistoryCreateNestedManyWithoutLeaveInput
    notifications?: NotificationCreateNestedManyWithoutLeaveInput
    approver?: UserCreateNestedOneWithoutApprovedLeavesInput
    rejecter?: UserCreateNestedOneWithoutRejectedLeavesInput
    createdBy?: UserCreateNestedOneWithoutCreatedLeavesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavesInput
  }

  export type LeaveUncheckedCreateWithoutUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    histories?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutUserInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput>
  }

  export type LeaveCreateManyUserInputEnvelope = {
    data: LeaveCreateManyUserInput | LeaveCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type LeaveHistoryCreateWithoutUserInput = {
    id?: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    leave: LeaveCreateNestedOneWithoutHistoriesInput
    changer?: UserCreateNestedOneWithoutChangedLeaveHistoriesInput
  }

  export type LeaveHistoryUncheckedCreateWithoutUserInput = {
    id?: string
    leaveId: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    changedById?: string | null
  }

  export type LeaveHistoryCreateOrConnectWithoutUserInput = {
    where: LeaveHistoryWhereUniqueInput
    create: XOR<LeaveHistoryCreateWithoutUserInput, LeaveHistoryUncheckedCreateWithoutUserInput>
  }

  export type LeaveHistoryCreateManyUserInputEnvelope = {
    data: LeaveHistoryCreateManyUserInput | LeaveHistoryCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutUserInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
    leave?: LeaveCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutUserInput = {
    id?: string
    leaveId?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
  }

  export type NotificationCreateOrConnectWithoutUserInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationCreateManyUserInputEnvelope = {
    data: NotificationCreateManyUserInput | NotificationCreateManyUserInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserCreateManyCreatedByInputEnvelope = {
    data: UserCreateManyCreatedByInput | UserCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedByInput, UserUncheckedCreateWithoutUpdatedByInput>
  }

  export type UserCreateManyUpdatedByInputEnvelope = {
    data: UserCreateManyUpdatedByInput | UserCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutDeletedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutDeletedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutDeletedByInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedByInput, UserUncheckedCreateWithoutDeletedByInput>
  }

  export type UserCreateManyDeletedByInputEnvelope = {
    data: UserCreateManyDeletedByInput | UserCreateManyDeletedByInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    updatedBy?: UserCreateNestedOneWithoutUpdatedDepartmentsInput
    deletedBy?: UserCreateNestedOneWithoutDeletedDepartmentsInput
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutCreatedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    updatedById?: string | null
    deletedById?: string | null
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutCreatedByInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput>
  }

  export type DepartmentCreateManyCreatedByInputEnvelope = {
    data: DepartmentCreateManyCreatedByInput | DepartmentCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdBy?: UserCreateNestedOneWithoutCreatedDepartmentsInput
    deletedBy?: UserCreateNestedOneWithoutDeletedDepartmentsInput
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    deletedById?: string | null
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutUpdatedByInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutUpdatedByInput, DepartmentUncheckedCreateWithoutUpdatedByInput>
  }

  export type DepartmentCreateManyUpdatedByInputEnvelope = {
    data: DepartmentCreateManyUpdatedByInput | DepartmentCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentCreateWithoutDeletedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdBy?: UserCreateNestedOneWithoutCreatedDepartmentsInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedDepartmentsInput
    users?: UserCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentUncheckedCreateWithoutDeletedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
    users?: UserUncheckedCreateNestedManyWithoutDepartmentInput
  }

  export type DepartmentCreateOrConnectWithoutDeletedByInput = {
    where: DepartmentWhereUniqueInput
    create: XOR<DepartmentCreateWithoutDeletedByInput, DepartmentUncheckedCreateWithoutDeletedByInput>
  }

  export type DepartmentCreateManyDeletedByInputEnvelope = {
    data: DepartmentCreateManyDeletedByInput | DepartmentCreateManyDeletedByInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutCreatedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeavesInput
    histories?: LeaveHistoryCreateNestedManyWithoutLeaveInput
    notifications?: NotificationCreateNestedManyWithoutLeaveInput
    approver?: UserCreateNestedOneWithoutApprovedLeavesInput
    rejecter?: UserCreateNestedOneWithoutRejectedLeavesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavesInput
  }

  export type LeaveUncheckedCreateWithoutCreatedByInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    histories?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutCreatedByInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutCreatedByInput, LeaveUncheckedCreateWithoutCreatedByInput>
  }

  export type LeaveCreateManyCreatedByInputEnvelope = {
    data: LeaveCreateManyCreatedByInput | LeaveCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutUpdatedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeavesInput
    histories?: LeaveHistoryCreateNestedManyWithoutLeaveInput
    notifications?: NotificationCreateNestedManyWithoutLeaveInput
    approver?: UserCreateNestedOneWithoutApprovedLeavesInput
    rejecter?: UserCreateNestedOneWithoutRejectedLeavesInput
    createdBy?: UserCreateNestedOneWithoutCreatedLeavesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavesInput
  }

  export type LeaveUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    deletedById?: string | null
    histories?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutUpdatedByInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutUpdatedByInput, LeaveUncheckedCreateWithoutUpdatedByInput>
  }

  export type LeaveCreateManyUpdatedByInputEnvelope = {
    data: LeaveCreateManyUpdatedByInput | LeaveCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutDeletedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeavesInput
    histories?: LeaveHistoryCreateNestedManyWithoutLeaveInput
    notifications?: NotificationCreateNestedManyWithoutLeaveInput
    approver?: UserCreateNestedOneWithoutApprovedLeavesInput
    rejecter?: UserCreateNestedOneWithoutRejectedLeavesInput
    createdBy?: UserCreateNestedOneWithoutCreatedLeavesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavesInput
  }

  export type LeaveUncheckedCreateWithoutDeletedByInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    histories?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutDeletedByInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutDeletedByInput, LeaveUncheckedCreateWithoutDeletedByInput>
  }

  export type LeaveCreateManyDeletedByInputEnvelope = {
    data: LeaveCreateManyDeletedByInput | LeaveCreateManyDeletedByInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutApproverInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeavesInput
    histories?: LeaveHistoryCreateNestedManyWithoutLeaveInput
    notifications?: NotificationCreateNestedManyWithoutLeaveInput
    rejecter?: UserCreateNestedOneWithoutRejectedLeavesInput
    createdBy?: UserCreateNestedOneWithoutCreatedLeavesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavesInput
  }

  export type LeaveUncheckedCreateWithoutApproverInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    histories?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutApproverInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutApproverInput, LeaveUncheckedCreateWithoutApproverInput>
  }

  export type LeaveCreateManyApproverInputEnvelope = {
    data: LeaveCreateManyApproverInput | LeaveCreateManyApproverInput[]
    skipDuplicates?: boolean
  }

  export type LeaveCreateWithoutRejecterInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeavesInput
    histories?: LeaveHistoryCreateNestedManyWithoutLeaveInput
    notifications?: NotificationCreateNestedManyWithoutLeaveInput
    approver?: UserCreateNestedOneWithoutApprovedLeavesInput
    createdBy?: UserCreateNestedOneWithoutCreatedLeavesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavesInput
  }

  export type LeaveUncheckedCreateWithoutRejecterInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    histories?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutRejecterInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutRejecterInput, LeaveUncheckedCreateWithoutRejecterInput>
  }

  export type LeaveCreateManyRejecterInputEnvelope = {
    data: LeaveCreateManyRejecterInput | LeaveCreateManyRejecterInput[]
    skipDuplicates?: boolean
  }

  export type LeaveHistoryCreateWithoutChangerInput = {
    id?: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeaveHistoriesInput
    leave: LeaveCreateNestedOneWithoutHistoriesInput
  }

  export type LeaveHistoryUncheckedCreateWithoutChangerInput = {
    id?: string
    leaveId: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    userId: string
  }

  export type LeaveHistoryCreateOrConnectWithoutChangerInput = {
    where: LeaveHistoryWhereUniqueInput
    create: XOR<LeaveHistoryCreateWithoutChangerInput, LeaveHistoryUncheckedCreateWithoutChangerInput>
  }

  export type LeaveHistoryCreateManyChangerInputEnvelope = {
    data: LeaveHistoryCreateManyChangerInput | LeaveHistoryCreateManyChangerInput[]
    skipDuplicates?: boolean
  }

  export type LeavePolicyCreateWithoutCreatedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavePoliciesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavePoliciesInput
  }

  export type LeavePolicyUncheckedCreateWithoutCreatedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeavePolicyCreateOrConnectWithoutCreatedByInput = {
    where: LeavePolicyWhereUniqueInput
    create: XOR<LeavePolicyCreateWithoutCreatedByInput, LeavePolicyUncheckedCreateWithoutCreatedByInput>
  }

  export type LeavePolicyCreateManyCreatedByInputEnvelope = {
    data: LeavePolicyCreateManyCreatedByInput | LeavePolicyCreateManyCreatedByInput[]
    skipDuplicates?: boolean
  }

  export type LeavePolicyCreateWithoutUpdatedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdBy?: UserCreateNestedOneWithoutCreatedLeavePoliciesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavePoliciesInput
  }

  export type LeavePolicyUncheckedCreateWithoutUpdatedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    deletedById?: string | null
  }

  export type LeavePolicyCreateOrConnectWithoutUpdatedByInput = {
    where: LeavePolicyWhereUniqueInput
    create: XOR<LeavePolicyCreateWithoutUpdatedByInput, LeavePolicyUncheckedCreateWithoutUpdatedByInput>
  }

  export type LeavePolicyCreateManyUpdatedByInputEnvelope = {
    data: LeavePolicyCreateManyUpdatedByInput | LeavePolicyCreateManyUpdatedByInput[]
    skipDuplicates?: boolean
  }

  export type LeavePolicyCreateWithoutDeletedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdBy?: UserCreateNestedOneWithoutCreatedLeavePoliciesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavePoliciesInput
  }

  export type LeavePolicyUncheckedCreateWithoutDeletedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
  }

  export type LeavePolicyCreateOrConnectWithoutDeletedByInput = {
    where: LeavePolicyWhereUniqueInput
    create: XOR<LeavePolicyCreateWithoutDeletedByInput, LeavePolicyUncheckedCreateWithoutDeletedByInput>
  }

  export type LeavePolicyCreateManyDeletedByInputEnvelope = {
    data: LeavePolicyCreateManyDeletedByInput | LeavePolicyCreateManyDeletedByInput[]
    skipDuplicates?: boolean
  }

  export type DepartmentUpsertWithoutUsersInput = {
    update: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
    create: XOR<DepartmentCreateWithoutUsersInput, DepartmentUncheckedCreateWithoutUsersInput>
    where?: DepartmentWhereInput
  }

  export type DepartmentUpdateToOneWithWhereWithoutUsersInput = {
    where?: DepartmentWhereInput
    data: XOR<DepartmentUpdateWithoutUsersInput, DepartmentUncheckedUpdateWithoutUsersInput>
  }

  export type DepartmentUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutCreatedDepartmentsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDepartmentsNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedDepartmentsNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpsertWithoutCreatedUsersInput = {
    update: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
    create: XOR<UserCreateWithoutCreatedUsersInput, UserUncheckedCreateWithoutCreatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedUsersInput, UserUncheckedUpdateWithoutCreatedUsersInput>
  }

  export type UserUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutUpdatedUsersInput = {
    update: XOR<UserUpdateWithoutUpdatedUsersInput, UserUncheckedUpdateWithoutUpdatedUsersInput>
    create: XOR<UserCreateWithoutUpdatedUsersInput, UserUncheckedCreateWithoutUpdatedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedUsersInput, UserUncheckedUpdateWithoutUpdatedUsersInput>
  }

  export type UserUpdateWithoutUpdatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutDeletedUsersInput = {
    update: XOR<UserUpdateWithoutDeletedUsersInput, UserUncheckedUpdateWithoutDeletedUsersInput>
    create: XOR<UserCreateWithoutDeletedUsersInput, UserUncheckedCreateWithoutDeletedUsersInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedUsersInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedUsersInput, UserUncheckedUpdateWithoutDeletedUsersInput>
  }

  export type UserUpdateWithoutDeletedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedUsersInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type LeaveUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutUserInput, LeaveUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveCreateWithoutUserInput, LeaveUncheckedCreateWithoutUserInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutUserInput, LeaveUncheckedUpdateWithoutUserInput>
  }

  export type LeaveUpdateManyWithWhereWithoutUserInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveScalarWhereInput = {
    AND?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    OR?: LeaveScalarWhereInput[]
    NOT?: LeaveScalarWhereInput | LeaveScalarWhereInput[]
    id?: StringFilter<"Leave"> | string
    userId?: StringFilter<"Leave"> | string
    leaveType?: EnumLeaveTypeFilter<"Leave"> | $Enums.LeaveType
    startDate?: DateTimeFilter<"Leave"> | Date | string
    endDate?: DateTimeFilter<"Leave"> | Date | string
    reason?: StringFilter<"Leave"> | string
    status?: EnumLeaveStatusFilter<"Leave"> | $Enums.LeaveStatus
    createdAt?: DateTimeFilter<"Leave"> | Date | string
    updatedAt?: DateTimeFilter<"Leave"> | Date | string
    delFlag?: BoolFilter<"Leave"> | boolean
    approvedById?: StringNullableFilter<"Leave"> | string | null
    rejectedById?: StringNullableFilter<"Leave"> | string | null
    createdById?: StringNullableFilter<"Leave"> | string | null
    updatedById?: StringNullableFilter<"Leave"> | string | null
    deletedById?: StringNullableFilter<"Leave"> | string | null
  }

  export type LeaveHistoryUpsertWithWhereUniqueWithoutUserInput = {
    where: LeaveHistoryWhereUniqueInput
    update: XOR<LeaveHistoryUpdateWithoutUserInput, LeaveHistoryUncheckedUpdateWithoutUserInput>
    create: XOR<LeaveHistoryCreateWithoutUserInput, LeaveHistoryUncheckedCreateWithoutUserInput>
  }

  export type LeaveHistoryUpdateWithWhereUniqueWithoutUserInput = {
    where: LeaveHistoryWhereUniqueInput
    data: XOR<LeaveHistoryUpdateWithoutUserInput, LeaveHistoryUncheckedUpdateWithoutUserInput>
  }

  export type LeaveHistoryUpdateManyWithWhereWithoutUserInput = {
    where: LeaveHistoryScalarWhereInput
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyWithoutUserInput>
  }

  export type LeaveHistoryScalarWhereInput = {
    AND?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
    OR?: LeaveHistoryScalarWhereInput[]
    NOT?: LeaveHistoryScalarWhereInput | LeaveHistoryScalarWhereInput[]
    id?: StringFilter<"LeaveHistory"> | string
    leaveId?: StringFilter<"LeaveHistory"> | string
    oldStatus?: EnumLeaveStatusFilter<"LeaveHistory"> | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFilter<"LeaveHistory"> | $Enums.LeaveStatus
    statusChange?: DateTimeFilter<"LeaveHistory"> | Date | string
    createdAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    updatedAt?: DateTimeFilter<"LeaveHistory"> | Date | string
    delFlag?: BoolFilter<"LeaveHistory"> | boolean
    userId?: StringFilter<"LeaveHistory"> | string
    changedById?: StringNullableFilter<"LeaveHistory"> | string | null
  }

  export type NotificationUpsertWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
    create: XOR<NotificationCreateWithoutUserInput, NotificationUncheckedCreateWithoutUserInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutUserInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutUserInput, NotificationUncheckedUpdateWithoutUserInput>
  }

  export type NotificationUpdateManyWithWhereWithoutUserInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutUserInput>
  }

  export type NotificationScalarWhereInput = {
    AND?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    OR?: NotificationScalarWhereInput[]
    NOT?: NotificationScalarWhereInput | NotificationScalarWhereInput[]
    id?: StringFilter<"Notification"> | string
    userId?: StringFilter<"Notification"> | string
    leaveId?: StringNullableFilter<"Notification"> | string | null
    message?: StringFilter<"Notification"> | string
    createdAt?: DateTimeFilter<"Notification"> | Date | string
    updatedAt?: DateTimeFilter<"Notification"> | Date | string
    delFlag?: BoolFilter<"Notification"> | boolean
    isRead?: BoolFilter<"Notification"> | boolean
  }

  export type UserUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
    create: XOR<UserCreateWithoutCreatedByInput, UserUncheckedCreateWithoutCreatedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutCreatedByInput, UserUncheckedUpdateWithoutCreatedByInput>
  }

  export type UserUpdateManyWithWhereWithoutCreatedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type UserScalarWhereInput = {
    AND?: UserScalarWhereInput | UserScalarWhereInput[]
    OR?: UserScalarWhereInput[]
    NOT?: UserScalarWhereInput | UserScalarWhereInput[]
    id?: StringFilter<"User"> | string
    name?: StringFilter<"User"> | string
    email?: StringFilter<"User"> | string
    password?: StringFilter<"User"> | string
    phoneNumber?: StringNullableFilter<"User"> | string | null
    role?: EnumUserRoleFilter<"User"> | $Enums.UserRole
    createdAt?: DateTimeFilter<"User"> | Date | string
    updatedAt?: DateTimeFilter<"User"> | Date | string
    imageUrl?: StringFilter<"User"> | string
    imageKey?: StringFilter<"User"> | string
    delFlag?: BoolFilter<"User"> | boolean
    changedPassword?: BoolFilter<"User"> | boolean
    dob?: DateTimeFilter<"User"> | Date | string
    address?: StringNullableFilter<"User"> | string | null
    city?: StringNullableFilter<"User"> | string | null
    departmentId?: StringNullableFilter<"User"> | string | null
    lastLogin?: DateTimeNullableFilter<"User"> | Date | string | null
    createdById?: StringNullableFilter<"User"> | string | null
    updatedById?: StringNullableFilter<"User"> | string | null
    deletedById?: StringNullableFilter<"User"> | string | null
  }

  export type UserUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutUpdatedByInput, UserUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<UserCreateWithoutUpdatedByInput, UserUncheckedCreateWithoutUpdatedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutUpdatedByInput, UserUncheckedUpdateWithoutUpdatedByInput>
  }

  export type UserUpdateManyWithWhereWithoutUpdatedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type UserUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDeletedByInput, UserUncheckedUpdateWithoutDeletedByInput>
    create: XOR<UserCreateWithoutDeletedByInput, UserUncheckedCreateWithoutDeletedByInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDeletedByInput, UserUncheckedUpdateWithoutDeletedByInput>
  }

  export type UserUpdateManyWithWhereWithoutDeletedByInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDeletedByInput>
  }

  export type DepartmentUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutCreatedByInput, DepartmentUncheckedUpdateWithoutCreatedByInput>
    create: XOR<DepartmentCreateWithoutCreatedByInput, DepartmentUncheckedCreateWithoutCreatedByInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutCreatedByInput, DepartmentUncheckedUpdateWithoutCreatedByInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutCreatedByInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type DepartmentScalarWhereInput = {
    AND?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    OR?: DepartmentScalarWhereInput[]
    NOT?: DepartmentScalarWhereInput | DepartmentScalarWhereInput[]
    id?: StringFilter<"Department"> | string
    name?: StringFilter<"Department"> | string
    description?: StringFilter<"Department"> | string
    createdAt?: DateTimeFilter<"Department"> | Date | string
    updatedAt?: DateTimeFilter<"Department"> | Date | string
    delFlag?: BoolFilter<"Department"> | boolean
    createdById?: StringNullableFilter<"Department"> | string | null
    updatedById?: StringNullableFilter<"Department"> | string | null
    deletedById?: StringNullableFilter<"Department"> | string | null
  }

  export type DepartmentUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutUpdatedByInput, DepartmentUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<DepartmentCreateWithoutUpdatedByInput, DepartmentUncheckedCreateWithoutUpdatedByInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutUpdatedByInput, DepartmentUncheckedUpdateWithoutUpdatedByInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutUpdatedByInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type DepartmentUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: DepartmentWhereUniqueInput
    update: XOR<DepartmentUpdateWithoutDeletedByInput, DepartmentUncheckedUpdateWithoutDeletedByInput>
    create: XOR<DepartmentCreateWithoutDeletedByInput, DepartmentUncheckedCreateWithoutDeletedByInput>
  }

  export type DepartmentUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: DepartmentWhereUniqueInput
    data: XOR<DepartmentUpdateWithoutDeletedByInput, DepartmentUncheckedUpdateWithoutDeletedByInput>
  }

  export type DepartmentUpdateManyWithWhereWithoutDeletedByInput = {
    where: DepartmentScalarWhereInput
    data: XOR<DepartmentUpdateManyMutationInput, DepartmentUncheckedUpdateManyWithoutDeletedByInput>
  }

  export type LeaveUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutCreatedByInput, LeaveUncheckedUpdateWithoutCreatedByInput>
    create: XOR<LeaveCreateWithoutCreatedByInput, LeaveUncheckedCreateWithoutCreatedByInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutCreatedByInput, LeaveUncheckedUpdateWithoutCreatedByInput>
  }

  export type LeaveUpdateManyWithWhereWithoutCreatedByInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type LeaveUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutUpdatedByInput, LeaveUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<LeaveCreateWithoutUpdatedByInput, LeaveUncheckedCreateWithoutUpdatedByInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutUpdatedByInput, LeaveUncheckedUpdateWithoutUpdatedByInput>
  }

  export type LeaveUpdateManyWithWhereWithoutUpdatedByInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type LeaveUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutDeletedByInput, LeaveUncheckedUpdateWithoutDeletedByInput>
    create: XOR<LeaveCreateWithoutDeletedByInput, LeaveUncheckedCreateWithoutDeletedByInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutDeletedByInput, LeaveUncheckedUpdateWithoutDeletedByInput>
  }

  export type LeaveUpdateManyWithWhereWithoutDeletedByInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutDeletedByInput>
  }

  export type LeaveUpsertWithWhereUniqueWithoutApproverInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutApproverInput, LeaveUncheckedUpdateWithoutApproverInput>
    create: XOR<LeaveCreateWithoutApproverInput, LeaveUncheckedCreateWithoutApproverInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutApproverInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutApproverInput, LeaveUncheckedUpdateWithoutApproverInput>
  }

  export type LeaveUpdateManyWithWhereWithoutApproverInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutApproverInput>
  }

  export type LeaveUpsertWithWhereUniqueWithoutRejecterInput = {
    where: LeaveWhereUniqueInput
    update: XOR<LeaveUpdateWithoutRejecterInput, LeaveUncheckedUpdateWithoutRejecterInput>
    create: XOR<LeaveCreateWithoutRejecterInput, LeaveUncheckedCreateWithoutRejecterInput>
  }

  export type LeaveUpdateWithWhereUniqueWithoutRejecterInput = {
    where: LeaveWhereUniqueInput
    data: XOR<LeaveUpdateWithoutRejecterInput, LeaveUncheckedUpdateWithoutRejecterInput>
  }

  export type LeaveUpdateManyWithWhereWithoutRejecterInput = {
    where: LeaveScalarWhereInput
    data: XOR<LeaveUpdateManyMutationInput, LeaveUncheckedUpdateManyWithoutRejecterInput>
  }

  export type LeaveHistoryUpsertWithWhereUniqueWithoutChangerInput = {
    where: LeaveHistoryWhereUniqueInput
    update: XOR<LeaveHistoryUpdateWithoutChangerInput, LeaveHistoryUncheckedUpdateWithoutChangerInput>
    create: XOR<LeaveHistoryCreateWithoutChangerInput, LeaveHistoryUncheckedCreateWithoutChangerInput>
  }

  export type LeaveHistoryUpdateWithWhereUniqueWithoutChangerInput = {
    where: LeaveHistoryWhereUniqueInput
    data: XOR<LeaveHistoryUpdateWithoutChangerInput, LeaveHistoryUncheckedUpdateWithoutChangerInput>
  }

  export type LeaveHistoryUpdateManyWithWhereWithoutChangerInput = {
    where: LeaveHistoryScalarWhereInput
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyWithoutChangerInput>
  }

  export type LeavePolicyUpsertWithWhereUniqueWithoutCreatedByInput = {
    where: LeavePolicyWhereUniqueInput
    update: XOR<LeavePolicyUpdateWithoutCreatedByInput, LeavePolicyUncheckedUpdateWithoutCreatedByInput>
    create: XOR<LeavePolicyCreateWithoutCreatedByInput, LeavePolicyUncheckedCreateWithoutCreatedByInput>
  }

  export type LeavePolicyUpdateWithWhereUniqueWithoutCreatedByInput = {
    where: LeavePolicyWhereUniqueInput
    data: XOR<LeavePolicyUpdateWithoutCreatedByInput, LeavePolicyUncheckedUpdateWithoutCreatedByInput>
  }

  export type LeavePolicyUpdateManyWithWhereWithoutCreatedByInput = {
    where: LeavePolicyScalarWhereInput
    data: XOR<LeavePolicyUpdateManyMutationInput, LeavePolicyUncheckedUpdateManyWithoutCreatedByInput>
  }

  export type LeavePolicyScalarWhereInput = {
    AND?: LeavePolicyScalarWhereInput | LeavePolicyScalarWhereInput[]
    OR?: LeavePolicyScalarWhereInput[]
    NOT?: LeavePolicyScalarWhereInput | LeavePolicyScalarWhereInput[]
    id?: StringFilter<"LeavePolicy"> | string
    leaveType?: EnumLeaveTypeFilter<"LeavePolicy"> | $Enums.LeaveType
    maxDays?: IntFilter<"LeavePolicy"> | number
    eligibility?: StringFilter<"LeavePolicy"> | string
    createdAt?: DateTimeFilter<"LeavePolicy"> | Date | string
    updatedAt?: DateTimeFilter<"LeavePolicy"> | Date | string
    delFlag?: BoolFilter<"LeavePolicy"> | boolean
    createdById?: StringNullableFilter<"LeavePolicy"> | string | null
    updatedById?: StringNullableFilter<"LeavePolicy"> | string | null
    deletedById?: StringNullableFilter<"LeavePolicy"> | string | null
  }

  export type LeavePolicyUpsertWithWhereUniqueWithoutUpdatedByInput = {
    where: LeavePolicyWhereUniqueInput
    update: XOR<LeavePolicyUpdateWithoutUpdatedByInput, LeavePolicyUncheckedUpdateWithoutUpdatedByInput>
    create: XOR<LeavePolicyCreateWithoutUpdatedByInput, LeavePolicyUncheckedCreateWithoutUpdatedByInput>
  }

  export type LeavePolicyUpdateWithWhereUniqueWithoutUpdatedByInput = {
    where: LeavePolicyWhereUniqueInput
    data: XOR<LeavePolicyUpdateWithoutUpdatedByInput, LeavePolicyUncheckedUpdateWithoutUpdatedByInput>
  }

  export type LeavePolicyUpdateManyWithWhereWithoutUpdatedByInput = {
    where: LeavePolicyScalarWhereInput
    data: XOR<LeavePolicyUpdateManyMutationInput, LeavePolicyUncheckedUpdateManyWithoutUpdatedByInput>
  }

  export type LeavePolicyUpsertWithWhereUniqueWithoutDeletedByInput = {
    where: LeavePolicyWhereUniqueInput
    update: XOR<LeavePolicyUpdateWithoutDeletedByInput, LeavePolicyUncheckedUpdateWithoutDeletedByInput>
    create: XOR<LeavePolicyCreateWithoutDeletedByInput, LeavePolicyUncheckedCreateWithoutDeletedByInput>
  }

  export type LeavePolicyUpdateWithWhereUniqueWithoutDeletedByInput = {
    where: LeavePolicyWhereUniqueInput
    data: XOR<LeavePolicyUpdateWithoutDeletedByInput, LeavePolicyUncheckedUpdateWithoutDeletedByInput>
  }

  export type LeavePolicyUpdateManyWithWhereWithoutDeletedByInput = {
    where: LeavePolicyScalarWhereInput
    data: XOR<LeavePolicyUpdateManyMutationInput, LeavePolicyUncheckedUpdateManyWithoutDeletedByInput>
  }

  export type UserCreateWithoutCreatedDepartmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutCreatedDepartmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutCreatedDepartmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedDepartmentsInput, UserUncheckedCreateWithoutCreatedDepartmentsInput>
  }

  export type UserCreateWithoutUpdatedDepartmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedDepartmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedDepartmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedDepartmentsInput, UserUncheckedCreateWithoutUpdatedDepartmentsInput>
  }

  export type UserCreateWithoutDeletedDepartmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutDeletedDepartmentsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutDeletedDepartmentsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedDepartmentsInput, UserUncheckedCreateWithoutDeletedDepartmentsInput>
  }

  export type UserCreateWithoutDepartmentInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutDepartmentInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserCreateManyDepartmentInputEnvelope = {
    data: UserCreateManyDepartmentInput | UserCreateManyDepartmentInput[]
    skipDuplicates?: boolean
  }

  export type UserUpsertWithoutCreatedDepartmentsInput = {
    update: XOR<UserUpdateWithoutCreatedDepartmentsInput, UserUncheckedUpdateWithoutCreatedDepartmentsInput>
    create: XOR<UserCreateWithoutCreatedDepartmentsInput, UserUncheckedCreateWithoutCreatedDepartmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedDepartmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedDepartmentsInput, UserUncheckedUpdateWithoutCreatedDepartmentsInput>
  }

  export type UserUpdateWithoutCreatedDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutUpdatedDepartmentsInput = {
    update: XOR<UserUpdateWithoutUpdatedDepartmentsInput, UserUncheckedUpdateWithoutUpdatedDepartmentsInput>
    create: XOR<UserCreateWithoutUpdatedDepartmentsInput, UserUncheckedCreateWithoutUpdatedDepartmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedDepartmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedDepartmentsInput, UserUncheckedUpdateWithoutUpdatedDepartmentsInput>
  }

  export type UserUpdateWithoutUpdatedDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutDeletedDepartmentsInput = {
    update: XOR<UserUpdateWithoutDeletedDepartmentsInput, UserUncheckedUpdateWithoutDeletedDepartmentsInput>
    create: XOR<UserCreateWithoutDeletedDepartmentsInput, UserUncheckedCreateWithoutDeletedDepartmentsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedDepartmentsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedDepartmentsInput, UserUncheckedUpdateWithoutDeletedDepartmentsInput>
  }

  export type UserUpdateWithoutDeletedDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedDepartmentsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    update: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
    create: XOR<UserCreateWithoutDepartmentInput, UserUncheckedCreateWithoutDepartmentInput>
  }

  export type UserUpdateWithWhereUniqueWithoutDepartmentInput = {
    where: UserWhereUniqueInput
    data: XOR<UserUpdateWithoutDepartmentInput, UserUncheckedUpdateWithoutDepartmentInput>
  }

  export type UserUpdateManyWithWhereWithoutDepartmentInput = {
    where: UserScalarWhereInput
    data: XOR<UserUpdateManyMutationInput, UserUncheckedUpdateManyWithoutDepartmentInput>
  }

  export type UserCreateWithoutLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
  }

  export type LeaveHistoryCreateWithoutLeaveInput = {
    id?: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeaveHistoriesInput
    changer?: UserCreateNestedOneWithoutChangedLeaveHistoriesInput
  }

  export type LeaveHistoryUncheckedCreateWithoutLeaveInput = {
    id?: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    userId: string
    changedById?: string | null
  }

  export type LeaveHistoryCreateOrConnectWithoutLeaveInput = {
    where: LeaveHistoryWhereUniqueInput
    create: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput>
  }

  export type LeaveHistoryCreateManyLeaveInputEnvelope = {
    data: LeaveHistoryCreateManyLeaveInput | LeaveHistoryCreateManyLeaveInput[]
    skipDuplicates?: boolean
  }

  export type NotificationCreateWithoutLeaveInput = {
    id?: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
    user: UserCreateNestedOneWithoutNotificationsInput
  }

  export type NotificationUncheckedCreateWithoutLeaveInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
  }

  export type NotificationCreateOrConnectWithoutLeaveInput = {
    where: NotificationWhereUniqueInput
    create: XOR<NotificationCreateWithoutLeaveInput, NotificationUncheckedCreateWithoutLeaveInput>
  }

  export type NotificationCreateManyLeaveInputEnvelope = {
    data: NotificationCreateManyLeaveInput | NotificationCreateManyLeaveInput[]
    skipDuplicates?: boolean
  }

  export type UserCreateWithoutApprovedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutApprovedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutApprovedLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutApprovedLeavesInput, UserUncheckedCreateWithoutApprovedLeavesInput>
  }

  export type UserCreateWithoutRejectedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutRejectedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutRejectedLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutRejectedLeavesInput, UserUncheckedCreateWithoutRejectedLeavesInput>
  }

  export type UserCreateWithoutCreatedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutCreatedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutCreatedLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedLeavesInput, UserUncheckedCreateWithoutCreatedLeavesInput>
  }

  export type UserCreateWithoutUpdatedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedLeavesInput, UserUncheckedCreateWithoutUpdatedLeavesInput>
  }

  export type UserCreateWithoutDeletedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutDeletedLeavesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutDeletedLeavesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedLeavesInput, UserUncheckedCreateWithoutDeletedLeavesInput>
  }

  export type UserUpsertWithoutLeavesInput = {
    update: XOR<UserUpdateWithoutLeavesInput, UserUncheckedUpdateWithoutLeavesInput>
    create: XOR<UserCreateWithoutLeavesInput, UserUncheckedCreateWithoutLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeavesInput, UserUncheckedUpdateWithoutLeavesInput>
  }

  export type UserUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type LeaveHistoryUpsertWithWhereUniqueWithoutLeaveInput = {
    where: LeaveHistoryWhereUniqueInput
    update: XOR<LeaveHistoryUpdateWithoutLeaveInput, LeaveHistoryUncheckedUpdateWithoutLeaveInput>
    create: XOR<LeaveHistoryCreateWithoutLeaveInput, LeaveHistoryUncheckedCreateWithoutLeaveInput>
  }

  export type LeaveHistoryUpdateWithWhereUniqueWithoutLeaveInput = {
    where: LeaveHistoryWhereUniqueInput
    data: XOR<LeaveHistoryUpdateWithoutLeaveInput, LeaveHistoryUncheckedUpdateWithoutLeaveInput>
  }

  export type LeaveHistoryUpdateManyWithWhereWithoutLeaveInput = {
    where: LeaveHistoryScalarWhereInput
    data: XOR<LeaveHistoryUpdateManyMutationInput, LeaveHistoryUncheckedUpdateManyWithoutLeaveInput>
  }

  export type NotificationUpsertWithWhereUniqueWithoutLeaveInput = {
    where: NotificationWhereUniqueInput
    update: XOR<NotificationUpdateWithoutLeaveInput, NotificationUncheckedUpdateWithoutLeaveInput>
    create: XOR<NotificationCreateWithoutLeaveInput, NotificationUncheckedCreateWithoutLeaveInput>
  }

  export type NotificationUpdateWithWhereUniqueWithoutLeaveInput = {
    where: NotificationWhereUniqueInput
    data: XOR<NotificationUpdateWithoutLeaveInput, NotificationUncheckedUpdateWithoutLeaveInput>
  }

  export type NotificationUpdateManyWithWhereWithoutLeaveInput = {
    where: NotificationScalarWhereInput
    data: XOR<NotificationUpdateManyMutationInput, NotificationUncheckedUpdateManyWithoutLeaveInput>
  }

  export type UserUpsertWithoutApprovedLeavesInput = {
    update: XOR<UserUpdateWithoutApprovedLeavesInput, UserUncheckedUpdateWithoutApprovedLeavesInput>
    create: XOR<UserCreateWithoutApprovedLeavesInput, UserUncheckedCreateWithoutApprovedLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutApprovedLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutApprovedLeavesInput, UserUncheckedUpdateWithoutApprovedLeavesInput>
  }

  export type UserUpdateWithoutApprovedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutApprovedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutRejectedLeavesInput = {
    update: XOR<UserUpdateWithoutRejectedLeavesInput, UserUncheckedUpdateWithoutRejectedLeavesInput>
    create: XOR<UserCreateWithoutRejectedLeavesInput, UserUncheckedCreateWithoutRejectedLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutRejectedLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutRejectedLeavesInput, UserUncheckedUpdateWithoutRejectedLeavesInput>
  }

  export type UserUpdateWithoutRejectedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutRejectedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutCreatedLeavesInput = {
    update: XOR<UserUpdateWithoutCreatedLeavesInput, UserUncheckedUpdateWithoutCreatedLeavesInput>
    create: XOR<UserCreateWithoutCreatedLeavesInput, UserUncheckedCreateWithoutCreatedLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedLeavesInput, UserUncheckedUpdateWithoutCreatedLeavesInput>
  }

  export type UserUpdateWithoutCreatedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutUpdatedLeavesInput = {
    update: XOR<UserUpdateWithoutUpdatedLeavesInput, UserUncheckedUpdateWithoutUpdatedLeavesInput>
    create: XOR<UserCreateWithoutUpdatedLeavesInput, UserUncheckedCreateWithoutUpdatedLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedLeavesInput, UserUncheckedUpdateWithoutUpdatedLeavesInput>
  }

  export type UserUpdateWithoutUpdatedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutDeletedLeavesInput = {
    update: XOR<UserUpdateWithoutDeletedLeavesInput, UserUncheckedUpdateWithoutDeletedLeavesInput>
    create: XOR<UserCreateWithoutDeletedLeavesInput, UserUncheckedCreateWithoutDeletedLeavesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedLeavesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedLeavesInput, UserUncheckedUpdateWithoutDeletedLeavesInput>
  }

  export type UserUpdateWithoutDeletedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedLeavesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserCreateWithoutLeaveHistoriesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutLeaveHistoriesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutLeaveHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutLeaveHistoriesInput, UserUncheckedCreateWithoutLeaveHistoriesInput>
  }

  export type LeaveCreateWithoutHistoriesInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeavesInput
    notifications?: NotificationCreateNestedManyWithoutLeaveInput
    approver?: UserCreateNestedOneWithoutApprovedLeavesInput
    rejecter?: UserCreateNestedOneWithoutRejectedLeavesInput
    createdBy?: UserCreateNestedOneWithoutCreatedLeavesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavesInput
  }

  export type LeaveUncheckedCreateWithoutHistoriesInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    notifications?: NotificationUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutHistoriesInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutHistoriesInput, LeaveUncheckedCreateWithoutHistoriesInput>
  }

  export type UserCreateWithoutChangedLeaveHistoriesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutChangedLeaveHistoriesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutChangedLeaveHistoriesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutChangedLeaveHistoriesInput, UserUncheckedCreateWithoutChangedLeaveHistoriesInput>
  }

  export type UserUpsertWithoutLeaveHistoriesInput = {
    update: XOR<UserUpdateWithoutLeaveHistoriesInput, UserUncheckedUpdateWithoutLeaveHistoriesInput>
    create: XOR<UserCreateWithoutLeaveHistoriesInput, UserUncheckedCreateWithoutLeaveHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutLeaveHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutLeaveHistoriesInput, UserUncheckedUpdateWithoutLeaveHistoriesInput>
  }

  export type UserUpdateWithoutLeaveHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutLeaveHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type LeaveUpsertWithoutHistoriesInput = {
    update: XOR<LeaveUpdateWithoutHistoriesInput, LeaveUncheckedUpdateWithoutHistoriesInput>
    create: XOR<LeaveCreateWithoutHistoriesInput, LeaveUncheckedCreateWithoutHistoriesInput>
    where?: LeaveWhereInput
  }

  export type LeaveUpdateToOneWithWhereWithoutHistoriesInput = {
    where?: LeaveWhereInput
    data: XOR<LeaveUpdateWithoutHistoriesInput, LeaveUncheckedUpdateWithoutHistoriesInput>
  }

  export type LeaveUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    notifications?: NotificationUpdateManyWithoutLeaveNestedInput
    approver?: UserUpdateOneWithoutApprovedLeavesNestedInput
    rejecter?: UserUpdateOneWithoutRejectedLeavesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedLeavesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateWithoutHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    notifications?: NotificationUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type UserUpsertWithoutChangedLeaveHistoriesInput = {
    update: XOR<UserUpdateWithoutChangedLeaveHistoriesInput, UserUncheckedUpdateWithoutChangedLeaveHistoriesInput>
    create: XOR<UserCreateWithoutChangedLeaveHistoriesInput, UserUncheckedCreateWithoutChangedLeaveHistoriesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutChangedLeaveHistoriesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutChangedLeaveHistoriesInput, UserUncheckedUpdateWithoutChangedLeaveHistoriesInput>
  }

  export type UserUpdateWithoutChangedLeaveHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutChangedLeaveHistoriesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserCreateWithoutCreatedLeavePoliciesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutCreatedLeavePoliciesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutCreatedLeavePoliciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutCreatedLeavePoliciesInput, UserUncheckedCreateWithoutCreatedLeavePoliciesInput>
  }

  export type UserCreateWithoutUpdatedLeavePoliciesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutUpdatedLeavePoliciesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutUpdatedLeavePoliciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutUpdatedLeavePoliciesInput, UserUncheckedCreateWithoutUpdatedLeavePoliciesInput>
  }

  export type UserCreateWithoutDeletedLeavePoliciesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    notifications?: NotificationCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
  }

  export type UserUncheckedCreateWithoutDeletedLeavePoliciesInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    notifications?: NotificationUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
  }

  export type UserCreateOrConnectWithoutDeletedLeavePoliciesInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutDeletedLeavePoliciesInput, UserUncheckedCreateWithoutDeletedLeavePoliciesInput>
  }

  export type UserUpsertWithoutCreatedLeavePoliciesInput = {
    update: XOR<UserUpdateWithoutCreatedLeavePoliciesInput, UserUncheckedUpdateWithoutCreatedLeavePoliciesInput>
    create: XOR<UserCreateWithoutCreatedLeavePoliciesInput, UserUncheckedCreateWithoutCreatedLeavePoliciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutCreatedLeavePoliciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutCreatedLeavePoliciesInput, UserUncheckedUpdateWithoutCreatedLeavePoliciesInput>
  }

  export type UserUpdateWithoutCreatedLeavePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedLeavePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutUpdatedLeavePoliciesInput = {
    update: XOR<UserUpdateWithoutUpdatedLeavePoliciesInput, UserUncheckedUpdateWithoutUpdatedLeavePoliciesInput>
    create: XOR<UserCreateWithoutUpdatedLeavePoliciesInput, UserUncheckedCreateWithoutUpdatedLeavePoliciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutUpdatedLeavePoliciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutUpdatedLeavePoliciesInput, UserUncheckedUpdateWithoutUpdatedLeavePoliciesInput>
  }

  export type UserUpdateWithoutUpdatedLeavePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedLeavePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUpsertWithoutDeletedLeavePoliciesInput = {
    update: XOR<UserUpdateWithoutDeletedLeavePoliciesInput, UserUncheckedUpdateWithoutDeletedLeavePoliciesInput>
    create: XOR<UserCreateWithoutDeletedLeavePoliciesInput, UserUncheckedCreateWithoutDeletedLeavePoliciesInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutDeletedLeavePoliciesInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutDeletedLeavePoliciesInput, UserUncheckedUpdateWithoutDeletedLeavePoliciesInput>
  }

  export type UserUpdateWithoutDeletedLeavePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedLeavePoliciesInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
  }

  export type UserCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    department?: DepartmentCreateNestedOneWithoutUsersInput
    createdBy?: UserCreateNestedOneWithoutCreatedUsersInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedUsersInput
    deletedBy?: UserCreateNestedOneWithoutDeletedUsersInput
    leaves?: LeaveCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryCreateNestedManyWithoutUserInput
    createdUsers?: UserCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyCreateNestedManyWithoutDeletedByInput
  }

  export type UserUncheckedCreateWithoutNotificationsInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    leaves?: LeaveUncheckedCreateNestedManyWithoutUserInput
    leaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutUserInput
    createdUsers?: UserUncheckedCreateNestedManyWithoutCreatedByInput
    updatedUsers?: UserUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedUsers?: UserUncheckedCreateNestedManyWithoutDeletedByInput
    createdDepartments?: DepartmentUncheckedCreateNestedManyWithoutCreatedByInput
    updatedDepartments?: DepartmentUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedDepartments?: DepartmentUncheckedCreateNestedManyWithoutDeletedByInput
    createdLeaves?: LeaveUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeaves?: LeaveUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeaves?: LeaveUncheckedCreateNestedManyWithoutDeletedByInput
    approvedLeaves?: LeaveUncheckedCreateNestedManyWithoutApproverInput
    rejectedLeaves?: LeaveUncheckedCreateNestedManyWithoutRejecterInput
    changedLeaveHistories?: LeaveHistoryUncheckedCreateNestedManyWithoutChangerInput
    createdLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutCreatedByInput
    updatedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutUpdatedByInput
    deletedLeavePolicies?: LeavePolicyUncheckedCreateNestedManyWithoutDeletedByInput
  }

  export type UserCreateOrConnectWithoutNotificationsInput = {
    where: UserWhereUniqueInput
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
  }

  export type LeaveCreateWithoutNotificationsInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    user: UserCreateNestedOneWithoutLeavesInput
    histories?: LeaveHistoryCreateNestedManyWithoutLeaveInput
    approver?: UserCreateNestedOneWithoutApprovedLeavesInput
    rejecter?: UserCreateNestedOneWithoutRejectedLeavesInput
    createdBy?: UserCreateNestedOneWithoutCreatedLeavesInput
    updatedBy?: UserCreateNestedOneWithoutUpdatedLeavesInput
    deletedBy?: UserCreateNestedOneWithoutDeletedLeavesInput
  }

  export type LeaveUncheckedCreateWithoutNotificationsInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
    histories?: LeaveHistoryUncheckedCreateNestedManyWithoutLeaveInput
  }

  export type LeaveCreateOrConnectWithoutNotificationsInput = {
    where: LeaveWhereUniqueInput
    create: XOR<LeaveCreateWithoutNotificationsInput, LeaveUncheckedCreateWithoutNotificationsInput>
  }

  export type UserUpsertWithoutNotificationsInput = {
    update: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
    create: XOR<UserCreateWithoutNotificationsInput, UserUncheckedCreateWithoutNotificationsInput>
    where?: UserWhereInput
  }

  export type UserUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: UserWhereInput
    data: XOR<UserUpdateWithoutNotificationsInput, UserUncheckedUpdateWithoutNotificationsInput>
  }

  export type UserUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type LeaveUpsertWithoutNotificationsInput = {
    update: XOR<LeaveUpdateWithoutNotificationsInput, LeaveUncheckedUpdateWithoutNotificationsInput>
    create: XOR<LeaveCreateWithoutNotificationsInput, LeaveUncheckedCreateWithoutNotificationsInput>
    where?: LeaveWhereInput
  }

  export type LeaveUpdateToOneWithWhereWithoutNotificationsInput = {
    where?: LeaveWhereInput
    data: XOR<LeaveUpdateWithoutNotificationsInput, LeaveUncheckedUpdateWithoutNotificationsInput>
  }

  export type LeaveUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    histories?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
    approver?: UserUpdateOneWithoutApprovedLeavesNestedInput
    rejecter?: UserUpdateOneWithoutRejectedLeavesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedLeavesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateWithoutNotificationsInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    histories?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveCreateManyUserInput = {
    id?: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeaveHistoryCreateManyUserInput = {
    id?: string
    leaveId: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    changedById?: string | null
  }

  export type NotificationCreateManyUserInput = {
    id?: string
    leaveId?: string | null
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
  }

  export type UserCreateManyCreatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type UserCreateManyUpdatedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    deletedById?: string | null
  }

  export type UserCreateManyDeletedByInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    departmentId?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
  }

  export type DepartmentCreateManyCreatedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    updatedById?: string | null
    deletedById?: string | null
  }

  export type DepartmentCreateManyUpdatedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    deletedById?: string | null
  }

  export type DepartmentCreateManyDeletedByInput = {
    id?: string
    name: string
    description: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
  }

  export type LeaveCreateManyCreatedByInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeaveCreateManyUpdatedByInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    deletedById?: string | null
  }

  export type LeaveCreateManyDeletedByInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
  }

  export type LeaveCreateManyApproverInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    rejectedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeaveCreateManyRejecterInput = {
    id?: string
    userId: string
    leaveType: $Enums.LeaveType
    startDate: Date | string
    endDate: Date | string
    reason: string
    status?: $Enums.LeaveStatus
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    approvedById?: string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeaveHistoryCreateManyChangerInput = {
    id?: string
    leaveId: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    userId: string
  }

  export type LeavePolicyCreateManyCreatedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    updatedById?: string | null
    deletedById?: string | null
  }

  export type LeavePolicyCreateManyUpdatedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    deletedById?: string | null
  }

  export type LeavePolicyCreateManyDeletedByInput = {
    id?: string
    leaveType: $Enums.LeaveType
    maxDays: number
    eligibility: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    createdById?: string | null
    updatedById?: string | null
  }

  export type LeaveUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    histories?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUpdateManyWithoutLeaveNestedInput
    approver?: UserUpdateOneWithoutApprovedLeavesNestedInput
    rejecter?: UserUpdateOneWithoutRejectedLeavesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedLeavesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    histories?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    leave?: LeaveUpdateOneRequiredWithoutHistoriesNestedInput
    changer?: UserUpdateOneWithoutChangedLeaveHistoriesNestedInput
  }

  export type LeaveHistoryUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    leave?: LeaveUpdateOneWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutUserInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: NullableStringFieldUpdateOperationsInput | string | null
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type UserUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    department?: DepartmentUpdateOneWithoutUsersNestedInput
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    departmentId?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    updatedBy?: UserUpdateOneWithoutUpdatedDepartmentsNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedDepartmentsNestedInput
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutCreatedDepartmentsNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedDepartmentsNestedInput
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type DepartmentUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutCreatedDepartmentsNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedDepartmentsNestedInput
    users?: UserUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    users?: UserUncheckedUpdateManyWithoutDepartmentNestedInput
  }

  export type DepartmentUncheckedUpdateManyWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    description?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    histories?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUpdateManyWithoutLeaveNestedInput
    approver?: UserUpdateOneWithoutApprovedLeavesNestedInput
    rejecter?: UserUpdateOneWithoutRejectedLeavesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    histories?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    histories?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUpdateManyWithoutLeaveNestedInput
    approver?: UserUpdateOneWithoutApprovedLeavesNestedInput
    rejecter?: UserUpdateOneWithoutRejectedLeavesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedLeavesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    histories?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    histories?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUpdateManyWithoutLeaveNestedInput
    approver?: UserUpdateOneWithoutApprovedLeavesNestedInput
    rejecter?: UserUpdateOneWithoutRejectedLeavesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedLeavesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    histories?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateManyWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    histories?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUpdateManyWithoutLeaveNestedInput
    rejecter?: UserUpdateOneWithoutRejectedLeavesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedLeavesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    histories?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateManyWithoutApproverInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    rejectedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveUpdateWithoutRejecterInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeavesNestedInput
    histories?: LeaveHistoryUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUpdateManyWithoutLeaveNestedInput
    approver?: UserUpdateOneWithoutApprovedLeavesNestedInput
    createdBy?: UserUpdateOneWithoutCreatedLeavesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavesNestedInput
  }

  export type LeaveUncheckedUpdateWithoutRejecterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    histories?: LeaveHistoryUncheckedUpdateManyWithoutLeaveNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutLeaveNestedInput
  }

  export type LeaveUncheckedUpdateManyWithoutRejecterInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    startDate?: DateTimeFieldUpdateOperationsInput | Date | string
    endDate?: DateTimeFieldUpdateOperationsInput | Date | string
    reason?: StringFieldUpdateOperationsInput | string
    status?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    approvedById?: NullableStringFieldUpdateOperationsInput | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryUpdateWithoutChangerInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeaveHistoriesNestedInput
    leave?: LeaveUpdateOneRequiredWithoutHistoriesNestedInput
  }

  export type LeaveHistoryUncheckedUpdateWithoutChangerInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutChangerInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveId?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
  }

  export type LeavePolicyUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    updatedBy?: UserUpdateOneWithoutUpdatedLeavePoliciesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavePoliciesNestedInput
  }

  export type LeavePolicyUncheckedUpdateWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeavePolicyUncheckedUpdateManyWithoutCreatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeavePolicyUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutCreatedLeavePoliciesNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedLeavePoliciesNestedInput
  }

  export type LeavePolicyUncheckedUpdateWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeavePolicyUncheckedUpdateManyWithoutUpdatedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeavePolicyUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdBy?: UserUpdateOneWithoutCreatedLeavePoliciesNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedLeavePoliciesNestedInput
  }

  export type LeavePolicyUncheckedUpdateWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeavePolicyUncheckedUpdateManyWithoutDeletedByInput = {
    id?: StringFieldUpdateOperationsInput | string
    leaveType?: EnumLeaveTypeFieldUpdateOperationsInput | $Enums.LeaveType
    maxDays?: IntFieldUpdateOperationsInput | number
    eligibility?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type UserCreateManyDepartmentInput = {
    id?: string
    name: string
    email: string
    password: string
    phoneNumber?: string | null
    role?: $Enums.UserRole
    createdAt?: Date | string
    updatedAt?: Date | string
    imageUrl: string
    imageKey: string
    delFlag?: boolean
    changedPassword?: boolean
    dob: Date | string
    address?: string | null
    city?: string | null
    lastLogin?: Date | string | null
    createdById?: string | null
    updatedById?: string | null
    deletedById?: string | null
  }

  export type UserUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdBy?: UserUpdateOneWithoutCreatedUsersNestedInput
    updatedBy?: UserUpdateOneWithoutUpdatedUsersNestedInput
    deletedBy?: UserUpdateOneWithoutDeletedUsersNestedInput
    leaves?: LeaveUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUpdateManyWithoutUserNestedInput
    notifications?: NotificationUpdateManyWithoutUserNestedInput
    createdUsers?: UserUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
    leaves?: LeaveUncheckedUpdateManyWithoutUserNestedInput
    leaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutUserNestedInput
    notifications?: NotificationUncheckedUpdateManyWithoutUserNestedInput
    createdUsers?: UserUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedUsers?: UserUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedUsers?: UserUncheckedUpdateManyWithoutDeletedByNestedInput
    createdDepartments?: DepartmentUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedDepartments?: DepartmentUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedDepartments?: DepartmentUncheckedUpdateManyWithoutDeletedByNestedInput
    createdLeaves?: LeaveUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeaves?: LeaveUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeaves?: LeaveUncheckedUpdateManyWithoutDeletedByNestedInput
    approvedLeaves?: LeaveUncheckedUpdateManyWithoutApproverNestedInput
    rejectedLeaves?: LeaveUncheckedUpdateManyWithoutRejecterNestedInput
    changedLeaveHistories?: LeaveHistoryUncheckedUpdateManyWithoutChangerNestedInput
    createdLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutCreatedByNestedInput
    updatedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutUpdatedByNestedInput
    deletedLeavePolicies?: LeavePolicyUncheckedUpdateManyWithoutDeletedByNestedInput
  }

  export type UserUncheckedUpdateManyWithoutDepartmentInput = {
    id?: StringFieldUpdateOperationsInput | string
    name?: StringFieldUpdateOperationsInput | string
    email?: StringFieldUpdateOperationsInput | string
    password?: StringFieldUpdateOperationsInput | string
    phoneNumber?: NullableStringFieldUpdateOperationsInput | string | null
    role?: EnumUserRoleFieldUpdateOperationsInput | $Enums.UserRole
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    imageUrl?: StringFieldUpdateOperationsInput | string
    imageKey?: StringFieldUpdateOperationsInput | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    changedPassword?: BoolFieldUpdateOperationsInput | boolean
    dob?: DateTimeFieldUpdateOperationsInput | Date | string
    address?: NullableStringFieldUpdateOperationsInput | string | null
    city?: NullableStringFieldUpdateOperationsInput | string | null
    lastLogin?: NullableDateTimeFieldUpdateOperationsInput | Date | string | null
    createdById?: NullableStringFieldUpdateOperationsInput | string | null
    updatedById?: NullableStringFieldUpdateOperationsInput | string | null
    deletedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryCreateManyLeaveInput = {
    id?: string
    oldStatus: $Enums.LeaveStatus
    newStatus: $Enums.LeaveStatus
    statusChange?: Date | string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    userId: string
    changedById?: string | null
  }

  export type NotificationCreateManyLeaveInput = {
    id?: string
    userId: string
    message: string
    createdAt?: Date | string
    updatedAt?: Date | string
    delFlag?: boolean
    isRead?: boolean
  }

  export type LeaveHistoryUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutLeaveHistoriesNestedInput
    changer?: UserUpdateOneWithoutChangedLeaveHistoriesNestedInput
  }

  export type LeaveHistoryUncheckedUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type LeaveHistoryUncheckedUpdateManyWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    oldStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    newStatus?: EnumLeaveStatusFieldUpdateOperationsInput | $Enums.LeaveStatus
    statusChange?: DateTimeFieldUpdateOperationsInput | Date | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    userId?: StringFieldUpdateOperationsInput | string
    changedById?: NullableStringFieldUpdateOperationsInput | string | null
  }

  export type NotificationUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
    user?: UserUpdateOneRequiredWithoutNotificationsNestedInput
  }

  export type NotificationUncheckedUpdateWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
  }

  export type NotificationUncheckedUpdateManyWithoutLeaveInput = {
    id?: StringFieldUpdateOperationsInput | string
    userId?: StringFieldUpdateOperationsInput | string
    message?: StringFieldUpdateOperationsInput | string
    createdAt?: DateTimeFieldUpdateOperationsInput | Date | string
    updatedAt?: DateTimeFieldUpdateOperationsInput | Date | string
    delFlag?: BoolFieldUpdateOperationsInput | boolean
    isRead?: BoolFieldUpdateOperationsInput | boolean
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