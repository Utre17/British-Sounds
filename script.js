console.log('Script loaded!');
// script.js for British Sounds Mastery

// --- Modal System ---
function showModal(title, message, type = 'info') {
    const modalHtml = `
        <div id="customModal" class="modal-overlay">
            <div class="modal-content">
                <div class="modal-header">
                    <h3>${title}</h3>
                    <button class="modal-close" onclick="closeModal()">&times;</button>
                </div>
                <div class="modal-body">
                    <p class="modal-${type}">${message}</p>
                </div>
                <div class="modal-footer">
                    <button class="modal-btn" onclick="closeModal()">OK</button>
                </div>
            </div>
        </div>
    `;
    
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    document.getElementById('customModal').style.display = 'flex';
}

function closeModal() {
    const modal = document.getElementById('customModal');
    if (modal) {
        modal.remove();
    }
}

// --- Audio playback for Session 1 (move to global scope) ---
const audioMap = {
    'bit-beat': ['bit', 'beat'],
    'cot-caught': ['cot', 'caught'],
    'bus-boss': ['bus', 'boss'],
    'bit': ['bit'],
    'beat': ['beat'],
    'cot': ['cot'],
    'caught': ['caught'],
    'bus': ['bus'],
    'boss': ['boss'],
    // Sentence practice - individual sentences
    'The bit of meat was quite sweet': ['The bit of meat was quite sweet'],
    'I caught the pot before it dropped': ['I caught the pot before it dropped'],
    'The bus driver was the boss of the route': ['The bus driver was the boss of the route'],
    // Add slow versions if available, e.g. 'vowel-sentences-slow': [...]
};

// --- Audio playback for Session 2 ---
audioMap['think-fink'] = ['think', 'fink'];
audioMap['vest-west'] = ['vest', 'west'];  
audioMap['red-led'] = ['red', 'led'];

// Individual Session 2 sounds
audioMap['think'] = ['think'];
audioMap['fink'] = ['fink'];
audioMap['vest'] = ['vest'];
audioMap['west'] = ['west'];
audioMap['red'] = ['red'];
audioMap['led'] = ['led'];

// Session 2 problem demonstration audio IDs - showing target sounds
audioMap['think-fink-problem'] = ['think', 'three']; // Demonstrate correct TH sounds
audioMap['vest-west-problem'] = ['vest']; // Demonstrate correct V sound (vest is correct)
audioMap['red-led-problem'] = ['right', 'red']; // Demonstrate correct R sounds
audioMap['think-solution'] = ['think'];
audioMap['vest-west-solution'] = ['vest', 'west'];
audioMap['red-led-solution'] = ['red', 'led'];

// Additional words for Solution drills - using actual uploaded audio files
audioMap['three'] = ['three']; // Now using actual three.mp3 file
audioMap['thick'] = ['thick']; // Now using actual thick.mp3 file  
audioMap['very'] = ['very']; // Now using actual very.mp3 file
audioMap['way'] = ['way']; // Now using actual way.mp3 file
audioMap['right'] = ['right']; // Now using actual right.mp3 file
audioMap['light'] = ['light']; // Now using actual light.mp3 file

// Scenario practice audio - using actual uploaded files with descriptive names
audioMap['business-th-1'] = ['I think we should meet at three o\'clock']; // Using actual uploaded file
audioMap['business-th-2'] = ['We need to think through this strategy more thoroughly']; // Using actual uploaded file
audioMap['tourist-vw-1'] = ['Take the vest exit and you\'ll see a vine shop']; // Original audio file - sentence updated for available clickable words
audioMap['tourist-vw-2'] = ['Go west on the wide avenue']; // Using actual uploaded file
audioMap['emergency-rl-1'] = ['Turn right at the red sign']; // Using actual uploaded file
audioMap['emergency-rl-2'] = ['The light is left of the door']; // Using actual uploaded file
audioMap['master-scenario'] = ['I think you should turn right and go west at the red light']; // Using actual uploaded file

function playAudio(audioId, btn) {
    console.log('playAudio called with', audioId);
    const session2Ids = [
        'think-fink', 'vest-west', 'red-led', 'think', 'fink', 'vest', 'west', 'red', 'led',
        'think-fink-problem', 'vest-west-problem', 'red-led-problem',
        'think-solution', 'vest-west-solution', 'red-led-solution',
        'three', 'thick', 'very', 'way', 'right', 'light',
        'business-th-1', 'business-th-2', 'tourist-vw-1', 'tourist-vw-2',
        'emergency-rl-1', 'emergency-rl-2', 'master-scenario'
    ];
    const words = audioMap[audioId] || [audioId];
    let idx = 0;
    function playNext() {
        if (idx >= words.length) return;
        const word = words[idx];
        let fileName = word + '.mp3';
        let audioPath = 'audio/session1/';
        if (session2Ids.includes(audioId) || session2Ids.includes(word)) {
            audioPath = 'audio/session2/';
        }
        const audio = new Audio(`${audioPath}${fileName}`);
        audio.onerror = function() {
            showModal('Audio Error', `Audio file not found: ${audioPath}${fileName}`, 'error');
        };
        audio.onended = function() {
            idx++;
            playNext();
        };
        audio.play();
    }
    playNext();
}

// Add a global checkQuiz function as a placeholder
function checkQuiz() {
    showModal('Coming Soon', 'Quiz functionality coming soon!', 'info');
}

// ================================
// FOCUS-FIRST LEARNING SYSTEM
// ================================

// Progress tracking
let learningProgress = {
    session1: {
        step1: { completed: 0, total: 3 },  // Vowel pairs
        step2: { completed: 0, total: 3 },  // Interactive practice  
        step3: { completed: 0, total: 3 }   // Sentence practice
    },
    session2: {
        step1: { completed: 0, total: 3 },  // Problem identification
        step2: { completed: 0, total: 3 },  // Solution techniques
        step3: { completed: 0, total: 4 }   // Real scenarios (3 scenarios + master challenge)
    }
};

// Initialize the new learning system
document.addEventListener('DOMContentLoaded', function() {
    initializeLearningSystem();
});

function initializeLearningSystem() {
    // Bind audio button events
    bindAudioEvents();
    
    // Bind help and examples button events
    bindSecondaryActions();
    
    // Bind clickable word events
    bindClickableWords();
    
    // Bind tab switching events
    bindTabSwitching();
    
    // Initialize progress display for both sessions
    updateProgressDisplay('session1');
    updateProgressDisplay('session2');
    
    // Show Session 1 progress by default
    showSessionProgress('session1');
    
    console.log('Focus-First Learning System initialized');
}

