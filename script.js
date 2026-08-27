// NATT/DAG-MODUS

const toggleBtn = document.getElementById('toggleMode'); 
toggleBtn.addEventListener('click', () => {
  const isDark = document.documentElement.style.colorScheme === 'dark' || 
                 (document.documentElement.style.colorScheme !== 'light' && window.matchMedia('(prefers-color-scheme: dark)').matches);
 
  document.documentElement.style.colorScheme = isDark ? 'light' : 'dark';
});

// NATT/DAG-MODUS

// POENGTELLER

// POENGTELLER