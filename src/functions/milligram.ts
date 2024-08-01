// 第一引数でどの単位を変換するか
// ["mg", "g", "kg", "ポンド", "ml(ミリリットル)", "l(リットル)"]
// 第二引数で変換する値

const milligram = (unit: number, value: string): number => {
  // 1mg(ミリグラム)は
  // 0.001g(グラム)
  // 0.000001kg(キログラム)
  // 0.0000022ポンド

  switch (unit){
    // mg
    case 0:
      return Number(value)
    // g
    case 1:
      return Number(value) * 1000
    // kg
    case 2:
      return Number(value) * 1000000
    // ポンド
    case 3:
      return Number(value) * 453600
    default:
      return 0
  }
}

export default milligram