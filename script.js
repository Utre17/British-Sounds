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
audioMap['tourist-vw-1'] = ['Take the west exit and you\'ll see a wine shop.']; // Updated audio file for V/W practice
audioMap['tourist-vw-2'] = ['Go west on the wide avenue']; // Using actual uploaded file
audioMap['emergency-rl-1'] = ['Turn right at the red sign']; // Using actual uploaded file
audioMap['emergency-rl-2'] = ['The light is left of the door']; // Using actual uploaded file
audioMap['master-scenario'] = ['I think you should turn right and go west at the red light']; // Using actual uploaded file

// --- Audio mapping for Session 3: Word Stress ---
// Step 1: Stress Pattern Recognition
audioMap['present-stress'] = ['present-noun', 'present-verb']; // PRE-sent vs pre-SENT
audioMap['photograph-stress'] = ['photograph', 'photography']; // PHO-to-graph vs pho-TOG-ra-phy
audioMap['compound-stress'] = ['blackbird', 'black-bird']; // BLACKbird vs black BIRD

// Step 2: Interactive Practice
audioMap['important-stress'] = ['important']; // im-POR-tant stress identification
audioMap['sentence-stress-1'] = ['The photograph showed excellent photography..']; // Sentence stress practice

// Step 3: Professional Context
audioMap['business-stress'] = ['It\'s important to develop a comprehensive strategy for economic growth']; // Business context
audioMap['academic-stress'] = ['The university offers opportunities in photography and psychology']; // Academic context  
audioMap['daily-stress'] = ['I need to record this record and present it as a present']; // Daily life context
audioMap['development-stress'] = ['development']; // Development stress
audioMap['education-stress'] = ['education']; // Education stress
audioMap['machine-stress'] = ['machine-stress']; // Machine stress (if file exists)
audioMap['happy-stress'] = ['happy-stress']; // Happy stress (if file exists)
audioMap['complete-stress'] = ['complete-stress']; // Complete stress (if file exists)
audioMap['butter-stress'] = ['butter-stress']; // Butter stress (if file exists)

// --- Audio mapping for Session 4: Intonation & Emotion ---
// Step 1: Emotion Wheel - Individual emotions
audioMap['emotion-happy'] = ['That\'s wonderful news!']; // Happy emotion with rising intonation
audioMap['emotion-excited'] = ['I can\'t believe it!']; // Excited emotion with high-rise intonation
audioMap['emotion-curious'] = ['What do you think?']; // Curious emotion with rising intonation
audioMap['emotion-confident'] = ['I know exactly what to do.']; // Confident emotion with falling intonation
audioMap['emotion-disappointed'] = ['This isn\'t what I expected.']; // Disappointed emotion with low-fall intonation
audioMap['emotion-surprised'] = ['Really? That\'s amazing!']; // Surprised emotion with rise-fall intonation

// Step 2: Situation Matcher - Context-based audio
audioMap['situation-job-interview'] = ['I\'m very interested in this position.']; // Confident, professional tone
audioMap['situation-first-date'] = ['Tell me about yourself.']; // Curious, warm tone
audioMap['situation-family-dinner'] = ['How was your day?']; // Warm, caring tone
audioMap['situation-customer-complaint'] = ['I understand your frustration.']; // Empathetic, calm tone
audioMap['situation-celebration'] = ['Congratulations! Well done!']; // Excited, enthusiastic tone
audioMap['situation-apology'] = ['I\'m really sorry about that.']; // Sincere, apologetic tone

// Step 3: Conversation Builder - Scenario-based audio
audioMap['conversation-restaurant-1'] = ['I know, right?']; // Agreeing with enthusiasm
audioMap['conversation-restaurant-2'] = ['Could we have a few more minutes?']; // Polite request
audioMap['conversation-workplace-1'] = ['That sounds like a great idea.']; // Professional agreement
audioMap['conversation-workplace-2'] = ['Would you mind if I made a suggestion?']; // Polite professional tone
audioMap['conversation-social-1'] = ['Thanks for inviting me!']; // Grateful, warm tone
audioMap['conversation-social-2'] = ['I had such a wonderful time.']; // Expressing genuine pleasure

// Step 4: Tone Theater - Character-based audio
audioMap['character-teacher-1'] = ['That\'s absolutely brilliant!']; // Enthusiastic teacher praise
audioMap['character-teacher-2'] = ['Now this is the really exciting part!']; // Enthusiastic explanation
audioMap['character-customer-1'] = ['This is taking far too long!']; // Frustrated complaint
audioMap['character-customer-2'] = ['I want my money back.']; // Firm demand
audioMap['character-child-1'] = ['Is that really a real giraffe?']; // Amazed child question
audioMap['character-child-2'] = ['Can we have cake now?']; // Pleading child request
audioMap['character-counselor-1'] = ['Everything is going to be alright.']; // Soothing reassurance
audioMap['character-counselor-2'] = ['You\'re stronger than you think.']; // Encouraging support


// --- Audio mapping for Session 4: Intonation ---
// Step 1: Tone Awareness
audioMap['statement-question'] = ['You\'re going', 'You\'re going?']; // Statement vs question patterns
audioMap['wh-questions'] = ['What time?', 'What time.']; // Wh-question polite vs direct
audioMap['emotion-attitude'] = ['Really', 'Really']; // Emotional intonation variations

// Step 2: Emotional Context  
audioMap['excited-response'] = ['excited-response']; // Excited emotional response
audioMap['supportive-response'] = ['supportive-response']; // Supportive emotional response
audioMap['curious-response'] = ['curious-response']; // Curious emotional response

// Step 3: Conversational Flow
audioMap['business-conversation'] = ['business-conversation']; // Business meeting flow
audioMap['social-conversation'] = ['social-conversation']; // Social conversation flow
audioMap['service-conversation'] = ['service-conversation']; // Customer service flow

// Enhanced Session 4 audio mapping
// Emotion Wheel audio
audioMap['emotion-happy'] = ['emotion-happy']; // Happy emotion example
audioMap['emotion-excited'] = ['emotion-excited']; // Excited emotion example
audioMap['emotion-curious'] = ['emotion-curious']; // Curious emotion example
audioMap['emotion-confident'] = ['emotion-confident']; // Confident emotion example
audioMap['emotion-disappointed'] = ['emotion-disappointed']; // Disappointed emotion example
audioMap['emotion-surprised'] = ['emotion-surprised']; // Surprised emotion example

// --- Audio mapping for Session 5: Connected Speech ---
// Step 1: Linking Rules
audioMap['consonant-vowel-linking'] = ['turn off', 'turn_off']; // Consonant to vowel linking
audioMap['vowel-vowel-linking'] = ['go out', 'go_out']; // Vowel to vowel linking with intrusive sounds
audioMap['reductions'] = ['want to', 'wanna']; // Word reductions in natural speech

// Step 2: Speed Building
audioMap['phrase-slow'] = ['phrase-slow']; // Slow speed practice
audioMap['phrase-normal'] = ['phrase-normal']; // Normal speed with reductions
audioMap['phrase-fast'] = ['phrase-fast']; // Fast natural speech
audioMap['rhythm-chunks'] = ['rhythm-chunks']; // Rhythm chunk practice
audioMap['flow-passage'] = ['flow-passage']; // Extended passage

// Step 3: Natural Conversation
audioMap['casual-conversation'] = ['casual-conversation']; // Casual conversation flow
audioMap['phone-conversation'] = ['phone-conversation']; // Phone conversation flow
audioMap['storytelling-conversation'] = ['storytelling-conversation']; // Storytelling conversation flow

// --- Audio mapping for Session 6: Final Assessment ---
// Step 1: Diagnostic Review
audioMap['vowel-assessment-1'] = ['bit', 'beat']; // Vowel assessment test audio
audioMap['integration-assessment'] = ['integration-assessment']; // Business presentation excerpt for assessment

// Step 2: Personalized Practice
audioMap['presentation-challenge'] = ['presentation-challenge']; // Business presentation challenge
audioMap['social-challenge'] = ['social-challenge']; // Social dinner challenge
audioMap['model-sentence'] = ['model-sentence']; // Model sentence for self-assessment

// Step 3: Mastery Validation
audioMap['professional-mastery'] = ['professional-mastery']; // Executive presentation mastery
audioMap['social-mastery'] = ['social-mastery']; // Social hosting mastery
audioMap['teaching-mastery'] = ['teaching-mastery']; // Teaching excellence mastery

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
    const session3Ids = [
        'present-stress', 'photograph-stress', 'compound-stress',
        'important-stress', 'sentence-stress-1',
        'business-stress', 'academic-stress', 'daily-stress',
        'development-stress', 'education-stress', 'machine-stress',
        'happy-stress', 'complete-stress', 'butter-stress'
    ];
    const session4Ids = [
        'statement-question', 'wh-questions', 'emotion-attitude',
        'excited-response', 'supportive-response', 'curious-response',
        'business-conversation', 'social-conversation', 'service-conversation',
        'emotion-happy', 'emotion-excited', 'emotion-curious',
        'emotion-confident', 'emotion-disappointed', 'emotion-surprised'
    ];
    const session5Ids = [
        'consonant-vowel-linking', 'vowel-vowel-linking', 'reductions',
        'phrase-slow', 'phrase-normal', 'phrase-fast', 'rhythm-chunks', 'flow-passage',
        'casual-conversation', 'phone-conversation', 'storytelling-conversation'
    ];
    const session6Ids = [
        'vowel-assessment-1', 'integration-assessment',
        'presentation-challenge', 'social-challenge', 'model-sentence',
        'professional-mastery', 'social-mastery', 'teaching-mastery'
    ];
    const words = audioMap[audioId] || [audioId];
    let idx = 0;
    function playNext() {
        if (idx >= words.length) return;
        const word = words[idx];
        // Handle special cases for files with periods in the name
        let fileName;
        if (word === 'The photograph showed excellent photography..') {
            fileName = 'The photograph showed excellent photography..mp3';
        } else if (word === 'It\'s important to develop a comprehensive strategy for economic growth') {
            fileName = 'It\'s important to develop a comprehensive strategy for economic growth.mp3';
        } else if (word === 'The university offers opportunities in photography and psychology') {
            fileName = 'The university offers opportunities in photography and psychology.mp3';
        } else if (word === 'I need to record this record and present it as a present') {
            fileName = 'I need to record this record and present it as a present.mp3';
        } else {
            fileName = word + '.mp3';
        }
        let audioPath = 'audio/session1/';
        if (session2Ids.includes(audioId) || session2Ids.includes(word)) {
            audioPath = 'audio/session2/';
        } else if (session3Ids.includes(audioId) || session3Ids.includes(word)) {
            audioPath = 'audio/session3/';
            console.log('Session 3 audio detected:', audioId, word, fileName);
        } else if (session4Ids.includes(audioId) || session4Ids.includes(word)) {
            audioPath = 'audio/session4/';
        } else if (session5Ids.includes(audioId) || session5Ids.includes(word)) {
            audioPath = 'audio/session5/';
        } else if (session6Ids.includes(audioId) || session6Ids.includes(word)) {
            audioPath = 'audio/session6/';
        }
        const audio = new Audio(`${audioPath}${fileName}`);
        
        // Enhanced audio feedback
        audio.onerror = function() {
            console.warn(`Audio file not found: ${audioPath}${fileName}`);
            
            // Show user-friendly feedback instead of modal
            if (btn) {
                showAudioFeedback(btn, 'Audio not available in demo version', 'info');
            }
            
            // Continue to next audio if available
            idx++;
            playNext();
        };
        
        audio.onloadstart = function() {
            if (btn) {
                btn.classList.add('loading');
                showAudioFeedback(btn, 'Loading audio...', 'loading');
            }
        };
        
        audio.oncanplaythrough = function() {
            if (btn) {
                showAudioFeedback(btn, 'Playing audio', 'success');
            }
        };
        
        audio.onended = function() {
            if (btn) {
                btn.classList.remove('loading');
                showAudioFeedback(btn, 'Audio complete', 'success');
            }
            idx++;
            playNext();
        };
        
        audio.play().catch(error => {
            console.error('Audio play failed:', error);
            if (btn) {
                showAudioFeedback(btn, 'Audio play failed', 'error');
            }
        });
    }
    playNext();
}