function bindAudioEvents() {
    // Session 1: Vowel pairs (Step 1)
    const session1VowelButtons = document.querySelectorAll('#session1 .listen-btn.primary');
    session1VowelButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            const card = this.closest('.learning-card');
            const itemNumber = parseInt(card.getAttribute('data-item'));
            
            // Add loading state
            this.classList.add('loading');
            this.querySelector('.btn-text').textContent = 'Playing...';
            
            // Play audio
            playAudioWithFeedback(audioId, this, () => {
                // Mark as completed
                markItemCompleted(card, itemNumber, 'session1', 1);
                
                // Reset button state
                this.classList.remove('loading');
                this.querySelector('.btn-text').textContent = 'Listen & Practice';
                
                // Update progress
                updateStepProgress('session1', 1, itemNumber);
            });
        });
    });

    // Session 1: Interactive practice (Step 2) - completion of practice exercises
    const session1PracticeCards = document.querySelectorAll('#session1 .practice-exercise-card');
    session1PracticeCards.forEach(card => {
        const itemNumber = parseInt(card.getAttribute('data-item'));
        const selectInputs = card.querySelectorAll('.word-choice');
        let completedSelects = 0;
        let cardCompleted = false;
        
        selectInputs.forEach(select => {
            select.addEventListener('change', function() {
                if (this.value === this.getAttribute('data-correct') && !this.classList.contains('correct')) {
                    this.classList.add('correct');
                    const feedbackIcon = this.parentElement.querySelector('.feedback-icon');
                    if (feedbackIcon) {
                        feedbackIcon.hidden = false;
                        feedbackIcon.textContent = '✓';
                        feedbackIcon.style.color = 'green';
                    }
                    
                    completedSelects++;
                    
                    // Check if all selects in this card are completed
                    if (completedSelects >= selectInputs.length && !cardCompleted) {
                        cardCompleted = true;
                        markItemCompleted(card, itemNumber, 'session1', 2);
                        updateStepProgress('session1', 2, itemNumber);
                    }
                } else if (this.value !== this.getAttribute('data-correct') && this.classList.contains('correct')) {
                    // Handle case where user changes from correct to incorrect
                    this.classList.remove('correct');
                    const feedbackIcon = this.parentElement.querySelector('.feedback-icon');
                    if (feedbackIcon) {
                        feedbackIcon.hidden = true;
                    }
                    completedSelects = Math.max(0, completedSelects - 1);
                    cardCompleted = false;
                }
            });
        });
    });

    // Session 1: Sentence practice (Step 3)
    const session1SentenceButtons = document.querySelectorAll('#session1 .listen-btn.sentence-play');
    session1SentenceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            const card = this.closest('.sentence-card');
            const itemNumber = parseInt(card.getAttribute('data-item'));
            
            // Add loading state
            this.classList.add('loading');
            this.querySelector('.btn-text').textContent = 'Playing...';
            
            // Play audio
            playAudioWithFeedback(audioId, this, () => {
                // Mark as completed
                markItemCompleted(card, itemNumber, 'session1', 3);
                
                // Reset button state
                this.classList.remove('loading');
                this.querySelector('.btn-text').textContent = 'Listen & Repeat';
                
                // Update progress
                updateStepProgress('session1', 3, itemNumber);
            });
        });
    });

    // Session 2: Problem section (Step 1) - clickable words
    const session2Problems = document.querySelectorAll('#session2 .problem-card');
    session2Problems.forEach(card => {
        const clickableWords = card.querySelectorAll('.clickable-word');
        const itemNumber = parseInt(card.getAttribute('data-item'));
        let wordsClicked = 0;
        
        clickableWords.forEach(word => {
            word.addEventListener('click', function() {
                if (!this.classList.contains('used')) {
                    this.classList.add('used');
                    wordsClicked++;
                    
                    // Mark problem as completed when all words in the card are clicked
                    if (wordsClicked >= clickableWords.length) {
                        markItemCompleted(card, itemNumber, 'session2', 1);
                        updateStepProgress('session2', 1, itemNumber);
                    }
                }
            });
        });
    });

    // Session 2: Solution section (Step 2)
    const session2SolutionButtons = document.querySelectorAll('#session2 .listen-btn.solution');
    session2SolutionButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.solution-card');
            const itemNumber = parseInt(card.getAttribute('data-item'));
            
            markItemCompleted(card, itemNumber, 'session2', 2);
            updateStepProgress('session2', 2, itemNumber);
        });
    });

    // Session 2: Scenario section (Step 3)
    const session2ScenarioButtons = document.querySelectorAll('#session2 .practice-audio, #session2 .master-practice-btn');
    session2ScenarioButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.scenario-card') || this.closest('.final-challenge-section');
            let itemNumber;
            
            if (card.classList.contains('final-challenge-section')) {
                itemNumber = 4; // Master challenge
            } else {
                itemNumber = parseInt(card.getAttribute('data-item'));
            }
            
            markItemCompleted(card, itemNumber, 'session2', 3);
            updateStepProgress('session2', 3, itemNumber);
        });
    });
}

function bindSecondaryActions() {
    // Help buttons
    const helpButtons = document.querySelectorAll('.help-btn');
    helpButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            toggleHelpSection(target);
        });
    });
    
    // Examples buttons
    const exampleButtons = document.querySelectorAll('.examples-btn');
    exampleButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            toggleExampleSection(target);
        });
    });
}

function bindTabSwitching() {
    // Bind tab button events
    const tabButtons = document.querySelectorAll('.tab-btn');
    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const targetSession = this.getAttribute('data-tab');
            
            // Remove active class from all tabs and content
            document.querySelectorAll('.tab-btn').forEach(btn => btn.classList.remove('active'));
            document.querySelectorAll('.tab-content').forEach(content => content.classList.remove('active'));
            
            // Add active class to clicked tab and corresponding content
            this.classList.add('active');
            const targetContent = document.getElementById(targetSession);
            if (targetContent) {
                targetContent.classList.add('active');
            }
            
            // Show appropriate progress bar
            showSessionProgress(targetSession);
        });
    });
}

