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

    // 添加图片点击放大功能
    const modal = document.createElement('div');
    modal.className = 'image-modal';
    modal.style.display = 'none';  // 确保初始状态为隐藏
    const modalImg = document.createElement('img');
    modal.appendChild(modalImg);
    document.body.appendChild(modal);

    // 为所有产品图片添加点击事件
    document.querySelectorAll('.product-info img').forEach(img => {
        img.style.cursor = 'zoom-in';
        img.addEventListener('click', function() {
            modal.style.display = 'block';
            modalImg.src = this.src;
            document.body.style.overflow = 'hidden';
        });
    });

    // 点击模态框关闭
    modal.addEventListener('click', function() {
        this.style.display = 'none';
        document.body.style.overflow = '';
    });

    // 添加ESC键关闭功能
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && modal.style.display === 'block') {
            modal.style.display = 'none';
            document.body.style.overflow = '';
        }
    });
}); 