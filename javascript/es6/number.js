/**
 * Created by cyk on 15-4-22.
 */

console.log(

    // Number.isFinite 只对数值有效, 其他类型一律返回 false
     isFinite(30)
    ,isFinite("30")        // 会自动进行类型转换
    ,Number.isFinite("30") // 只对数值有效, 不会进行类型转换

    // Number.isNaN 只对数值有效, 其他类型一律返回 false
    ,isNaN(NaN)    // true
    ,isNaN("NaN")  // true
    ,Number.isNaN(NaN)
    ,Number.isNaN("NaN") // false
);