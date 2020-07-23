let JOURNAL = [];
const addEntry = (events, werewolf) => {
  JOURNAL.push({ events, werewolf });
};

const getJournal = () => {
  let days = prompt("Number of days to record events");
  let count = 1;
  while (count <= days) {
    let numberOfEvents = prompt("number of events on day " + count);

    let eventCount = 1;
    let events = [];
    while (eventCount <= numberOfEvents) {
      let event = prompt(
        "Enter number " + eventCount + " event for day " + count
      );
      events.push(event.toLowerCase());
      eventCount++;
    }
    let werewolf = false;
    if (events.includes("pizza")) {
      werewolf = true;
    }

    addEntry(events, werewolf);
    count++;
  }
  console.log(JOURNAL);
  return JOURNAL;
};

function tableFor(event, journal) {
  let table = [0, 0, 0, 0];
  for (let i = 0; i < journal.length; i++) {
    let entry = journal[i],
      index = 0;
    if (entry.events.includes(event)) index += 1;
    if (entry.werewolf) index += 2;
    table[index] += 1;
  }
  return table;
}

function phi(table) {
  return (
    (table[3] * table[0] - table[2] * table[1]) /
    Math.sqrt(
      (table[2] + table[3]) *
        (table[0] + table[1]) *
        (table[1] + table[3]) *
        (table[0] + table[2])
    )
  );
}

function journalEvents(journal) {
  68;
  let events = [];
  for (let entry of journal) {
    for (let event of entry.events) {
      if (!events.includes(event)) {
        events.push(event);
      }
    }
  }
  return events;
}

const maxEffect = () => {
  const JOURNAL = getJournal();
  let correlations = [];
  for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    correlations.push(correlation);
    if (correlation > 0.1 || correlation < -0.1) {
      console.log(event + ":", correlation);
    }
  }
  for (let event of journalEvents(JOURNAL)) {
    let correlation = phi(tableFor(event, JOURNAL));
    if (correlation == Math.max(...correlations)) {
      console.log(
        event + "; according to the correlation made the warewolf turn"
      );
    }
  }
};