function showSessionProgress(sessionId) {
    // Hide all progress bars first
    const allProgressBars = document.querySelectorAll('.learning-progress');
    allProgressBars.forEach(bar => {
        bar.style.display = 'none';
    });
    
    // Show the progress bar for the current session
    const currentSessionElement = document.querySelector(`#${sessionId}`);
    if (currentSessionElement) {
        const progressBar = currentSessionElement.querySelector('.learning-progress');
        if (progressBar) {
            progressBar.style.display = 'block';
        }
    }
}

function bindClickableWords() {
    // Bind click events to clickable words in problem section
    const clickableWords = document.querySelectorAll('.clickable-word');
    clickableWords.forEach(word => {
        word.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            
            // Add visual feedback
            this.style.transform = 'scale(0.95)';
            this.style.opacity = '0.7';
            
            // Reset visual state after animation
            setTimeout(() => {
                this.style.transform = 'scale(1)';
                this.style.opacity = '1';
            }, 150);
            
            // Play the audio
            playAudio(audioId, this);
            
            console.log('Clicked word:', this.textContent, 'Audio ID:', audioId);
        });
        
        // Add keyboard accessibility
        word.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                this.click();
            }
        });
        
        // Make focusable for keyboard navigation
        word.setAttribute('tabindex', '0');
        word.setAttribute('role', 'button');
        word.setAttribute('aria-label', `Play pronunciation of ${this.textContent}`);
    });
}

function playAudioWithFeedback(audioId, button, onComplete) {
    // Use existing playAudio function but with enhanced feedback
    const originalText = button.querySelector('.btn-text').textContent;
    
    try {
        // Call the existing playAudio function
        playAudio(audioId, button);
        
        // Visual feedback
        button.style.transform = 'scale(0.95)';
        setTimeout(() => {
            button.style.transform = 'scale(1)';
        }, 150);
        
        // Simulate audio completion (since we don't have direct access to audio events)
        setTimeout(() => {
            if (onComplete) onComplete();
        }, 2000);
        
    } catch (error) {
        console.error('Audio playback error:', error);
        button.querySelector('.btn-text').textContent = originalText;
        button.classList.remove('loading');
    }
}

function markItemCompleted(card, itemNumber, session, step) {
    // Update card visual state
    card.classList.add('completed');
    
    // Update status icon
    const statusIcon = card.querySelector('.status-icon');
    if (statusIcon) {
        statusIcon.setAttribute('data-status', 'completed');
        statusIcon.textContent = '✓';
    }
    
    // Add completion animation
    card.style.transform = 'scale(1.02)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 200);
    
    // Update progress dot (look within the current session)
    const sessionElement = document.querySelector(`#${session}`);
    if (sessionElement) {
        const progressDot = sessionElement.querySelector(`[data-step="${step}"] .dot[data-item="${itemNumber}"]`);
        if (progressDot) {
            progressDot.classList.add('completed');
        }
    }
}

function updateStepProgress(session, step, itemNumber) {
    // Update internal progress tracking
    learningProgress[session][`step${step}`].completed = Math.max(
        learningProgress[session][`step${step}`].completed,
        itemNumber
    );
    
    // Update progress display
    updateProgressDisplay(session);
    
    // Check if step is complete
    if (learningProgress[session][`step${step}`].completed === learningProgress[session][`step${step}`].total) {
        markStepCompleted(session, step);
    }
}

function markStepCompleted(session, step) {
    const sessionElement = document.querySelector(`#${session}`);
    if (sessionElement) {
        const stepElement = sessionElement.querySelector(`[data-step="${step}"]`);
        if (stepElement) {
            stepElement.classList.add('completed');
            stepElement.classList.remove('active');
            
            // Mark next step as active
            const nextStep = sessionElement.querySelector(`[data-step="${step + 1}"]`);
            if (nextStep) {
                nextStep.classList.add('active');
            }
        }
    }
}

function updateProgressDisplay(session) {
    // Only update progress for the current session
    if (!session) return;
    
    const sessionProgress = learningProgress[session];
    const totalItems = Object.values(sessionProgress).reduce((sum, step) => sum + step.total, 0);
    const completedItems = Object.values(sessionProgress).reduce((sum, step) => sum + step.completed, 0);
    const completionPercentage = Math.round((completedItems / totalItems) * 100);
    
    // Update completion rate display for the specific session
    const sessionElement = document.querySelector(`#${session}`);
    if (sessionElement) {
        const completionRateElement = sessionElement.querySelector('.completion-rate');
        if (completionRateElement) {
            completionRateElement.textContent = `${completionPercentage}% Complete`;
        }
        
        // Update current step display - show the active step, not just completed
        let currentStep = 1;
        if (sessionProgress.step1.completed === sessionProgress.step1.total && sessionProgress.step2.completed < sessionProgress.step2.total) {
            currentStep = 2;
        } else if (sessionProgress.step2.completed === sessionProgress.step2.total && sessionProgress.step3.completed < sessionProgress.step3.total) {
            currentStep = 3;
        } else if (sessionProgress.step3.completed === sessionProgress.step3.total) {
            currentStep = 3; // Keep at 3 when all complete
        } else if (sessionProgress.step1.completed > 0 && sessionProgress.step1.completed < sessionProgress.step1.total) {
            currentStep = 1; // Still on step 1
        } else if (sessionProgress.step2.completed > 0 && sessionProgress.step2.completed < sessionProgress.step2.total) {
            currentStep = 2; // Still on step 2
        } else if (sessionProgress.step3.completed > 0) {
            currentStep = 3; // On step 3
        }
        
        const currentStepElement = sessionElement.querySelector('.current-step');
        if (currentStepElement) {
            if (session === 'session1') {
                const stepNames = ['Vowel Pairs', 'Interactive Practice', 'Sentence Practice'];
                currentStepElement.textContent = `${stepNames[currentStep - 1]} (${currentStep} of 3)`;
            } else if (session === 'session2') {
                const stepNames = ['The Problem', 'The Solution', 'Real Scenarios'];
                currentStepElement.textContent = `${stepNames[currentStep - 1]} (${currentStep} of 3)`;
            }
        }
    }
}

function toggleHelpSection(targetId) {
    const helpSection = document.getElementById(targetId);
    if (helpSection) {
        const isHidden = helpSection.hasAttribute('hidden');
        
        // Hide all other help sections first
        document.querySelectorAll('.card-help').forEach(section => {
            section.setAttribute('hidden', '');
        });
        
        if (isHidden) {
            helpSection.removeAttribute('hidden');
        }
    }
}

