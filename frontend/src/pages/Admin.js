import React from 'react';

export default function Admin(){
    return (
        <div className="phone_workflow">
            <div className="navbar navbar-between">
                <div className="navbar__left backbtn-control">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M15 19.9201L8.47997 13.4001C7.70997 12.6301 7.70997 11.3701 8.47997 10.6001L15 4.08008"
                              stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>
                <div className="navbar__title">
                    Информация по партнеру
                </div>
                <div className="navbar__right info-control">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5 22 22 17.5 22 12C22 6.5 17.5 2 12 2C6.5 2 2 6.5 2 12C2 17.5 6.5 22 12 22Z"
                              stroke="#292D32" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                        <path d="M12 8V13" stroke="#292D32" stroke-width="1.5" stroke-linecap="round"
                              stroke-linejoin="round"/>
                        <path d="M11.9945 16H12.0035" stroke="#292D32" stroke-width="2" stroke-linecap="round"
                              stroke-linejoin="round"/>
                    </svg>
                </div>
            </div>
            <div className="container">
                <div className="details phone_workspace">
                    <div className="details-card">
                        <div className="details-card__header">
                            <div className="details-card__title">
                                Отель Делавре
                            </div>
                            <div className="details-card__more">
                                <svg width="20" height="20" viewBox="0 0 20 20" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path
                                        d="M3.25 10.0002C3.25 9.49771 3.66421 9.0835 4.16667 9.0835C4.66912 9.0835 5.08333 9.49771 5.08333 10.0002C5.08333 10.5026 4.66912 10.9168 4.16667 10.9168C3.66421 10.9168 3.25 10.5026 3.25 10.0002Z"
                                        stroke="#292D32" stroke-width="1.5"/>
                                    <path
                                        d="M14.9167 10.0002C14.9167 9.49771 15.331 9.0835 15.8334 9.0835C16.3359 9.0835 16.7501 9.49771 16.7501 10.0002C16.7501 10.5026 16.3359 10.9168 15.8334 10.9168C15.331 10.9168 14.9167 10.5026 14.9167 10.0002Z"
                                        stroke="#292D32" stroke-width="1.5"/>
                                    <path
                                        d="M9.08325 10.0002C9.08325 9.49771 9.49747 9.0835 9.99992 9.0835C10.5024 9.0835 10.9166 9.49771 10.9166 10.0002C10.9166 10.5026 10.5024 10.9168 9.99992 10.9168C9.49747 10.9168 9.08325 10.5026 9.08325 10.0002Z"
                                        stroke="#292D32" stroke-width="1.5"/>
                                </svg>
                            </div>
                        </div>
                        <div className="details-card__body">
                            <div className="card-item__img"
                                 style={{background:"url('img/hotelimg.png') center center/cover no-repeat;"}}>
                            </div>
                            <div className="card-item__info">
                                <div className="card-item__dopinfo">
                                    <div className="card-item__rate">
                                    <span>
                                        <img src="img/star.png" alt=""/>
                                    </span>
                                        4.2
                                    </div>
                                    <div className="card-item__rooms">Комнат: <span className="roomsnum">1</span></div>
                                </div>
                                <div className="card-item__address">
                                <span>
                                    <svg width="15" height="24" viewBox="0 0 24 24" fill="none"
                                         xmlns="http://www.w3.org/2000/svg">
                                        <path
                                            d="M11.9999 13.4299C13.723 13.4299 15.1199 12.0331 15.1199 10.3099C15.1199 8.58681 13.723 7.18994 11.9999 7.18994C10.2768 7.18994 8.87988 8.58681 8.87988 10.3099C8.87988 12.0331 10.2768 13.4299 11.9999 13.4299Z"
                                            stroke="#292D32" stroke-width="1.5"/>
                                        <path
                                            d="M3.61995 8.49C5.58995 -0.169998 18.42 -0.159997 20.38 8.5C21.53 13.58 18.37 17.88 15.6 20.54C13.59 22.48 10.41 22.48 8.38995 20.54C5.62995 17.88 2.46995 13.57 3.61995 8.49Z"
                                            stroke="#292D32" stroke-width="1.5"/>
                                    </svg>
                                </span>
                                    Адрес отеля
                                </div>
                                <div className="card-item__descr">
                                    Описание комнаты. Описание комнаты Описание комнаты
                                </div>
                                <div className="card-item__price">
                                    10 000 Т / ночь
                                </div>
                            </div>
                        </div>
                        <div className="details-card__footer">
                        <span>Зарина <br/>
                            +7 730 376 1222</span>
                        </div>
                    </div>

                    <div className="uslug-item " htmlFor="uslugs1">
                        <div className="uslug-item__block">
                            <div className="uslug-item__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 22H22" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path d="M19.0001 7L18.9701 4H14.5701" stroke="#292D32" stroke-width="1.5"
                                          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="uslug-item__info">
                                <div className="uslug-item__caption">Клиентов</div>
                                <div className="uslug-item__address">Количество гостей от нас</div>
                            </div>
                        </div>
                        <div className="uslug-item__block">
                            <div className="uslug-item__stats">
                                234 384
                            </div>
                        </div>
                    </div>
                    <div className="uslug-item " htmlFor="uslugs1">
                        <div className="uslug-item__block">
                            <div className="uslug-item__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 22H22" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path d="M19.0001 7L18.9701 4H14.5701" stroke="#292D32" stroke-width="1.5"
                                          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="uslug-item__info">
                                <div className="uslug-item__caption">Клиентов</div>
                                <div className="uslug-item__address">Количество гостей от нас</div>
                            </div>
                        </div>
                        <div className="uslug-item__block">
                            <div className="uslug-item__stats">
                                234 384
                            </div>
                        </div>
                    </div>
                    <div className="uslug-item " htmlFor="uslugs1">
                        <div className="uslug-item__block">
                            <div className="uslug-item__icon">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                     xmlns="http://www.w3.org/2000/svg">
                                    <path d="M2 22H22" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                          stroke-linecap="round" stroke-linejoin="round"/>
                                    <path
                                        d="M2.94995 22L2.99995 9.96999C2.99995 9.35999 3.28995 8.78004 3.76995 8.40004L10.77 2.95003C11.49 2.39003 12.4999 2.39003 13.2299 2.95003L20.23 8.39003C20.72 8.77003 21 9.34999 21 9.96999V22"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M13 17H11C10.17 17 9.5 17.67 9.5 18.5V22H14.5V18.5C14.5 17.67 13.83 17 13 17Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M9.5 13.75H7.5C6.95 13.75 6.5 13.3 6.5 12.75V11.25C6.5 10.7 6.95 10.25 7.5 10.25H9.5C10.05 10.25 10.5 10.7 10.5 11.25V12.75C10.5 13.3 10.05 13.75 9.5 13.75Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path
                                        d="M16.5 13.75H14.5C13.95 13.75 13.5 13.3 13.5 12.75V11.25C13.5 10.7 13.95 10.25 14.5 10.25H16.5C17.05 10.25 17.5 10.7 17.5 11.25V12.75C17.5 13.3 17.05 13.75 16.5 13.75Z"
                                        stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                        stroke-linejoin="round"/>
                                    <path d="M19.0001 7L18.9701 4H14.5701" stroke="#292D32" stroke-width="1.5"
                                          stroke-miterlimit="10" stroke-linecap="round" stroke-linejoin="round"/>
                                </svg>
                            </div>
                            <div className="uslug-item__info">
                                <div className="uslug-item__caption">Клиентов</div>
                                <div className="uslug-item__address">Количество гостей от нас</div>
                            </div>
                        </div>
                        <div className="uslug-item__block">
                            <div className="uslug-item__stats">
                                234 384
                            </div>
                        </div>
                    </div>
                    <div className="details__report " htmlFor="uslugs1">
                        <div className="btn btn-main btn-report">
                            Скачать отчет
                        </div>
                    </div>

                </div>
                <div className="makeprice">
                    <div className="input-form">
                        <label htmlFor="people_quantity">Задать цену за общий период</label>
                        <input type="text" name="people_quantity" className="input input-choice"
                               placeholder="Введите значение"/>
                    </div>
                    <div className="makeprice__controls">
                        <div className="btn btn-secondary btn-prev mr-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699" stroke="#292D32"
                                      stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Назад</span>
                        </div>
                        <div className="btn btn-main btn-next">
                            <span>Далее</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699" stroke="#ffff"
                                      stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="create-service">
                    <div className="title">
                        Заполните информацию о новой услуге
                    </div>
                    <div className="create-service__from">
                        <div className="input-form">
                            <label htmlFor="people_quantity">Название услуги</label>
                            <input type="text" name="people_quantity" className="input input-choice"
                                   placeholder="Введите значение"/>
                        </div>
                        <div className="input-form">
                            <label htmlFor="people_quantity">Описание услуги</label>
                            <textarea
                                type="text"
                                name="people_quantity"
                                className="input input-choice"
                                placeholder="Введите значение"
                                rows="3"></textarea>
                        </div>
                        <div className="input-form">
                            <label htmlFor="people_quantity">Имя партнера</label>
                            <input type="text" name="people_quantity" className="input input-choice"
                                   placeholder="Введите значение"/>
                        </div>
                        <div className="input-form">
                            <label htmlFor="people_quantity">Номер пратнера</label>
                            <input type="text" name="people_quantity" className="input input-choice"
                                   placeholder="Введите значение"/>
                        </div>
                        <div className="input-form">
                            <label htmlFor="people_quantity">Задать цену за общий период</label>
                            <input type="text" name="people_quantity" className="input input-choice"
                                   placeholder="Введите значение"/>
                        </div>
                    </div>
                    <div className="makeprice__controls">
                        <div className="btn btn-secondary btn-prev mr-5">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699" stroke="#292D32"
                                      stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="#292D32" stroke-width="1.5" stroke-miterlimit="10"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                            <span>Назад</span>
                        </div>
                        <div className="btn btn-main btn-next">
                            <span>Далее</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699" stroke="#ffff"
                                      stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>

                <div className="success">
                    <div className="title">
                        Услуга успешно была отправлена <br/> клиенту!
                    </div>
                    <div className="success__btn">
                        <div className="btn btn-main btn-next">
                            <span>Обратно в чат</span>
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"
                                 xmlns="http://www.w3.org/2000/svg">
                                <path d="M14.4299 5.92993L20.4999 11.9999L14.4299 18.0699" stroke="#ffff"
                                      stroke-width="1.5" stroke-miterlimit="10" stroke-linecap="round"
                                      stroke-linejoin="round"/>
                                <path d="M3.5 12H20.33" stroke="#ffff" stroke-width="1.5" stroke-miterlimit="10"
                                      stroke-linecap="round" stroke-linejoin="round"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
}