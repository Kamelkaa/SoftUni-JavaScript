function task02(worker) {
    if (worker.dizziness) {
        worker.levelOfHydrated += worker.experience * worker.weight * 0.1;
        worker.dizziness = false;
    }

    return worker;
}

task02({
    weight: 120,
    experience: 20,
    levelOfHydrated: 200,
    dizziness: true
});