function toggleExampleSection(targetId) {
    const exampleSection = document.getElementById(targetId);
    if (exampleSection) {
        const isHidden = exampleSection.hasAttribute('hidden');
        
        // Hide all other example sections first
        document.querySelectorAll('.card-examples').forEach(section => {
            section.setAttribute('hidden', '');
        });
        
        if (isHidden) {
            exampleSection.removeAttribute('hidden');
        }
    }
}

// Enhanced audio feedback for better UX
function createAudioFeedback() {
    // Add subtle sound effects for button interactions (if desired)
    const buttons = document.querySelectorAll('.listen-btn.primary, .help-btn, .examples-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-1px)';
        });
        
        button.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
}

// Initialize audio feedback
document.addEventListener('DOMContentLoaded', createAudioFeedback);

// ================================
// ENHANCED SENTENCE & SHADOWING SYSTEM
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initializeNewSections();
});

function initializeNewSections() {
    // Initialize sentence practice cards
    initializeSentenceCards();
    
    // Initialize shadowing controls
    initializeShadowingControls();
    
    // Initialize tool buttons
    initializeToolButtons();
    
    console.log('Enhanced sections initialized');
}

function initializeSentenceCards() {
    const sentencePlayButtons = document.querySelectorAll('.listen-btn.sentence-play');
    
    sentencePlayButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            const card = this.closest('.sentence-card');
            const playCountSpan = this.querySelector('.play-count');
            
            // Update play count
            let currentCount = parseInt(playCountSpan.textContent.split('/')[0]);
            currentCount = Math.min(currentCount + 1, 3);
            playCountSpan.textContent = `${currentCount}/3`;
            
            // Update progress dots
            updateProgressDots(card, currentCount);
            
            // Add playing state
            this.classList.add('playing');
            this.querySelector('.btn-text').textContent = 'Playing...';
            
            // Play audio with enhanced feedback
            playAudioWithFeedback(audioId, button, () => {
                // Mark as completed if played 3 times
                if (currentCount >= 3) {
                    markSentenceCompleted(card);
                }
                
                // Reset button state
                this.classList.remove('playing');
                this.querySelector('.btn-text').textContent = 'Listen & Repeat';
                
                // Update step 3 progress
                updateStepProgress(3, parseInt(card.getAttribute('data-item')));
            });
        });
    });
    
}

function updateProgressDots(card, currentCount) {
    const progressDots = card.querySelectorAll('.progress-dot');
    
    progressDots.forEach((dot, index) => {
        const dotNumber = index + 1;
        
        // Remove all classes first
        dot.classList.remove('completed', 'current');
        
        if (dotNumber < currentCount) {
            // Previous plays - mark as completed
            dot.classList.add('completed');
        } else if (dotNumber === currentCount) {
            // Current play - mark as current
            dot.classList.add('current');
        }
        // Future plays remain default
    });
}

function initializeSpeedControls() {
    const speedButtons = document.querySelectorAll('.speed-btn');
    
    speedButtons.forEach(button => {
        button.addEventListener('click', function() {
            const speed = parseFloat(this.getAttribute('data-speed'));
            const card = this.closest('.sentence-card');
            
            // Update active state
            card.querySelectorAll('.speed-btn').forEach(btn => btn.classList.remove('active'));
            this.classList.add('active');
            
            // Store speed for next audio play
            card.setAttribute('data-audio-speed', speed);
            
            // Visual feedback
            this.style.transform = 'scale(0.95)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 150);
        });
    });
}

function initializeShadowingControls() {
    const shadowingButtons = document.querySelectorAll('.shadowing-btn');
    
    shadowingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const mode = this.getAttribute('data-mode');
            const audioId = this.getAttribute('data-audio-id');
            
            if (mode === 'listen') {
                // Listen first mode
                this.classList.add('active');
                this.querySelector('.btn-text').textContent = 'Listening...';
                
                playAudio(audioId, button);
                
                setTimeout(() => {
                    this.classList.remove('active');
                    this.querySelector('.btn-text').textContent = 'Listen First';
                }, 3000);
                
            } else if (mode === 'shadow') {
                // Shadow challenge mode
                startShadowingChallenge();
            }
        });
    });
}

function initializeToolButtons() {
    // IPA buttons
    const ipaButtons = document.querySelectorAll('.ipa-btn');
    ipaButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.sentence-card');
            const ipaDisplay = card.querySelector('.ipa-display');
            const meaningDisplay = card.querySelector('.meaning-display');
            
            // Hide meaning display if open
            meaningDisplay.setAttribute('hidden', '');
            
            // Toggle IPA display
            if (ipaDisplay.hasAttribute('hidden')) {
                ipaDisplay.removeAttribute('hidden');
                this.classList.add('active');
            } else {
                ipaDisplay.setAttribute('hidden', '');
                this.classList.remove('active');
            }
        });
    });
    
    // Meaning buttons
    const meaningButtons = document.querySelectorAll('.meaning-btn');
    meaningButtons.forEach(button => {
        button.addEventListener('click', function() {
            const card = this.closest('.sentence-card');
            const meaningDisplay = card.querySelector('.meaning-display');
            const ipaDisplay = card.querySelector('.ipa-display');
            
            // Hide IPA display if open
            ipaDisplay.setAttribute('hidden', '');
            
            // Toggle meaning display
            if (meaningDisplay.hasAttribute('hidden')) {
                meaningDisplay.removeAttribute('hidden');
                this.classList.add('active');
            } else {
                meaningDisplay.setAttribute('hidden', '');
                this.classList.remove('active');
            }
        });
    });
}

function markSentenceCompleted(card) {
    card.classList.add('completed');
    
    const completionBadge = card.querySelector('.completion-badge');
    if (completionBadge) {
        completionBadge.setAttribute('data-status', 'completed');
        const badgeIcon = completionBadge.querySelector('.badge-icon');
        if (badgeIcon) {
            badgeIcon.textContent = '✓';
        }
    }
    
    // Add completion animation
    card.style.transform = 'scale(1.02)';
    setTimeout(() => {
        card.style.transform = 'scale(1)';
    }, 300);
    
    // Update progress dot for Step 3
    const itemNumber = card.getAttribute('data-item');
    const progressDot = document.querySelector(`[data-step="3"] .dot[data-item="${itemNumber}"]`);
    if (progressDot) {
        progressDot.classList.add('completed');
    }
    
    // Show completion celebration
    showFeedback('🎉 Sentence mastered! Great pronunciation practice!', 'success');
}

