const ConstDefaultColorCode = "#DC00C7";

const HexToRGB = (hex: string) => {
  const result = /^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(hex);
  return result ? {
    r: parseInt(result[1], 16) / 255,
    g: parseInt(result[2], 16) / 255,
    b: parseInt(result[3], 16) / 255
  } : null;
}

async function main(): Promise<string | undefined> {
    if (!figma.currentPage.selectedTextRange) {
        return "컬러를 입힐 텍스트를 선택해주세요";
    }

    const selectedTextRange = figma.currentPage.selectedTextRange;
    selectedTextRange.node.setRangeFills(selectedTextRange.start, selectedTextRange.end, [{
        type: 'SOLID',
        color: HexToRGB(ConstDefaultColorCode),
    }]);

    return ConstDefaultColorCode + " 컬러 적용 완료";
}

main().then((message: string | undefined) => {
  figma.closePlugin(message)
})
