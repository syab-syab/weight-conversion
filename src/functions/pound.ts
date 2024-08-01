// 第一引数でどの単位を変換するか
// ["mg", "g", "kg", "ポンド", "ml(ミリリットル)", "l(リットル)"]
// 第二引数で変換する値

const pound = (unit: number, value: string): number => {
  // 1ポンドは
  // 453,592.37mg(ミリグラム)
  // 453.59237g(グラム)
  // 0.45359237kg(キログラム)

  switch (unit){
    // mg
    case 0:
      return Number(value) / 453600
    // g
    case 1:
      return Number(value) / 453.6
    // kg
    case 2:
      return Number(value) * 2.205
    // ポンド
    case 3:
      return Number(value)
    default:
      return 0
  }
}

export default pound