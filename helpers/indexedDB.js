export const NASAIndexedDB = (url, title, date, explanation) => {
    if(!window.indexedDB) {
        alert('no indexdb');
        return;
    }

    const idbRequest = indexedDB.open('CRM', 1);
    idbRequest.onerror = (e) => {
        console.error(`Database error: ${e.target.errorCode}`);
    };
    idbRequest.onsuccess = (e) => {
        const db = e.target.result;
        insertAPOD(db, {
            date: date,
            explanation: explanation,
            title: title,
            url: url,
        });
    };
    
    idbRequest.onupgradeneeded = (e) => {
        let db = e.target.result;
        let store = db.createObjectStore('PreviousAPOD', {
            autoIncrement: true
        });
        let index = store.createIndex('date', 'date', {
            unique: true
        });
    };
    const insertAPOD = (db, apod) => {
        const txn = db.transaction('PreviousAPOD', 'readwrite');
        const store = txn.objectStore('PreviousAPOD');
        let query = store.put(apod);

        query.onsuccess = (e) => {
            console.log(e);
        };
        query.onerror = (e) => {
            console.log(e.target.errorCode);
        };

        txn.oncomplete = () => {
            db.close();
        };
    };
}

export const getAllPreviousAPOD = () => {
    const previousApodsUl = document.querySelector('.previous-apods');

    const idbRequest = indexedDB.open('CRM', 1);
    idbRequest.onerror = (e) => {
        console.error(`Database error: ${e.target.errorCode}`);
    };
    idbRequest.onsuccess = (e) => {
        const db = e.target.result;
        previousAPOD(db);
    };

    const previousAPOD = (db) => {
        const txn = db.transaction('PreviousAPOD', 'readonly');
        const objectStore = txn.objectStore('PreviousAPOD');
        const index = objectStore.index('date');
    
        index.openCursor().onsuccess = (e) => {
            let cursor = e.target.result;
            if(cursor) {
                let apod = cursor.value;
                createPreviousAPOD(apod);
                cursor.continue();
                previousApodsUl.querySelectorAll('li')[0].remove();
            }
            txn.oncomplete = () => {
                db.close();
            }
        }
    };

    const createPreviousAPOD = (apod) => {
        // create previous apod
        let li = document.createElement('li');
        li.classList.add('previous-apod');
        li.classList.add('apod');
        // create div and image
        let div = document.createElement('div');
        let img = document.createElement('img');
        img.src = apod.url;
        img.alt = apod.title;
        div.appendChild(img);
        // create section for text
        let section = document.createElement('section');
        let h2 = document.createElement('h2');
        h2.textContent = apod.title;
        let small = document.createElement('small');
        small.textContent = apod.date;
        let div2 = document.createElement('div');
        let p = document.createElement('p');
        p.textContent = apod.explanation;
        div2.appendChild(p);
        section.appendChild(h2);
        section.appendChild(small);
        section.appendChild(div2);
        // append all to previous apod
        li.appendChild(div);
        li.appendChild(section);
        // append all to previous apods
        previousApodsUl.appendChild(li);
    }
}