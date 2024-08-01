// 第一引数でどの単位を変換するか
// ["mg", "g", "kg", "ポンド", "ml(ミリリットル)", "l(リットル)"]
// 第二引数で変換する値

const gram = (unit: number, value: string): number => {
  // 1g(グラム)は
  // 1,000mg(ミリグラム)
  // 0.001kg(キログラム)
  // 0.00220462ポンド

  switch (unit){
    // mg
    case 0:
      return Number(value) / 1000
    // g
    case 1:
      return Number(value)
    // kg
    case 2:
      return Number(value) * 1000
    // ポンド
    case 3:
      return Number(value) * 453.6
    default:
      return 0
  }
}

export default gram