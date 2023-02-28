export const Flex = ({ children, dir, wrap, justify, gap, gapX, gapY, align }) => {
    return (
        <div className={`flex ${dir ? Directions?.find(e => e?.dir === dir)?.class : ""} ${wrap ? Wraps?.find(e => e?.wrap === wrap)?.class : Wraps?.find(e => e?.wrap === "wrap")?.class} ${justify ? Justify?.find(e => e?.item === justify)?.class : Justify?.find(e => e?.item === "start")?.class} ${align ? Align?.find(e => e?.item === align)?.class : Align?.find(e => e?.item === "start")?.class} ${gap ? Gap?.find(e => e?.gap === gap)?.class : ""} ${gapX ? Gap?.find(e => e?.gap === gapX)?.classX : ""} ${gapY ? Gap?.find(e => e?.gap === gapY)?.classY : ""} transition duration-500 ease-in-out`}>
            {children}
        </div>
    );
}
const Directions = [
    {
        "dir": "row",
        "class": "flex-row"
    },
    {
        "dir": "col",
        "class": "flex-col"
    },
    {
        "dir": "row-reverse",
        "class": "flex-row-reverse"
    },
    {
        "dir": "col-reverse",
        "class": "flex-col-reverse"
    },
]
const Wraps = [
    {
        "wrap": "wrap",
        "class": "flex-wrap"
    },
    {
        "wrap": "nowrap",
        "class": "flex-nowrap"
    },
    {
        "wrap": "wrap-reverse",
        "class": "flex-wrap-reverse"
    }
]
const Justify = [
    {
        "item": "start",
        "class": "justify-start"
    },
    {
        "item": "center",
        "class": "justify-center"
    },
    {
        "item": "end",
        "class": "justify-end"
    },
    {
        "item": "between",
        "class": "justify-between"
    },
    {
        "item": "around",
        "class": "justify-around"
    },
    {
        "item": "evenly",
        "class": "justify-evenly"
    }
]
const Gap = [
    {
        "gap": "0",
        "class": "gap-0",
        "classX": "gap-x-0",
        "classY": "gap-y-0"
    },
    {
        "gap": "0.5",
        "class": "gap-0.5",
        "classX": "gap-x-0.5",
        "classY": "gap-y-0.5"
    },
    {
        "gap": "1",
        "class": "gap-1",
        "classX": "gap-x-1",
        "classY": "gap-y-1"
    },
    {
        "gap": "1.5",
        "class": "gap-1.5",
        "classX": "gap-x-1.5",
        "classY": "gap-y-1.5"
    },
    {
        "gap": "2",
        "class": "gap-2",
        "classX": "gap-x-2",
        "classY": "gap-y-2"
    },
    {
        "gap": "2.5",
        "class": "gap-2.5",
        "classX": "gap-x-2.5",
        "classY": "gap-y-2.5"
    },
    {
        "gap": "3",
        "class": "gap-3",
        "classX": "gap-x-3",
        "classY": "gap-y-3"
    },
    {
        "gap": "3.5",
        "class": "gap-3.5",
        "classX": "gap-x-3.5",
        "classY": "gap-y-3.5"
    },
    {
        "gap": "4",
        "class": "gap-4",
        "classX": "gap-x-4",
        "classY": "gap-y-4"
    },
    {
        "gap": "5",
        "class": "gap-5",
        "classX": "gap-x-5"
    },
    {
        "gap": "6",
        "class": "gap-6",
        "classX": "gap-x-5",
        "classY": "gap-y-5"
    },
    {
        "gap": "7",
        "class": "gap-7",
        "classX": "gap-x-7",
        "classY": "gap-y-7"
    },
    {
        "gap": "8",
        "class": "gap-8",
        "classX": "gap-x-8",
        "classY": "gap-y-8"
    },
    {
        "gap": "9",
        "class": "gap-9",
        "classX": "gap-x-9",
        "classY": "gap-y-9"
    },
    {
        "gap": "10",
        "class": "gap-10",
        "classX": "gap-x-10",
        "classY": "gap-y-10"
    },
]
const Align = [
    {
        "item": "start",
        "class": "items-start"
    },
    {
        "item": "center",
        "class": "items-center"
    },
    {
        "item": "end",
        "class": "items-end"
    },
    {
        "item": "baseline",
        "class": "items-baseline"
    },
    {
        "item": "stretch",
        "class": "items-stretch"
    }
]