function startShadowingChallenge() {
    const shadowButton = document.querySelector('.shadowing-btn.shadow-mode');
    const progressFill = document.querySelector('.progress-bar-fill');
    const progressText = document.querySelector('.progress-text');
    
    shadowButton.classList.add('active');
    shadowButton.querySelector('.btn-text').textContent = 'Shadowing...';
    
    // Simulate shadowing progress
    let progress = 0;
    const interval = setInterval(() => {
        progress += 33.33;
        progressFill.style.width = progress + '%';
        
        if (progress >= 100) {
            clearInterval(interval);
            completeShadowingChallenge();
        }
    }, 2000);
    
    // Play all three sentences sequentially
    setTimeout(() => playAudio('The bit of meat was quite sweet'), 500);
    setTimeout(() => playAudio('I caught the pot before it dropped'), 2500);
    setTimeout(() => playAudio('The bus driver was the boss of the route'), 4500);
}

function completeShadowingChallenge() {
    const shadowButton = document.querySelector('.shadowing-btn.shadow-mode');
    const celebration = document.querySelector('.completion-celebration');
    
    shadowButton.classList.remove('active');
    shadowButton.querySelector('.btn-text').textContent = 'Shadow Challenge';
    
    // Show celebration
    celebration.removeAttribute('hidden');
    
    // Mark step 3 as completed
    updateStepProgress(3, 1);
    markStepCompleted(3);
    
    // Update main progress to 100%
    const completionRate = document.querySelector('.completion-rate');
    if (completionRate) {
        completionRate.textContent = '100% Complete';
    }
}

// Enhanced audio feedback for new buttons
function createEnhancedAudioFeedback() {
    const buttons = document.querySelectorAll('.sentence-play, .shadowing-btn, .tool-btn');
    
    buttons.forEach(button => {
        button.addEventListener('mouseenter', function() {
            if (!this.classList.contains('playing') && !this.classList.contains('active')) {
                this.style.transform = 'translateY(-2px)';
            }
        });
        
        button.addEventListener('mouseleave', function() {
            if (!this.classList.contains('playing') && !this.classList.contains('active')) {
                this.style.transform = 'translateY(0)';
            }
        });
    });
}

// Initialize enhanced feedback
document.addEventListener('DOMContentLoaded', createEnhancedAudioFeedback);

// ================================
// INTERACTIVE PRACTICE SYSTEM
// ================================

document.addEventListener('DOMContentLoaded', function() {
    initializeInteractivePractice();
});

function initializeInteractivePractice() {
    // Bind practice button events
    bindPracticeButtons();
    
    // Initialize drag and drop for Step 2 exercises
    initializeDragAndDrop();
    
    // Initialize word choice exercises for Step 2
    initializeWordChoices();
    
    // Initialize phonetic flip cards
    initializePhoneticCards();
    
    // Initialize position cards
    initializePositionCards();
    
    // Initialize Step 2 practice cards
    initializePracticeCards();
    
    console.log('Interactive practice system initialized');
}

function initializePracticeCards() {
    const practiceCards = document.querySelectorAll('.practice-exercise-card');
    
    practiceCards.forEach(card => {
        const exerciseBlocks = card.querySelectorAll('.exercise-block');
        
        // Monitor completion of exercises within each card
        exerciseBlocks.forEach(block => {
            // Add event listeners to track completion
            const inputs = block.querySelectorAll('.word-choice, .draggable-word');
            inputs.forEach(input => {
                input.addEventListener('change', () => {
                    checkPracticeCardCompletion(card);
                });
            });
        });
    });
}

function checkPracticeCardCompletion(card) {
    const itemNumber = parseInt(card.getAttribute('data-item'));
    const isCompleted = checkAllExercisesCompleted(card);
    
    if (isCompleted) {
        // Mark card as completed
        card.classList.add('completed');
        
        // Update status icon
        const statusIcon = card.querySelector('.status-icon');
        if (statusIcon) {
            statusIcon.setAttribute('data-status', 'completed');
            statusIcon.textContent = '✓';
        }
        
        // Update Step 2 progress
        updateStepProgress(2, itemNumber);
    }
}

function checkAllExercisesCompleted(card) {
    const exerciseBlocks = card.querySelectorAll('.exercise-block');
    
    for (let block of exerciseBlocks) {
        if (!checkExerciseCompletion(block)) {
            return false;
        }
    }
    return true;
}

function bindPracticeButtons() {
    const practiceButtons = document.querySelectorAll('.practice-btn');
    
    practiceButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            togglePracticeSection(target);
        });
    });
}

function togglePracticeSection(targetId) {
    const practiceSection = document.getElementById(targetId);
    if (practiceSection) {
        const isHidden = practiceSection.hasAttribute('hidden');
        
        // Hide all other practice sections first
        document.querySelectorAll('.card-practice').forEach(section => {
            section.setAttribute('hidden', '');
        });
        
        // Hide help and examples sections too
        document.querySelectorAll('.card-help, .card-examples').forEach(section => {
            section.setAttribute('hidden', '');
        });
        
        if (isHidden) {
            practiceSection.removeAttribute('hidden');
        }
    }
}

function initializeDragAndDrop() {
    const draggableWords = document.querySelectorAll('.draggable-word');
    const dropZones = document.querySelectorAll('.drop-zone');
    
    // Make words draggable
    draggableWords.forEach(word => {
        word.draggable = true;
        word.addEventListener('dragstart', handleDragStart);
        word.addEventListener('dragend', handleDragEnd);
    });
    
    // Setup drop zones
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleDragOver);
        zone.addEventListener('drop', handleDrop);
        zone.addEventListener('dragenter', handleDragEnter);
        zone.addEventListener('dragleave', handleDragLeave);
    });
}

let draggedElement = null;

function handleDragStart(e) {
    draggedElement = this;
    this.style.opacity = '0.5';
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/html', this.outerHTML);
}

function handleDragEnd(e) {
    this.style.opacity = '1';
    draggedElement = null;
}

function handleDragOver(e) {
    e.preventDefault();
    e.dataTransfer.dropEffect = 'move';
}

function handleDragEnter(e) {
    e.preventDefault();
    this.classList.add('drag-over');
}

function handleDragLeave(e) {
    this.classList.remove('drag-over');
}

