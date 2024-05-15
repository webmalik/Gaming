// Підключення функціоналу "Чертоги Фрілансера"
import { isMobile } from './functions.js';
// Підключення списку активних модулів
import { flsModules } from './modules.js';

import SplitType from 'split-type';
import gsap, { wrap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger.js';
gsap.registerPlugin(ScrollTrigger);

function initGaming() {
    preloader();
    headerMenu();
    serviceAnimation();
    animateProducts();
    processAnimation();
    partnersAnimation();
    animateTextAndBackground();
    hoverLink();
    formUp();
}

function headerMenu() {
    let splitText;
    function runSplit() {
        splitText = new SplitType('.header__list li a', {
            types: 'words, chars',
        });
    }
    runSplit();

    let windowWidth = window.innerWidth;
    window.addEventListener('resize', function () {
        if (windowWidth !== window.innerWidth) {
            windowWidth = window.innerWidth;
            splitText.revert();
            runSplit();
        }
    });

    const staggerLinks = document.querySelectorAll('.header__list li a');
    staggerLinks.forEach((link) => {
        const letters = link.querySelectorAll('.header__list li a .char');
        link.addEventListener('mouseenter', function () {
            gsap.to(letters, {
                yPercent: -100,
                duration: 0.5,
                ease: 'power4.inOut',
                stagger: { each: 0.02, from: 'start' },
                overwrite: true,
            });
        });
        link.addEventListener('mouseleave', function () {
            gsap.to(letters, {
                yPercent: 0,
                duration: 0.5,
                ease: 'power4.inOut',
                stagger: { each: 0.01 },
            });
        });
    });
}

function serviceAnimation() {
    const tl = gsap.timeline();

    if (window.innerWidth < 992) {
        tl.fromTo('.service1', { y: '0', rotate: 0 }, { y: '0%', rotate: 0, duration: 20 }); // Змінено тривалість на 2 секунди
        tl.fromTo('.service2', { y: '100%', rotate: 30 }, { y: '-108%', rotate: 0, duration: 20 }); // Змінено тривалість на 2 секунди
        tl.fromTo('.service3', { y: '200%', rotate: 60 }, { y: '-170%', rotate: 0, duration: 20 }); // Змінено тривалість на 2 секунди
    } else {
        tl.fromTo('.service1', { y: '0', rotate: 0 }, { y: '0%', rotate: 0, duration: 20 }); // Змінено тривалість на 2 секунди
        tl.fromTo('.service2', { y: '100%', rotate: 30 }, { y: '-102%', rotate: 0, duration: 20 }); // Змінено тривалість на 2 секунди
        tl.fromTo('.service3', { y: '200%', rotate: 60 }, { y: '-178%', rotate: 0, duration: 20 }); // Змінено тривалість на 2 секунди
    }

    if (window.innerWidth < 992) {
        ScrollTrigger.create({
            animation: tl,
            trigger: '.service__inner',
            start: 'top 60px',
            end: '1200px',
            scrub: 3,
            pin: true,
            pinSpacing: false,
        });
    } else {
        ScrollTrigger.create({
            animation: tl,
            trigger: '.service__inner',
            start: 'top -50px',
            end: '1200px',
            scrub: 3,
            pin: true,
            pinSpacing: false,
        });
    }
}

// function animateProducts() {
//     let section = document.querySelector('.products__wrapper'),
//         posters = gsap.utils.selector(section)('.products__item');
//     if (section) {
//         gsap.set(posters, { y: 0, rotate: 0 });

//         ScrollTrigger.create({
//             trigger: section,
//             start: 'top 20%',
//             onEnter: function () {
//                 posters.forEach(function (poster) {
//                     poster.style.willChange = 'transform';
//                 });
//             },
//             onLeaveBack: function () {
//                 posters.forEach(function (poster) {
//                     poster.style.willChange = 'auto';
//                 });
//             },
//         });

//         let windowHeight = window.innerHeight,
//             windowWidth = window.innerWidth,
//             firstPosterRect = posters[0].getBoundingClientRect(),
//             centerOffset = windowWidth / 2 - (firstPosterRect.left + firstPosterRect.width / 2),
//             postersCount = posters.length,
//             randomIndex = Math.floor(Math.random() * postersCount),
//             offsetX = 0.078 * windowWidth,
//             offsetY = 0.092 * windowHeight,
//             u = '(max-width: 768px)',
//             rotationFunction = function (index) {
//                 var value = -3.75 * index + Math.random();
//                 return index % 2 == 0 ? value : -value;
//             };

//         gsap.timeline({
//             scrollTrigger: {
//                 trigger: section,
//                 start: function () {
//                     return window.matchMedia(u).matches ? 'top center' : 'top 10%';
//                 },
//                 end: function () {
//                     return '+=' + section.offsetHeight;
//                 },
//                 scrub: !window.matchMedia(u).matches || 1,
//                 pin: true,
//                 anticipatePin: 1,
//                 onEnter: function () {
//                     posters.forEach(function (poster) {
//                         poster.style.willChange = 'transform';
//                     });
//                 },
//                 //markers: true,
//             },
//         }).fromTo(
//             posters,
//             {
//                 y: function () {
//                     return Math.floor(50 * Math.random());
//                 },
//                 rotate: rotationFunction,
//             },
//             {
//                 x: function (index) {
//                     let angle,
//                         x =
//                             ((angle = (180 / postersCount) * index),
//                             (windowWidth / 2 - offsetX) * Math.sin(angle) + centerOffset);
//                     return index === randomIndex ? 0.5 * x : x;
//                 },
//                 y: function (index) {
//                     var angle,
//                         y =
//                             ((angle = (180 / postersCount) * index),
//                             (windowHeight / 2 - offsetY) * Math.cos(angle)) * 1.3;
//                     return index === randomIndex ? 0.5 * y : y;
//                 },
//                 rotate: function (index) {
//                     return rotationFunction(2 * index);
//                 },
//             },
//         );
//     }
// }

function animateProducts() {
    let section = document.querySelector('.products__wrapper'),
        posters = gsap.utils.selector(section)('.products__item');
    if (section) {
        gsap.set(posters, { y: 0, rotate: 0 });

        ScrollTrigger.create({
            trigger: section,
            start: 'top 20%',
            onEnter: function () {
                posters.forEach(function (poster) {
                    poster.style.willChange = 'transform';
                });
            },
            onLeaveBack: function () {
                posters.forEach(function (poster) {
                    poster.style.willChange = 'auto';
                });
            },
        });

        let windowHeight = window.innerHeight,
            windowWidth = window.innerWidth,
            firstPosterRect = posters[0].getBoundingClientRect(),
            centerOffset = windowWidth / 2 - (firstPosterRect.left + firstPosterRect.width / 2),
            postersCount = posters.length,
            randomIndex = Math.floor(Math.random() * postersCount),
            rotationFunction = function (index) {
                var value = -3.75 * index + Math.random();
                return index % 2 == 0 ? value : -value;
            };

        gsap.timeline({
            scrollTrigger: {
                trigger: section,
                start: 'top center',
                end: () => '+=' + section.offsetHeight,
                scrub: true,
                pin: true,
                anticipatePin: 1,
                onEnter: () => {
                    posters.forEach((poster) => (poster.style.willChange = 'transform'));
                },
            },
        }).fromTo(
            posters,
            {
                y: () => Math.floor(50 * Math.random()),
                rotate: rotationFunction,
            },
            {
                x: (index) => {
                    let offsetX =
                        window.innerWidth > 768 ? 0.078 * windowWidth : 0.14 * windowWidth;
                    let angle = (180 / postersCount) * index;
                    return (windowWidth / 2 - offsetX) * Math.sin(angle) + centerOffset;
                },
                y: (index) => {
                    let offsetY =
                        window.innerWidth > 768 ? 0.092 * windowHeight : 0.31 * windowHeight;
                    let angle = (180 / postersCount) * index;
                    return (windowHeight / 2 - offsetY) * Math.cos(angle) * 1.3;
                },
                rotate: (index) => rotationFunction(2 * index),
            },
        );
    }
}

function processAnimation() {
    const process = document.querySelector('.process');
    const processInner = document.querySelector('.process__inner');
    const processList = document.querySelector('.process__list');
    const processItems = document.querySelectorAll('.process__item');
    const processContents = document.querySelectorAll('.process__content');
    const processContent0 = document.querySelector('.process__content-0');
    const processItem0 = document.querySelector('.process__item-0');

    if (window.innerWidth < 991) {
        ScrollTrigger.create({
            trigger: process,
            start: 'top top',
            scrub: 2,
            pin: true,
            end: '3000px',
            onEnter: (self) => {
                processContent0.classList.remove('active');
            },
            // onLeave: (self) => {
            //     processContent0.classList.add('active');
            //     processItem0.classList.remove('active');
            // },
            // onLeaveBack: (self) => {
            //     processContent0.classList.add('active');
            //     processItem0.classList.remove('active');
            // },
            onUpdate: (self) => {
                const progress = self.progress * 300;
                processItems.forEach((item, index) => {
                    if (progress >= index * 30 && progress < (index + 1) * 30) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                processContents.forEach((item, index) => {
                    if (progress >= index * 30 && progress < (index + 1) * 30) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            },
        });
    } else {
        ScrollTrigger.create({
            trigger: processInner,
            start: 'center center',
            scrub: 2,
            pin: true,
            end: '800px',
            onEnter: (self) => {
                processContent0.classList.remove('active');
            },
            // onLeave: (self) => {
            //     processContent0.classList.add('active');
            //     processItem0.classList.remove('active');
            // },
            // onLeaveBack: (self) => {
            //     processContent0.classList.add('active');
            //     processItem0.classList.remove('active');
            // },
            onUpdate: (self) => {
                const progress = self.progress * 80;
                processItems.forEach((item, index) => {
                    if (progress >= index * 8 && progress < (index + 1) * 8) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
                processContents.forEach((item, index) => {
                    if (progress >= index * 8 && progress < (index + 1) * 8) {
                        item.classList.add('active');
                    } else {
                        item.classList.remove('active');
                    }
                });
            },
        });
    }

    // if (processItems) {
    //     processItems.forEach((item) => {
    //         item.addEventListener('mouseover', function () {
    //             processItems.forEach((item) => {
    //                 item.classList.remove('active');
    //             });
    //             this.classList.add('active');
    //             const dataItem = this.dataset.item;
    //             processContents.forEach((content) => {
    //                 const contentItem = content.dataset.item;
    //                 if (contentItem === dataItem) {
    //                     content.style.opacity = 1;
    //                 } else {
    //                     content.style.opacity = 0;
    //                 }
    //             });
    //         });
    //     });
    // }
}

let start = true;

function partnersAnimation() {
    const wrapper1 = document.querySelector('.partners__wrapper');
    const wrapper2 = document.querySelector('.partners__wrapper2');

    if (wrapper1) {
        gsap.set(wrapper1, { xPercent: 0, width: wrapper1.scrollWidth });
        gsap.set(wrapper2, { xPercent: 0, width: wrapper1.scrollWidth });

        if (start) {
            wrapper2.style.display = 'none';
            gsap.to(wrapper1, {
                xPercent: -100,
                duration: 0.01,
                transformStyle: 'preserve-3d',
                willChange: 'transform',
                ease: 'linear',
                width: wrapper1.scrollWidth,
                onComplete: function () {
                    partnersAnimation();
                },
            });
        } else {
            wrapper2.style.display = 'flex';
            if (wrapper1) {
                gsap.to(wrapper2, {
                    xPercent: -100,
                    duration: 10,
                    ease: 'linear',
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                    width: wrapper1.scrollWidth,
                });
                gsap.to(wrapper1, {
                    xPercent: -100,
                    duration: 10,
                    transformStyle: 'preserve-3d',
                    willChange: 'transform',
                    ease: 'linear',
                    width: wrapper1.scrollWidth,
                    onComplete: function () {
                        partnersAnimation();
                    },
                });
            }
        }
    }

    start = false;
}

function animateTextAndBackground() {
    // Вибираємо текстові елементи для анімації
    const firstTitleRow = document.querySelector('.play__first');
    const secondTitleRow = document.querySelector('.play__second');
    const thirdTitleRow = document.querySelector('.play__third');

    if (firstTitleRow) {
        // Розділяємо текст на символи з використанням SplitType
        let splitFirstTitle = new SplitType(firstTitleRow, { types: 'chars' });
        let splitSecondTitle = new SplitType(secondTitleRow, { types: 'chars' });
        let splitThirdTitle = new SplitType(thirdTitleRow, { types: 'chars' });

        // Вибираємо контейнери секцій, які будуть анімовані
        const screensSection = document.querySelector('.play__wrapper');
        const wwcsSection = document.querySelector('[data-wwcs-section]');
        const connectionsSection = document.querySelector('.connections-section');

        // Вибираємо блок ".play", який буде закріплений при прокрутці
        const play = document.querySelector('.play');

        // Створюємо анімацію за допомогою бібліотеки GSAP
        gsap.timeline({
            scrollTrigger: {
                trigger: play, // Тригер для анімації при прокрутці
                start: 'top top', // Точка старту анімації
                end: () => '+=' + 6 * play.offsetHeight, // Кінцева точка анімації
                scrub: 1, // Анімація відбувається при прокрутці
                pin: true, // Закріплення блоку при прокрутці
                //pinSpacing: true,
                // anticipatePin: 1, // Попереднє закріплення блоку перед закріпленою секцією
            },
        })
            // Анімація тексту
            .staggerFrom(splitFirstTitle.chars, 0.4, { opacity: 0, ease: 'power3.out' }, 0.05) // Поява першого рядка тексту
            .addLabel('start') // Додаємо мітку "start" для подальшої використання
            .to(['.pin-spacer'], 0.4, { backgroundColor: '#6A16AB', ease: 'power3.out' }, 'start') // Зміна колірних фонів
            .to(
                splitFirstTitle.chars,
                0.4,
                { opacity: 0, ease: 'power3.out', duration: 1 },
                'start',
            ) // Зникнення першого рядка тексту
            .staggerFrom(
                splitSecondTitle.chars,
                0.4,
                { opacity: 0, ease: 'power3.out', duration: 1 },
                0.05,
                '-=0.3',
            ) // Поява другого рядка тексту з затримкою
            .to(['.pin-spacer'], 0.4, {
                backgroundColor: '#6A16AB',
                ease: 'power3.out',
            }) // Зміна колірних фонів (зберігаємо колір)
            .to(splitSecondTitle.chars, 0.4, { opacity: 0, ease: 'power3.out', duration: 1 }) // Зникнення другого рядка тексту
            .staggerFrom(
                splitThirdTitle.chars,
                0.4,
                { opacity: 0, ease: 'power3.out', duration: 1 },
                0.05,
                '-=0.3',
            ) // Поява третього рядка тексту з затримкою
            .to(['.pin-spacer'], 0.4, {
                backgroundColor: 'transparent',
                ease: 'power3.out',
            }); // Зміна колірних фонів
    }
}

function hoverLink() {
    let links = document.querySelectorAll('.hover__link');

    links.forEach(function (link) {
        var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
        svg.setAttribute('version', '1.1');
        svg.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
        svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
        svg.setAttribute('x', '0px');
        svg.setAttribute('y', '0px');
        svg.setAttribute('viewBox', '0 0 657.6 170.1');
        svg.setAttribute('style', 'visibility: visible');
        svg.setAttribute('xml:space', 'preserve');

        var path = document.createElementNS('http://www.w3.org/2000/svg', 'path');
        path.setAttribute(
            'd',
            'M593.8,28.2C525.3,17.9,456.3,11.6,387.1,9.5c-69.4-2.1-138.9,0-208.1,6.3c-34.4,3.1-68.6,7.3-102.8,12.5 \
            c-27.4,4.2-61.2,9.6-72.7,39c-4.5,11.4-3,24.2,4.3,34c6.9,9.3,17.3,15.1,27.9,19.3c13,5.2,26.9,8,40.5,11.2 \
            c16.4,3.8,32.9,7.4,49.5,10.7c66,13.3,132.9,22.7,200.2,26.1c66.8,3.4,134,0.8,200.1-9.6c16.6-2.6,33-5.8,49.4-9.4 \
            c13.5-3,27.2-6,40-11.3c19.8-8.1,41.9-23.2,41.2-47.2c-0.9-28.4-31.3-45-54.2-54.6c-28.6-12-59.3-17.5-90-21 \
            c-33.8-3.9-67.8-6.3-101.8-8.5c-35.2-2.3-70.4-4-105.7-5.2C234.5-0.6,163.9-0.5,93.4,1.9C76.2,2.5,59,3.3,41.9,4.1',
        );
        // path.setAttribute(
        //     'style',
        //     'transition: stroke-dashoffset 1s ease-in-out; stroke-dashoffset: 0; stroke-dasharray: ' +
        //         length +
        //         '',
        // );

        svg.appendChild(path);
        link.appendChild(svg);

        var length = path.getTotalLength();
        path.style.strokeDashoffset = length;
        path.style.strokeDasharray = length;

        link.addEventListener('mouseenter', function () {
            path.style.transition = 'stroke-dashoffset 0.5s ease-in-out';
            path.style.strokeDashoffset = '0';
            path.style.strokeDasharray = length;
        });

        link.addEventListener('mouseleave', function () {
            // path.style.transition = 'stroke-dashoffset 0.5s ease-in-out';
            path.style.strokeDashoffset = length;
            path.style.strokeDasharray = length;
        });
    });
}

function formUp() {
    const form = document.querySelector('.contacts__form');
    const info = document.querySelector('.info');
    if (info) {
        const tl = gsap.timeline();

        // Встановлюємо початковий стан форми (позиція за межами екрану)

        if (window.innerWidth < 992) {
            tl.to(form, { y: 0 });
            gsap.set(form, { y: 400 });
            ScrollTrigger.create({
                trigger: info,
                start: 'top top',
                animation: tl,
                scrub: 1,
                //pin: true,
                end: '300px',
            });
        } else {
            gsap.set(form, { y: 800 });
            tl.to(form, { y: -150 });
            ScrollTrigger.create({
                trigger: info,
                start: 'top top',
                animation: tl,
                scrub: 1,
                end: '800px',
            });
        }
    }
}

function preloader() {
    const preloader = document.querySelector('.preloader');

    if (preloader) {
        setTimeout(() => {
            preloader.style.opacity = 0;
            preloader.style.visability = 'hidden';
            preloader.style.zIndex = '-1';
        }, 7500);
    }
}
initGaming();
