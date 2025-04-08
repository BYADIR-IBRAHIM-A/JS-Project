// استهداف العناصر الأساسية
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');
const liveAlertPlaceholder = document.getElementById('liveAlertPlaceholder');

// مصفوفة الألوان
const colors = ['#F8C9C1', '#E6C478', '#C3E0C3', '#B0D1E0', '#E6A98A', '#C5A0C5', '#D8A3A3', '#BEE0B8'];

// متغير لتعداد البطاقات
let taskCounter =1;

// دالة لإظهار التنبيه
function showAlert(message, type, icon) {
    const alertDiv = document.createElement('div');
    alertDiv.className = `alert alert-${type} alert-sm d-flex align-items-center alert-dismissible fade show`;
    alertDiv.role = 'alert';
    alertDiv.innerHTML = `
        <svg class="bi flex-shrink-0 me-2" role="img" aria-label="${type}"><use xlink:href="#${icon}"/></svg>
        <div>${message}</div>
        <button type="button" class="btn-close" data-bs-dismiss="alert" aria-label="Close"></button>
    `;
    liveAlertPlaceholder.appendChild(alertDiv);

    // إزالة التنبيه بعد 3 ثوانٍ
    setTimeout(() => {
        alertDiv.remove();
    }, 1000);
}

// عند النقر على زر "إضافة مهمة"
addTaskBtn.addEventListener('click', () => {
    const taskName = prompt('أدخل اسم المهمة:');
    if (!taskName) {
        alert('يرجى إدخال اسم المهمة!');
        return;
    }

    // تخزين قيمة taskCounter الحالية
    const currentTaskNumber = taskCounter;

    // اختيار لون عشوائي من المصفوفة
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    // إنشاء عمود للبطاقة
    const col = document.createElement('div');
    col.className = 'col'; // استخدام الكلاس "col" لتنسيق البطاقات

    // إنشاء البطاقة الرئيسية
    const card = document.createElement('div');
    card.className = 'card h-100';
    card.style.backgroundColor = randomColor; // تعيين لون الخلفية

    // جسم البطاقة
    const cardBody = document.createElement('div');
    cardBody.className = 'card-body';

    // عنوان البطاقة
    const cardTitle = document.createElement('h5');
    cardTitle.className = 'card-title';
    cardTitle.textContent = `المهمة ${currentTaskNumber}`; // استخدام currentTaskNumber كعنوان

    // نص البطاقة
    const cardText = document.createElement('p');
    cardText.className = 'card-text';
    cardText.textContent = taskName;

    // تذييل البطاقة
    const cardFooter = document.createElement('div');
    cardFooter.className = 'card-footer d-flex justify-content-between align-items-center';

    // نص التذييل
    const footerText = document.createElement('small');
    footerText.className = 'text-body-secondary';
    footerText.textContent = 'تم التحديث الآن';

    // أيقونة "إكمال المهمة"
    const completeIcon = document.createElement('i');
    completeIcon.className = 'bi bi-check-circle text-success'; // أيقونة الإكمال
    completeIcon.style.cursor = 'pointer';
    completeIcon.addEventListener('click', () => {
        cardTitle.style.textDecoration = 'line-through'; // إضافة خط يتوسط النص
        cardTitle.style.color = 'gray'; // تغيير لون النص
        showAlert(`تم إكمال المهمة "${currentTaskNumber}" بنجاح!`, 'success', 'check-circle-fill'); // عرض تنبيه الإكمال
    });

    // أيقونة "حذف المهمة"
    const deleteIcon = document.createElement('i');
    deleteIcon.className = 'bi bi-trash text-danger'; // أيقونة الحذف
    deleteIcon.style.cursor = 'pointer';
    deleteIcon.addEventListener('click', () => {
        const confirmDelete = confirm(`هل تريد حذف المهمة "${currentTaskNumber}"؟`);
        if (confirmDelete) {
            taskList.removeChild(col);
            showAlert(`تم حذف المهمة "${currentTaskNumber}" بنجاح!`, 'danger', 'exclamation-triangle-fill'); // عرض تنبيه الحذف
        }
    });

    // تجميع عناصر التذييل
    const footerIcons = document.createElement('div');
    footerIcons.appendChild(completeIcon);
    footerIcons.appendChild(deleteIcon);

    cardFooter.appendChild(footerText);
    cardFooter.appendChild(footerIcons);

    // تجميع عناصر البطاقة
    cardBody.appendChild(cardTitle);
    cardBody.appendChild(cardText);
    card.appendChild(cardBody);
    card.appendChild(cardFooter);
    col.appendChild(card);

    // إضافة العمود إلى القائمة
    taskList.appendChild(col);

    // زيادة العداد
    taskCounter++;
});