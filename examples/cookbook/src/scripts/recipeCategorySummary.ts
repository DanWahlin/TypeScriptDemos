class RecipeCategorySummary implements IRecipeCategorySummary {
    text: string;
    title: string;

    constructor(summary: IRecipeCategorySummary) {
        this.text = summary.text;
        this.title = summary.title;
    }
}