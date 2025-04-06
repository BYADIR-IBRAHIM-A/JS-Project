// استهداف العناصر الأساسية
const addTaskBtn = document.getElementById('addTaskBtn');
const taskList = document.getElementById('taskList');

// عند النقر على زر "إضافة مهمة"
addTaskBtn.addEventListener('click', () => {
    const taskName = prompt('أدخل اسم المهمة:');
    if (!taskName) {
        alert('يرجى إدخال اسم المهمة!');
        return;
    }
    
    // إنشاء عناصر المهمة
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center';
    listItem.textContent = taskName;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
    deleteBtn.textContent = 'حذف';

    // حدث الحذف
    deleteBtn.addEventListener('click', () => {
        const confirmDelete = confirm('هل تريد حذف هذه المهمة؟');
        if (confirmDelete) {
            taskList.removeChild(listItem);
        }
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
});