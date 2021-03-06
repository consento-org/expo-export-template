// This file has been generated with expo-export@5.0.0, a Sketch plugin.
import { forSize } from '../../util/Placement'
import { Color } from '../Color'
import { LayerPlacement } from '../../util/LayerPlacement'
import { elementHeader } from './elementHeader'
import { elementBottomBar } from './elementBottomBar'
import { Polygon } from '../../util/Polygon'

export const screenSpaceShapes = {
  name: 'screenSpaceShapes',
  place: forSize(375, 812),
  backgroundColor: Color.bg,
  layers: {
    header: new LayerPlacement('header', elementHeader, elementHeader.layers, { y: 0.5, w: 376, h: 117, r: -1, b: 694.5 }),
    bottomBar: new LayerPlacement('bottomBar', elementBottomBar, elementBottomBar.layers, { y: 732, w: 375, h: 80 }),
    star: new Polygon('star', { x: 124, y: 120, w: 160, h: 164, r: 91, b: 528 }, {
      gradient: {
        type: 'linear',
        stops: [
          { color: '#eeeeeeff', position: 0 },
          { color: '#d55454ff', position: 0.488233612804878 },
          { color: '#000000ff', position: 1 }
        ],
        from: { x: 0.5, y: 0 },
        to: { x: 0.5, y: 1 }
      }
    }, {
      fill: {
      gradient: {
        type: 'linear',
        stops: [
          { color: '#00c8ffff', position: 0 },
          { color: '#e000ffff', position: 1 }
        ],
        from: { x: 0.5, y: 0 },
        to: { x: 0.5, y: 1 }
      }
    },
      thickness: 8,
      strokeLinecap: 'butt',
      strokeLinejoin: 'bevel'
    }, []),
    line: new Polygon('line', { x: 65.5, y: 199, w: 139, h: 1, r: 170.5, b: 612 }, null, {
      fill: Color.pink,
      thickness: 20,
      strokeLinecap: 'round',
      strokeLinejoin: 'round'
    }, []),
    oval: new Polygon('oval', { y: 133, w: 139, h: 133, r: 236, b: 546 }, '#ff777763', {
      fill: '#00ff2fff',
      thickness: 6,
      strokeLinecap: 'butt',
      dashPattern: [ 3 ]
    }, []),
    pentagon: new Polygon('pentagon', { x: 64, y: 199.5, w: 150, h: 169, r: 161, b: 443.5 }, '#000000ff', {
      fill: '#ffe000ff',
      thickness: 6,
      strokeLinecap: 'butt',
      dashPattern: [ 3, 10 ]
    }, []),
    line1: new Polygon('line1', { x: 270, y: 199, w: 1, h: 103, r: 104, b: 510 }, null, {
      fill: '#979797ff',
      thickness: 1,
      endArrowhead: 'FilledSquare',
      startArrowhead: 'OpenSquare'
    }, []),
    line2: new Polygon('line2', { x: 283.5, y: 199, w: 1, h: 103, r: 90.5, b: 510 }, null, {
      fill: '#979797ff',
      thickness: 1.25,
      endArrowhead: 'OpenCircle',
      startArrowhead: 'FilledCircle'
    }, [
      { x: 0, y: 2, blur: 4, spread: 0, color: '#00000080' }
    ]),
    line3: new Polygon('line3', { x: 299.5, y: 199, w: 1, h: 103, r: 74.5, b: 510 }, null, {
      fill: '#979797ff',
      thickness: 1.5,
      endArrowhead: 'FilledArrow',
      startArrowhead: 'OpenArrow'
    }, []),
    line4: new Polygon('line4', { x: 313, y: 199, w: 1, h: 103, r: 61, b: 510 }, null, {
      fill: '#979797ff',
      thickness: 2,
      startArrowhead: 'Line'
    }, []),
    rounded: new Polygon('rounded', { y: 314, w: 169.28, h: 118.27, r: 205.71, b: 379.72 }, '#d8d8d8ff', {
      fill: '#979797ff',
      thickness: 5,
      strokeLinecap: 'butt',
      radius: 41
    }, [])
  }
}
