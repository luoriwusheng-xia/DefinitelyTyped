declare namespace AMap {
    namespace Overlay {
        interface EventMap<I> {
            touchstart: MapsEvent<"touchstart", I>;
            touchmove: MapsEvent<"touchmove", I>;
            touchend: MapsEvent<"touchend", I>;
            click: MapsEvent<"click", I>;
            rightclick: MapsEvent<"rightclick", I>;
            dblclick: MapsEvent<"dblclick", I>;
            mousemove: MapsEvent<"mousemove", I>;
            mouseover: MapsEvent<"mouseover", I>;
            mousedown: MapsEvent<"mousedown", I>;
            mouseup: MapsEvent<"mouseup", I>;
        }
        interface Options<ExtraData = any> {
            /**
             * 所属地图
             */
            map?: Map | undefined;
            /**
             * 鼠标悬停时的鼠标样式
             */
            cursor?: string | undefined;
            /**
             * 自定义数据
             */
            extData?: ExtraData | undefined;
            /**
             * 事件是否穿透到地图
             */
            bubble?: boolean | undefined;
            /**
             * 是否支持点击
             */
            clickable?: boolean | undefined;
            /**
             * 是否支持拖拽
             */
            draggable?: boolean | undefined;
        }
    }
    abstract class Overlay<ExtraData = any> extends EventEmitter {
        constructor(options?: Overlay.Options);
        /**
         * 显示覆盖物
         */
        show(): void;
        /**
         * 隐藏覆盖物
         */
        hide(): void;
        /**
         * 获取所属地图
         */
        getMap(): Map | null | undefined;
        /**
         * 设置所属地图
         * @param map 地图
         */
        setMap(map: Map | null): void;
        /**
         * 设置自定义数据
         * @param extData 自定义数据
         */
        setExtData(extData: ExtraData): void;
        /**
         * 获取自定义数据
         */
        getExtData(): ExtraData | {};

        // internal
        setHeight(height?: number | string): void;
        /**
         * 获取 Marker 离地高度 （此方法适用于 JSAPI v2.1Beta 及以上版本）
         */
        getHeight(): number | string;
    }
}
