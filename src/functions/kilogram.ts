// 第一引数でどの単位を変換するか
// ["mg", "g", "kg", "ポンド", "ml(ミリリットル)", "l(リットル)"]
// 第二引数で変換する値

const kilogram = (unit: number, value: string): number => {
  // 1kgは
  // 1,000,000mg(ミリグラム)
  // 1,000g(グラム)
  // 2.20462262ポンド

  switch (unit){
    // mg
    case 0:
      return Number(value) / 1000000
    // g
    case 1:
      return Number(value) / 1000
    // kg
    case 2:
      return Number(value)
    // ポンド
    case 3:
      return Number(value) / 2.205
    default:
      return 0
  }
}

export default kilogram