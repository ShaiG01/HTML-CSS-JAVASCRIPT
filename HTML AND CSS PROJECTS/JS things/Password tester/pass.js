const strengthMeter = document.querySelector('.strengthMeter');
const passInput = document.querySelector('input');
const reasons = document.querySelector('.reasons');

passInput.addEventListener('input', () => {
    const weaknesses = calculatePasswordStrength(passInput.value);
    let strength = 100;

    clearReasons(); // clear old messages

    weaknesses.forEach(weakness => {
        if (weakness) {
            strength -= weakness.deduction;
            updateText(weakness.message);
        }

    });

    strengthMeter.style.setProperty('--strength', strength);

    if(strength === 100) {
        updateText("You're good to go.")
    }
});

function calculatePasswordStrength(password) {
    const weaknesses = [];
    weaknesses.push(lengthWeakness(password));
    weaknesses.push(hasNumber(password))
    weaknesses.push(hasSymbol(password))
    weaknesses.push(hasRepeat(password))
    // You can add more checks here like character types, symbols, etc.
    return weaknesses;
}

function lengthWeakness(password) {
    const length = password.length;
    if(length === 0) {
        return { 
            message: 'Enter Password',
            deduction: 100
            
        }
    }
    if (length < 6) {
        return {
            message: "Password should be at least 6 characters",
            deduction: 40
        };
    }

    return {
        message: "",
        deduction: 0
    };
}

function hasNumber(password){
   const analyzeNumber = analyzePassword(password)
   const number = analyzeNumber.hasNumber

   if(number) {
    return {
        message: '',
        deduction: 0
    }
   }

   else {
    return {
        message: 'Should contain a digit',
        deduction: 40
    }
   }
}

function hasRepeat(password){
    const analyzeRepeat = analyzePassword(password);
    const repeat = analyzeRepeat.hasRepeat

    if(repeat) {
        return {
            message: 'Password has repeated characters',
            deduction: 20
        }
    }
}
function hasSymbol(password) {
    const analyzeSymbol = analyzePassword(password)
    const symbol = analyzeSymbol.hasSymbol

    if(symbol){
        return {
            message:'',
            deduction: 0
        }

    }

     return{
            message: 'Should contain a special character',
            deduction: 20
        }
}

function analyzePassword(password) {
    return {
        hasNumber: /\d/.test(password),
        hasSymbol: /[!@#$%^&*(),.?":{}|<>]/.test(password),
        hasRepeat: /(.)\1/.test(password)
    };
}
        

function updateText(message) {
    if (!message) return; 
    const div = document.createElement('div');
    div.innerText = message;
    reasons.appendChild(div);
}

function clearReasons() {
    reasons.innerHTML = '';
}
