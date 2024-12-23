document.addEventListener('DOMContentLoaded', function() {
    // 获取所有菜单项
    const menuItems = document.querySelectorAll('.product-menu li');
    // 获取所有产品详情
    const productDetails = document.querySelectorAll('.product-detail');
    // 获取欢迎页面
    const welcomeSection = document.querySelector('.product-welcome');

    // 为每个菜单项添加点击事件
    menuItems.forEach(item => {
        item.addEventListener('click', function() {
            // 移除所有active类
            productDetails.forEach(detail => detail.classList.remove('active'));
            welcomeSection.classList.remove('active');
            
            // 获取对应的产品ID
            const productId = this.getAttribute('data-product');
            // 显示对应的产品详情
            document.getElementById(productId).classList.add('active');
        });
    });
}); 