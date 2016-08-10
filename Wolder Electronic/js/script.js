// Определяем переменную map
var map;

// Функция initMap которая отрисует карту на странице
function initMap() {

    // В переменной map создаем объект карты GoogleMaps и вешаем эту переменную на <div id="map"></div>
    map = new google.maps.Map(document.getElementById('map'), {
        // При создании объекта карты необходимо указать его свойства
        // center - определяем точку на которой карта будет центрироваться
        center: {lat: 49.993478, lng: 36.239620},
        // zoom - определяет масштаб. 0 - видно всю платнеу. 18 - видно дома и улицы города.
        zoom: 17,

        // Добавляем свои стили для отображения карты
                styles: [{"featureType":"all","elementType":"geometry","stylers":[{"color":"#e5b563"},{"saturation":"36"},{"lightness":"-21"},{"gamma":"2.03"},{"weight":"0.90"}]},{"featureType":"all","elementType":"geometry.fill","stylers":[{"saturation":"-12"},{"visibility":"on"},{"color":"#e4b72f"}]},{"featureType":"all","elementType":"geometry.stroke","stylers":[{"saturation":"5"},{"lightness":"-16"}]},{"featureType":"all","elementType":"labels.text.fill","stylers":[{"gamma":0.01},{"lightness":20},{"saturation":"-100"},{"visibility":"on"},{"hue":"#ff0000"},{"weight":"0.01"}]},{"featureType":"all","elementType":"labels.text.stroke","stylers":[{"saturation":-31},{"lightness":-33},{"weight":2},{"gamma":0.8},{"visibility":"off"}]},{"featureType":"all","elementType":"labels.icon","stylers":[{"visibility":"off"}]},{"featureType":"administrative.country","elementType":"geometry.stroke","stylers":[{"saturation":"7"},{"lightness":"2"}]},{"featureType":"administrative.country","elementType":"labels.text","stylers":[{"visibility":"on"}]},{"featureType":"landscape","elementType":"geometry","stylers":[{"lightness":30},{"saturation":30}]},{"featureType":"poi","elementType":"geometry","stylers":[{"saturation":20}]},{"featureType":"poi.park","elementType":"geometry","stylers":[{"lightness":20},{"saturation":-20}]},{"featureType":"road","elementType":"geometry","stylers":[{"lightness":10},{"saturation":-30}]},{"featureType":"road","elementType":"geometry.stroke","stylers":[{"saturation":25},{"lightness":25}]},{"featureType":"water","elementType":"all","stylers":[{"lightness":-20}]}]





});

    // Создаем маркер на карте
var marker = new google.maps.Marker({

    // Определяем позицию маркера
    position: {lat: 49.993478, lng: 36.239620},

    // Указываем на какой карте он должен появится. (На странице ведь может быть больше одной карты)
    map: map,

    // Пишем название маркера - появится если навести на него курсор и немного подождать
    title: 'Spalah - coworking ',

    // Укажем свою иконку для маркера
    //icon: 'marker_icon.png'
});

}



