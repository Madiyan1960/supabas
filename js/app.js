import { supabase } from './supabase.js'

async function loadProducts() {
  const { data, error } = await supabase.from('products').select('*')
  const container = document.getElementById('products')
  if (error) {
    container.innerHTML = 'Ошибка загрузки товаров'
    return
  }

  container.innerHTML = ''
  data.forEach(p => {
    const div = document.createElement('div')
    div.className = 'product'
    div.innerHTML = `<strong>${p.name}</strong><br>Цена: ${p.price}`
    container.appendChild(div)
  })
}

document.getElementById('submitOrder').addEventListener('click', async () => {
  const name = document.getElementById('name').value
  const phone = document.getElementById('phone').value
  const order = document.getElementById('order').value

  if (!name || !phone || !order) {
    alert('Заполните все поля')
    return
  }

  const { error } = await supabase.from('orders').insert([
    { name, phone, products: order }
  ])

  document.getElementById('result').textContent = error ? 'Ошибка' : 'Заказ отправлен!'
})

loadProducts()

