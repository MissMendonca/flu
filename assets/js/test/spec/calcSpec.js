describe("PostcodeValidator", function(){
    describe("input tests", function() {
        it("should return false", function(){
            expect(text(" ")).toBe(false);
        });
        it("should return false", function(){
            expect(text("#")).toBe(false);
        });
        it("should return false", function() {
            expect(text("abcd3456")).toBe(false);
        });
        
        it("should return false", function() {
            expect(text("abcde")).toBe(false);
        });
        
        it("should return false", function() {
            expect(text("123456")).toBe(false);
        });
        it("should return false", function() {
            expect(text("123-ab")).toBe(false);
        });
        it("should return false", function() {
            expect(text(".-.2a4")).toBe(false);
        });
    });
});