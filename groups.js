class Group {
    constructor () {
    this.members = [];
  }
  
    add(value) {
      if(!this.has(value)) {
        this.members.push(value);
      }
    }
  
    delete (value) {
      this.members = this.members.filter(member => member !== value);
    }
  
    has (value) {
      return this.members.includes(value);
    }
  
    static from(iterable) {
      let group = new Group();
      for (let value of iterable) {
        group.add(value);
      }
      return group;
    }
  }

  // Iterable Groups
  class GroupIterator {
    constructor(group) {
      this.group = group;
      this.index = 0;
    }
  
    next() {
      if (this.index < this.group.members.length) {
        return { value: this.group.members[this.index++], done: false };
      } else {
        return { done: true };
      }
    }
  }
  Group.prototype[Symbol.iterator] = function() {
    return new GroupIterator(this);
    }
  