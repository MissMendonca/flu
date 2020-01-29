describe("PostcodeValidator", function(){
    describe("input tests", function() {
        it("should return true", function(){
            expect(text(" ")).toBe(false);
        });
        it("should return false", function(){
            expect(text("#")).toBe(false);
        })
    });
});