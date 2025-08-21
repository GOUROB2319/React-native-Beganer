        // Show Table of Contents by default
        document.getElementById('toc-section').style.display = 'block';
        
        // Navigation functions
        function showSection(sectionId) {
            // Hide all sections
            document.getElementById('toc-section').style.display = 'none';
            document.getElementById('authors-section').style.display = 'none';
            document.querySelectorAll('.chapter-container').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected section
            if(sectionId === 'toc') {
                document.getElementById('toc-section').style.display = 'block';
            } else if(sectionId === 'authors') {
                document.getElementById('authors-section').style.display = 'block';
            }
            
            // Update active tab
            document.querySelectorAll('.tabs button').forEach(button => {
                button.classList.remove('active');
            });
            event.target.classList.add('active');
        }
        
        function showChapter(chapterId) {
            // Hide TOC and all chapters
            document.getElementById('toc-section').style.display = 'none';
            document.getElementById('authors-section').style.display = 'none';
            document.querySelectorAll('.chapter-container').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected chapter
            document.getElementById(chapterId).style.display = 'block';
            
            // Scroll to the chapter
            document.getElementById(chapterId).scrollIntoView({behavior: 'smooth'});
            
            // Update active tab to show we're viewing content
            document.querySelectorAll('.tabs button').forEach(button => {
                button.classList.remove('active');
            });
        }
        
        function toggleAnswer(answerId) {
            const answerElement = document.getElementById(answerId);
            if(answerElement.style.display === 'block') {
                answerElement.style.display = 'none';
                event.target.textContent = 'উত্তর দেখুন';
            } else {
                answerElement.style.display = 'block';
                event.target.textContent = 'উত্তর লুকান';
            }
        }
        
        function searchContent() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            if (!searchTerm) return;
            
            // Search in TOC items
            const tocItems = document.querySelectorAll('.toc-item');
            let foundChapter = null;
            
            tocItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    foundChapter = item.getAttribute('onclick').match(/showChapter\('(.*?)'\)/)[1];
                }
            });
            
            if (foundChapter) {
                showChapter(foundChapter);
            } else {
                alert('কোনো ফলাফল পাওয়া যায়নি।');
            }
        }
        
        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Show scroll to top button when scrolling down
        window.onscroll = function() {
            const scrollBtn = document.querySelector('.scroll-top');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        };
        // Show Table of Contents by default
        document.getElementById('toc-section').style.display = 'block';
        
        // Navigation functions
        function showSection(sectionId) {
            // Hide all sections
            document.getElementById('toc-section').style.display = 'none';
            document.querySelectorAll('.chapter-container').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected section
            if(sectionId === 'toc') {
                document.getElementById('toc-section').style.display = 'block';
            }
            
            // Update active tab
            document.querySelectorAll('.tabs button').forEach(button => {
                button.classList.remove('active');
            });
            event.target.classList.add('active');
        }
        
        function showChapter(chapterId) {
            // Hide TOC and all chapters
            document.getElementById('toc-section').style.display = 'none';
            document.querySelectorAll('.chapter-container').forEach(section => {
                section.style.display = 'none';
            });
            
            // Show selected chapter
            document.getElementById(chapterId).style.display = 'block';
            
            // Scroll to the chapter
            document.getElementById(chapterId).scrollIntoView({behavior: 'smooth'});
            
            // Update active tab to show we're viewing content
            document.querySelectorAll('.tabs button').forEach(button => {
                button.classList.remove('active');
            });
        }
        
        function toggleAnswer(answerId) {
            const answerElement = document.getElementById(answerId);
            if(answerElement.style.display === 'block') {
                answerElement.style.display = 'none';
                event.target.textContent = 'উত্তর দেখুন';
            } else {
                answerElement.style.display = 'block';
                event.target.textContent = 'উত্তর লুকান';
            }
        }
        
        function searchContent() {
            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            if (!searchTerm) return;
            
            // Search in TOC items
            const tocItems = document.querySelectorAll('.toc-item');
            let foundChapter = null;
            
            tocItems.forEach(item => {
                const text = item.textContent.toLowerCase();
                if (text.includes(searchTerm)) {
                    foundChapter = 'chapter1'; // Simplified for demo
                }
            });
            
            if (foundChapter) {
                showChapter(foundChapter);
            } else {
                alert('কোনো ফলাফল পাওয়া যায়নি।');
            }
        }
        
        // Scroll to top function
        function scrollToTop() {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }
        
        // Show scroll to top button when scrolling down
        window.onscroll = function() {
            const scrollBtn = document.querySelector('.scroll-top');
            if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
                scrollBtn.style.display = 'block';
            } else {
                scrollBtn.style.display = 'none';
            }
        };