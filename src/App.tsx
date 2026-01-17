import './App.css'
import { Button } from './components/Button'
import { Input } from './components/Input';
import { Label } from './components/Label';

function App() {

  return (
    <>
      <div style={{ padding: '24px', display: 'flex', gap: '12px', flexWrap: 'wrap' }}>
        {/* Базовое использование */}
        <Button onClick={() => alert('Clicked!')}>
          Нажми меня
        </Button>

        {/* С вариантами */}
        <Button variant="primary">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="outline">Outline</Button>

        {/* С размерами */}
        <Button size="small">Small</Button>
        <Button size="large">Large</Button>

        {/* С иконками */}
        <Button
          variant="primary"
          startIcon={<span>➕</span>}
        >
          Добавить
        </Button>

        <Button
          variant="success"
          endIcon={<span>✅</span>}
        >
          Сохранить
        </Button>

        {/* Состояния */}
        <Button loading>Загрузка...</Button>
        <Button disabled>Неактивна</Button>

        {/* Full width */}
        <div style={{ width: '300px' }}>
          <Button fullWidth>Полная ширина</Button>
        </div>

        {/* Типы для форм */}
        <form onSubmit={(e) => { e.preventDefault(); alert('Submitted!'); }}>
          <Button type="submit">Отправить форму</Button>
        </form>


        <Label>
          <Input type="text" name='name' inputSize='large' placeholder='input something' />
        </Label>
        <Label htmlFor='input'>Click me</Label>
        <Input id='input' type="text" name='name' inputSize='large' placeholder='input something' />
      </div>
    </>
  )
}

export default App
