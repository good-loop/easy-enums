
# easy-enums, by Winterwell/SoDash/Orla

`Enum` is a simple yet useful utility for safer code.

It makes a set of string constants, kind of like a Java enum.
e.g. `var MyKind = new Enum('TEXT PERSON');`   
gives you `MyKind.TEXT == 'TEXT', MyKind.PERSON == 'PERSON'`
 
Also, each of the constants has an isCONSTANT() function added, so you can write:
`MyKind.isTEXT(myvar)` -- which has the advantage that it will create a noisy error if
if myvar is invalid (e.g. it helps catch typos). isCONSTANT() allows falsy values, but an unrecognised
non-false value indicates an error.
 
`MyKind.values` holds the full list (and is frozen to keep it safe from edits).
 
`MyKind.has(thing)` provides a test, true if thing is a valid value.

Use-case: It's safer than just using strings for constants, especially around refactoring.
It does use strings, because you want to work with json.
