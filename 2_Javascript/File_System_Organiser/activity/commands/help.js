function helpFn() {
    console.log(
    `
        Your entered command is wrong. Check from below ones -
        
        node <file> <command> <folder> <argument>

        node mycli view "E:\\Pep_Batches\\FJP_ENG\\2_JavaScript" tree
        node mycli view "E:\\Pep_Batches\\FJP_ENG\\2_JavaScript" flat
        node mycli organize "E:\\Pep_Batches\\FJP_ENG\\2_JavaScript" <optional>
        node mycli help
    `
    );
}

module.exports = {
    help: helpFn
}