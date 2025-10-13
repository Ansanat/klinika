<template>
  <div class="v-service">
    <div class="service-about">
      <div class="service-header">Стоматолог-ортопед</div>
      <div class="service-text">Стоматолог-ортопед – это врач, который специализируется на восстановлении зубов и зубных рядов с помощью различных видов протезирования. Он занимается изготовлением и установкой съемных и несъемных протезов, коронок, мостовидных протезов, а также других ортопедических конструкций для восстановления функциональности и эстетики зубов.</div>
      <div class="service-text"><b>Когда обращаться к стоматологу-ортопеду?</b></div>
      <div class="service-text" style="text-align: left;">
        • Потеря одного или нескольких зубов;<br>
        • Необходимость восстановления сильно разрушенных зубов;<br>
        • Проблемы с жевательной функцией;<br>
        • Эстетические дефекты зубного ряда;<br>
        • Необходимость замены старых протезов;<br>
        • Планирование комплексного восстановления зубов;<br>
        • Профилактика дальнейшего разрушения зубов.<br>
      </div>
      
      <div class="service-header">Основные услуги</div>
      <div class="price-table">
        <div class="price-line"></div>
        <div v-for="service in main_services" :key="service">
          <div class="price-row">
            <div class="price-name">{{service.name}}</div>
            <div class="price-price">{{service.price}}</div>
          </div>
          <div class="price-line"></div>
        </div>
      </div>

      <div class="service-header">Съемное протезирование</div>
      <div class="price-table">
        <div class="price-line"></div>
        <div v-for="service in removable_prosthetics" :key="service">
          <div class="price-row">
            <div class="price-name">{{service.name}}</div>
            <div class="price-price">{{service.price}}</div>
          </div>
          <div class="price-line"></div>
        </div>
      </div>

      <div class="service-header">Несъемное протезирование</div>
      <div class="price-table">
        <div class="price-line"></div>
        <div v-for="service in fixed_prosthetics" :key="service">
          <div class="price-row">
            <div class="price-name">{{service.name}}</div>
            <div class="price-price">{{service.price}}</div>
          </div>
          <div class="price-line"></div>
        </div>
      </div>

      <div class="service-header">Дополнительные съемные конструкции</div>
      <div class="price-table">
        <div class="price-line"></div>
        <div v-for="service in additional_removable" :key="service">
          <div class="price-row">
            <div class="price-name">{{service.name}}</div>
            <div class="price-price">{{service.price}}</div>
          </div>
          <div class="price-line"></div>
        </div>
      </div>

      <div class="service-header">Минимальная терапевтическая подготовка к протезированию</div>
      <div class="price-table">
        <div class="price-line"></div>
        <div v-for="service in therapeutic_preparation" :key="service">
          <div class="price-row">
            <div class="price-name">{{service.name}}</div>
            <div class="price-price">{{service.price}}</div>
          </div>
          <div class="price-line"></div>
        </div>
      </div>

      <div class="service-header">Техник</div>
      <div class="price-table">
        <div class="price-line"></div>
        <div v-for="service in technician_services" :key="service">
          <div class="price-row">
            <div class="price-name">{{service.name}}</div>
            <div class="price-price">{{service.price}}</div>
          </div>
          <div class="price-line"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
    name: 'v-stomatolog-ortoped',
    props: {
    },
    mounted() {
        const meta = document.createElement("meta");
        meta.name = "description";
        meta.content = "Клиника здоровья стоматолог-ортопед";
        document.body.appendChild(meta);
    },
    data() {
        return {
            main_services: [
                {
                    name: 'Первичный осмотр',
                    price: '1 500 руб'
                },
                {
                    name: 'Повторный прием',
                    price: '500 руб'
                },
                {
                    name: 'Снятие коронок пластмассу штампованных',
                    price: '800 руб'
                },
                {
                    name: 'Снятие коронки металлокерамика; цельно-литая',
                    price: '1 300 руб'
                },
                {
                    name: 'Удаление культевой вкладки штифта',
                    price: '1 300 руб'
                },
                {
                    name: 'Фиксации штампованные пластмассовые коронки на цемент-фосфат',
                    price: '700 руб'
                },
                {
                    name: 'Фиксация на Сиц',
                    price: '1 500 руб'
                },
                {
                    name: 'Фиксация на цемент двойного отверждения',
                    price: '2 000 руб'
                },
                {
                    name: 'Диагностические слепки Альгинат',
                    price: '1 000 руб'
                },
                {
                    name: 'Слепки силикон С',
                    price: '1 500 руб'
                },
                {
                    name: 'Слепки силикон А',
                    price: '2 400 руб'
                },
                {
                    name: 'Определение центральной Окклюзии',
                    price: '1 000 руб'
                },
                {
                    name: 'Индивидуальная ложка + корректировка',
                    price: '2 000+1 000 руб'
                },
                {
                    name: 'Анестезия',
                    price: '600 руб'
                },
                {
                    name: 'Коррекция протеза',
                    price: '1 000 руб'
                }
            ],
            removable_prosthetics: [
                {
                    name: 'Полный съемный',
                    price: '17 000 руб'
                },
                {
                    name: 'Частичный съемный пластинчатый',
                    price: '14 500 руб'
                },
                {
                    name: 'Эстетический протез (акриловая) до 3-х з-в',
                    price: '8 000 руб'
                },
                {
                    name: 'Термопластический эстетический протез (флекси) до 3-х з-в',
                    price: '11 000 руб'
                },
                {
                    name: 'Бюгельный протез Кламерный',
                    price: '41 000 руб'
                },
                {
                    name: 'Бюгельный протез термопластичный',
                    price: '44 000 руб'
                },
                {
                    name: 'Акри фри термопластичный Полный',
                    price: '24 000 руб'
                },
                {
                    name: 'Т-кристал частичный',
                    price: '24 000 руб'
                },
                {
                    name: 'Бюгельный протез на замковой фиксации',
                    price: '44 000 руб'
                },
                {
                    name: 'Полный съемный армированный',
                    price: '29 500 руб'
                },
                {
                    name: 'Полный съемный бюгельный',
                    price: '35 000 руб'
                },
                {
                    name: 'Перебазировка съемного «Rebaise 2»',
                    price: '6 000 руб'
                },
                {
                    name: 'Мягкая перебазировка «Voco»',
                    price: '7 000 руб'
                },
                {
                    name: 'Микропротез бюгельного типа',
                    price: '23 000 руб'
                }
            ],
            fixed_prosthetics: [
                {
                    name: 'Пластмассовая коронка',
                    price: '3 500 руб'
                },
                {
                    name: 'Временная пластмассовая коронка «lux temp»',
                    price: '2 000 руб'
                },
                {
                    name: 'Временная коронка «wax up»',
                    price: '1 500 руб'
                },
                {
                    name: 'Фиксация на временный цемент 1ед.',
                    price: '300 руб'
                },
                {
                    name: 'Металл (композит.коронка)',
                    price: '5 500 руб'
                },
                {
                    name: 'Металлокерамика керамическая коронка',
                    price: '9 000 руб'
                },
                {
                    name: 'Цельно-литая коронка',
                    price: '5 400 руб'
                },
                {
                    name: 'Культевая вкладка сплав',
                    price: '4 000 руб'
                },
                {
                    name: 'Культевая вкладка грунт.',
                    price: '4 500 руб'
                },
                {
                    name: 'Безметалловая керамика «emax»',
                    price: '12 000 руб'
                },
                {
                    name: 'Коронка из диоксид циркония «zio 2»',
                    price: '11 500 руб'
                }
            ],
            additional_removable: [
                {
                    name: 'Система «Rhein 83» аттачмены С 1 аттач.',
                    price: '43 000 руб'
                },
                {
                    name: 'Система «Rhein 83» аттачмены С 2 аттач.',
                    price: '50 000 руб'
                },
                {
                    name: 'Телескопическая конструкция бюгельный + телескоп',
                    price: '38 000+11 000 руб'
                }
            ],
            therapeutic_preparation: [
                {
                    name: 'Пескоструйная обработка чистка от зубных отложений 1 зуб',
                    price: '300 руб'
                },
                {
                    name: 'Лечение кариеса СИЦ',
                    price: '3 000 руб'
                },
                {
                    name: 'Лечение кариеса композит',
                    price: '4 000 руб'
                },
                {
                    name: 'Восстановление культи композит',
                    price: '4 000 руб'
                },
                {
                    name: 'Восстановление культи на стеллволоконном штифте',
                    price: '7 000 руб'
                },
                {
                    name: 'Реставрация скола керамики',
                    price: '6 000 руб'
                }
            ],
            technician_services: [
                {
                    name: 'Моделирование культевой вкладки Прямой способ',
                    price: '500 руб'
                },
                {
                    name: 'Культевая вкладка Непрямой способ',
                    price: '2 000 руб'
                },
                {
                    name: 'Разборная культевая вкладка Непрямой способ',
                    price: '3 000 руб'
                },
                {
                    name: 'Фасетка композитная',
                    price: '3 000 руб'
                },
                {
                    name: 'Штампованная коронка или зуб',
                    price: '1 500 руб'
                },
                {
                    name: 'Частичный съемный',
                    price: '8 000 руб'
                },
                {
                    name: 'Полный съемный',
                    price: '8 000 руб'
                },
                {
                    name: 'Комбинированная коронка',
                    price: '2 000 руб'
                },
                {
                    name: 'Фасетка',
                    price: '2 000 руб'
                }
            ]
        }
    }
}
</script>

<style>
</style>