function handleDrop(e) {
    e.preventDefault();
    this.classList.remove('drag-over');
    
    if (draggedElement) {
        const targetCategory = this.getAttribute('data-target');
        const wordCategory = draggedElement.getAttribute('data-sound');
        
        // Check if the drop is correct
        const isCorrect = (targetCategory === wordCategory) || 
                         (targetCategory === 'central' && wordCategory === 'central') ||
                         (targetCategory === 'back' && wordCategory === 'back');
        
        if (isCorrect) {
            // Move the word to the drop zone
            const zoneContent = this.querySelector('.zone-content');
            zoneContent.appendChild(draggedElement);
            draggedElement.classList.add('correctly-placed');
            
            // Update progress
            updatePracticeProgress(this.closest('.card-practice'));
            
            // Show success feedback
            showFeedback('Correct! Well done!', 'success');
        } else {
            // Show error feedback
            showFeedback('Not quite right. Try again!', 'error');
        }
    }
}

function initializeWordChoices() {
    const wordChoices = document.querySelectorAll('.word-choice');
    
    wordChoices.forEach(select => {
        select.addEventListener('change', function() {
            const correctAnswer = this.getAttribute('data-correct');
            const selectedValue = this.value;
            const feedbackIcon = this.parentNode.querySelector('.feedback-icon');
            
            if (selectedValue === correctAnswer) {
                this.classList.add('correct');
                this.classList.remove('incorrect');
                feedbackIcon.textContent = '✓';
                feedbackIcon.style.color = '#10b981';
                feedbackIcon.removeAttribute('hidden');
                
                // Update progress
                updatePracticeProgress(this.closest('.card-practice'));
            } else if (selectedValue !== '') {
                this.classList.add('incorrect');
                this.classList.remove('correct');
                feedbackIcon.textContent = '✗';
                feedbackIcon.style.color = '#ef4444';
                feedbackIcon.removeAttribute('hidden');
            }
        });
    });
}

function initializePhoneticCards() {
    const wordCards = document.querySelectorAll('.word-card');
    
    wordCards.forEach(card => {
        card.addEventListener('click', function() {
            const front = this.querySelector('.word-front');
            const back = this.querySelector('.word-back');
            
            if (back.hasAttribute('hidden')) {
                back.removeAttribute('hidden');
                front.setAttribute('hidden', '');
                this.classList.add('flipped');
            } else {
                front.removeAttribute('hidden');
                back.setAttribute('hidden', '');
                this.classList.remove('flipped');
            }
            
            // Update progress
            updatePracticeProgress(this.closest('.card-practice'));
        });
    });
}

function initializePositionCards() {
    const positionCards = document.querySelectorAll('.position-card');
    
    positionCards.forEach(card => {
        card.addEventListener('click', function() {
            const guide = this.querySelector('.position-guide');
            
            if (guide.hasAttribute('hidden')) {
                guide.removeAttribute('hidden');
                this.classList.add('revealed');
            } else {
                guide.setAttribute('hidden', '');
                this.classList.remove('revealed');
            }
            
            // Update progress
            updatePracticeProgress(this.closest('.card-practice'));
        });
    });
}

function updatePracticeProgress(practiceSection) {
    if (!practiceSection) return;
    
    const exercises = practiceSection.querySelectorAll('.exercise-block');
    let completedExercises = 0;
    
    exercises.forEach(exercise => {
        // Check if exercise is completed based on different criteria
        const isCompleted = checkExerciseCompletion(exercise);
        if (isCompleted) {
            completedExercises++;
            exercise.classList.add('completed');
        }
    });
    
    const progressPercentage = Math.round((completedExercises / exercises.length) * 100);
    const progressFill = practiceSection.querySelector('.progress-fill');
    const progressText = practiceSection.querySelector('.progress-text');
    
    if (progressFill) {
        progressFill.style.width = progressPercentage + '%';
    }
    
    if (progressText) {
        progressText.textContent = progressPercentage + '% Complete';
    }
    
    // If fully completed, show celebration
    if (progressPercentage === 100) {
        showCelebration(practiceSection);
    }
}

function checkExerciseCompletion(exercise) {
    // Check drag and drop completion
    const correctlyPlaced = exercise.querySelectorAll('.draggable-word.correctly-placed');
    const totalWords = exercise.querySelectorAll('.draggable-word');
    
    if (totalWords.length > 0) {
        return correctlyPlaced.length === totalWords.length;
    }
    
    // Check word choice completion
    const correctChoices = exercise.querySelectorAll('.word-choice.correct');
    const totalChoices = exercise.querySelectorAll('.word-choice');
    
    if (totalChoices.length > 0) {
        return correctChoices.length === totalChoices.length;
    }
    
    // Check phonetic cards
    const flippedCards = exercise.querySelectorAll('.word-card.flipped');
    const totalCards = exercise.querySelectorAll('.word-card');
    
    if (totalCards.length > 0) {
        return flippedCards.length >= totalCards.length / 2; // At least half flipped
    }
    
    // Check position cards
    const revealedCards = exercise.querySelectorAll('.position-card.revealed');
    const totalPositionCards = exercise.querySelectorAll('.position-card');
    
    if (totalPositionCards.length > 0) {
        return revealedCards.length === totalPositionCards.length;
    }
    
    return false;
}

function showFeedback(message, type) {
    // Create a temporary feedback element
    const feedback = document.createElement('div');
    feedback.className = `practice-feedback ${type}`;
    feedback.textContent = message;
    feedback.style.position = 'fixed';
    feedback.style.top = '20px';
    feedback.style.right = '20px';
    feedback.style.padding = '10px 15px';
    feedback.style.borderRadius = '6px';
    feedback.style.color = 'white';
    feedback.style.backgroundColor = type === 'success' ? '#10b981' : '#ef4444';
    feedback.style.zIndex = '9999';
    feedback.style.opacity = '0';
    feedback.style.transition = 'opacity 0.3s ease';
    
    document.body.appendChild(feedback);
    
    // Animate in
    setTimeout(() => feedback.style.opacity = '1', 100);
    
    // Remove after 2 seconds
    setTimeout(() => {
        feedback.style.opacity = '0';
        setTimeout(() => feedback.remove(), 300);
    }, 2000);
}

function showCelebration(practiceSection) {
    const celebration = document.createElement('div');
    celebration.className = 'practice-celebration';
    celebration.innerHTML = `
        <div class="celebration-content">
            <span class="celebration-emoji">🎉</span>
            <span class="celebration-text">Excellent work! Practice completed!</span>
        </div>
    `;
    
    practiceSection.appendChild(celebration);
    
    // Remove after 3 seconds
    setTimeout(() => celebration.remove(), 3000);
}

