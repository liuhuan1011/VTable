# IconButton 组件

一个统一管理带 Tooltip 的图标按钮的 React 组件，基于 Arco Design 开发。

## 功能特点

- ✅ 统一封装 `Tooltip` + `Button` + `Icon` 组合
- ✅ 支持自定义 Button 属性
- ✅ 支持自定义 Tooltip 属性
- ✅ 可选的 Tooltip（不传 tooltip 时只显示按钮）
- ✅ TypeScript 类型支持

## 安装依赖

```bash
npm install @arco-design/web-react
```

## 基本用法

```tsx
import { IconButton } from './IconButton';
import { IconSync } from '@arco-design/web-react/icon';

function App() {
  return (
    <IconButton
      tooltip="刷新"
      icon={<IconSync />}
      onClick={() => console.log('clicked')}
    />
  );
}
```

## API

### IconButtonProps

| 属性 | 说明 | 类型 | 默认值 | 必填 |
|------|------|------|--------|------|
| tooltip | Tooltip 显示的内容 | `string` | - | 否 |
| icon | 图标组件 | `React.ReactNode` | - | 是 |
| buttonProps | Button 组件的其他属性 | `ButtonProps` | - | 否 |
| tooltipProps | Tooltip 组件的其他属性 | `Omit<TooltipProps, 'content'>` | - | 否 |
| onClick | 点击事件 | `() => void` | - | 否 |

## 使用示例

### 1. 基础用法

```tsx
import { Space, Divider } from '@arco-design/web-react';
import { IconSync, IconStar, IconStamp } from '@arco-design/web-react/icon';
import { IconButton } from './IconButton';

function BasicExample() {
  return (
    <Space size='mini'>
      <IconButton tooltip="刷新" icon={<IconSync />} />
      <IconButton tooltip="收藏" icon={<IconStar />} />
      <IconButton tooltip="标记" icon={<IconStamp />} />
    </Space>
  );
}
```

### 2. 自定义 Button 样式

```tsx
<IconButton
  tooltip="删除"
  icon={<IconDelete />}
  buttonProps={{
    type: 'primary',
    status: 'danger',
    size: 'small'
  }}
/>
```

### 3. 自定义 Tooltip 位置和样式

```tsx
<IconButton
  tooltip="提示信息"
  icon={<IconInfo />}
  tooltipProps={{
    position: 'bottom',
    color: '#165DFF'
  }}
/>
```

### 4. 禁用状态

```tsx
<IconButton
  tooltip="禁用按钮"
  icon={<IconLock />}
  buttonProps={{
    disabled: true
  }}
/>
```

### 5. 不显示 Tooltip

```tsx
<IconButton
  icon={<IconMenu />}
  onClick={() => console.log('clicked')}
/>
```

### 6. 数据驱动渲染

```tsx
function DataDrivenExample() {
  const buttons = [
    { id: 'sync', tooltip: '刷新', icon: <IconSync /> },
    { id: 'star', tooltip: '收藏', icon: <IconStar /> },
    { id: 'stamp', tooltip: '标记', icon: <IconStamp /> },
  ];

  return (
    <Space size='mini'>
      {buttons.map(btn => (
        <IconButton
          key={btn.id}
          tooltip={btn.tooltip}
          icon={btn.icon}
          onClick={() => console.log(`${btn.id} clicked`)}
        />
      ))}
    </Space>
  );
}
```

## 优势对比

### 改造前

```tsx
<Space size='mini'>
  <Tooltip content="刷新">
    <Button>
      <IconSync />
    </Button>
  </Tooltip>

  <Tooltip content="收藏">
    <Button>
      <IconStar />
    </Button>
  </Tooltip>
</Space>
```

### 改造后

```tsx
<Space size='mini'>
  <IconButton tooltip="刷新" icon={<IconSync />} />
  <IconButton tooltip="收藏" icon={<IconStar />} />
</Space>
```

**代码行数减少约 60%，可读性显著提升！**

## 扩展建议

### 1. 添加预设类型

可以扩展组件支持预设的按钮类型：

```tsx
export interface IconButtonProps {
  // ... 其他属性
  variant?: 'default' | 'primary' | 'danger' | 'success';
}
```

### 2. 添加加载状态

支持按钮的加载状态：

```tsx
export interface IconButtonProps {
  // ... 其他属性
  loading?: boolean;
}
```

### 3. 支持图标+文字组合

```tsx
export interface IconButtonProps {
  // ... 其他属性
  text?: string;
  iconPosition?: 'left' | 'right';
}
```

## License

MIT
