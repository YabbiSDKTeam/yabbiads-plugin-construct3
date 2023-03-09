# YabbiAds Construct3 Addon

Версия релиза **1.0.0** | Дата релиза **9.03.2023**

> Минимальные требования:
>
>* Используйте Android API level 19 (Android OS 4.4) и выше.
>* iOS 12.0 или выше.
>* Используйте XCode 13 и выше.

## Демо приложение
Используйте наше [демо приложение](https://github.com/YabbiSDKTeam/yabbiads-plugin-construct3/tree/master/example) в качестве примера. 

## Установка SDK

Установите плагин в ваш проект. Для этого скачайте аддон по [ссылке](https://www.construct.net/make-games/addons/942/yabbiads/1-0-0-1014/yabbiads-1.0.0-stable.c3addon).

Далее нужно добавить аддон в редакторе. Перейдите в `Меню` -> `Вид` -> `Менеджер дополнений`. В открывшемся окне нажмите `Установка нового дополнения`. Выберите скачанный аддон.

После перезагрузки редактора аддон готов к использованию.

Перейдите в макет вашего проекта, откройте меню по нажатию правой кнопки мыши. Выберите `Вставить новый объект`. В открывшемся списке выберите `YabbiAds`.

Теперь функционал аддона доступен в вашем проекте.

## Инициализация SDK
Мы рекомендуем вызывать инициализацию SDK в событии `Система` -> `При запуске макета`.
Для этого используйте действие `Initialize`.

Действие `Initialize` принимает на вход 3 параметра.

* `Publisher ID` - идентификатор издателя. Обязателен для заполнения.
* `Interstitial ID` - идентификатор полноэкранной рекламы. Может оставаться пустой строкой.
* `Rewarded ID` - идентификатор полноэкранной рекламы с вознаграждением. Может оставаться пустой строкой.

1. Замените `Publisher ID` на идентификатор издателя из [личного кабинета](https://mobileadx.ru/settings).
2. Замените `Interstitial ID` на ключ соответствующий баннерной рекламе из [личного кабинета](https://mobileadx.ru).
3. Замените `Rewarded ID` на ключ соответствующий видео с вознаграждением из [личного кабинета](https://mobileadx.ru).

Если вы не используете один из типов рекламы, вставьте вместо его идентификатора пустую строку `""`.

## GDPR и CCPA
**GDPR** - Это набор правил, призванных дать гражданам ЕС больше контроля над своими личными данными. Любые издатели приложений, которые созданы в ЕС или имеющие пользователей, базирующихся в Европе, обязаны соблюдать GDPR или рискуют столкнуться с большими штрафами

Для того чтобы **YabbiAds** и наши поставщики рекламы могли предоставлять рекламу, которая наиболее релевантна для ваших пользователей, как издателю мобильных приложений, вам необходимо получить явное согласие пользователей в регионах, попадающих под действие законов GDPR и CCPA.

Для предоставления согласия пользователя на сбор персональных данных используйте действие `SetUserConsent`.

Если пользователь дал согласие, установите флаг `Разрешение` в значение `Разрешил`.


## Управление рекламой

### Типы рекламы

Вы можете подключить 2 типа рекламы в свое приложение.

* Полноэкранная реклама - баннер на весь экран, который можно закрыть через несколько секунд.
* Полноэкранная реклама с вознаграждением - видео, после просмотра которого пользователю можно выдать награду.


### Загрузка рекламы

Для загрузки рекламы используйте код представленный ниже.


* Для загрузки полноэкранной реклам используйте действие `LoadInterstitialAd`.
* Для загрузки полноэкранной рекламы с вознаграждением используйте действие `LoadRewardedAd`.

### Показ рекламы

* Для показа полноэкранной реклам используйте действие `ShowInterstitialAd`.
* Для показа полноэкранной рекламы с вознаграждением используйте действие `ShowRewardedAd`.


Перед показом мы рекомендуем проверять что реклама загружена и готова к просмотру.

* Для полноэкранной рекламы используйте условие `IsInterstitialAdReady`.
* Для полноэкранной рекламы с вознаграждением используйте условие `IsRewardedAdReady`.
    
### Уничтожение непоказанной рекламы

Если рекламу больше нет необходимости хранить в памяти, удалите ее.

* Для удаления полноэкранной реклам используйте действие `DestroyInterstitialAd`.
* Для удаления полноэкранной рекламы с вознаграждением используйте действие `DestroyRewardedAd`.
    
### Отслеживание статуса рекламы.

Для отслеживания статуса рекламы необходимо добавить условия, на каждый из доступных статусов.

* Для полноэкранной рекламы.
    * `OnInterstitialLoaded` - вызывается когда реклама загружена и готова к показу.
    * `OnInterstitialLoadFailed` - вызывается если в загрузке рекламы произошла ошибка.
    * `OnInterstitialShown` - вызывается когда начался показ рекламы.
    * `OnInterstitialShowFailed` - вызывается если при показе рекламы произошла ошибка.
    * `OnInterstitialClosed` - вызывается когда реклама была закрыта пользователем.

* Для полноэкранной рекламы с вознаграждением.
    * `OnRewardedLoaded` - вызывается когда реклама загружена и готова к показу.
    * `OnRewardedLoadFailed` - вызывается если в загрузке рекламы произошла ошибка.
    * `OnRewardedShown` - вызывается когда начался показ рекламы.
    * `OnRewardedShowFailed` - вызывается если при показе рекламы произошла ошибка.
    * `OnRewardedClosed` - вызывается когда реклама была закрыта пользователем.
    * `OnRewardedFinished` - вызывается когда реклама закончилось.

## Подготовьте ваше приложение к публикации

В соответствии с [политикой Google](https://support.google.com/googleplay/android-developer/answer/9857753?hl=ru), разрешения на определения местоположения могут запрашиваться только для функций, имеющих отношение к основному функционалу приложения. Вы не можете запрашивать доступ к данным о местоположении исключительно с целью предоставления рекламы или аналитики.



**Если вы не используете местоположения как одну из основных функций вашего приложения:**
* Удалите следующий код из AndroidManifest.xml вашего приложения:
```xml
<uses-permission android:name="android.permission.ACCESS_COARSE_LOCATION" />
<uses-permission android:name="android.permission.ACCESS_FINE_LOCATION" />
```
* Обновите приложение в Google Play. В процессе публикации убедитесь, что в Google Play Console нет предупреждений о наличии разрешения местоположения.

**Если ваше приложение использует местоположение, как одну из основных функций:**
* Заполните форму декларации разрешений на местоположение в [Google Play Console](https://play.google.com/console/u/0/developers/app/app-content/permission-declarations). Подробнее о форме декларации вы можете прочитать [здесь](https://support.google.com/googleplay/android-developer/answer/9799150?hl=en#zippy=%2Cwhere-do-i-find-the-declaration).
* Обновите приложение в Google Play. В процессе публикации убедитесь, что в Google Play Console нет предупреждений о наличии разрешения местоположения.

## Возможные ошибки

### iOS

* `WKJavaScriptController` does not specify a Swift version and none of the targets.
    
    Для устранения ошибки введите в терминале команду `cordova prepare`. Затем перейдите в папку `platforms/ios`. И сделайте `pod install`.


*  Ошибка при запуске `Symbol not found`:

    Перейдите в свой **Pods** таргет. Выберите из списка **WKJavaScriptController**. Перейдите во вкладку **Build Settings** и найдите в поиске параметр **Build Libraries for Distribution**. Установите значение **Yes**.  
    
    Если другие ваши зависимости не конфликтуют с параметром **Build Libraries for Distribution** вы можете добавить следующий код в свой **Podfile** проекта:
    
    ```ruby
    post_install do |installer|
        installer.pods_project.targets.each do |target|
            target.build_configurations.each do |config|
                config.build_settings['BUILD_LIBRARY_FOR_DISTRIBUTION'] = 'YES'
            end
        end
    end
    ```
    Это выставит значение **Yes** у параметра **Build Libraries for Distribution** для всех ваших pod-ов.