function showAudioFeedback(button, message, type) {
    // Create or update feedback element
    let feedback = button.parentElement.querySelector('.audio-feedback');
    if (!feedback) {
        feedback = document.createElement('div');
        feedback.className = 'audio-feedback';
        button.parentElement.appendChild(feedback);
    }
    
    feedback.textContent = message;
    feedback.className = `audio-feedback ${type}`;
    feedback.style.display = 'block';
    
    // Auto-hide after 3 seconds for non-error messages
    if (type !== 'error') {
        setTimeout(() => {
            if (feedback && feedback.parentElement) {
                feedback.style.display = 'none';
            }
        }, 3000);
    }
}

function createRippleEffect(element) {
    const ripple = document.createElement('div');
    ripple.className = 'ripple-effect';
    
    const rect = element.getBoundingClientRect();
    const size = Math.max(rect.width, rect.height);
    
    ripple.style.width = ripple.style.height = size + 'px';
    ripple.style.left = (rect.width / 2 - size / 2) + 'px';
    ripple.style.top = (rect.height / 2 - size / 2) + 'px';
    
    element.style.position = 'relative';
    element.appendChild(ripple);
    
    // Remove ripple after animation
    setTimeout(() => {
        if (ripple.parentNode) {
            ripple.parentNode.removeChild(ripple);
        }
    }, 600);
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
    },
    session3: {
        step1: { completed: 0, total: 3 },  // Stress pattern recognition (present, photograph, compound)
        step2: { completed: 0, total: 3 },  // Interactive practice (identify, patterns, sentence)
        step3: { completed: 0, total: 3 }   // Professional context (business, academic, daily)
    },
    session4: {
        step1: { completed: 0, total: 3 },  // Tone awareness (statement-question, wh-questions, emotion-attitude)
        step2: { completed: 0, total: 3 },  // Emotional context (professional, social, emotional responses)
        step3: { completed: 0, total: 3 }   // Conversational flow (business, social, service conversations)
    },
    session5: {
        step1: { completed: 0, total: 3 },  // Linking rules (consonant-vowel, vowel-vowel, reductions)
        step2: { completed: 0, total: 3 },  // Speed building (progressive speed, rhythm chunks, flow challenge)
        step3: { completed: 0, total: 3 }   // Natural conversation (casual, phone, storytelling)
    },
    session6: {
        step1: { completed: 0, total: 3 },  // Diagnostic review (vowel assessment, consonant assessment, integration assessment)
        step2: { completed: 0, total: 3 },  // Personalized practice (weakness practice, mixed challenge, self-assessment)
        step3: { completed: 0, total: 3 }   // Mastery validation (professional, social, teaching mastery)
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
    
    // Initialize progress display for all sessions
    updateProgressDisplay('session1');
    updateProgressDisplay('session2');
    updateProgressDisplay('session3');
    
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
            const btnTextElement = this.querySelector('.btn-text');
            if (btnTextElement) {
                btnTextElement.textContent = 'Playing...';
            }
            
            // Play audio
            playAudioWithFeedback(audioId, this, () => {
                // Mark as completed
                markItemCompleted(card, itemNumber, 'session1', 1);
                
                // Reset button state
                this.classList.remove('loading');
                if (btnTextElement) {
                    btnTextElement.textContent = 'Listen & Practice';
                }
                
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
            const btnTextElement = this.querySelector('.btn-text');
            if (btnTextElement) {
                btnTextElement.textContent = 'Playing...';
            }
            
            // Play audio
            playAudioWithFeedback(audioId, this, () => {
                // Mark as completed
                markItemCompleted(card, itemNumber, 'session1', 3);
                
                // Reset button state
                this.classList.remove('loading');
                if (btnTextElement) {
                    btnTextElement.textContent = 'Listen & Repeat';
                }
                
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

    // Session 3: Stress Pattern Recognition (Step 1)
    const session3StepOneButtons = document.querySelectorAll('#session3 .rhythm-play-btn, #session3 .wave-play-btn, #session3 .listen-btn.primary');
    session3StepOneButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            const card = this.closest('.learning-card, .rhythm-content, .card-content');
            let itemNumber = 1; // Default to step 1
            
            if (card && card.getAttribute('data-item')) {
                itemNumber = parseInt(card.getAttribute('data-item'));
            }
            
            console.log('Session 3 Step 1 button clicked:', audioId, itemNumber, 'card:', card);
            
            // Add loading state
            this.classList.add('loading');
            const btnTextElement = this.querySelector('.btn-text');
            const originalText = btnTextElement ? btnTextElement.textContent : 'Play';
            if (btnTextElement) {
                btnTextElement.textContent = 'Playing...';
            }
            
            // Play audio
            playAudioWithFeedback(audioId, this, () => {
                // Mark as completed (only if card exists)
                if (card) {
                    markItemCompleted(card, itemNumber, 'session3', 1);
                }
                
                // Reset button state
                this.classList.remove('loading');
                if (btnTextElement) {
                    btnTextElement.textContent = originalText;
                }
                
                // Update progress
                updateStepProgress('session3', 1, itemNumber);
            });
        });
    });

    // Session 3: Interactive Practice (Step 2)
    const session3StepTwoButtons = document.querySelectorAll('#session3 .play-word-btn, #session3 .practice-audio');
    session3StepTwoButtons.forEach(button => {
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            const card = this.closest('.learning-card, .stress-exercise, .sentence-stress-practice');
            let itemNumber = 2; // Default to step 2
            
            if (card && card.getAttribute('data-item')) {
                itemNumber = parseInt(card.getAttribute('data-item'));
            }
            
            console.log('Session 3 Step 2 button clicked:', audioId, itemNumber, 'card:', card);
            
            // Add loading state (COPIED FROM STEP 1)
            this.classList.add('loading');
            const btnTextElement = this.querySelector('.btn-text');
            const originalText = btnTextElement ? btnTextElement.textContent : 'Play';
            if (btnTextElement) {
                btnTextElement.textContent = 'Playing...';
            }
            
            // Play audio (COPIED FROM STEP 1)
            playAudioWithFeedback(audioId, this, () => {
                // Mark as completed (only if card exists)
                if (card) {
                    markItemCompleted(card, itemNumber, 'session3', 2);
                }
                
                // Reset button state (COPIED FROM STEP 1)
                this.classList.remove('loading');
                if (btnTextElement) {
                    btnTextElement.textContent = originalText;
                }
                
                // Update progress
                updateStepProgress('session3', 2, itemNumber);
            });
        });
    });

    // Session 3: Professional Context (Step 3)
    const session3StepThreeButtons = document.querySelectorAll('#session3 .context-audio');
    console.log('Session 3 Step 3 buttons found:', session3StepThreeButtons.length, session3StepThreeButtons);
    session3StepThreeButtons.forEach(button => {
        console.log('Attaching Step 3 event listener to button:', button, button.getAttribute('data-audio-id'));
        button.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            const card = this.closest('.learning-card, .context-section, .context-content');
            let itemNumber = 3; // Default to step 3
            
            if (card && card.getAttribute('data-item')) {
                itemNumber = parseInt(card.getAttribute('data-item'));
            }
            
            console.log('Session 3 Step 3 button clicked:', audioId, itemNumber, 'card:', card);
            
            // Add loading state (EXACT COPY FROM STEP 1)
            this.classList.add('loading');
            const btnTextElement = this.querySelector('.btn-text');
            const originalText = btnTextElement ? btnTextElement.textContent : 'Play';
            if (btnTextElement) {
                btnTextElement.textContent = 'Playing...';
            }
            
            // Play audio (EXACT COPY FROM STEP 1)
            playAudioWithFeedback(audioId, this, () => {
                // Mark as completed (only if card exists)
                if (card) {
                    markItemCompleted(card, itemNumber, 'session3', 3);
                }
                
                // Reset button state (EXACT COPY FROM STEP 1)
                this.classList.remove('loading');
                if (btnTextElement) {
                    btnTextElement.textContent = originalText;
                }
                
                // Update progress
                updateStepProgress('session3', 3, itemNumber);
            });
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
    const btnTextElement = button.querySelector('.btn-text');
    const originalText = btnTextElement ? btnTextElement.textContent : 'Play';
    
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
        if (btnTextElement) {
            btnTextElement.textContent = originalText;
        }
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
            } else if (session === 'session3') {
                const stepNames = ['Visual Rhythms', 'Interactive Practice', 'Professional Context'];
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
            const btnTextElement = this.querySelector('.btn-text');
            if (btnTextElement) {
                btnTextElement.textContent = 'Playing...';
            }
            
            // Play audio with enhanced feedback
            playAudioWithFeedback(audioId, button, () => {
                // Mark as completed if played 3 times
                if (currentCount >= 3) {
                    markSentenceCompleted(card);
                }
                
                // Reset button state
                this.classList.remove('playing');
                if (btnTextElement) {
                    btnTextElement.textContent = 'Listen & Repeat';
                }
                
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
                const btnTextElement = this.querySelector('.btn-text');
                if (btnTextElement) {
                    btnTextElement.textContent = 'Listening...';
                }
                
                playAudio(audioId, button);
                
                setTimeout(() => {
                    this.classList.remove('active');
                    if (btnTextElement) {
                        btnTextElement.textContent = 'Listen First';
                    }
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
    const shadowBtnTextElement = shadowButton.querySelector('.btn-text');
    if (shadowBtnTextElement) {
        shadowBtnTextElement.textContent = 'Shadowing...';
    }
    
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
    const shadowBtnTextElement = shadowButton.querySelector('.btn-text');
    if (shadowBtnTextElement) {
        shadowBtnTextElement.textContent = 'Shadow Challenge';
    }
    
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
    
    // Initialize Session 3 interactive elements
    initializeSession3Games();
    
    // Initialize Session 4 interactive elements
    initializeSession4Games();
    
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
        // Check if this is Session 3 stress pattern matching
        if (this.hasAttribute('data-accepts')) {
            handleSession3StressPatternDrop(e, this);
        } else {
            // Original logic for other sessions
            const targetCategory = this.getAttribute('data-target');
            const wordCategory = draggedElement.getAttribute('data-sound');
            
            // Check if the drop is correct
            const isCorrect = (targetCategory === wordCategory) || 
                             (targetCategory === 'central' && wordCategory === 'central') ||
                             (targetCategory === 'back' && wordCategory === 'back');
            
            if (isCorrect) {
                // Move the word to the drop zone
                const zoneContent = this.querySelector('.zone-content');
                if (zoneContent) {
                    zoneContent.appendChild(draggedElement);
                } else {
                    this.appendChild(draggedElement);
                }
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
}

function handleSession3StressPatternDrop(e, dropZone) {
    const acceptedPattern = dropZone.getAttribute('data-accepts');
    const wordPattern = draggedElement.getAttribute('data-pattern');
    
    // Check if word pattern matches the drop zone pattern
    if (wordPattern === acceptedPattern) {
        // Move the word to the drop zone
        dropZone.appendChild(draggedElement);
        draggedElement.classList.add('correctly-placed');
        
        // Visual feedback for correct placement
        dropZone.classList.add('correct-drop');
        
        // Check if Session 3 exercise is complete
        checkSession3StressPatternCompletion(dropZone.closest('.practice-exercise-card'));
        
        // Show success feedback
        showFeedback(`Correct! "${draggedElement.textContent}" has ${acceptedPattern === '1-2' ? 'weak-STRONG' : 'STRONG-weak'} stress pattern.`, 'success');
    } else {
        // Incorrect placement - show error and don't move word
        dropZone.classList.add('incorrect-drop');
        
        // Remove error styling after animation
        setTimeout(() => {
            dropZone.classList.remove('incorrect-drop');
        }, 1000);
        
        // Show error feedback with explanation
        const correctPattern = wordPattern === '1-2' ? 'weak-STRONG' : 'STRONG-weak';
        showFeedback(`Not quite! "${draggedElement.textContent}" has ${correctPattern} stress pattern.`, 'error');
    }
}

function checkSession3StressPatternCompletion(card) {
    const allDropZones = card.querySelectorAll('.drop-zone');
    let totalCorrectPlacements = 0;
    
    allDropZones.forEach(zone => {
        const wordsInZone = zone.querySelectorAll('.draggable-word.correctly-placed');
        totalCorrectPlacements += wordsInZone.length;
    });
    
    // Exercise is complete when all 8 words are correctly placed
    if (totalCorrectPlacements === 8) {
        // Mark exercise as completed
        card.classList.add('completed');
        
        // Update status icon
        const statusIcon = card.querySelector('.status-icon');
        if (statusIcon) {
            statusIcon.setAttribute('data-status', 'completed');
            statusIcon.textContent = '✓';
        }
        
        // Update Session 3 Step 2 progress
        const itemNumber = parseInt(card.getAttribute('data-item'));
        markItemCompleted(card, itemNumber, 'session3', 2);
        updateStepProgress('session3', 2, itemNumber);
        
        // Show completion message
        showFeedback('🎉 Excellent! You\'ve mastered stress pattern matching!', 'success');
    }
}

function initializeSession3Games() {
    // Initialize clapping games
    initializeClappingGames();
    
    // Initialize stress shifter games
    initializeStressShifterGames();
    
    // Initialize syllable clicking
    initializeSyllableClicking();
    
    // Initialize metronome functionality
    initializeMetronome();
    
    // Initialize waveform displays
    initializeWaveformDisplays();
    
    console.log('Session 3 games initialized');
}

function initializeConversationBuilder() {
    const scenarioButtons = document.querySelectorAll('.scenario-btn');
    const conversationCanvas = document.getElementById('conversation-canvas');
    const conversationScenarios = document.querySelectorAll('.conversation-scenario');
    
    let currentScenario = 'restaurant';
    let completedLines = 0;
    let totalLines = 0;
    
    // Initialize scenario switching
    scenarioButtons.forEach(btn => {
        btn.addEventListener('click', function() {
            const scenario = this.getAttribute('data-scenario');
            switchScenario(scenario);
        });
    });
    
    // Initialize response options
    initializeResponseOptions();
    
    function switchScenario(scenario) {
        currentScenario = scenario;
        
        // Update active scenario button
        scenarioButtons.forEach(btn => {
            btn.classList.remove('active');
            if (btn.getAttribute('data-scenario') === scenario) {
                btn.classList.add('active');
            }
        });
        
        // Update active scenario content
        conversationScenarios.forEach(scenarioDiv => {
            scenarioDiv.classList.remove('active');
            if (scenarioDiv.getAttribute('data-scenario') === scenario) {
                scenarioDiv.classList.add('active');
            }
        });
        
        // Reset progress for new scenario
        completedLines = 0;
        updateScenarioProgress();
        
        // Re-initialize response options for new scenario
        initializeResponseOptions();
    }
    
    function initializeResponseOptions() {
        const activeScenario = document.querySelector('.conversation-scenario.active');
        if (!activeScenario) return;
        
        const responseOptions = activeScenario.querySelectorAll('.response-option');
        const lineBuilders = activeScenario.querySelectorAll('.line-builder');
        
        totalLines = lineBuilders.length;
        
        responseOptions.forEach(option => {
            option.addEventListener('click', function() {
                handleResponseSelection(this);
            });
        });
    }
    
    function handleResponseSelection(selectedOption) {
        const lineBuilder = selectedOption.closest('.line-builder');
        const responseOptions = lineBuilder.querySelectorAll('.response-option');
        const isCorrect = selectedOption.getAttribute('data-correct') === 'true';
        
        // Disable all options in this line
        responseOptions.forEach(option => {
            option.disabled = true;
        });
        
        // Add visual feedback
        if (isCorrect) {
            selectedOption.classList.add('correct');
            lineBuilder.classList.add('completed');
            completedLines++;
            
            // Play success sound effect
            createRippleEffect(selectedOption);
            
            // Show correct feedback
            showConversationFeedback(selectedOption, 'Perfect! That tone matches the context beautifully.', 'success');
        } else {
            selectedOption.classList.add('incorrect');
            
            // Highlight correct answer
            const correctOption = lineBuilder.querySelector('.response-option[data-correct="true"]');
            if (correctOption) {
                correctOption.classList.add('correct-highlight');
            }
            
            // Show incorrect feedback
            showConversationFeedback(selectedOption, 'Not quite right. The correct tone is highlighted.', 'error');
        }
        
        // Update progress
        updateScenarioProgress();
        
        // Check if scenario is complete
        if (completedLines === totalLines) {
            completeConversationScenario();
        }
    }
    
    function showConversationFeedback(element, message, type) {
        const feedback = document.createElement('div');
        feedback.className = `conversation-feedback ${type}`;
        feedback.textContent = message;
        
        element.parentElement.appendChild(feedback);
        
        // Auto-remove feedback after 3 seconds
        setTimeout(() => {
            feedback.remove();
        }, 3000);
    }
    
    function updateScenarioProgress() {
        const progressText = document.querySelector('.scenario-progress');
        if (progressText) {
            progressText.textContent = `${completedLines}/${totalLines} lines completed`;
        }
    }
    
    function completeConversationScenario() {
        const activeScenario = document.querySelector('.conversation-scenario.active');
        if (activeScenario) {
            activeScenario.classList.add('completed');
            
            // Mark step as completed
            const builderExercise = document.querySelector('.builder-exercise');
            const itemNumber = parseInt(builderExercise.getAttribute('data-item'));
            markItemCompleted(builderExercise, itemNumber, 'session4', 3);
            updateStepProgress('session4', 3, itemNumber);
            
            // Show completion feedback
            const scenarioName = currentScenario.charAt(0).toUpperCase() + currentScenario.slice(1);
            showModal(`${scenarioName} Conversation Mastered!`, 
                     `🎉 Excellent! You've mastered the ${scenarioName} scenario. Ready for the final challenge?`, 
                     'success');
        }
    }
}

function initializeToneTheater() {
    const characterCards = document.querySelectorAll('.character-card');
    const theaterStage = document.getElementById('theater-stage');
    const stageHeader = document.querySelector('.stage-header');
    const currentCharacterDiv = document.querySelector('.current-character');
    const scenarioText = document.querySelector('.scenario-text');
    const lineToPerform = document.querySelector('.line-to-perform');
    const sceneCounter = document.querySelector('.scene-counter');
    const recordBtn = document.getElementById('record-performance');
    const exampleBtn = document.getElementById('hear-example');
    const performanceFeedback = document.getElementById('performance-feedback');
    
    let currentCharacter = null;
    let currentScene = 1;
    let completedScenes = 0;
    const totalScenes = 3;
    
    // Character scenarios and lines
    const characterScenarios = {
        'enthusiastic-teacher': [
            {
                scenario: "You're encouraging a student who got their first A+",
                line: "That's absolutely brilliant! You should be so proud of yourself!",
                emotion: "excited",
                tone: "rising"
            },
            {
                scenario: "You're explaining a difficult concept with enthusiasm",
                line: "Now this is the really exciting part of the lesson!",
                emotion: "enthusiastic",
                tone: "high-rise"
            },
            {
                scenario: "You're praising the class for good work",
                line: "Everyone did such wonderful work today!",
                emotion: "proud",
                tone: "warm-falling"
            }
        ],
        'grumpy-customer': [
            {
                scenario: "You're complaining about slow service at a restaurant",
                line: "This is taking far too long! Where's my order?",
                emotion: "frustrated",
                tone: "sharp-fall"
            },
            {
                scenario: "You're returning a faulty product",
                line: "This doesn't work properly. I want my money back.",
                emotion: "demanding",
                tone: "firm-fall"
            },
            {
                scenario: "You're expressing disappointment with poor quality",
                line: "I expected much better than this for the price.",
                emotion: "disappointed",
                tone: "low-fall"
            }
        ],
        'excited-child': [
            {
                scenario: "You just saw your favorite animal at the zoo",
                line: "Look! Look! Is that really a real giraffe?",
                emotion: "amazed",
                tone: "high-rise"
            },
            {
                scenario: "You're asking about your birthday party",
                line: "Can we have cake now? Please? Pretty please?",
                emotion: "pleading",
                tone: "rising"
            },
            {
                scenario: "You're telling about something incredible",
                line: "You'll never believe what happened at school today!",
                emotion: "excited",
                tone: "dramatic-rise"
            }
        ],
        'calm-counselor': [
            {
                scenario: "You're reassuring someone who's anxious",
                line: "Take a deep breath. Everything is going to be alright.",
                emotion: "soothing",
                tone: "gentle-fall"
            },
            {
                scenario: "You're offering support to someone upset",
                line: "I can see this is really difficult for you.",
                emotion: "empathetic",
                tone: "warm-fall"
            },
            {
                scenario: "You're encouraging someone to try again",
                line: "You're stronger than you think. You can do this.",
                emotion: "encouraging",
                tone: "confident-rise"
            }
        ]
    };
    
    // Initialize character selection
    characterCards.forEach(card => {
        card.addEventListener('click', function() {
            const character = this.getAttribute('data-character');
            selectCharacter(character);
        });
    });
    
    // Initialize performance buttons
    if (recordBtn) {
        recordBtn.addEventListener('click', recordPerformance);
    }
    
    if (exampleBtn) {
        exampleBtn.addEventListener('click', playExample);
    }
    
    function selectCharacter(characterId) {
        currentCharacter = characterId;
        currentScene = 1;
        completedScenes = 0;
        
        // Update character cards
        characterCards.forEach(card => {
            card.classList.remove('selected');
            if (card.getAttribute('data-character') === characterId) {
                card.classList.add('selected');
            }
        });
        
        // Show theater stage
        theaterStage.removeAttribute('hidden');
        
        // Load first scene
        loadScene(1);
    }
    
    function loadScene(sceneNumber) {
        const scenarios = characterScenarios[currentCharacter];
        if (!scenarios || sceneNumber > scenarios.length) return;
        
        const scenario = scenarios[sceneNumber - 1];
        
        // Update character display
        const characterCard = document.querySelector(`[data-character="${currentCharacter}"]`);
        const characterName = characterCard.querySelector('.character-name').textContent;
        const characterAvatar = characterCard.querySelector('.character-avatar').textContent;
        
        currentCharacterDiv.innerHTML = `
            <div class="character-display">
                <span class="character-avatar">${characterAvatar}</span>
                <span class="character-name">${characterName}</span>
            </div>
        `;
        
        // Update scene counter
        sceneCounter.textContent = `Scene ${sceneNumber} of ${totalScenes}`;
        
        // Update scenario and line
        scenarioText.innerHTML = `<strong>Scenario:</strong> ${scenario.scenario}`;
        lineToPerform.innerHTML = `<strong>Your line:</strong> "${scenario.line}"`;
        
        // Enable buttons
        recordBtn.disabled = false;
        exampleBtn.disabled = false;
        
        // Clear previous feedback
        performanceFeedback.setAttribute('hidden', '');
        performanceFeedback.innerHTML = '';
    }
    
    function recordPerformance() {
        // Simulate recording feedback
        const scenario = characterScenarios[currentCharacter][currentScene - 1];
        
        // Add visual feedback
        createRippleEffect(recordBtn);
        
        // Simulate analysis delay
        recordBtn.disabled = true;
        recordBtn.innerHTML = '<span class="btn-icon">⏳</span><span class="btn-text">Analyzing...</span>';
        
        setTimeout(() => {
            // Reset button
            recordBtn.disabled = false;
            recordBtn.innerHTML = '<span class="btn-icon">🎤</span><span class="btn-text">Record Your Performance</span>';
            
            // Show feedback
            showPerformanceFeedback(scenario);
            
            // Move to next scene
            completedScenes++;
            
            if (currentScene < totalScenes) {
                currentScene++;
                setTimeout(() => {
                    loadScene(currentScene);
                }, 3000); // Give time to read feedback
            } else {
                // All scenes completed
                completeToneTheater();
            }
        }, 2000);
    }
    
    function playExample() {
        const scenario = characterScenarios[currentCharacter][currentScene - 1];
        
        // Add visual feedback
        createRippleEffect(exampleBtn);
        
        // Simulate playing example
        exampleBtn.disabled = true;
        exampleBtn.innerHTML = '<span class="btn-icon">🔊</span><span class="btn-text">Playing...</span>';
        
        setTimeout(() => {
            exampleBtn.disabled = false;
            exampleBtn.innerHTML = '<span class="btn-icon">🎧</span><span class="btn-text">Hear Example</span>';
            
            // Show example feedback
            showExampleFeedback(scenario);
        }, 1500);
    }
    
    function showPerformanceFeedback(scenario) {
        const feedback = document.getElementById('performance-feedback');
        
        // Generate positive feedback
        const feedbackMessages = [
            "Excellent emotional expression!",
            "Perfect tone for that character!",
            "Great job capturing the mood!",
            "Wonderful intonation choice!",
            "You really brought that character to life!"
        ];
        
        const randomFeedback = feedbackMessages[Math.floor(Math.random() * feedbackMessages.length)];
        
        feedback.innerHTML = `
            <div class="feedback-content success">
                <div class="feedback-icon">🎭</div>
                <div class="feedback-text">
                    <strong>${randomFeedback}</strong>
                    <p>Your ${scenario.emotion} tone with ${scenario.tone} intonation was spot on!</p>
                </div>
            </div>
        `;
        
        feedback.removeAttribute('hidden');
    }
    
    function showExampleFeedback(scenario) {
        const feedback = document.getElementById('performance-feedback');
        
        feedback.innerHTML = `
            <div class="feedback-content example">
                <div class="feedback-icon">🎧</div>
                <div class="feedback-text">
                    <strong>Example Analysis</strong>
                    <p>Notice the ${scenario.emotion} emotion expressed through ${scenario.tone} intonation.</p>
                    <p>Try to match this emotional intensity in your performance.</p>
                </div>
            </div>
        `;
        
        feedback.removeAttribute('hidden');
    }
    
    function completeToneTheater() {
        const theaterExercise = document.querySelector('.theater-exercise');
        if (theaterExercise) {
            theaterExercise.classList.add('completed');
            
            // Mark step as completed
            const itemNumber = parseInt(theaterExercise.getAttribute('data-item'));
            markItemCompleted(theaterExercise, itemNumber, 'session4', 4);
            updateStepProgress('session4', 4, itemNumber);
            
            // Show completion feedback
            const characterCard = document.querySelector(`[data-character="${currentCharacter}"]`);
            const characterName = characterCard.querySelector('.character-name').textContent;
            
            showModal('Tone Theater Mastered!', 
                     `🎭 Outstanding performance! You've mastered the ${characterName} character and completed Session 4!`, 
                     'success');
        }
    }
}

function initializeSession4Games() {
    // Initialize emotion wheel
    initializeEmotionWheel();
    
    // Initialize situation matcher
    initializeSituationMatcher();
    
    // Initialize conversation builder
    initializeConversationBuilder();
    
    // Initialize tone theater
    initializeToneTheater();
    
    console.log('Session 4 games initialized');
}

function initializeEmotionWheel() {
    const emotionSegments = document.querySelectorAll('.emotion-segment');
    const emotionExample = document.getElementById('emotion-example');
    const exampleSentence = emotionExample?.querySelector('.example-sentence');
    const toneVisualization = emotionExample?.querySelector('.tone-visualization');
    const emotionAudioBtn = emotionExample?.querySelector('.emotion-audio-btn');
    
    // Define example sentences for each emotion
    const emotionData = {
        'happy': {
            sentence: 'That\'s wonderful news!',
            tone: 'rising',
            pattern: '↗',
            description: 'Rising intonation shows enthusiasm and positivity',
            color: '#10b981'
        },
        'excited': {
            sentence: 'I can\'t believe it!',
            tone: 'high-rise',
            pattern: '↗↗',
            description: 'High rising tone conveys intense excitement',
            color: '#f59e0b'
        },
        'curious': {
            sentence: 'What do you think?',
            tone: 'rising',
            pattern: '↗',
            description: 'Rising tone invites response and shows interest',
            color: '#3b82f6'
        },
        'confident': {
            sentence: 'I know exactly what to do.',
            tone: 'falling',
            pattern: '↘',
            description: 'Falling tone shows certainty and authority',
            color: '#8b5cf6'
        },
        'disappointed': {
            sentence: 'That\'s not what I expected.',
            tone: 'low-fall',
            pattern: '↘↘',
            description: 'Low falling tone expresses disappointment',
            color: '#ef4444'
        },
        'surprised': {
            sentence: 'I didn\'t expect that!',
            tone: 'rise-fall',
            pattern: '↗↘',
            description: 'Rise-fall pattern shows genuine surprise',
            color: '#06b6d4'
        }
    };
    
    let currentEmotion = null;
    let completedEmotions = new Set();
    
    emotionSegments.forEach(segment => {
        segment.addEventListener('click', function() {
            const emotion = this.getAttribute('data-emotion');
            const emotionInfo = emotionData[emotion];
            
            if (!emotionInfo) return;
            
            // Remove active state from all segments
            emotionSegments.forEach(seg => seg.classList.remove('active'));
            
            // Add active state to clicked segment
            this.classList.add('active');
            
            // Update current emotion
            currentEmotion = emotion;
            
            // Show emotion example
            if (emotionExample) {
                emotionExample.removeAttribute('hidden');
                
                // Update sentence
                if (exampleSentence) {
                    exampleSentence.textContent = emotionInfo.sentence;
                    exampleSentence.style.color = emotionInfo.color;
                }
                
                // Update tone visualization
                if (toneVisualization) {
                    createToneVisualization(toneVisualization, emotionInfo);
                }
                
                // Update audio button
                if (emotionAudioBtn) {
                    emotionAudioBtn.setAttribute('data-audio-id', `emotion-${emotion}`);
                    const emotionBtnTextElement = emotionAudioBtn.querySelector('.btn-text');
                    if (emotionBtnTextElement) {
                        emotionBtnTextElement.textContent = `Practice ${emotion.charAt(0).toUpperCase() + emotion.slice(1)} Tone`;
                    }
                }
            }
            
            // Add visual feedback
            this.style.transform = 'scale(1.1)';
            setTimeout(() => {
                this.style.transform = 'scale(1)';
            }, 200);
        });
        
        // Add hover effects
        segment.addEventListener('mouseenter', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1.05)';
                this.style.filter = 'brightness(1.1)';
            }
        });
        
        segment.addEventListener('mouseleave', function() {
            if (!this.classList.contains('active')) {
                this.style.transform = 'scale(1)';
                this.style.filter = 'brightness(1)';
            }
        });
    });
    
    // Initialize emotion audio buttons
    if (emotionAudioBtn) {
        emotionAudioBtn.addEventListener('click', function() {
            const audioId = this.getAttribute('data-audio-id');
            if (audioId && currentEmotion) {
                // Add to completed emotions
                completedEmotions.add(currentEmotion);
                
                // Visual feedback
                createRippleEffect(this);
                
                // Play audio
                playAudio(audioId, this);
                
                // Mark emotion as practiced
                const activeSegment = document.querySelector('.emotion-segment.active');
                if (activeSegment) {
                    activeSegment.classList.add('practiced');
                }
                
                // Check if all emotions are practiced
                if (completedEmotions.size === 6) {
                    markEmotionWheelComplete();
                }
            }
        });
    }
}

function createToneVisualization(container, emotionInfo) {
    container.innerHTML = '';
    
    const canvas = document.createElement('canvas');
    canvas.width = 300;
    canvas.height = 80;
    canvas.style.border = '2px solid #e5e7eb';
    canvas.style.borderRadius = '8px';
    canvas.style.background = '#f9fafb';
    
    const ctx = canvas.getContext('2d');
    
    // Draw tone pattern
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.strokeStyle = emotionInfo.color;
    ctx.lineWidth = 3;
    ctx.lineCap = 'round';
    
    ctx.beginPath();
    
    // Draw different patterns based on tone
    switch (emotionInfo.tone) {
        case 'rising':
            ctx.moveTo(50, 60);
            ctx.quadraticCurveTo(150, 40, 250, 20);
            break;
        case 'falling':
            ctx.moveTo(50, 20);
            ctx.quadraticCurveTo(150, 40, 250, 60);
            break;
        case 'high-rise':
            ctx.moveTo(50, 70);
            ctx.quadraticCurveTo(100, 30, 150, 10);
            ctx.quadraticCurveTo(200, 5, 250, 5);
            break;
        case 'low-fall':
            ctx.moveTo(50, 30);
            ctx.quadraticCurveTo(150, 50, 250, 70);
            break;
        case 'rise-fall':
            ctx.moveTo(50, 50);
            ctx.quadraticCurveTo(120, 20, 150, 15);
            ctx.quadraticCurveTo(180, 20, 250, 55);
            break;
    }
    
    ctx.stroke();
    
    // Add pattern symbol
    ctx.fillStyle = emotionInfo.color;
    ctx.font = '24px Arial';
    ctx.textAlign = 'center';
    ctx.fillText(emotionInfo.pattern, canvas.width - 30, 30);
    
    // Add description
    const description = document.createElement('p');
    description.textContent = emotionInfo.description;
    description.style.marginTop = '10px';
    description.style.fontSize = '14px';
    description.style.color = '#6b7280';
    description.style.textAlign = 'center';
    
    container.appendChild(canvas);
    container.appendChild(description);
}

function markEmotionWheelComplete() {
    const emotionWheel = document.querySelector('.emotion-wheel');
    if (emotionWheel) {
        emotionWheel.classList.add('completed');
        
        // Mark step as completed
        const itemNumber = parseInt(emotionWheel.getAttribute('data-item'));
        markItemCompleted(emotionWheel, itemNumber, 'session4', 1);
        updateStepProgress('session4', 1, itemNumber);
        
        // Show completion feedback
        showModal('Emotion Wheel Mastered!', 'Excellent! You\'ve practiced all 6 emotions. You\'re ready for the Situation Matcher!', 'success');
    }
}

function initializeSituationMatcher() {
    const toneCards = document.querySelectorAll('.tone-card.draggable');
    const dropZones = document.querySelectorAll('.situation-card .drop-zone');
    const scoreDisplay = document.getElementById('match-score');
    
    let draggedTone = null;
    let currentScore = 0;
    let maxScore = 6;
    
    // Initialize drag and drop
    toneCards.forEach(card => {
        card.draggable = true;
        card.addEventListener('dragstart', handleToneDragStart);
        card.addEventListener('dragend', handleToneDragEnd);
    });
    
    dropZones.forEach(zone => {
        zone.addEventListener('dragover', handleToneDragOver);
        zone.addEventListener('drop', handleToneDrop);
        zone.addEventListener('dragenter', handleToneDragEnter);
        zone.addEventListener('dragleave', handleToneDragLeave);
    });
    
    function handleToneDragStart(e) {
        draggedTone = this;
        this.style.opacity = '0.5';
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.outerHTML);
    }
    
    function handleToneDragEnd(e) {
        this.style.opacity = '1';
        draggedTone = null;
    }
    
    function handleToneDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }
    
    function handleToneDragEnter(e) {
        e.preventDefault();
        this.classList.add('drag-over');
        this.parentElement.classList.add('drag-highlight');
    }
    
    function handleToneDragLeave(e) {
        this.classList.remove('drag-over');
        this.parentElement.classList.remove('drag-highlight');
    }
    
    function handleToneDrop(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        this.parentElement.classList.remove('drag-highlight');
        
        if (draggedTone) {
            const correctTone = this.getAttribute('data-correct-tone');
            const droppedTone = draggedTone.getAttribute('data-tone');
            
            // Check if drop is correct
            if (correctTone === droppedTone) {
                // Correct match
                this.appendChild(draggedTone.cloneNode(true));
                draggedTone.remove();
                
                // Update visual feedback
                this.classList.add('correct-match');
                this.parentElement.classList.add('matched');
                
                // Update score
                currentScore++;
                updateScore();
                
                // Show success feedback
                showSituationFeedback('Correct match!', 'success');
                
                // Check if all matches complete
                if (currentScore === maxScore) {
                    completeSituationMatcher();
                }
            } else {
                // Incorrect match
                this.classList.add('incorrect-match');
                
                // Remove incorrect styling after animation
                setTimeout(() => {
                    this.classList.remove('incorrect-match');
                }, 1000);
                
                // Show error feedback
                showSituationFeedback('Not quite right. Try a different tone!', 'error');
            }
        }
    }
    
    function updateScore() {
        if (scoreDisplay) {
            scoreDisplay.textContent = currentScore;
            
            // Add score animation
            scoreDisplay.style.transform = 'scale(1.2)';
            scoreDisplay.style.color = 'var(--success)';
            
            setTimeout(() => {
                scoreDisplay.style.transform = 'scale(1)';
                scoreDisplay.style.color = 'var(--text-primary)';
            }, 300);
        }
    }
    
    function showSituationFeedback(message, type) {
        const feedback = document.getElementById('matching-feedback');
        if (feedback) {
            feedback.textContent = message;
            feedback.className = `matching-feedback ${type}`;
            feedback.removeAttribute('hidden');
            
            // Auto-hide after 3 seconds
            setTimeout(() => {
                feedback.setAttribute('hidden', '');
            }, 3000);
        }
    }
    
    function completeSituationMatcher() {
        const matchingExercise = document.querySelector('.matching-exercise');
        if (matchingExercise) {
            matchingExercise.classList.add('completed');
            
            // Mark step as completed
            const itemNumber = parseInt(matchingExercise.getAttribute('data-item'));
            markItemCompleted(matchingExercise, itemNumber, 'session4', 2);
            updateStepProgress('session4', 2, itemNumber);
            
            // Show completion feedback
            showModal('Situation Matcher Mastered!', '🎉 Perfect! You\'ve matched all situations with their appropriate tones. Ready for the Conversation Builder!', 'success');
        }
    }
    
    // Add reset functionality
    const resetButton = document.createElement('button');
    resetButton.className = 'reset-btn';
    resetButton.innerHTML = '<span class="btn-icon">🔄</span><span class="btn-text">Reset Game</span>';
    resetButton.addEventListener('click', resetSituationMatcher);
    
    const gameContainer = document.querySelector('.situation-matcher-game');
    if (gameContainer) {
        gameContainer.appendChild(resetButton);
    }
    
    function resetSituationMatcher() {
        // Reset score
        currentScore = 0;
        updateScore();
        
        // Clear all matches
        dropZones.forEach(zone => {
            zone.innerHTML = '';
            zone.classList.remove('correct-match', 'incorrect-match');
            zone.parentElement.classList.remove('matched');
        });
        
        // Restore tone cards
        const tonesColumn = document.querySelector('.tones-column');
        if (tonesColumn) {
            tonesColumn.innerHTML = `
                <div class="tone-card draggable" data-tone="confident-falling">
                    <div class="tone-pattern">↘</div>
                    <div class="tone-label">Confident</div>
                </div>
                <div class="tone-card draggable" data-tone="curious-rising">
                    <div class="tone-pattern">↗</div>
                    <div class="tone-label">Curious</div>
                </div>
                <div class="tone-card draggable" data-tone="warm-rising">
                    <div class="tone-pattern">↗</div>
                    <div class="tone-label">Warm</div>
                </div>
                <div class="tone-card draggable" data-tone="empathetic-falling">
                    <div class="tone-pattern">↘</div>
                    <div class="tone-label">Empathetic</div>
                </div>
                <div class="tone-card draggable" data-tone="excited-high-rise">
                    <div class="tone-pattern">↗↗</div>
                    <div class="tone-label">Excited</div>
                </div>
                <div class="tone-card draggable" data-tone="sincere-fall-rise">
                    <div class="tone-pattern">↘↗</div>
                    <div class="tone-label">Sincere</div>
                </div>
            `;
            
            // Re-initialize drag and drop
            const newToneCards = tonesColumn.querySelectorAll('.tone-card.draggable');
            newToneCards.forEach(card => {
                card.draggable = true;
                card.addEventListener('dragstart', handleToneDragStart);
                card.addEventListener('dragend', handleToneDragEnd);
            });
        }
        
        // Hide feedback
        const feedback = document.getElementById('matching-feedback');
        if (feedback) {
            feedback.setAttribute('hidden', '');
        }
    }
}

function initializeClappingGames() {
    const clappingButtons = document.querySelectorAll('.beat-practice-btn');
    
    clappingButtons.forEach(button => {
        button.addEventListener('click', function() {
            const word = this.getAttribute('data-word');
            const gameId = `${word}-clapping`;
            const gameElement = document.getElementById(gameId);
            
            if (gameElement) {
                // Toggle game visibility
                const isHidden = gameElement.hasAttribute('hidden');
                
                // Hide all other clapping games
                document.querySelectorAll('.clapping-game').forEach(game => {
                    game.setAttribute('hidden', '');
                });
                
                if (isHidden) {
                    gameElement.removeAttribute('hidden');
                    startClappingGame(word, gameElement);
                } else {
                    gameElement.setAttribute('hidden', '');
                }
            }
        });
    });
}

function startClappingGame(word, gameElement) {
    const clappingBeats = gameElement.querySelectorAll('.clap-beat');
    const feedback = gameElement.querySelector('.clap-feedback');
    
    let currentBeat = 0;
    let clappingSequence = [];
    
    // Define correct clapping patterns
    const clappingPatterns = {
        'present': [true, false], // PRE-sent: clap on first beat
        'photograph': [true, false, false] // PHO-to-graph: clap on first beat
    };
    
    const correctPattern = clappingPatterns[word] || [true, false];
    
    // Reset game state
    clappingBeats.forEach(beat => {
        beat.classList.remove('clapped', 'correct', 'incorrect');
    });
    
    feedback.textContent = 'Click on the STRONG beats (●) to clap along!';
    feedback.className = 'clap-feedback';
    
    // Add click handlers to beats
    clappingBeats.forEach((beat, index) => {
        beat.addEventListener('click', function() {
            const isStrong = beat.classList.contains('strong');
            const shouldClap = correctPattern[index];
            
            beat.classList.add('clapped');
            
            if (shouldClap && isStrong) {
                beat.classList.add('correct');
                clappingSequence[index] = true;
                
                // Play clap sound effect (visual feedback)
                beat.style.transform = 'scale(1.2)';
                beat.style.background = 'var(--success)';
                
                setTimeout(() => {
                    beat.style.transform = 'scale(1)';
                    beat.style.background = '';
                }, 200);
                
            } else if (!shouldClap && !isStrong) {
                // Correct - didn't clap on weak beat
                clappingSequence[index] = false;
            } else {
                // Incorrect clapping
                beat.classList.add('incorrect');
                beat.style.background = 'var(--error)';
                
                setTimeout(() => {
                    beat.style.background = '';
                }, 500);
            }
            
            // Check if game is complete
            if (clappingSequence.length === correctPattern.length) {
                const isCorrect = clappingSequence.every((clap, i) => clap === correctPattern[i]);
                
                if (isCorrect) {
                    feedback.textContent = '🎉 Perfect rhythm! You\'ve mastered the stress pattern!';
                    feedback.className = 'clap-feedback success';
                    
                    // Mark rhythm card as completed
                    const rhythmCard = gameElement.closest('.rhythm-card');
                    if (rhythmCard) {
                        const itemNumber = parseInt(rhythmCard.getAttribute('data-item'));
                        markItemCompleted(rhythmCard, itemNumber, 'session3', 1);
                        updateStepProgress('session3', 1, itemNumber);
                    }
                } else {
                    feedback.textContent = 'Not quite right. Try again! Focus on the strong beats (●)';
                    feedback.className = 'clap-feedback error';
                    
                    // Reset after 2 seconds
                    setTimeout(() => {
                        clappingSequence = [];
                        clappingBeats.forEach(beat => {
                            beat.classList.remove('clapped', 'correct', 'incorrect');
                        });
                    }, 2000);
                }
            }
        });
    });
}

function initializeStressShifterGames() {
    const shifterButtons = document.querySelectorAll('.stress-shifter-btn');
    
    shifterButtons.forEach(button => {
        button.addEventListener('click', function() {
            const word = this.getAttribute('data-word');
            const gameId = `${word}-shifting`;
            const gameElement = document.getElementById(gameId);
            
            if (gameElement) {
                // Toggle game visibility
                const isHidden = gameElement.hasAttribute('hidden');
                
                // Hide all other stress shifter games
                document.querySelectorAll('.stress-shift-game').forEach(game => {
                    game.setAttribute('hidden', '');
                });
                
                if (isHidden) {
                    gameElement.removeAttribute('hidden');
                    startStressShifterGame(word, gameElement);
                } else {
                    gameElement.setAttribute('hidden', '');
                }
            }
        });
    });
}

function startStressShifterGame(word, gameElement) {
    const syllables = gameElement.querySelectorAll('.syllable.clickable');
    const feedback = gameElement.querySelector('.shift-feedback');
    
    // Define stress patterns for different word forms
    const stressPatterns = {
        'photograph': {
            'photograph': 1, // PHO-to-graph (1st syllable)
            'photography': 2, // pho-TOG-ra-phy (2nd syllable)
            'photographic': 3 // pho-to-GRAPH-ic (3rd syllable)
        }
    };
    
    const patterns = stressPatterns[word];
    let currentForm = 'photograph'; // Start with base form
    
    // Reset syllables
    syllables.forEach(syllable => {
        syllable.classList.remove('stressed', 'correct', 'incorrect');
    });
    
    feedback.textContent = 'Click the stressed syllable in "photograph"';
    feedback.className = 'shift-feedback';
    
    // Add click handlers
    syllables.forEach((syllable, index) => {
        syllable.addEventListener('click', function() {
            const stressPosition = parseInt(this.getAttribute('data-stress-pos'));
            const correctStress = patterns[currentForm];
            
            // Remove previous styling
            syllables.forEach(syl => syl.classList.remove('stressed', 'correct', 'incorrect'));
            
            // Add stressed styling
            this.classList.add('stressed');
            
            if (stressPosition === correctStress) {
                this.classList.add('correct');
                feedback.textContent = '✓ Correct! Now try "photography"';
                feedback.className = 'shift-feedback success';
                
                // Move to next form
                if (currentForm === 'photograph') {
                    currentForm = 'photography';
                    setTimeout(() => {
                        feedback.textContent = 'Click the stressed syllable in "photography"';
                        syllables.forEach(syl => syl.classList.remove('stressed', 'correct', 'incorrect'));
                    }, 1500);
                } else {
                    // Game complete
                    setTimeout(() => {
                        feedback.textContent = '🎉 Excellent! You\'ve mastered stress shifting!';
                        
                        // Mark rhythm card as completed
                        const rhythmCard = gameElement.closest('.rhythm-card');
                        if (rhythmCard) {
                            const itemNumber = parseInt(rhythmCard.getAttribute('data-item'));
                            markItemCompleted(rhythmCard, itemNumber, 'session3', 1);
                            updateStepProgress('session3', 1, itemNumber);
                        }
                    }, 1000);
                }
            } else {
                this.classList.add('incorrect');
                feedback.textContent = `Not quite. The stress is on syllable ${correctStress}. Try again!`;
                feedback.className = 'shift-feedback error';
            }
        });
    });
}

function initializeSyllableClicking() {
    const syllableExercises = document.querySelectorAll('.stress-exercise');
    
    syllableExercises.forEach(exercise => {
        const syllables = exercise.querySelectorAll('.syllable.clickable');
        const feedback = exercise.querySelector('.exercise-feedback');
        const playButton = exercise.querySelector('.play-word-btn');
        
        // Define correct stress positions for different words
        const correctStress = {
            'important': 2, // im-POR-tant (2nd syllable)
            'development': 2, // de-VEL-op-ment (2nd syllable)
            'education': 3 // ed-u-CA-tion (3rd syllable)
        };
        
        // Add click handlers to syllables
        syllables.forEach((syllable, index) => {
            syllable.addEventListener('click', function() {
                const syllableNumber = parseInt(this.getAttribute('data-syllable'));
                const practiceWord = exercise.closest('.practice-word');
                const word = practiceWord ? practiceWord.getAttribute('data-word') : 'important';
                const correct = correctStress[word];
                
                // Remove previous styling
                syllables.forEach(syl => syl.classList.remove('selected', 'correct', 'incorrect'));
                
                // Add selected styling
                this.classList.add('selected');
                
                // Show feedback
                feedback.removeAttribute('hidden');
                
                if (syllableNumber === correct) {
                    this.classList.add('correct');
                    const stressMessages = {
                        'important': '✓ Correct! "Important" is stressed on the second syllable (im-POR-tant)',
                        'development': '✓ Correct! "Development" is stressed on the second syllable (de-VEL-op-ment)',
                        'education': '✓ Correct! "Education" is stressed on the third syllable (ed-u-CA-tion)'
                    };
                    
                    feedback.textContent = stressMessages[word];
                    feedback.className = 'exercise-feedback success';
                    
                    // Mark exercise as completed
                    const exerciseCard = exercise.closest('.practice-exercise-card');
                    if (exerciseCard && !practiceWord) {
                        const itemNumber = parseInt(exerciseCard.getAttribute('data-item'));
                        markItemCompleted(exerciseCard, itemNumber, 'session3', 2);
                        updateStepProgress('session3', 2, itemNumber);
                    }
                } else {
                    this.classList.add('incorrect');
                    feedback.textContent = `Not quite. Try again! Listen carefully to which syllable sounds strongest.`;
                    feedback.className = 'exercise-feedback error';
                }
            });
        });
        
        // Add play button functionality
        if (playButton) {
            playButton.addEventListener('click', function() {
                const audioId = this.getAttribute('data-audio-id');
                
                // Enhanced visual feedback
                createRippleEffect(this);
                this.style.transform = 'scale(0.95)';
                
                // Play audio with enhanced feedback
                playAudio(audioId, this);
                
                setTimeout(() => {
                    this.style.transform = 'scale(1)';
                }, 150);
            });
        }
    });
    
    // Initialize expand practice buttons
    const expandButtons = document.querySelectorAll('.expand-practice-btn');
    expandButtons.forEach(button => {
        button.addEventListener('click', function() {
            const target = this.getAttribute('data-target');
            const targetElement = document.querySelector(`.${target}`);
            
            if (targetElement) {
                const isHidden = targetElement.hasAttribute('hidden');
                
                if (isHidden) {
                    targetElement.removeAttribute('hidden');
                    const btnTextElement = this.querySelector('.btn-text');
                    const btnIconElement = this.querySelector('.btn-icon');
                    if (btnTextElement) btnTextElement.textContent = 'Show Less';
                    if (btnIconElement) btnIconElement.textContent = '−';
                } else {
                    targetElement.setAttribute('hidden', '');
                    const btnTextElement = this.querySelector('.btn-text');
                    const btnIconElement = this.querySelector('.btn-icon');
                    if (btnTextElement) btnTextElement.textContent = 'Practice More Words';
                    if (btnIconElement) btnIconElement.textContent = '+';
                }
            }
        });
    });
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

function initializeSentenceStressDragDrop() {
    const stressMarkers = document.querySelectorAll('.stress-marker.draggable');
    const syllableSlots = document.querySelectorAll('.syllable-slot');
    const stressFeedback = document.querySelector('.sentence-stress-practice .stress-feedback');
    
    let draggedMarker = null;
    let placedMarkers = 0;
    
    // Make stress markers draggable
    stressMarkers.forEach(marker => {
        marker.draggable = true;
        marker.addEventListener('dragstart', handleStressMarkerDragStart);
        marker.addEventListener('dragend', handleStressMarkerDragEnd);
    });
    
    // Setup syllable slots as drop zones
    syllableSlots.forEach(slot => {
        slot.addEventListener('dragover', handleSyllableDragOver);
        slot.addEventListener('drop', handleSyllableDrop);
        slot.addEventListener('dragenter', handleSyllableDragEnter);
        slot.addEventListener('dragleave', handleSyllableDragLeave);
    });
    
    function handleStressMarkerDragStart(e) {
        draggedMarker = this;
        this.style.opacity = '0.5';
        e.dataTransfer.effectAllowed = 'move';
        e.dataTransfer.setData('text/html', this.outerHTML);
    }
    
    function handleStressMarkerDragEnd(e) {
        this.style.opacity = '1';
        draggedMarker = null;
    }
    
    function handleSyllableDragOver(e) {
        e.preventDefault();
        e.dataTransfer.dropEffect = 'move';
    }
    
    function handleSyllableDragEnter(e) {
        e.preventDefault();
        this.classList.add('drag-over');
    }
    
    function handleSyllableDragLeave(e) {
        this.classList.remove('drag-over');
    }
    
    function handleSyllableDrop(e) {
        e.preventDefault();
        this.classList.remove('drag-over');
        
        if (draggedMarker) {
            // Check if slot already has a marker
            const existingMarker = this.querySelector('.stress-marker');
            if (existingMarker) {
                // Return existing marker to bank
                const markerBank = document.querySelector('.marker-bank');
                markerBank.appendChild(existingMarker);
                placedMarkers--;
            }
            
            // Place new marker
            this.appendChild(draggedMarker.cloneNode(true));
            draggedMarker.remove();
            placedMarkers++;
            
            // Check if placement is correct
            const isCorrect = this.hasAttribute('data-correct');
            if (isCorrect) {
                this.classList.add('correct-stress');
                this.querySelector('.stress-marker').style.color = 'var(--success)';
            } else {
                this.classList.add('incorrect-stress');
                this.querySelector('.stress-marker').style.color = 'var(--error)';
            }
            
            // Check if all markers are placed
            if (placedMarkers === 3) {
                checkSentenceStressCompletion();
            }
        }
    }
    
    function checkSentenceStressCompletion() {
        const correctSlots = document.querySelectorAll('.syllable-slot.correct-stress');
        const incorrectSlots = document.querySelectorAll('.syllable-slot.incorrect-stress');
        
        if (correctSlots.length === 3 && incorrectSlots.length === 0) {
            // All correct
            stressFeedback.removeAttribute('hidden');
            stressFeedback.textContent = '🎉 Perfect! You\'ve correctly identified all the stressed syllables!';
            stressFeedback.className = 'stress-feedback success';
            
            // Mark exercise as completed
            const exerciseCard = document.querySelector('.practice-exercise-card[data-pair="sentence-stress"]');
            if (exerciseCard) {
                const itemNumber = parseInt(exerciseCard.getAttribute('data-item'));
                markItemCompleted(exerciseCard, itemNumber, 'session3', 2);
                updateStepProgress('session3', 2, itemNumber);
            }
        } else if (placedMarkers === 3) {
            // Some incorrect
            stressFeedback.removeAttribute('hidden');
            stressFeedback.textContent = `You got ${correctSlots.length} out of 3 correct. Try moving the markers to different syllables.`;
            stressFeedback.className = 'stress-feedback error';
            
            // Allow retry after 3 seconds
            setTimeout(() => {
                resetSentenceStressGame();
            }, 3000);
        }
    }
    
    function resetSentenceStressGame() {
        // Remove all markers from slots
        const placedMarkers = document.querySelectorAll('.syllable-slot .stress-marker');
        placedMarkers.forEach(marker => marker.remove());
        
        // Reset slot classes
        syllableSlots.forEach(slot => {
            slot.classList.remove('correct-stress', 'incorrect-stress');
        });
        
        // Restore markers to bank
        const markerBank = document.querySelector('.marker-bank');
        for (let i = 1; i <= 3; i++) {
            const marker = document.createElement('div');
            marker.className = 'stress-marker draggable';
            marker.setAttribute('data-marker', i);
            marker.textContent = '●';
            marker.draggable = true;
            marker.addEventListener('dragstart', handleStressMarkerDragStart);
            marker.addEventListener('dragend', handleStressMarkerDragEnd);
            markerBank.appendChild(marker);
        }
        
        placedMarkers = 0;
        
        // Hide feedback
        stressFeedback.setAttribute('hidden', '');
    }
}

function initializeMetronome() {
    const metronomeButtons = document.querySelectorAll('.metronome-btn');
    const tempoSliders = document.querySelectorAll('.tempo-slider');
    let metronomeInterval = null;
    let currentBeat = 0;
    let isRunning = false;
    
    // Initialize tempo display updates
    tempoSliders.forEach(slider => {
        const display = slider.parentElement.querySelector('.tempo-display');
        
        slider.addEventListener('input', function() {
            display.textContent = this.value + ' BPM';
        });
    });
    
    // Initialize metronome buttons
    metronomeButtons.forEach(button => {
        button.addEventListener('click', function() {
            const word = this.getAttribute('data-word');
            const game = this.closest('.clapping-game, .stress-shift-game');
            const tempoSlider = game.querySelector('.tempo-slider');
            const beatIndicators = game.querySelectorAll('.beat-indicator');
            
            if (isRunning) {
                stopMetronome(this);
            } else {
                startMetronome(this, word, parseInt(tempoSlider.value), beatIndicators);
            }
        });
    });
    
    function startMetronome(button, word, tempo, beatIndicators) {
        isRunning = true;
        currentBeat = 0;
        
        // Update button state
        button.querySelector('.metronome-icon').textContent = '⏸';
        button.querySelector('.metronome-text').textContent = 'Stop Metronome';
        button.classList.add('active');
        
        // Define beat patterns
        const beatPatterns = {
            'present': [true, false], // Strong, weak
            'photograph': [true, false, false] // Strong, weak, weak
        };
        
        const pattern = beatPatterns[word] || [true, false];
        const beatDuration = 60000 / tempo; // Convert BPM to milliseconds
        
        // Start metronome
        metronomeInterval = setInterval(() => {
            // Reset all indicators
            beatIndicators.forEach(indicator => {
                indicator.classList.remove('active', 'strong', 'weak');
            });
            
            // Activate current beat
            const currentIndicator = beatIndicators[currentBeat];
            if (currentIndicator) {
                currentIndicator.classList.add('active');
                
                if (pattern[currentBeat]) {
                    currentIndicator.classList.add('strong');
                    // Play strong beat sound (visual feedback)
                    playMetronomeSound('strong');
                } else {
                    currentIndicator.classList.add('weak');
                    // Play weak beat sound (visual feedback)
                    playMetronomeSound('weak');
                }
            }
            
            // Move to next beat
            currentBeat = (currentBeat + 1) % pattern.length;
        }, beatDuration);
    }
    
    function stopMetronome(button) {
        isRunning = false;
        
        // Clear interval
        if (metronomeInterval) {
            clearInterval(metronomeInterval);
            metronomeInterval = null;
        }
        
        // Reset button state
        button.querySelector('.metronome-icon').textContent = '⏵';
        button.querySelector('.metronome-text').textContent = 'Start Metronome';
        button.classList.remove('active');
        
        // Clear all beat indicators
        const game = button.closest('.clapping-game, .stress-shift-game');
        const beatIndicators = game.querySelectorAll('.beat-indicator');
        beatIndicators.forEach(indicator => {
            indicator.classList.remove('active', 'strong', 'weak');
        });
    }
    
    function playMetronomeSound(type) {
        // Create audio context for metronome sounds
        if (typeof AudioContext !== 'undefined' || typeof webkitAudioContext !== 'undefined') {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const oscillator = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Different frequencies for strong vs weak beats
            oscillator.frequency.value = type === 'strong' ? 800 : 600;
            oscillator.type = 'sine';
            
            // Short beep
            gainNode.gain.setValueAtTime(0.3, audioContext.currentTime);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            oscillator.start(audioContext.currentTime);
            oscillator.stop(audioContext.currentTime + 0.1);
        }
    }
    
    // Stop metronome when games are hidden
    document.addEventListener('click', function(e) {
        if (e.target.classList.contains('beat-practice-btn') || 
            e.target.classList.contains('stress-shifter-btn')) {
            // Stop any running metronome when switching games
            if (isRunning) {
                const activeButton = document.querySelector('.metronome-btn.active');
                if (activeButton) {
                    stopMetronome(activeButton);
                }
            }
        }
    });
}

function initializeWaveformDisplays() {
    const waveformCanvases = document.querySelectorAll('.stress-waveform');
    
    waveformCanvases.forEach(canvas => {
        const word = canvas.getAttribute('data-word');
        drawStressWaveform(canvas, word);
    });
}

function drawStressWaveform(canvas, word) {
    const ctx = canvas.getContext('2d');
    const width = canvas.width;
    const height = canvas.height;
    
    // Clear canvas
    ctx.clearRect(0, 0, width, height);
    
    // Define stress patterns for different words
    const stressPatterns = {
        'present-noun': [0.9, 0.3], // PRE-sent: strong-weak
        'present-verb': [0.3, 0.9], // pre-SENT: weak-strong
        'photograph': [0.9, 0.4, 0.4], // PHO-to-graph: strong-weak-weak
        'photography': [0.3, 0.9, 0.4, 0.4], // pho-TOG-ra-phy: weak-strong-weak-weak
        'important': [0.3, 0.9, 0.4], // im-POR-tant: weak-strong-weak
        'development': [0.3, 0.9, 0.4, 0.4], // de-VEL-op-ment: weak-strong-weak-weak
        'education': [0.3, 0.3, 0.9, 0.4] // ed-u-CA-tion: weak-weak-strong-weak
    };
    
    const pattern = stressPatterns[word] || [0.5, 0.5];
    const syllableWidth = width / pattern.length;
    
    // Set up gradient
    const gradient = ctx.createLinearGradient(0, 0, 0, height);
    gradient.addColorStop(0, '#4f46e5'); // Brand primary
    gradient.addColorStop(1, '#06b6d4'); // Brand secondary
    
    ctx.fillStyle = gradient;
    ctx.strokeStyle = '#4f46e5';
    ctx.lineWidth = 2;
    
    // Draw waveform
    ctx.beginPath();
    ctx.moveTo(0, height);
    
    for (let i = 0; i < pattern.length; i++) {
        const x = i * syllableWidth;
        const nextX = (i + 1) * syllableWidth;
        const stress = pattern[i];
        const waveHeight = height * stress;
        
        // Create smooth curve for each syllable
        const peakX = x + syllableWidth / 2;
        const peakY = height - waveHeight;
        
        // Control points for smooth curves
        const cp1X = x + syllableWidth * 0.25;
        const cp1Y = height - (waveHeight * 0.7);
        const cp2X = x + syllableWidth * 0.75;
        const cp2Y = height - (waveHeight * 0.7);
        
        // Draw curve to peak
        ctx.quadraticCurveTo(cp1X, cp1Y, peakX, peakY);
        
        // Draw curve from peak
        if (i < pattern.length - 1) {
            ctx.quadraticCurveTo(cp2X, cp2Y, nextX, height - (height * pattern[i + 1] * 0.3));
        } else {
            ctx.quadraticCurveTo(cp2X, cp2Y, nextX, height);
        }
    }
    
    // Complete the shape
    ctx.lineTo(width, height);
    ctx.lineTo(0, height);
    ctx.closePath();
    
    // Fill and stroke
    ctx.fill();
    ctx.stroke();
    
    // Add syllable markers
    ctx.fillStyle = '#ffffff';
    ctx.font = '10px Inter, sans-serif';
    ctx.textAlign = 'center';
    
    const syllableLabels = {
        'present-noun': ['PRE', 'sent'],
        'present-verb': ['pre', 'SENT'],
        'photograph': ['PHO', 'to', 'graph'],
        'photography': ['pho', 'TOG', 'ra', 'phy'],
        'important': ['im', 'POR', 'tant'],
        'development': ['de', 'VEL', 'op', 'ment'],
        'education': ['ed', 'u', 'CA', 'tion']
    };
    
    const labels = syllableLabels[word] || ['syl', 'la', 'ble'];
    
    for (let i = 0; i < labels.length && i < pattern.length; i++) {
        const x = i * syllableWidth + syllableWidth / 2;
        const stress = pattern[i];
        const y = height - (height * stress) - 5;
        
        // Add text shadow for better visibility
        ctx.fillStyle = '#000000';
        ctx.fillText(labels[i], x + 1, y + 1);
        ctx.fillStyle = '#ffffff';
        ctx.fillText(labels[i], x, y);
    }
    
    // Add animation on hover
    canvas.addEventListener('mouseenter', function() {
        animateWaveform(canvas, word);
    });
}

function animateWaveform(canvas, word) {
    const ctx = canvas.getContext('2d');
    let frame = 0;
    const maxFrames = 30;
    
    function animate() {
        if (frame >= maxFrames) return;
        
        // Redraw with slight animation
        ctx.save();
        ctx.globalAlpha = 0.8 + 0.2 * Math.sin(frame * 0.2);
        drawStressWaveform(canvas, word);
        ctx.restore();
        
        frame++;
        requestAnimationFrame(animate);
    }
    
    animate();
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

    // --- SESSION 5: SPEECH SYMPHONY FUNCTIONALITY ---

    // Session 5 audio mapping
    audioMap['stress-timing'] = ['stress-timing'];
    audioMap['weak-forms'] = ['weak-forms'];
    audioMap['linking-melodies'] = ['linking-melodies'];
    audioMap['sentence-orchestration'] = ['sentence-orchestration'];

    // Melody Maker audio mapping
    audioMap['phrase-excited'] = ['phrase-excited'];
    audioMap['phrase-curious'] = ['phrase-curious'];
    audioMap['phrase-surprised'] = ['phrase-surprised'];
    audioMap['phrase-doubtful'] = ['phrase-doubtful'];
    audioMap['conversational-duet'] = ['conversational-duet'];
    audioMap['speech-symphony'] = ['speech-symphony'];
    audioMap['freestyle-melody'] = ['freestyle-melody'];

    // Performance venue audio mapping
    audioMap['coffee-shop-performance'] = ['coffee-shop-performance'];
    audioMap['business-presentation'] = ['business-presentation'];
    audioMap['grand-theater-performance'] = ['grand-theater-performance'];

    // Metronome functionality
    class Metronome {
        constructor() {
            this.isPlaying = false;
            this.bpm = 60;
            this.interval = null;
            this.audioContext = null;
            this.nextNoteTime = 0.0;
            this.scheduleAheadTime = 25.0;
            this.lookahead = 25.0;
        }

        start() {
            if (!this.audioContext) {
                this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            }
            
            this.isPlaying = true;
            this.nextNoteTime = this.audioContext.currentTime;
            this.scheduler();
        }

        stop() {
            this.isPlaying = false;
            if (this.interval) {
                clearTimeout(this.interval);
            }
        }

        scheduler() {
            while (this.nextNoteTime < this.audioContext.currentTime + this.scheduleAheadTime / 1000.0) {
                this.scheduleNote(this.nextNoteTime);
                this.nextNoteTime += 60.0 / this.bpm;
            }
            
            if (this.isPlaying) {
                this.interval = setTimeout(() => this.scheduler(), this.lookahead);
            }
        }

        scheduleNote(time) {
            const osc = this.audioContext.createOscillator();
            const gain = this.audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(this.audioContext.destination);
            
            osc.frequency.value = 800;
            gain.gain.setValueAtTime(0.1, time);
            gain.gain.exponentialRampToValueAtTime(0.01, time + 0.1);
            
            osc.start(time);
            osc.stop(time + 0.1);
        }

        setBPM(bpm) {
            this.bpm = bpm;
        }
    }

    const metronome = new Metronome();

    // Metronome button functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.metronome-btn')) {
            const targetId = e.target.closest('.metronome-btn').getAttribute('data-target');
            const metronomeControl = document.getElementById(targetId);
            
            if (metronomeControl) {
                metronomeControl.hidden = !metronomeControl.hidden;
            }
        }
        
        // Tempo control buttons
        if (e.target.closest('.tempo-btn')) {
            const speed = e.target.closest('.tempo-btn').getAttribute('data-speed');
            const tempoButtons = e.target.parentNode.querySelectorAll('.tempo-btn');
            
            // Remove active class from all tempo buttons
            tempoButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Set metronome BPM based on speed
            switch(speed) {
                case 'slow':
                    metronome.setBPM(60);
                    break;
                case 'normal':
                    metronome.setBPM(120);
                    break;
                case 'fast':
                    metronome.setBPM(180);
                    break;
            }
            
            // Start metronome
            if (!metronome.isPlaying) {
                metronome.start();
            }
        }
    });

    // Tap exercise functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.tap-btn')) {
            const targetId = e.target.closest('.tap-btn').getAttribute('data-target');
            const tapExercise = document.getElementById(targetId);
            
            if (tapExercise) {
                tapExercise.hidden = !tapExercise.hidden;
            }
        }
        
        // Tap target functionality
        if (e.target.closest('.tap-target')) {
            const tapTarget = e.target.closest('.tap-target');
            
            // Add ripple effect
            tapTarget.style.animation = 'none';
            setTimeout(() => {
                tapTarget.style.animation = 'tap-ripple 0.6s ease-out';
            }, 10);
            
            // Play tap sound
            playTapSound();
            
            // Provide feedback
            showModal('Great Timing!', 'You tapped on the beat! Keep practicing to develop your rhythm sense.', 'success');
        }
    });

    // Conductor button functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.conductor-btn')) {
            const targetId = e.target.closest('.conductor-btn').getAttribute('data-target');
            const conductorControl = document.getElementById(targetId);
            
            if (conductorControl) {
                conductorControl.hidden = !conductorControl.hidden;
            }
        }
        
        // Conductor beat functionality
        if (e.target.closest('.conductor-beat')) {
            const beat = e.target.closest('.conductor-beat');
            beat.style.transform = 'scale(1.2)';
            setTimeout(() => {
                beat.style.transform = 'scale(1)';
            }, 200);
            
            // Play conductor sound based on beat type
            if (beat.classList.contains('strong')) {
                playStrongBeat();
            } else {
                playWeakBeat();
            }
        }
    });

    // Harmony and composition functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.harmony-btn')) {
            const targetId = e.target.closest('.harmony-btn').getAttribute('data-target');
            const harmonyControl = document.getElementById(targetId);
            
            if (harmonyControl) {
                harmonyControl.hidden = !harmonyControl.hidden;
            }
        }
        
        if (e.target.closest('.compose-btn')) {
            const targetId = e.target.closest('.compose-btn').getAttribute('data-target');
            const composeExercise = document.getElementById(targetId);
            
            if (composeExercise) {
                composeExercise.hidden = !composeExercise.hidden;
            }
        }
    });

    // Emotion button functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.emotion-btn')) {
            const emotion = e.target.closest('.emotion-btn').getAttribute('data-emotion');
            const audioId = e.target.closest('.emotion-btn').getAttribute('data-audio-id');
            
            // Visual feedback
            e.target.style.transform = 'scale(1.1)';
            setTimeout(() => {
                e.target.style.transform = 'scale(1)';
            }, 200);
            
            // Play audio
            if (audioId && audioMap[audioId]) {
                playAudioSequence(audioId, 'session5');
            }
            
            // Show emotion feedback
            const emotionMessages = {
                'excited': 'Fantastic energy! Your excitement really comes through in your voice!',
                'curious': 'Perfect questioning tone! You sound genuinely interested.',
                'surprised': 'Great expression of surprise! Very natural intonation.',
                'doubtful': 'Excellent skeptical tone! You\'ve mastered subtle doubt.'
            };
            
            showModal('Emotion Mastery', emotionMessages[emotion] || 'Great emotional expression!', 'success');
        }
    });

    // Symphony and performance functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.symphony-play')) {
            const audioId = e.target.closest('.symphony-play').getAttribute('data-audio-id');
            
            // Visual performance effect
            e.target.style.animation = 'performance-glow 1s ease-in-out infinite';
            
            // Play symphony
            if (audioId && audioMap[audioId]) {
                playAudioSequence(audioId, 'session5');
            }
            
            // Stop animation after 3 seconds
            setTimeout(() => {
                e.target.style.animation = '';
            }, 3000);
            
            showModal('Bravo!', 'You conducted a beautiful speech symphony! Your timing and expression were excellent.', 'success');
        }
        
        if (e.target.closest('.duet-btn')) {
            const audioId = e.target.closest('.duet-btn').getAttribute('data-audio-id');
            
            // Play duet
            if (audioId && audioMap[audioId]) {
                playAudioSequence(audioId, 'session5');
            }
            
            showModal('Beautiful Duet!', 'Perfect conversational harmony! You\'ve mastered the rhythm of natural dialogue.', 'success');
        }
    });

    // Conductor interface functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.tempo-control, .dynamics-control, .expression-control')) {
            const control = e.target.closest('.tempo-control, .dynamics-control, .expression-control');
            const controls = control.parentNode.querySelectorAll('.tempo-control, .dynamics-control, .expression-control');
            
            // Remove active class from all controls
            controls.forEach(ctrl => ctrl.classList.remove('active'));
            control.classList.add('active');
            
            // Get control type and value
            let controlType = control.getAttribute('data-tempo') || 
                             control.getAttribute('data-dynamics') || 
                             control.getAttribute('data-expression');
            
            // Handle tempo controls that don't have data attributes
            if (!controlType && control.classList.contains('tempo-control')) {
                const slider = control.querySelector('.tempo-slider');
                const bpm = slider ? slider.value : '90';
                controlType = `${bpm} BPM tempo`;
            }
            
            if (controlType) {
                showModal('Conductor Mode', `You selected ${controlType} style. Great choice for expressive speech!`, 'info');
            }
        }
    });

    // Freestyle composition functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.compose-melody')) {
            const container = e.target.closest('.freestyle-exercise');
            const input = container.querySelector('.composition-input');
            const moodSelector = container.querySelector('.mood-selector');
            const tempoSelector = container.querySelector('.tempo-selector');
            
            const text = input.value.trim();
            const mood = moodSelector.value;
            const tempo = tempoSelector.value;
            
            if (!text) {
                showModal('Composition Needed', 'Please type a sentence to turn into a melody!', 'warning');
                return;
            }
            
            if (!mood || !tempo) {
                showModal('Settings Needed', 'Please choose both mood and tempo for your composition!', 'warning');
                return;
            }
            
            // Simulate composition process
            e.target.textContent = '🎵 Composing...';
            e.target.disabled = true;
            
            setTimeout(() => {
                e.target.textContent = '🎵 Compose & Play';
                e.target.disabled = false;
                
                showModal('Composition Complete!', 
                    `Beautiful! You've created a ${mood} melody at ${tempo} tempo with the text: "${text}"`, 
                    'success');
            }, 2000);
        }
    });

    // Performance venue functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.performance-audio')) {
            const venue = e.target.closest('.venue-card').getAttribute('data-venue');
            const audioId = e.target.closest('.performance-audio').getAttribute('data-audio-id');
            
            // Visual performance effect
            e.target.style.animation = 'performance-glow 1s ease-in-out infinite';
            
            // Play performance audio
            if (audioId && audioMap[audioId]) {
                playAudioSequence(audioId, 'session5');
            }
            
            // Stop animation after 3 seconds
            setTimeout(() => {
                e.target.style.animation = '';
            }, 3000);
            
            // Venue-specific feedback
            const venueMessages = {
                'coffee-shop': 'Perfect intimate performance! Your friendly, relaxed tone was spot-on for this cozy setting.',
                'business-hall': 'Excellent professional delivery! You commanded the room with confidence and clarity.',
                'grand-theater': 'Magnificent theatrical performance! Your dramatic expression captivated the entire audience!'
            };
            
            showModal('Standing Ovation!', 
                venueMessages[venue] || 'Incredible performance! You\'ve mastered speech in this venue!', 
                'success');
        }
    });

    // Ensemble functionality
    document.addEventListener('click', function(e) {
        if (e.target.closest('.ensemble-btn')) {
            const targetId = e.target.closest('.ensemble-btn').getAttribute('data-target');
            const ensembleExercise = document.getElementById(targetId);
            
            if (ensembleExercise) {
                ensembleExercise.hidden = !ensembleExercise.hidden;
            }
        }
        
        if (e.target.closest('.part-btn')) {
            const part = e.target.closest('.part-btn').getAttribute('data-part');
            const partButtons = e.target.parentNode.querySelectorAll('.part-btn');
            
            // Visual feedback
            partButtons.forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            
            // Play part
            playEnsemblePart(part);
            
            const partMessages = {
                'phrase1': 'Great opening phrase! Perfect rhythm and timing.',
                'pause': 'Excellent pause! Timing is everything in speech.',
                'phrase2': 'Beautiful conclusion! Your intonation was perfect.',
                'full': 'Magnificent full performance! You\'ve mastered the complete orchestration!'
            };
            
            showModal('Ensemble Performance', partMessages[part], 'success');
        }
    });

    // Helper functions for Session 5 audio
    function playTapSound() {
        if (window.AudioContext || window.webkitAudioContext) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(audioContext.destination);
            
            osc.frequency.value = 1000;
            gain.gain.setValueAtTime(0.1, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            osc.start();
            osc.stop(audioContext.currentTime + 0.1);
        }
    }

    function playStrongBeat() {
        if (window.AudioContext || window.webkitAudioContext) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(audioContext.destination);
            
            osc.frequency.value = 800;
            gain.gain.setValueAtTime(0.2, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.2);
            
            osc.start();
            osc.stop(audioContext.currentTime + 0.2);
        }
    }

    function playWeakBeat() {
        if (window.AudioContext || window.webkitAudioContext) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            const osc = audioContext.createOscillator();
            const gain = audioContext.createGain();
            
            osc.connect(gain);
            gain.connect(audioContext.destination);
            
            osc.frequency.value = 400;
            gain.gain.setValueAtTime(0.1, audioContext.currentTime);
            gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.1);
            
            osc.start();
            osc.stop(audioContext.currentTime + 0.1);
        }
    }

    function playEnsemblePart(part) {
        // Simulate playing different parts of the ensemble
        const frequencies = {
            'phrase1': 600,
            'pause': 200,
            'phrase2': 800,
            'full': [600, 400, 800]
        };
        
        if (window.AudioContext || window.webkitAudioContext) {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            if (part === 'full') {
                // Play chord for full orchestra
                frequencies[part].forEach((freq, index) => {
                    const osc = audioContext.createOscillator();
                    const gain = audioContext.createGain();
                    
                    osc.connect(gain);
                    gain.connect(audioContext.destination);
                    
                    osc.frequency.value = freq;
                    gain.gain.setValueAtTime(0.1, audioContext.currentTime);
                    gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
                    
                    osc.start();
                    osc.stop(audioContext.currentTime + 1);
                });
            } else {
                // Play single note
                const osc = audioContext.createOscillator();
                const gain = audioContext.createGain();
                
                osc.connect(gain);
                gain.connect(audioContext.destination);
                
                osc.frequency.value = frequencies[part];
                gain.gain.setValueAtTime(0.1, audioContext.currentTime);
                gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.5);
                
                osc.start();
                osc.stop(audioContext.currentTime + 0.5);
            }
        }
    }

}); 