document.addEventListener('DOMContentLoaded', function () {
    const tabBtns = document.querySelectorAll('.tab-btn');
    const tabContents = document.querySelectorAll('.tab-content');
    const progressFill = document.getElementById('progressFill');
    const toggleIPAButton = document.getElementById('toggleIPA');
    const resetProgressButton = document.getElementById('resetProgress');
    let completedTabs = new Set();
    let showIPA = false;
    let lastPlayed = {};

    // --- UX Improvement: Modal Logic ---
    const infoModal = document.getElementById('infoModal');
    const modalContent = document.getElementById('modalExplanationContent');
    const modalClose = document.querySelector('.modal-close');

    function openModal(content) {
        modalContent.innerHTML = content;
        infoModal.hidden = false;
    }

    function closeModal() {
        infoModal.hidden = true;
    }

    modalClose.addEventListener('click', closeModal);
    window.addEventListener('click', function(event) {
        if (event.target == infoModal) {
            closeModal();
        }
    });

    // Tab switching
    tabBtns.forEach(btn => {
        btn.addEventListener('click', function () {
            // Remove active from all
            tabBtns.forEach(b => b.classList.remove('active'));
            tabContents.forEach(tc => tc.classList.remove('active'));
            // Activate current
            btn.classList.add('active');
            const tabId = btn.getAttribute('data-tab');
            document.getElementById(tabId).classList.add('active');
            // Mark as completed
            completedTabs.add(tabId);
            updateProgress();
        });
    });

    // Toggle IPA
    toggleIPAButton.addEventListener('click', toggleIPA);
    // Reset Progress
    resetProgressButton.addEventListener('click', resetProgress);

    // Quiz check
    const quizBtn = document.querySelector('.quiz-btn');
    if (quizBtn) quizBtn.addEventListener('click', checkQuiz);

    // Session 1: Vowel Sounds interactivity
    const soundPairs = document.querySelectorAll('#session1 .sound-pair');
    const motivationMsg = document.querySelector('.session1-motivation');
    const sentenceBlocks = document.querySelectorAll('#session1 .sentence');
    const shadowingBlock = document.querySelector('#session1 .shadowing-practice');
    let completedPairs = new Set();
    let completedSentences = new Set();
    let shadowingDone = false;

    // Listen button logic
    soundPairs.forEach(pair => {
        const listenBtn = pair.querySelector('.audio-btn');
        const nowYouTry = pair.querySelector('.now-you-try');
        const tick = pair.querySelector('.tick');
        listenBtn.addEventListener('click', function () {
            // Show 'Now you try!' and tick
            nowYouTry.hidden = false;
            tick.hidden = false;
            completedPairs.add(pair.dataset.pair);
            checkSession1Completion();
        });
        // Explanation toggle
        const explainBtn = pair.querySelector('.explain-btn');
        const explanation = pair.querySelector('.explanation');
        explainBtn.addEventListener('click', function () {
            openModal(explanation.innerHTML);
        });
    });
    // Record Yourself buttons (focusable, non-functional)
    document.querySelectorAll('.record-btn').forEach(btn => {
        btn.tabIndex = 0;
    });
    // IPA toggle for sentences
    sentenceBlocks.forEach(sentence => {
        const ipaToggle = sentence.querySelector('.ipa-toggle');
        const ipaSpan = sentence.querySelector('.sentence-ipa');
        ipaToggle.addEventListener('click', function () {
            const showing = !ipaSpan.hidden;
            ipaSpan.hidden = showing;
        });
        // Mark sentence as completed when IPA is toggled (simulate practice)
        ipaToggle.addEventListener('click', function () {
            completedSentences.add(sentence.textContent.trim());
            checkSession1Completion();
        });
    });
    // Shadowing block (simulate completion on click)
    if (shadowingBlock) {
        shadowingBlock.addEventListener('click', function () {
            shadowingDone = true;
            checkSession1Completion();
        });
        shadowingBlock.tabIndex = 0;
        shadowingBlock.setAttribute('role', 'button');
        shadowingBlock.setAttribute('aria-label', 'Mark shadowing practice as complete');
    }
    // Show motivational message if all steps done
    function checkSession1Completion() {
        if (
            completedPairs.size === soundPairs.length &&
            completedSentences.size === sentenceBlocks.length &&
            shadowingDone
        ) {
            motivationMsg.hidden = false;
        }
    }

    // Keyboard accessibility for tab navigation
    const navTabs = document.querySelector('.nav-tabs');
    if (navTabs) {
        navTabs.addEventListener('keydown', function (e) {
            const tabs = Array.from(navTabs.querySelectorAll('.tab-btn'));
            const current = document.activeElement;
            let idx = tabs.indexOf(current);
            if (e.key === 'ArrowRight') {
                e.preventDefault();
                tabs[(idx + 1) % tabs.length].focus();
            } else if (e.key === 'ArrowLeft') {
                e.preventDefault();
                tabs[(idx - 1 + tabs.length) % tabs.length].focus();
            }
        });
    }

    function updateProgress() {
        // Progress = completed tabs / total tabs
        const total = tabContents.length;
        const completed = completedTabs.size;
        const percent = Math.round((completed / total) * 100);
        if (progressFill) {
            progressFill.style.width = percent + '%';
        }
    }

    function toggleIPA() {
        showIPA = !showIPA;
        document.querySelectorAll('.ipa').forEach(span => {
            if (showIPA) {
                span.classList.add('show');
            } else {
                span.classList.remove('show');
            }
        });
    }

    function resetProgress() {
        completedTabs.clear();
        if (progressFill) {
            progressFill.style.width = '0%';
        }
        // Optionally reset active tab to first
        tabBtns.forEach(b => b.classList.remove('active'));
        tabContents.forEach(tc => tc.classList.remove('active'));
        tabBtns[0].classList.add('active');
        tabContents[0].classList.add('active');
    }

    // Attach event listeners to all .audio-btn buttons
    document.querySelectorAll('.audio-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const audioId = btn.getAttribute('data-audio-id');
            console.log('Audio button clicked:', audioId);
            if (audioId) {
                playAudio(audioId, btn);
            }
        });
    });

    // Add event listeners for Session 2 audio buttons
    document.querySelectorAll('.listen-btn.problem, .listen-btn.solution').forEach(btn => {
        btn.addEventListener('click', function() {
            const audioId = btn.getAttribute('data-audio-id');
            console.log('Session 2 problem/solution button clicked:', audioId);
            if (audioId) {
                playAudio(audioId, btn);
            }
        });
    });

    // Add event listeners for drill audio buttons
    document.querySelectorAll('.drill-audio').forEach(btn => {
        btn.addEventListener('click', function() {
            const audioId = btn.getAttribute('data-audio-id');
            console.log('Drill audio button clicked:', audioId);
            if (audioId) {
                playAudio(audioId, btn);
            }
        });
    });

    // Add event listeners for practice audio buttons
    document.querySelectorAll('.practice-audio').forEach(btn => {
        btn.addEventListener('click', function() {
            const audioId = btn.getAttribute('data-audio-id');
            console.log('Practice audio button clicked:', audioId);
            if (audioId) {
                playAudio(audioId, btn);
            }
        });
    });

    // Add event listeners for master practice buttons
    document.querySelectorAll('.master-practice-btn').forEach(btn => {
        btn.addEventListener('click', function() {
            const audioId = btn.getAttribute('data-audio-id');
            console.log('Master practice button clicked:', audioId);
            if (audioId) {
                playAudio(audioId, btn);
            }
        });
    });

    // Only keep the event listener for playing audio on mouth-diagram buttons
    document.querySelectorAll('.mouth-diagram').forEach(btn => {
        btn.addEventListener('click', function(e) {
            e.stopPropagation(); // Prevent triggering parent listeners
            const wordElem = btn.closest('.word');
            if (wordElem) {
                const word = wordElem.querySelector('strong').textContent.trim().toLowerCase();
                console.log('Mouth diagram clicked for word:', word);
                playAudio(word, btn);
            }
        });
    });

    // Initial progress
    updateProgress();

    // --- Session 1 Mini Quiz Logic ---
    const quizBtn1 = document.getElementById('session1QuizBtn');
    if (quizBtn1) {
        quizBtn1.addEventListener('click', function() {
            const form = document.getElementById('session1QuizForm');
            const resultDiv = document.getElementById('session1QuizResult');

            // Clear previous results styling
            form.querySelectorAll('label').forEach(label => {
                label.classList.remove('correct', 'incorrect');
            });

            const answers = {
                q1: 'bit',
                q2: 'beat',
                q3: 'caught'
            };

            let totalCorrect = 0;
            Object.keys(answers).forEach(qName => {
                const selectedRadio = form.querySelector(`input[name="${qName}"]:checked`);
                if (selectedRadio) {
                    const parentLabel = selectedRadio.parentElement;
                    const isCorrect = selectedRadio.value === answers[qName];
                    if (isCorrect) {
                        parentLabel.classList.add('correct');
                        totalCorrect++;
                    } else {
                        parentLabel.classList.add('incorrect');
                    }
                }
            });

            if (totalCorrect === Object.keys(answers).length) {
                resultDiv.textContent = '✅ Excellent! All answers are correct.';
                resultDiv.className = 'quiz-result correct';
            } else {
                resultDiv.textContent = `❌ You got ${totalCorrect} out of ${Object.keys(answers).length} correct. The incorrect answers are marked above.`;
                resultDiv.className = 'quiz-result incorrect';
            }
            resultDiv.hidden = false;
        });
    }

    // --- UX Improvement: Self-Check Logic ---
    const selfCheckboxes = document.querySelectorAll('.quick-assessment input[type="checkbox"]');
    const recommendationDiv = document.getElementById('assessmentRecommendation');

    function updateRecommendation() {
        const checkedItems = Array.from(selfCheckboxes)
            .filter(cb => cb.checked)
            .map(cb => {
                switch (cb.value) {
                    case 'th': return "'th' sounds";
                    case 'v-w': return "'v' vs 'w'";
                    case 'r': return "the British 'r'";
                    case 'final': return "final consonants";
                    default: return "other areas";
                }
            });

        if (checkedItems.length > 0) {
            recommendationDiv.innerHTML = `Great, we'll focus on ${checkedItems.join(', ')}.`;
            recommendationDiv.hidden = false;
        } else {
            recommendationDiv.hidden = true;
        }
    }

    selfCheckboxes.forEach(cb => cb.addEventListener('change', updateRecommendation));

    // --- Minimal Pairs Game logic (Session 2) ---
    const mpGameScore = document.getElementById('mpGameScore');
    let mpCorrect = 0;
    let mpTotal = 0;

    function updateMpScore() {
        if (mpTotal > 0) {
            mpGameScore.textContent = `Score: ${mpCorrect} / ${mpTotal}`;
        }
    }

    document.querySelectorAll('.minimal-pairs-quiz .mp-play').forEach(btn => {
        btn.addEventListener('click', function() {
            const word = btn.getAttribute('data-audio');
            lastPlayed[btn.closest('.mp-question')] = word;
            const audio = new Audio(`audio/session2/${word}.mp3`);
            audio.play();
        });
    });
    document.querySelectorAll('.minimal-pairs-quiz .mp-choice').forEach(btn => {
        btn.addEventListener('click', function() {
            const question = btn.closest('.mp-question');
            const feedbackSpan = question.querySelector('.mp-feedback');
            const correctAnswer = lastPlayed[question];
            const chosenAnswer = btn.getAttribute('data-answer');

            mpTotal++;

            if (correctAnswer && chosenAnswer === correctAnswer) {
                feedbackSpan.textContent = '✅ Correct!';
                feedbackSpan.classList.add('correct');
                feedbackSpan.classList.remove('incorrect');
                mpCorrect++;
            } else {
                feedbackSpan.textContent = '❌ Try again!';
                feedbackSpan.classList.add('incorrect');
                feedbackSpan.classList.remove('correct');
            }
            updateMpScore();
        });
    });
    // Initialize score display
    updateMpScore();

    // --- Scroll to Top Button functionality ---
    const scrollToTopBtn = document.getElementById('scrollToTop');
    
    if (scrollToTopBtn) {
        console.log('Scroll to top button found');
        
        // Show/hide scroll to top button based on scroll position
        function toggleScrollButton() {
            if (window.pageYOffset > 300) {
                scrollToTopBtn.classList.add('visible');
            } else {
                scrollToTopBtn.classList.remove('visible');
            }
        }

        // Smooth scroll to top when button is clicked
        function scrollToTop() {
            console.log('Scroll to top clicked');
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
        }

        // Event listeners for scroll button
        window.addEventListener('scroll', toggleScrollButton);
        scrollToTopBtn.addEventListener('click', scrollToTop);

        // Initial check on page load
        toggleScrollButton();
    } else {
        console.error('Scroll to top button not found');
    }
}); 