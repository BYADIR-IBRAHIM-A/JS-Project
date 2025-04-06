// استهداف العناصر الأساسية
const addTaskBtn = document.getElementById('addTaskBtn');
addTaskBtn.className = 'btn btn-primary rounded-end-circle'; // إضافة الكلاسات المطلوبة
addTaskBtn.innerHTML = '<img class="rounded-end-circle" alt="إضافة مهمة">'; // إضافة الصورة داخل الزر

const taskList = document.getElementById('taskList');

document.body.style.backgroundColor = "rgb(149,200,216)"; // لون الخلفية (يمكن تغييره)

// عند النقر على زر "إضافة مهمة"
addTaskBtn.addEventListener('click', () => {
    const taskName = prompt('أدخل اسم المهمة:');
    if (!taskName) {
        alert('يرجى إدخال اسم المهمة!');
        return;
    }
    
    // إنشاء عناصر المهمة
    const listItem = document.createElement('li');
    listItem.className = 'list-group-item d-flex justify-content-between align-items-center shadow p-3 mb-5 bg-body-tertiary rounded';
    listItem.textContent = taskName;

    const deleteBtn = document.createElement('button');
    deleteBtn.className = 'btn btn-danger btn-sm';
deleteBtn.innerHTML = `
<a class="icon-link" href="#">
  <svg xmlns="http://www.w3.org/2000/svg" class="bi" viewBox="0 0 16 16" aria-hidden="true">  
    <path d="M8.186 1.113a.5.5 0 0 0-.372 0L1.846 3.5l2.404.961L10.404 2l-2.218-.887zm3.564 1.426L5.596 5 8 5.961 14.154 3.5l-2.404-.961zm3.25 1.7-6.5 2.6v7.922l6.5-2.6V4.24zM7.5 14.762V6.838L1 4.239v7.923l6.5 2.6zM7.443.184a1.5 1.5 0 0 1 1.114 0l7.129 2.852A.5.5 0 0 1 16 3.5v8.662a1 1 0 0 1-.629.928l-7.185 2.874a.5.5 0 0 1-.372 0L.63 13.09a1 1 0 0 1-.63-.928V3.5a.5.5 0 0 1 .314-.464L7.443.184z"/>
  </svg>
  Icon link
</a>`; // إضافة الأيقونة بدلاً من النص
    deleteBtn.style.marginLeft = '10px'; // إضافة مسافة بين الزر والنص
    deleteBtn.style.backgroundColor = 'transparent'; // جعل خلفية الزر شفافة

    deleteBtn.addEventListener('click', () => {
        const confirmDelete = confirm('هل تريد حذف هذه المهمة؟');
        if (confirmDelete) {
            taskList.removeChild(listItem);
        }
    });

    listItem.appendChild(deleteBtn);
    taskList.appendChild(listItem);
});
