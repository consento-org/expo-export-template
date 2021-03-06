// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementHeader } from './elementHeader'
import { elementBottomBar } from './elementBottomBar'
import { TextBox } from '../../util/TextBox'
import { TextStyles } from '../TextStyles'

export const screenSpaceLongText = {
  name: 'screenSpaceLongText',
  place: forSize(375, 812),
  backgroundColor: Color.bg,
  layers: {
    header: new LayerPlacement('header', elementHeader, elementHeader.layers, { y: 0.5, w: 376, h: 117, r: -1, b: 694.5 }),
    bottomBar: new LayerPlacement('bottomBar', elementBottomBar, elementBottomBar.layers, { y: 732, w: 375, h: 80 }),
    textEn: new TextBox('textEn', 'Long text can be made scrollable, and we can examine the detail properties depending on the content.\n\nFor example: will the text engine break words automatically? Will the line-height match both on iOS on Android? How will the amount of text affect the speed of the page? Will it respect the padding on the left and right side? And most importantly: Does it look good?\n\nWith this app we should be able to show most of the things that make expo-export work well in practice.', TextStyles.EnLongText, { x: 10, y: 132, w: 354, h: 592, r: 11, b: 88 }),
    textJa: new TextBox('textJa', '長いテキストをスクロール可能にすることができ、内容に応じて詳細なプロパティを調べることができます。\n\n例：テキストエンジンは自動的に単語を区切るのか？行間の高さはiOSでもAndroidでも一致するか？テキストの量はページの速度にどのように影響するか？左右のパディングを尊重するか？そして最も重要なこと。見栄えはどうか？\n\nこのアプリを使えば、エキスポをうまく機能させるためのほとんどのことを実際に見せることができるはずです。', TextStyles.JaLongText, { x: 10, y: 125, w: 354, h: 592, r: 11, b: 95 })
  }
}
